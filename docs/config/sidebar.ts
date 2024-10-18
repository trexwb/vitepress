// import { navData } from './nav.data'
import { sidebarData } from './sidebar.data'
// console.log('nav:', JSON.stringify(navData));
// console.log('sidebar:', JSON.stringify(sidebarData));
export const sidebarConfig = sidebarData
// interface FileOrDir {
//   text?: string;
//   collapsed?: boolean;
//   link?: string;
//   items?: FileOrDir[];
// }

// const buildJsonFromSidebarData = (data: FileOrDir, buildMenu: Record<string, FileOrDir[]> = {}, depth: string = '/') => {
//   if (!data || typeof data !== 'object') {
//     throw new Error('Invalid data structure');
//   }
//   for (const key in data) {
//     if (data[key].text) {
//       let tempSidebar: FileOrDir = { text: data[key].text };
//       if (data[key].items) {
//         tempSidebar.collapsed = false;
//         tempSidebar.items = [];
//         data[key].items.map((item: { text: any; link: any; }) => {
//           if (item.text && item.link) {
//             tempSidebar.items?.push({ text: item.text, link: item.link });
//           }
//         });
//       } else {
//         tempSidebar.link = data[key].link;
//       }
//       // 如果 items 数组为空，则移除 items 属性
//       if (tempSidebar.items && tempSidebar.items.length > 0) {
//         if (!buildMenu[`${depth}${data[key].text}/`]) {
//           buildMenu[`${depth}${data[key].text}/`] = [];
//         }
//         buildMenu[`${depth}${data[key].text}/`].push(tempSidebar);
//       }
//     }
//     if (data[key].items) {
//       buildMenu = buildJsonFromSidebarData(data[key].items, buildMenu, `${depth}${data[key].text}/`)
//     }
//   }
//   return buildMenu;
// }

// const transformedMenu = buildJsonFromSidebarData(navData as FileOrDir);
// export const sidebarConfig = {
//   // ...transformedMenu,
//   ...sidebarData,
// }

// export const sidebar1Config = {
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
//     },
//   ],
// }