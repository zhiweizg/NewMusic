<template>
  <div class="article">
    <div class="article-heard">
      <img :src="coverImgUrl" alt="" />
      <div class="article-right">
        <div class="article-name">
          <p>
            <span>歌单</span
            ><b v-html="name">「夏企 × 棱镜」总有一天我会和你去海边</b>
          </p>
        </div>
        <div class="article-pepole">
          <img :src="avatarUrl" alt="" />
          <a href="" v-html="nickname">Wwwwwww</a>
          <span>2021-03-02创建</span>
        </div>
      </div>
    </div>
    <div class="article-content">
      <div class="article-song">
        <span class="active">歌曲列表</span>
        <span>评论</span>
        <span>收藏者</span>
      </div>
      <div class="acticle-boby" style="margin-top: 20px">
        <el-table
          :data="playList"
          style="width: 100%"
          :row-style="TableRowStyle"
          :cell-style="{ padding: '5px' }"
        >
          <el-table-column type="index" :index="indexMethod" width="80">
          </el-table-column>
          <el-table-column prop="name" label="音乐标题" width="400">
          </el-table-column>
          <el-table-column prop="ar[0].name" label="歌手" width="200">
          </el-table-column>
          <el-table-column prop="al.name" label="专辑"> </el-table-column>
          <el-table-column prop="d" label="时长"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/api/article.js'
export default {
  data () {
    return {
      playList: [],
      id: '',
      coverImgUrl: '',
      name: '',
      obj: {},
      nickname: '',
      avatarUrl: ''
    }
  },
  methods: {
    TableRowStyle () {
      const rowBackground = {}
      rowBackground.background = 'rgb(176,176,176)'
      return rowBackground
    },
    async getSong () {
      this.id = this.$route.params.id
      const { data } = await getArticle(this.id)
      console.log(data)
      this.playList = data.playlist.tracks
      this.coverImgUrl = data.playlist.coverImgUrl
      this.name = data.playlist.name
      this.nickname = data.playlist.creator.nickname
      this.avatarUrl = data.playlist.creator.avatarUrl
    },
    indexMethod (index) {
      index++
      if (index < 10) {
        index = '0' + index
      }
      return index
    }
  },
  created () {
    this.getSong()
  },
  // activated () {
  //   this.getSong()
  // },
  watch: {
    $route () {
      if (this.$route.params) {
        this.getSong()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  width: 100%;
  .article-heard {
    height: 250px;
    display: flex;
    // background-color: #fff;
    img {
      width: 220px;
      height: 220px;
      margin: 0 0 15px 15px;
    }
    .article-right {
      margin: 10px 0 15px 35px;
      .article-name {
        p {
          display: flex;
          align-items: center;
          span {
            font-size: 13px;
            color: rgb(168, 65, 55);
            border: 1px solid rgb(131, 57, 49);
            padding: 2px 4px 2px 4px;
          }
          b {
            font-size: 24px;
            margin-left: 12px;
            color: rgb(179, 179, 179);
          }
        }
      }
      .article-pepole {
        display: flex;
        margin-top: 10px;
        img {
          width: 35px;
          height: 35px;
          margin-left: 0;
          border-radius: 50%;
        }
        a {
          color: rgb(144, 183, 226);
          font-size: 14px;
          margin: 8px 5px;
        }
        span {
          font-size: 12px;
          color: rgb(98, 98, 98);
          margin: 10px 5px;
        }
      }
    }
  }
  .article-content {
    margin-top: -15px;
    .article-song {
      margin-left: 20px;
      border-bottom: 1px solid rgb(49, 48, 48);
      span {
        width: 80px;
        height: 24px;
        line-height: 35px;
        font-size: 15px;
        padding-bottom: 6px;
        margin: 2px 30px 2px 0px;
        color: rgb(163, 49, 46);
      }
      .active {
        border-bottom: 3px solid rgb(163, 49, 46);
      }
    }
  }
}
</style>
