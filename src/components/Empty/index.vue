<template>
  <div class="empty-container">
      <Icon type="empty" />
      <span class="text">{{text}}</span>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    components: {
        Icon
    },
    props: {
        text: {
            type: String,
            default: '无数据'
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
    .empty-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: @gray;
        .icon-container {
            font-size: 100px;
        }
    }
</style>