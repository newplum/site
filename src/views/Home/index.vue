<template>
  <div ref="container" class="home-contaienr">
    <ul class="carousel-container" :style="{marginTop}">
      <li v-for="banner in banners" :key="banner.id">
        <Carouselitem :details="banner" />
      </li>
    </ul>
    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div class="icon icon-down" v-show="index < banners.length - 1" @click="switchTo(index + 1)">
      <Icon type="arrowDown" />
    </div>
    <div class="indicator">
      <ul>
        <li 
          :class="{active: index === i}" 
          v-for="(item, i) in banners" 
          :key="item.id"
          @click="switchTo(i)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getBanners } from '@/api/banner'
import Carouselitem from './Carouselitem.vue'
import Icon from '@/components/Icon'
export default {
  components: { Carouselitem, Icon },
  data () {
    return {
      banners: [],
      index: 0,
      contanerHeight: 0
    }
  },
  async created () {
    this.banners = await getBanners()
  },
  mounted () {
    this.contanerHeight = this.$refs.container.clientHeight
  },
  computed: {
    marginTop () {
      return -this.index * this.contanerHeight + 'px'
    }
  },
  methods: {
    switchTo(index) {
      this.index = index
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixins.less';
@import '~@/styles/var.less';
.home-contaienr {
  width: 100%;
  height: 100%;
  font-size: 20px;
  position: relative;
  background: @dark;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center();
    @gap: 25px;
    font-size: 30px;
    color: @gray;
    transform: translateX(-50%);
    cursor: pointer;
    &-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>