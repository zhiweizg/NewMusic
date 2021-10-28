<template>
  <div class="footer">
    <Play />
  </div>
</template>

<script>
import Play from '@/components/play/play.vue'
export default {
  components: {
    Play
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  width: 100%;
  height: 70px;
}
</style>
