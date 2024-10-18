---
# https://vitepress.dev/zh/reference/default-theme-home-page
layout: home

# outline: deep

hero:
  name: "煊赟知镜"
  text: "全家共成长，知识伴远航。"
  tagline: "欢迎来到 “煊赟知镜”！在这里，你将拥有一片纯净的空间，去自由地撰写、编辑和保存那些珍贵的日志，它们是你生活感悟、经历和思考的结晶。"
  image:
    src: /static/images/logo.png
    alt: 煊赟知识积累
    
  actions:
    - theme: brand
      text: 近期笔记
      link: /笔记/
    - theme: alt
      text: 豆包帮我（AI） →
      link: https://www.doubao.com/chat/

features:
    - icon: 💻️
      title: 编程物语
      details: "计算机知识全知道，不怕被电脑 “欺负”，还能秀操作。"
      link: /编程物语/
      linkText: 持续学习
      rel?: string
      target?: string
    # - icon: 🏫
    #   title: 课堂知识
    #   details: "中小学各科知识都在这，帮你搞定作业，让老师也 “哇塞”。"
    #   link: /middleSchool/index
    #   linkText: 查看流程
    #   rel?: string
    #   target?: string
    - icon: 📚️
      title: 课外知识
      details: "课外知识大杂烩，知道得多了，吹牛都更有底气啦。"
      link: /课外知识/
      linkText: 经验笔记
      rel?: string
      target?: string
    # - icon: 🔧
    #   title: 工具
    #   details: "工欲善其事，必先利其器。<br />收录日常开发会使用到的软件、插件、扩展工具等"
    #   link: /tools/index
    #   linkText: 寻找利器
    #   rel?: string
    #   target?: string
    # - icon: 🏟️
    #   title: 体育知识
    #   details: "体育知识小仓库，让你运动不迷糊，说不定还能成 “健将”。"
    #   link: /about/index
    #   linkText: 联系我们
    #   rel?: string
    #   target?: string
    # - icon: 🧬
    #   title: 生活常识与技能
    #   details: "生活常识技能集，搞定生活小事，不再手忙脚乱像 “小白”。"
    #   link: /about/index
    #   linkText: 联系我们
    #   rel?: string
    #   target?: string
    # - icon: ⚡️
    #   title: 互动交流与分享(如果有)
    #   details: "家庭互动小天地，分享乐事趣事，不怕无聊就怕笑岔气。"
    #   link: /about/index
    #   linkText: 联系我们
    #   rel?: string
    #   target?: string
---
<!-- <PasswordCheck/> -->

<!-- ## 产品功能
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://liujiaoyu.com/static/images/func01.jpg',
    name: '微网站',
    title: '5分钟轻松建站,打造酷炫微官网',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func02.jpg',
    name: '微信会员卡',
    title: '方便携带永不挂失,消费积分一卡配备',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func03.jpg',
    name: '微商城',
    title: '小微信也有大商城,电商轻松就能走入微信',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func04.jpg',
    name: '微相册',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func05.jpg',
    name: '图文推送',
    title: '方便携带永不挂失,消费积分一卡配备',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func06.jpg',
    name: '自动应答菜单',
    title: '小微信也有大商城,电商轻松就能走入微信',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func07.jpg',
    name: '关键词回复',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func08.jpg',
    name: '智能客服',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func09.jpg',
    name: '图文投票',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func10.jpg',
    name: '评审系统',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func11.jpg',
    name: '邮件发送',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func12.jpg',
    name: '整合支付',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func13.jpg',
    name: '整合支付',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func15.jpg',
    name: '整合支付',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }, {
    avatar: 'https://liujiaoyu.com/static/images/func16.jpg',
    name: '整合支付',
    title: '各行各业,照片展现轻松搞定',
    links: [
      { icon: 'github', link: 'https://github.com/trexwb/microWebsite' },
      { icon: 'twitter', link: 'https://twitter.com/trexwb/microWebsite' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members="members" /> -->