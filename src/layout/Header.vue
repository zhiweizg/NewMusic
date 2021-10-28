<template>
  <div class="header">
    <div class="header-title"></div>
    <div class="header-content">
      <div class="item">
        <router-link to="/findeMusic">推荐音乐</router-link>
      </div>
      <div class="item">
        <router-link to="/findeMusic/songlist">歌单</router-link>
      </div>
      <div class="item">
        <router-link to="/findeMusic/radiostation">主播电台</router-link>
      </div>
      <div class="item">
        <router-link to="/findeMusic/songranking">排行榜</router-link>
      </div>
      <div class="item">
        <router-link to="/findeMusic/singer">歌手</router-link>
      </div>
      <div class="item">
        <router-link to="/findeMusic/newsong">最新音乐</router-link>
      </div>
    </div>
    <div class="header-ending">
      <input v-model="input" type="text" placeholder="搜索" />
      <i class="el-icon-search"></i>
      <span class="tool">
        <i class="el-icon-setting"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  flex-direction: row;
  height: 100%;
  .header-title {
    width: 200px;
    background-color: rgb(45, 45, 45);
  }
  .header-content {
    flex: 1;
    display: flex;
    .item {
      a {
        color: rgb(188, 188, 188);
        text-decoration: none;
        text-overflow: ellipsis;
      }
      font-size: 14px;
      margin: 0 20px;
      .active {
        color: #fff;
      }
    }
  }
  .header-ending {
    width: 500px;
    display: flex;
    position: relative;
    text-align: center;
    align-items: center;
    input {
      width: 100px;
      height: 30px;
      border-radius: 10px 10px 10px 10px;
      border: 1px solid rgb(45, 45, 45);
      padding: 0 30px;
      background-color: rgb(64, 64, 64);
      color: rgb(128, 128, 128);
      outline: none;
    }
    .el-icon-search {
      position: absolute;
      left: 10px;
      color: rgb(128, 128, 128);
    }
    .tool {
      margin: 50px;
      font-size: 20px;
      color: rgb(90, 90, 90);
    }
  }
}
</style>
