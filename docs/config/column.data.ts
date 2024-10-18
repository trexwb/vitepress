import { navData } from './nav.data'
import { sidebarData } from './sidebar.data'

export default {
  navData: navData,
  sidebarData: sidebarData,
  load() {
    return {
      navData: navData,
      sidebarData: sidebarData,
    }
  }
}