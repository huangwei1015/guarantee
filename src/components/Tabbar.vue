<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/index" name="index"
        >้ฆ้กต</van-tabbar-item
      >
      <van-tabbar-item icon="user-o" to="/my" name="my">ๆ็</van-tabbar-item>
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