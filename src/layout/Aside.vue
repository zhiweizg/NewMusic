<template>
  <div class="aside">
    <div class="aside-header">
      <img :src="getAvatar" alt="" />
      <el-button v-if="!getAvatar" type="text">
        <router-link to="/login">未登录</router-link>
      </el-button>
      <el-button v-if="getAvatar" v-html="getNickname" type="text"></el-button>
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
  },
  computed: {
    getAvatar () {
      return this.$store.getters.getAvatar
    },
    getNickname () {
      return this.$store.getters.getNickname
    }
  }
}
</script>

<style lang="less" scoped>
.aside {
  height: 100%;
  color: rgb(150, 150, 150);
  .aside-header {
    display: flex;
    height: 75px;
    line-height: 75px;
    img {
      width: 50px;
      height: 50px;
      margin-top: 10px;
      margin-left: 20px;
      border-radius: 50%;
    }
    button {
      margin-left: 10px;
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
