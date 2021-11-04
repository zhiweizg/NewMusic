<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0"><Header></Header></el-header>
      <el-container>
        <el-aside width="200px"><Aside></Aside></el-aside>
        <el-container>
          <el-main><Main></Main></el-main>
        </el-container>
      </el-container>
      <el-footer style="padding: 0"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/layout/Header.vue'
import Aside from '@/layout/Aside.vue'
import Main from '@/layout/Main.vue'
import Footer from '@/layout/Footer.vue'

export default {
  components: {
    Header,
    Aside,
    Main,
    Footer
  },
  data () {
    return {
      name: 'App'
    }
  }
}
</script>
<style lang="less">
@import url("./styles/index.css");
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
