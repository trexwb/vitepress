import DefaultTheme from 'vitepress/theme'
import MenuCustom from './components/MenuCustom.vue'
import PasswordCheck from './components/PasswordCheck.vue'
import ImageCustom from './components/ImageCustom.vue'
import MasonryCustom from './components/MasonryCustom.vue'

// 导入elementplus组件
import "element-plus/dist/index.css";
import elementplus from "element-plus"
// 导入elementplus组件-中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 导入elementplus组件-暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 导入elementplus组件-图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './styles/custom.css'

import {
  VPBadge,
  VPButton,
  VPDocAsideSponsors,
  VPHomeFeatures,
  VPHomeHero,
  VPHomeSponsors,
  VPImage,
  VPSponsors,
  VPTeamMembers,
  VPTeamPage,
  VPTeamPageSection,
  VPTeamPageTitle
} from 'vitepress/theme-without-fonts'

export default {
  ...DefaultTheme,
  // extends: DefaultTheme,
  enhanceApp({ app }) {
    // DefaultTheme.enhanceApp(ctx);
    app.component('MenuCustom', MenuCustom);
    app.component('PasswordCheck', PasswordCheck);
    app.component('ImageCustom', ImageCustom);
    app.component('MasonryCustom', MasonryCustom);
    app.component('Badge', VPBadge);
    app.component('Button', VPButton);
    app.component('DocAsideSponsors', VPDocAsideSponsors);
    app.component('HomeFeatures', VPHomeFeatures);
    app.component('HomeHero', VPHomeHero);
    app.component('HomeSponsors', VPHomeSponsors);
    app.component('Image', VPImage);
    app.component('Sponsors', VPSponsors);
    app.component('TeamMembers', VPTeamMembers);
    app.component('TeamPage', VPTeamPage);
    app.component('TeamPageSection', VPTeamPageSection);
    app.component('TeamPageTitle', VPTeamPageTitle);

    app.use(elementplus, {
      locale: zhCn,
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}