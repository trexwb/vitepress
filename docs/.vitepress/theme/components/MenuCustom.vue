<!--
 * @Author: trexwb
 * @Date: 2024-06-20 10:55:29
 * @LastEditors: trexwb
 * @LastEditTime: 2024-10-16 11:34:36
 * @FilePath: /xuanyun.wang/docs/.vitepress/theme/components/MenuCustom.vue
 * @Description: 
 * 一花一世界，一叶一如来
 * Copyright (c) 2024 by 杭州大美, All Rights Reserved. 
-->
<template>
  <div class="m-nav-links">
    <a v-for="(item, index) in navData" class="m-nav-link" :href="item.link" rel="noreferrer">
      <article class="box">
        <div class="box-header">
          <div v-if="item.icon" class="icon"><img :src="item.icon" loading="lazy" class="medium-zoom-image"></div>
          <h5 id="can-i-use" class="title">{{ item.text }}</h5>
        </div>
        <p v-if="item.description" class="desc">{{ item.description }}</p>
      </article>
    </a>
  </div>
</template>

<script setup>
// 使用defineProps定义props，这在<script setup>中是推荐的做法
const props = defineProps({
  navData: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}

@media (min-width: 1440px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}

@media (min-width: 960px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (min-width: 768px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  }
}

@media (min-width: 640px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
  }
}

@media (min-width: 500px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
}

.m-nav-links {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

.m-nav-link {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 24px;
  --m-nav-box-gap: 12px;
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  text-decoration: inherit;
  background-color: var(--vp-c-bg-alt);
  transition: all .25s;
}

.m-nav-link {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 24px;
  --m-nav-box-gap: 12px;
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  text-decoration: inherit;
  background-color: var(--vp-c-bg-alt);
  transition: all .25s;
}

.vp-doc a {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color .25s, opacity .25s;
}

a {
  color: inherit;
  text-decoration: inherit;
}

a,
area,
button,
[role=button],
input,
label,
select,
summary,
textarea {
  touch-action: manipulation;
}

article {
  display: block;
  unicode-bidi: isolate;
}

.m-nav-link .box {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: var(--m-nav-box-gap);
  height: 100%;
  color: var(--vp-c-text-1);
}

.m-nav-link .box-header {
  display: flex;
  align-items: center;
}

div {
  display: block;
  unicode-bidi: isolate;
}

.m-nav-link .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: calc(var(--m-nav-box-gap) - 2px);
  border-radius: 6px;
  width: var(--m-nav-icon-box-size);
  height: var(--m-nav-icon-box-size);
  font-size: var(--m-nav-icon-size);
  background-color: var(--vp-c-default-soft);
  transition: background-color .25s;
}


.m-nav-link .title:not(.no-icon) {
  line-height: var(--m-nav-icon-box-size);
}

.m-nav-link .title {
  overflow: hidden;
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 600;
}

*,
:before,
:after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}

*,
:before,
:after {
  box-sizing: border-box;
}

div {
  display: block;
  unicode-bidi: isolate;
}

.m-nav-link .icon[data-v-7dfe279b] img {
  border-radius: 4px;
  width: var(--m-nav-icon-size);
}

.medium-zoom-image {
  cursor: pointer;
  cursor: zoom-in;
  transition: transform .3s cubic-bezier(.2, 0, .2, 1) !important;
}

img,
video {
  max-width: 100%;
  height: auto;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
}

.m-nav-link .title[data-v-7dfe279b]:not(.no-icon) {
  line-height: var(--m-nav-icon-box-size);
}

.m-nav-link .title[data-v-7dfe279b] {
  overflow: hidden;
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 600;
}

.vp-doc h1,
.vp-doc h2,
.vp-doc h3,
.vp-doc h4,
.vp-doc h5,
.vp-doc h6 {
  position: relative;
  font-weight: 600;
  outline: none;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
li,
p {
  overflow-wrap: break-word;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
}
</style>