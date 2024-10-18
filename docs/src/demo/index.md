---
# https://vitepress.dev/zh/reference/default-theme-home-page
layout: doc
title: 测试用例
# outline: deep
---
# 测试用例
<div class="flex tags">
  <el-tag type="primary">Tag 1</el-tag>
  <el-tag type="success">Tag 2</el-tag>
  <el-tag type="info">Tag 3</el-tag>
  <el-tag type="warning">Tag 4</el-tag>
  <el-tag type="danger">Tag 5</el-tag>
</div>
<PasswordCheck/>

## 数学公式 Demo
$\sqrt{3x-1}+(1+x)^2$

## element-plus

<MasonryCustom :dataList="demoMasonry" />
<el-divider content-position="right">结束</el-divider>
<ImageCustom :srcList="demoImages" />

<el-divider>
  <el-icon><star-filled /></el-icon>
</el-divider>
    
<el-watermark
  :width="130"
  :height="30"
  image="https://element-plus.org/images/element-plus-logo.svg"
>
  <div>
    <span>Rain</span>
    <el-divider direction="vertical" />
    <span>Home</span>
    <el-divider direction="vertical" border-style="dashed" />
    <span>Grass</span>
  </div>
  <el-timeline style="max-width: 600px">
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</el-watermark>

<script>
import jsonData from '../../attachment/json/demo/index.json'
const demoMasonry = jsonData.masonry || []
const demoImages = jsonData.images || []
</script>

<el-divider content-position="left">分割线</el-divider>

# 康奈尔笔记法

## 笔记栏

***

## 关键词

***

## 摘要

# 使用例子 <Badge type="info" text="default" />

## VitePress与Vue开发问题整理笔记
### VitePress Markdown引用JS数据注意事项
- 文件命名规范：在VitePress的Markdown文件中，若需引用JavaScript数据文件，确保该数据文件遵循特定的命名规则，即文件名需以.data.ts为后缀。例如，一个有效的数据文件命名为example.data.ts，这样可以在Markdown中正确引用这些数据资源。

### Vue 3 Script Setup语法变更
 - `<script setup>`影响：引入Vue 3的`<script setup>`语法糖后，传统的`<script>`标签内的`export default`语句将不再生效。为了定义组件的属性(props)和事件(emits)，需改用defineProps和defineEmits。这简化了组件的API声明，同时隐藏了内部实现细节。

### Vue组件挂载与defineExpose冲突
- 挂载与暴露问题：在Vue组件中，使用onMounted生命周期钩子进行组件挂载时，若同时定义了defineExpose用于暴露方法或属性给父组件，可能会遇到未知错误。当前解决方案是暂时注释掉onMounted内的内容或整个钩子函数，以避免报错。进一步的调查和解决方案有待探索。

### VitePress笔记记录功能实现挑战
- 项目重心：今日工作重心放在了解决如何利用VitePress框架，实现将个人笔记直接记录并展示于网站上的功能。这涉及到对VitePress目录结构、Markdown解析以及可能的自定义插件开发的深入研究，以期达到理想的笔记管理与展示效果。

### Node.js支付宝SDK版本升级问题
- Alipay SDK升级注意事项：升级Node.js环境下的支付宝支付组件alipay-sdk至4.10.0版本后，导入语句需做调整。原本的导入方式const AlipaySdk = require('alipay-sdk').default会导致报错，应改为const AlipaySdk = require('alipay-sdk')来正确导入支付宝SDK模块，避免默认导出的问题。


## VitePress

## 新增组件：PasswordCheck
> `docs/.vitepress/theme/components/PasswordCheck.vue`

### 组件概述
今日开发工作还包括了创建一个新的Vue组件——PasswordCheck，旨在提供一个便捷的方式来验证用户输入的密码是否符合预设的安全标准。这个组件可以通过在Vue模板中简单地插入`<PasswordCheck />`标签来调用，极大地简化了密码验证逻辑的集成过程。

### 实现要点
组件创建：首先，在Vue项目的components目录下新建PasswordCheck.vue文件，这是PasswordCheck组件的定义所在。

模板设计：在PasswordCheck.vue中，设计组件的模板结构。通常包括输入框用来接收用户输入的密码，以及可能的反馈信息区域来显示密码强度或错误提示。

逻辑处理：利用`<script setup>或传统的<script>`标签（根据项目Vue版本选择），编写组件的逻辑代码。这部分应该包括监听密码输入，执行密码强度检查，并根据检查结果更新反馈信息。

props定义：如果需要外部传入配置项，如密码复杂度要求，可以通过defineProps来定义组件接受的属性(props)。

事件传出：若组件内部完成某些操作后需要通知父组件，可以使用defineEmits来定义可发出的事件，比如密码验证成功或失败的事件。

### 使用示例
```html
<!-- 在父组件模板中使用 PasswordCheck 组件 -->
<template>
  <form>
    <!-- 其他表单项 -->
    <PasswordCheck />
    <!-- 提交按钮等 -->
  </form>
</template>

<script>
import PasswordCheck from './components/PasswordCheck.vue';

export default {
  components: {
    PasswordCheck,
  },
};
</script>
```
通过上述步骤，我们不仅新增了一个实用的密码验证组件，还提高了代码的复用性和维护性，使得项目结构更加清晰和高效。

## 图片引入
![图片的alt](https://markdown.com.cn/assets/img/philly-magic-garden.9c0b4415.jpg "图片的title")

## 引用useData

主要的`useData()`接口可以访问当前页面的站点、主题和页面数据。支持`.md`和`.vue`文件：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Custom Containers

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 代码块
::: code-group
<<< @/../attachment/code/node/drive/index.js{js}
:::

<el-backtop :bottom="100" />