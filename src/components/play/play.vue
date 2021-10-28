<template>
  <div class="play">
    <div class="img">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="play-songName">
      <p>songName</p>
      <p>00:00 / 05:09</p>
    </div>
    <audio src=""></audio>
    <div class="play-audio">
      <div class="play-pre">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="play-type" @click="toole">
        <i class="el-icon-video-play" v-show="isPlay"></i>
        <i class="el-icon-video-pause" v-show="!isPlay"></i>
      </div>
      <div class="play-next">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPlay: false
    }
  },
  methods: {
    toole () {
      this.isPlay = !this.isPlay
    }
  }
}
</script>

<style lang="less" scoped>
.play {
  display: flex;
  .img {
    width: 60px;
    margin: 10px 0 0 10px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .play-songName {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    p:nth-child(1) {
      height: 30px;
      margin-top: -10px;
      font-size: 14px;
      color: rgb(176, 175, 175);
    }
    p:nth-child(2) {
      position: absolute;
      top: 20px;
      margin-top: -5px;
      font-size: 12px;
      color: rgb(103, 103, 103);
    }
  }
  .play-audio {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -45%);
    display: flex;
    width: 150px;
    justify-content: space-between;
    .play-pre {
      i {
        font-size: 30px;
        color: rgb(195, 71, 58);
      }
    }
    .play-type {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -43%);
      i {
        font-size: 45px;
        color: rgb(195, 71, 58);
      }
    }
    .play-next {
      i {
        font-size: 30px;
        color: rgb(195, 71, 58);
      }
    }
  }
}
</style>
