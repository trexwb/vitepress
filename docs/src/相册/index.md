---
layout: home

title: 最新相册
description: "这本相册就像一个装满回忆魔法的宝盒，随时带你穿梭时光。"

outline: [2,3]

# prev:
#   link: './index'

# next: 
#   link: './commonjs'
---
# 最新相册
<MasonryCustom :dataList="demoMasonry" />

<script setup>
import jsonData from '../../attachment/json/demo/index.json'
const demoMasonry = jsonData.masonry || []
</script>