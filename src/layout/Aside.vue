<template>
  <div class="aside">
    <div class="aside-header">
      <el-button type="text">
        <router-link to="/login">未登录</router-link>
      </el-button>
    </div>
    <div class="aside-content">
      <div class="item">
        <router-link to="/findeMusic"> 发现音乐</router-link>
      </div>
      <div class="item">
        <router-link to="/findeMusic"> 私人FM</router-link>
      </div>
      <div class="item">
        <router-link to="/findeMusic">视频</router-link>
      </div>
      <div class="item">
        <router-link to="/findeMusic">朋友</router-link>
      </div>
    </div>
    <div class="aside-mymusic">
      <div class="item"></div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.aside {
  height: 100%;
  color: rgb(150, 150, 150);
  .aside-header {
    height: 75px;
    line-height: 75px;
    button {
      margin-left: 40px;
      text-decoration: none;
      a {
        text-decoration: none;
        color: tomato;
      }
    }
  }
  .aside-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .item {
      height: 35px;
      line-height: 35px;
      padding: 0 40px;
      a {
        color: rgb(150, 150, 150);
        text-decoration: none;
      }
    }
  }
}
</style>
