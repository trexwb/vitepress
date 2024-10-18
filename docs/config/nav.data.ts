import { es } from 'element-plus/es/locales.mjs';
import fs from 'fs';
import path from 'path';

interface FileOrDir {
  text?: string;
  link?: string;
  items?: FileOrDir[];
}

const filterDirs = [
  'demo',
  'public',
  '文档',
  '编程物语',
  '课外知识'
];
const allowedDirs = [
  '笔记',
  '收藏',
  '相册'
]

function buildJsonFromNextLevel(directoryPath: string, depth: number = 0): FileOrDir[] | FileOrDir {
  const absoluteDirectoryPath = path.join(__dirname, directoryPath);
  const subDirectories = fs.readdirSync(absoluteDirectoryPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !filterDirs.includes(dirent.name) && allowedDirs.includes(dirent.name))
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
  if (filesInCurrentDir.length === 1 && depth > 0) {
    if (subDirectories.length === 0) {
      // 当前目录下只有一个文件
      result.push({ text: path.basename(directoryPath), link: filesInCurrentDir[0].link });
    } else {
      // 当前目录下有其他目录时
      result.push({
        text: path.basename(directoryPath),
        items: [
          { text: filesInCurrentDir[0].text, link: filesInCurrentDir[0].link }
        ]
      });
    }
  } else if (depth > 0) {
    // 当前目录下有多个文件或没有文件
    const tmpRus: FileOrDir = { text: path.basename(directoryPath), items: [] };
    for (const file of filesInCurrentDir) {
      (tmpRus.items as FileOrDir[]).push(file);
    }
    // 如果 items 数组为空，则移除 items 属性
    if (tmpRus.items && tmpRus.items.length === 0) {
      delete tmpRus.items;
    }
    result.push(tmpRus);
  }
  // 下级目录
  for (const subDirName of subDirectories) {
    const subDirPath = path.join(directoryPath, subDirName);
    const subDirData = buildJsonFromNextLevel(subDirPath, depth + 1);
    const subNameWithoutExtension = path.parse(subDirName).name;
    const items = subDirData as FileOrDir[];
    if(items.length > 0) {
      if(items.length === 1){
        result.push(...items)
      } else {
        result.push({
          text: subNameWithoutExtension,
          items: items
        })
      }
    }
  }
  return result;
}

const directoryPath = '../src/';
// 构建目录树
export const navData = buildJsonFromNextLevel(directoryPath);
// console.log('navData:', JSON.stringify(navData));
// export const navData = [
//   {
//     text: '笔记',
//     items: [
//       { text: '日常', link: '/notes/daily/index' },
//       {
//         text: '踩坑记',
//         items: [
//           { text: 'Debug清单', link: '/notes/debug/index' },
//           { text: '踩坑记录', link: '/notes/logs/index' },
//         ]
//       },
//     ]
//   },
//   {
//     text: '工具',
//     items: [
//       { text: '软件推荐', link: '/tools/share/index' },
//       { text: '在线工具', link: '/tools/online/index' },
//       { text: 'IDE配置', link: '/tools/ide/index' },
//       {
//         text: '密钥破解',
//         items: [
//           { text: '相关密钥', link: '/tools/secret/index' },
//           { text: '破解工具', link: '/tools/decryption/index' },
//         ]
//       },
//       {
//         text: '开源代码',
//         items: [
//           { text: 'Git代码', link: '/tools/resources/index' },
//         ]
//       },
//       {
//         text: 'AI',
//         items: [
//           { text: '豆包', link: 'https://www.doubao.com/'},
//           { text: '通义千问', link: 'https://tongyi.aliyun.com'},
//         ]
//       },
//     ]
//   },
// ]

// export default {
//   navData: navData
// }

export default {
  navData: navData,
  load() {
    return {
      navData: navData,
    }
  }
}