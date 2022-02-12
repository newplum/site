<template>
  <div class="image-loader-container">
      <img v-if="!done" class="placeholder" :src="placeholder" />
      <img @load="handleLoad" :src="src" :style="{opacity: originOpacity, transition: `${duration}ms`}" />
  </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: 500
        }
    },
    data () {
        return {
            originLoaded: false,
            done: false
        }
    },
    computed: {
        originOpacity() {
            return this.originLoaded ? 1 : 0
        }
    },
    methods: {
        handleLoad() {
            this.originLoaded = true
            setTimeout(() => {
                this.done = true
                this.$emit('loaded')
            },this.duration)
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixins.less';
.image-loader-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    img {
        .self-fill();
        object-fit: cover;
        &.placeholder {
            filter: blur(2vw);
        }
    }
}
</style>