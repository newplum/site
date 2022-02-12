<template>
  <nav class="menu-container">
    <RouterLink
      :exact="nav.exact" v-for="(nav, i) in list"
      :key="i"
      :to="{name: nav.name}"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="nav.icon" />
      </div>
      <span>{{nav.text}}</span>
    </RouterLink>
  </nav>
</template>

<script>
import '@/styles/global.less'
import Icon from '@/components/Icon'
export default {
  components: {
    Icon
  },
  data () {
    return {
      list: [
        {
          link: '/',
          name: 'Home',
          text: '首页',
          icon: 'home',
          exact: true
        },
        {
          link: '/blog',
          name: 'Blog',
          text: '文章',
          icon: 'blog',
          exact: false
        },
        {
          link: '/project',
          name: 'Project',
          text: '项目',
          icon: 'project',
          exact: true
        },
        {
          link: '/about',
          name: 'About',
          text: '关于我',
          icon: 'about',
          exact: true
        },
        {
          link: '/message',
          name: 'Message',
          text: '留言',
          icon: 'message',
          exact: true
        }
      ]
    }
  },
  methods: {
    isActive(nav) {
      const link = nav.link.toLowerCase()
      const currentLink = location.pathname.toLowerCase()
      if(nav.startsWith) {
        return currentLink.startsWith(link)
      }else {
        return currentLink === link
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/global.less';
.menu-container {
  color: @lightWords;
  margin: 20px auto;
  a {
    display: flex;
    height: 32px;
    line-height: 32px;
    padding: 0 30px;
    margin: 8px 0;
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 3%)
    }
    .icon {
      margin-right: 10px;
    }
  }
}
</style>