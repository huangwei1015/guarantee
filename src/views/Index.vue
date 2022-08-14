<template>
  <div>
    <div class="content">
        <router-view></router-view>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from "../components/Tabbar.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="less" scoped>
.footer {
 margin-bottom: 2rem;
}
</style>