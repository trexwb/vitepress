import { navData } from './nav.data'

interface FileOrDir {
  text?: string;
  link?: string;
  items?: FileOrDir[];
}
// console.log('nav:', JSON.stringify(navData));
export const navConfig = navData as FileOrDir[]
// export const navConfig = [
//   // 导航
//   { text: '导航', link: '/guide/index' },
//   ...navData
// ]