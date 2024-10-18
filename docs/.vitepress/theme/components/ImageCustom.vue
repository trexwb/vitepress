<!--
 * @Author: trexwb
 * @Date: 2024-10-15 14:07:47
 * @LastEditors: trexwb
 * @LastEditTime: 2024-10-18 14:16:29
 * @FilePath: /xuanyun.wang/docs/.vitepress/theme/components/ImageCustom.vue
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
    <!-- <el-image style="width: 100px; height: 100px" :src="getUrl()" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="srcList" :initial-index="4" fit="cover" /> -->
    <el-image-viewer v-if="previewVisible" @close="handleClose" :url-list="allPhotos"
      :initial-index="currentIndex"></el-image-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, PropType, nextTick } from 'vue';
import imagesLoaded from 'imagesloaded';

interface Item {
  id?: String; // 假设每个 item 都有一个唯一的 id
  title?: String;
  src?: String;
  photo?: Array<any>;
  href?: String;
  content?: String;
}

const props = defineProps({
  srcList: {
    type: Array as PropType<Item[]>,
    required: true
  },
});
const loading = ref(true);
const previewVisible = ref(false);
const currentIndex = ref(0);
const allPhotos = ref<any>([]);
const container = ref<HTMLElement | null>(null);
const getUrl = () => {
  return Array.isArray(props.srcList) ? props.srcList[0] : (props.srcList ?? '');
}
const handleImageClick = (index: number) => {
  currentIndex.value = index;
  previewVisible.value = true;
}
const handleClose = () => {
  previewVisible.value = false;
}
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
