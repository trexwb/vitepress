<!--
 * @Author: trexwb
 * @Date: 2024-10-16 11:28:39
 * @LastEditors: trexwb
 * @LastEditTime: 2024-10-18 14:20:48
 * @FilePath: /xuanyun.wang/docs/.vitepress/theme/components/MasonryCustom.vue
 * @Description: 
 * 一花一世界，一叶一如来
 * Copyright (c) 2024 by 杭州大美, All Rights Reserved. 
-->
<template>
  <div class="album-list" v-loading="loading">
    <div class="card-container" :style="waterfallStyle" ref="container">
      <el-card v-for="(item, index) in dataList" :key="index" :body-style="{ padding: '0px' }" shadow="always"
        class="card-item">
        <template #header>{{ item.title }}</template>
        <el-link v-if="item.href" :underline="false" :href="item.href">
          <el-image style="width: 100%;" :src="item.src || item.photos?.[0]" />
        </el-link>
        <el-image v-else style="width: 100%;" :src="item.src || item.photos?.[0]" :preview-src-list="item.photos ?? []" />
        <template #footer>{{ item.content }}</template>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType, onMounted, onBeforeUnmount, watch, nextTick, toDisplayString } from 'vue';
import { ElCard, ElLoading } from 'element-plus';
import imagesLoaded from 'imagesloaded';

interface Item {
  id?: String; // 假设每个 item 都有一个唯一的 id
  title?: String;
  src?: String;
  photos?: Array<any>;
  href?: String;
  content?: String;
}

const props = defineProps({
  dataList: {
    type: Array as PropType<Item[]>,
    required: true
  },
});

const waterfallStyle = ref({});
const loading = ref(true);
waterfallStyle.value = {
  'position': 'absolute',
  'visibility': 'hidden'
}

const container = ref<HTMLElement | null>(null);

const arrangeCards = async () => {
  if (!container.value) return;

  const columns: HTMLElement[] = [];
  const items = Array.from(container.value.children);

  // 初始化列
  for (let i = 0; i < 4; i++) {
    const column = document.createElement('div');
    column.classList.add('column'); // 添加 column 类
    container.value!.appendChild(column);
    columns.push(column);
  }

  // 清空现有列
  for (let col of columns) {
    while (col.firstChild) {
      col.removeChild(col.firstChild);
    }
  }

  // 将卡片分配到列中
  let colIndex = 0;
  for (let item of items) {
    let minHeight = Infinity; // 初始化为正无穷大
    let shortestColumn: HTMLElement | null = null;

    // 找到当前最短的列
    for (const [index, col] of columns.entries()) {
      // console.log(`col[${index}]:`, col.offsetHeight, minHeight)
      if (col.offsetHeight < minHeight) {
        minHeight = col.offsetHeight;
        shortestColumn = col;
        colIndex = index;
      }
    }

    if (shortestColumn) {
      // 将卡片添加到最短的列
      shortestColumn.appendChild(item);
      await nextTick(); // 确保 DOM 更新后再继续
      // console.log(`minHeight[${colIndex}]:`, shortestColumn.offsetHeight, minHeight)
    }
  }
  waterfallStyle.value = {
    'display': 'grid',
    'grid-template-columns': 'repeat(4, 1fr)'
  }
  loading.value = false;
};

onMounted(async () => {
  if (container.value) {
    imagesLoaded(container.value, { background: true }, async () => {
      await nextTick();
      setTimeout(() => {
        requestAnimationFrame(() => {
          arrangeCards();
        });
      }, 500);
    });
    // 监听窗口大小变化
    window.addEventListener('resize', arrangeCards);
  }
});

onBeforeUnmount(() => {
  // 清理事件监听器
  window.removeEventListener('resize', arrangeCards);
});
</script>

<style scoped>
.album-list {
  min-height: 300px;
}

.card-container {
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  gap: 5px;
  margin: 5px;
}

.card-container .column {
  width: 100%;
  /* 考虑间距 */
  box-sizing: border-box;
}

.card-item {
  box-sizing: border-box;
  margin: 10px 2px;
}
</style>