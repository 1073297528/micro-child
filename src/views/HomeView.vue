<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="content">
    <div class="title1">我是子系统路由1</div>
    <div class="title2">谁在称无敌，哪个敢言不败</div>
    <div class="title3">我为天帝，当镇压世间一切敌</div>
  </div>
</template>
<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  .title1 {
    font-weight: bold;
    margin-bottom: 20px;
  }
  .title2 {
    font-weight: bold;
    margin-bottom: 20px;
    color: gold;
  }
  .title3 {
    font-weight: bold;
    color: red;
  }
}
</style>
