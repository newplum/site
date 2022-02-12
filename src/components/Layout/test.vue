<template>
  <div class="test-container">
      <Layout>
          <template #left>
              <div class="left">left</div>
          </template>
          <template>
              <div class="main">main</div>
          </template>
          <template #right>
              <div class="right">right</div>
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from './'
export default {
    components: {
        Layout
    }
}
</script>

<style lang="less" scoped>
.test-container {
    width: 100%;
    height: 600px;
    border: 1px solid;
    margin: 0 auto;
    .left {
        width: 200px;
        height: 100%;
        background: pink;
    }
    .main {
        width: 100%;
        height: 100%;
        background: lightblue
    }
    .right {
        width: 150px;
        height: 100%;
        background: lightgreen;
    }
}
</style>