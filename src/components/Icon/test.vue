<template>
  <div class="test-container">
    <div class="icon" v-for="(icon, i) in iconList" :key="i">
      <Icon :type="icon" />
    </div>
  </div>
</template>

<script>
import Icon from './'
import {iconList} from './'
export default {
  components: {
    Icon
  },
  data () {
    return {
      iconList
    }
  }
}
</script>

<style lang="less" scoped>
.test-container {
  width: 500px;
  height: 300px;
  border: 2px solid;
  margin: 0 auto;
  .icon {
    font-size: 20px;
    float: left;
    margin: 10px;
  }
}
</style>
