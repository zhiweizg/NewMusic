<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <h3 class="medium"><img :src="item.imageUrl" alt="" /></h3>
      </el-carousel-item>
    </el-carousel>
    <div class="music">
      <p>推荐歌单 <i class="el-icon-arrow-right"></i></p>
      <div class="music-list">
        <div
          class="music-item"
          v-for="item in musicList"
          :key="item.id"
          @click="goArtile(item.id)"
        >
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMusic, getbanner } from '@/api/findeMusic'
export default {
  data () {
    return {
      // 推荐音乐列表
      musicList: [],
      // 轮播图列表
      bannerList: [],
      // 取推荐音乐的数量
      limit: 8
    }
  },
  methods: {
    async musicData () {
      const { data } = await getMusic(this.limit)
      this.musicList = data.result
      console.log(this.musicList)
    },
    async bannerData () {
      const { data } = await getbanner()
      this.bannerList = data.banners
      console.log(this.bannerList)
    },
    goArtile (id) {
      this.$router.replace(`/article/${id}`)
    }
  },
  created () {
    this.musicData()
    this.bannerData()
  }
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  img {
    width: 580px;
    height: 200px;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.music {
  margin-top: 25px;
  p {
    color: rgb(168, 168, 168);
  }
  .music-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    .music-item {
      margin: 20px 30px 10px 30px;
      img {
        width: 200px;
        height: 200px;
        border-radius: 10px 10px 10px 10px;
      }
      p {
        width: 200px;
        font-size: 14px;
      }
    }
    .music-item:nth-child(4n) {
      margin: 20px 0 10px 30px;
    }
  }
}
</style>
