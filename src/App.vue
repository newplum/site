<template>
  <div class="app-container">
    <Layout>
          <template #left>
              <div class="aside">
                <SiteAside />
              </div>
          </template>
          <template #default>
              <RouterView />
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside
  }
}
</script>

<style lang="less" scoped>
.app-container {
    width: 100%;
    height: 100%;
    .aside {
        width: 220px;
        height: 100%;
    }
}
</style>
