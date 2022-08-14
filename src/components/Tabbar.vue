<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/index" name="index"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="user-o" to="/my" name="my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "index",
    };
  },
};
</script>

<style>
</style>