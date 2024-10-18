import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex';
import { navConfig } from '../config/nav'
import { sidebarConfig } from '../config/sidebar'
import { customElements } from '../config/katex'
// console.log(process.env.NODE_ENV)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "煊赟知镜",
  description: "\“煊\”，光明、温暖之意，象征着家庭中充满爱与关怀的氛围，每一个家庭成员在这里都能感受到如阳光般的温暖照耀。“赟”，美好之意，寓意着家庭生活的丰富多彩、美好幸福。",
  base: '/',
  outDir: '../dist/',
  srcDir: 'src',
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5173,
      cors: true
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'msapplication-TileImage', content: '/static/images/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/static/images/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/static/images/favicon.ico', color: '#3eaf7c' }],
    ['link', { rel: 'icon', href: '/static/images/favicon.ico' }],
  ],
  themeConfig: {
    siteTitle: '煊赟知镜',
    logo: '/static/images/logo.png',

    nav: navConfig,
    sidebar: sidebarConfig,

    search: {
      provider: 'local'
    },

    outline: {
      // level: 'deep',
      level: [2, 3],
      label: '页面导航',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/trexwb' }
    ],

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    footer: {
      copyright: '以上言论仅代表个人观点'
    }
  },
  sitemap: {
    hostname: 'https://xuanyun.wang/'
  },
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    },
    lineNumbers: true,
    math: true,
    // defaultHighlightLang: 'php',
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  }
})
