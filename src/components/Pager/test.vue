<template>
  <div>
    <Pager :current="current" :total="302" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from './'
export default {
  components: {
    Pager
  },
  data () {
    return {
      current: 1,
    }
  },
  methods: {
    handlePageChange(page) {
      this.current = page
    }
  }
}
</script>

<style lang="less" scoped>

</style>
