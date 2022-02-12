<template>
  <div class="carousel-item-container">
    <ImageLoader :src="details.bigImg" :placeholder="details.midImg"/>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
  components: {
    ImageLoader
  },
  props: {
    details: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.carousel-item-container {
  width: 100%;
  height: 100%;
  background: @dark;
  color: #fff;
}
</style>