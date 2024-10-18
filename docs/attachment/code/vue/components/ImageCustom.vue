<!--
 * @Author: trexwb
 * @Date: 2024-10-18 13:50:54
 * @LastEditors: trexwb
 * @LastEditTime: 2024-10-18 14:16:55
 * @FilePath: /xuanyun.wang/docs/attachment/code/vue/components/ImageCustom.vue
 * @Description: 
 * 一花一世界，一叶一如来
 * Copyright (c) 2024 by 杭州大美, All Rights Reserved. 
-->
<template>
  <div ref="container" class="image__preview" v-loading="loading">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item, index) in srcList" :key="index">
        <el-link v-if="item.href" :underline="false" :href="item.href"><el-image style="width: 100%;"
            :src="item.src || item.photo" /></el-link>
        <el-image v-else style="width: 100%;" :src="item.src || item.photo" @click="handleImageClick(index)" />
      </el-carousel-item>
    </el-carousel>
    <el-image-viewer v-if="previewVisible" @close="handleClose" :url-list="allPhotos" :initial-index="currentIndex"></el-image-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, PropType, nextTick } from 'vue';
import imagesLoaded from 'imagesloaded';

// 定义图片项的接口
interface Item {
  id?: String; // 假设每个 item 都有一个唯一的 id
  title?: String;
  src?: String;
  photo?: Array<any>;
  href?: String;
  content?: String;
}
// 接受一个图片列表作为属性
const props = defineProps({
  srcList: {
    type: Array as PropType<Item[]>,
    required: true
  },
});
// 控制加载状态
const loading = ref(true);
// 控制图片预览的可见状态
const previewVisible = ref(false);
// 当前预览图片的索引
const currentIndex = ref(0);
// 所有图片的列表
const allPhotos = ref<any>([]);
// 容器元素的引用
const container = ref<HTMLElement | null>(null);
// 获取第一张图片的URL
const getUrl = () => {
  return Array.isArray(props.srcList) ? props.srcList[0] : (props.srcList ?? '');
}
// 处理图片点击事件
const handleImageClick = (index: number) => {
  currentIndex.value = index;
  previewVisible.value = true;
}
// 处理预览关闭事件
const handleClose = () => {
  previewVisible.value = false;
}
// 初始化所有图片的列表
allPhotos.value = Array.isArray(props.srcList) ? props.srcList.map(item => item.photo) : [];
// 在 mounted 钩子中初始化 Masonry
onMounted(async () => {
  if (container.value) {
    imagesLoaded(container.value, { background: true }, async () => {
      await nextTick();
      loading.value = false;
    });
  }
});
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.image__error .image-slot {
  font-size: 30px;
}

.image__error .image-slot .el-icon {
  font-size: 30px;
}

.image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
