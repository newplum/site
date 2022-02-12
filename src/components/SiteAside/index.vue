<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar url="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=114045387,466533571&fm=15&gp=0.jpg"/>
    </div>
    <div class="menu">
      <Menu />
    </div>
    <div class="contact">
      <Contact />
    </div>
    
  </div>
</template>

<script>
import '@/styles/global.less'
import Avatar from '@/components/Avatar'
import Menu from '@/components/SiteAside/Menu'
import Contact from '@/components/SiteAside/Contact'
export default {
  components: {
    Avatar,
    Menu,
    Contact
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.site-aside-container {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  background: @dark;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  .avatar {
    display: flex;
    justify-content: center;
  }
  .menu {
    margin: 50px 0;
  }
}
</style>