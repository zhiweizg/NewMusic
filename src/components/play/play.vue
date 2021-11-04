<template>
  <div class="play">
    <div class="progress">
      <el-slider
        v-model="sliderTime"
        :format-tooltip="formatProcessToolTip"
        @change="changeCurrentTime"
        class="slider"
      ></el-slider>
      <!-- <el-progress
        :percentage="(audio.currentTime / audio.maxTime) * 100"
        status="exception"
        stroke-width="3"
        text-inside
        color="red"
      ></el-progress> -->
    </div>
    <div class="img">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="play-songName">
      <p>songName</p>
      <p>
        {{ audio.currentTime | formatSecond }} /
        {{ audio.maxTime | formatSecond }}
      </p>
    </div>
    <audio
      ref="audio"
      src="@/assets/1.mp3"
      @timeupdate="onTimeupdate"
      @loadedmetadata="onLoadedmetadata"
      style="display: none"
      controls
    ></audio>
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
    <div class="volume">
      <!-- @mouseleave="hover = false" -->
      <!-- 进度条ui -->
      <el-slider
        v-model="sliderVolume"
        @change="changeVolume"
        vertical
        height="80px"
        class="slider"
      ></el-slider>
      <i
        @click="mute"
        class="iconfont"
        :class="{
          'icon-guanbiyinliang': !isVolume,
          'icon-yinliangdaxiao': isVolume,
        }"
      ></i>
    </div>
  </div>
</template>

<script>
function realFormatSecond (second) {
  var secondType = typeof second
  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second)
    var mimute = Math.floor(second / 60)
    mimute = mimute < 10 ? '0' + mimute : mimute
    second = second - mimute * 60
    second = second < 10 ? '0' + second : second
    return `${mimute}:${second}`
  } else {
    return '0:00:00'
  }
}
export default {
  data () {
    return {
      isPlay: true,
      audio: {
        // 当前播放时长
        currentTime: 0,
        // 音频最大播放时长
        maxTime: 0
      },
      // 声音进度条
      sliderVolume: 0,
      // 时间进度条
      sliderTime: 0,
      isVolume: false

    }
  },
  methods: {
    toole () {
      this.isPlay ? this.play() : this.pause()
    },
    // 播放
    play () {
      this.isPlay = !this.isPlay
      this.$refs.audio.play()
    },
    // 暂停
    pause () {
      this.isPlay = !this.isPlay
      this.$refs.audio.pause()
    },
    // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
    onTimeupdate (e) {
      // console.log('timeupdate')
      // console.log(e)
      this.audio.currentTime = e.target.currentTime
      this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
    },
    // 当加载语音流元数据完成后，会触发该事件的回调函数
    // 语音元数据主要是语音的长度之类的数据
    onLoadedmetadata () {
      // console.log('loadedmetadata')
      // console.log(e)
      this.audio.maxTime = parseInt(this.$refs.audio.duration)
    },
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
    // 拖动进度条，改变当前时间，index是进度条改变时的回调函数的参数0-100之间，需要换算成实际时间
    changeCurrentTime (index) {
      this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
    },
    changeVolume (index) {
      this.$refs.audio.volume = index / 100
      this.sliderVolume = index
    },
    // 进度条格式化toolTip
    formatProcessToolTip (index = 0) {
      index = parseInt(this.audio.maxTime / 100 * index)
      return '进度条: ' + realFormatSecond(index)
    },

    // 静音
    mute () {
      this.isVolume = !this.isVolume
    }
  },

  filters: {
    // 使用组件过滤器来动态改变按钮的显示
    // transPlayPause (value) {
    //   return value ? '暂停' : '播放'
    // },
    // 将整数转化成时分秒
    formatSecond (second = 0) {
      return realFormatSecond(second)
    }
  },

  watch: {
    sliderVolume: function (newValue, oldValue) {
      this.$refs.audio.volume = newValue / 100
      if (!newValue) {
        this.isVolume = false
      } else {
        this.isVolume = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.play {
  display: flex;
  .progress {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    margin-bottom: 10px;
    .el-progress {
      position: relative;
      z-index: 2;
      top: -44px;
    }
    .el-slider {
      position: relative;
      z-index: 1;
      top: -16px;
      /deep/ .el-slider__runway {
        height: 4px;
        background-color: rgba(38, 37, 37, 1);
        .el-slider__bar {
          height: 4px;
          background-color: rgb(195, 71, 58);
        }
      }
      /deep/ .el-slider__button {
        display: none;
        width: 6px;
        height: 6px;
        border: 0;
        background-color: rgb(195, 71, 58);
      }
    }
  }
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
  .volume {
    position: absolute;
    height: 100px;
    overflow: auto;
    right: 10px;
    color: rgb(195, 71, 58);
    i {
      font-size: 24px;
    }
    .slider {
      position: fixed;
      z-index: 3;
      width: 38px;
      height: 100px;
      bottom: 46px;
      right: 5px;
      background-color: rgba(17, 17, 17, 0);
      border-radius: 6px;
      // box-shadow: rgba(38, 37, 37, 1);
      /deep/ .el-slider__runway {
        display: none;
        margin-top: 10px;
        height: 4px;
        background-color: rgba(38, 37, 37, 1);
        .el-slider__bar {
          height: 4px;
          background-color: rgb(195, 71, 58);
        }
      }
      /deep/ .el-slider__button {
        width: 8px;
        height: 8px;
        border: 0;
        background-color: rgb(195, 71, 58);
      }
    }
    &:hover {
      .slider {
        background-color: rgba(17, 17, 17, 1);
        display: block;
        /deep/ .el-slider__runway {
          display: block;
        }
      }
    }
  }
}
@font-face {
  font-family: "iconfont"; /* Project id 2903867 */
  src: url("//at.alicdn.com/t/font_2903867_cte442uzax.woff2?t=1635588471170")
      format("woff2"),
    url("//at.alicdn.com/t/font_2903867_cte442uzax.woff?t=1635588471170")
      format("woff"),
    url("//at.alicdn.com/t/font_2903867_cte442uzax.ttf?t=1635588471170")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-guanbiyinliang:before {
  content: "\e623";
}

.icon-yinliangdaxiao:before {
  content: "\e625";
}
</style>
