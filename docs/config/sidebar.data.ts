import fs from 'fs';
import path from 'path';

interface FileOrDir {
  text?: string;
  collapsed?: boolean;
  link?: string;
  items?: FileOrDir[];
}

const filterDirs = [
  'demo',
  'public'
];

function buildJsonFromNextLevel(directoryPath: string, buildMenu: Record<string, FileOrDir[]> = {}, depth: string = '/'): FileOrDir[] | FileOrDir {
  const absoluteDirectoryPath = path.join(__dirname, directoryPath);
  const subDirectories = fs.readdirSync(absoluteDirectoryPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !filterDirs.includes(dirent.name))
    .map(dirent => dirent.name);

  // 处理当前目录下的文件
  const filesInCurrentDir = fs.readdirSync(absoluteDirectoryPath)
    .filter(item => !fs.statSync(path.join(absoluteDirectoryPath, item)).isDirectory())
    .map(item => {
      const filePath = path.join(directoryPath, item);
      const fileNameWithoutExtension = path.parse(item).name;
      const textName = fileNameWithoutExtension === 'index' ? path.basename(path.dirname(filePath)) + '-导读' : fileNameWithoutExtension;
      const relativePath = path.relative(process.cwd(), filePath).replace('../src/', '');
      return { text: textName, link: `/${relativePath}` };
    });

  let result: FileOrDir[] = [];
  // 如果当前目录下只有一个文件，且不是根目录，则直接返回该文件
  if (filesInCurrentDir.length === 1) {
    if (subDirectories.length === 0) {
      // 当前目录下只有一个文件
      result.push({ text: path.basename(directoryPath), link: filesInCurrentDir[0].link });
    } else {
      // 当前目录下有其他目录时
      result.push({
        text: path.basename(directoryPath),
        collapsed: false,
        items: [
          { text: filesInCurrentDir[0].text, link: filesInCurrentDir[0].link }
        ]
      });
    }
  } else {
    // 当前目录下有多个文件或没有文件
    const tmpRus: FileOrDir = { text: path.basename(directoryPath), collapsed: false, items: [] };
    for (const file of filesInCurrentDir) {
      (tmpRus.items as FileOrDir[]).push(file);
    }
    // 如果 items 数组为空，则移除 items 属性
    if (tmpRus.items && tmpRus.items.length === 0) {
      delete tmpRus.items;
    }
    result.push(tmpRus);
  }
  if(!buildMenu[depth]){
    buildMenu[depth] = result;
  } else {
    buildMenu[depth].push(...result);
  }

  for (const subDirName of subDirectories) {
    const subDirPath = path.join(directoryPath, subDirName);
    const subDirData = buildJsonFromNextLevel(subDirPath, buildMenu, `${depth}${subDirName}/`);
    const items = subDirData as FileOrDir[];
    if(items.length > 0) {
      if(!buildMenu[`${depth}${subDirName}/`]){
        buildMenu[`${depth}${subDirName}/`] = items;
      } else {
        buildMenu[`${depth}${subDirName}/`].push(...items);
      }
    }
  }
  return buildMenu;
}

const directoryPath = '../src/';
// 构建目录树
export const sidebarData = buildJsonFromNextLevel(directoryPath);
// console.log('sidebarData:', JSON.stringify(sidebarData));
// export const sidebarData = {
//   '/notes/daily/': [
//     {
//       text: '随笔',
//       collapsed: false,
//       items: [
//         { text: '随笔（待整理）', link: '/notes/daily/index' },
//         { text: 'demo', link: '/notes/daily/demo' },
//       ]
//     }, {
//       text: '2024',
//       collapsed: false,
//       items: [
//         { text: 'x x x x', link: '/notes/daily/2024/xxxx' },
//       ]
//     },
//   ],
//   '/tools/share/': [
//     {
//       text: '网络工具',
//       collapsed: false,
//       items: [
//         { text: 'PDF双页一键切割单页', link: '/tools/share/pdf2page' },
//       ]
//     }, {
//       text: '系统相关',
//       collapsed: false,
//       items: [
//         { text: 'x x x x', link: '/tools/share/xxxx' },
//       ]
//     }, {
//       text: '设计相关',
//       collapsed: false,
//       items: [
//         { text: 'x x x x', link: '/tools/share/xxxx' },
//       ]
//     }, {
//       text: '文字处理',
//       collapsed: false,
//       items: [
//         { text: 'x x x x', link: '/tools/share/xxxx' },
//       ]
//     }, {
//       text: '媒体处理',
//       collapsed: false,
//       items: [
//         { text: 'x x x x', link: '/tools/share/xxxx' },
//       ]
//     },
//   ],
// }

export default {
  sidebarData: sidebarData,
  load() {
    return {
      sidebarData: sidebarData,
    }
  }
}