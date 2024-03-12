<template>
  <div class="about">
    <button @click="postMsg">点击我，给主系统发送消息</button>
    <h1>我是子系统路由2</h1>
  </div>
</template>
<script setup lang="ts">
const postMsg = () => {
  window.microApp.forceDispatch({ from: '来自子系统的消息哦', msg: '子应用发送的数据' }, () => {
    console.log('数据已经发送完成')
  })
}
</script>
<style>
.about {
  display: flex;
  align-items: center;
}
</style>
