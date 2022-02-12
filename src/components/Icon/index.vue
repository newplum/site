<template>
    <i :class="['iconfont', 'icon-container', fontClass]"></i>
</template>

<script>
const iconMap = {
    home: 'icon-home',
    arrowDown: 'icon-arrowdown',
    arrowUp: 'icon-arrowup',
    close: 'icon-baseline-close-px',
    empty: 'icon-kong',
    github: 'icon-github',
    qq: 'icon-qq',
    weixin: 'icon-weixin',
    email: 'icon-youxiang',
    project: 'icon-code',
    message: 'icon-liuyan',
    blog: 'icon-wenzhang',
    about: 'icon-guanyuwomen',
    info: 'icon-info',
    error: 'icon-shibai',
    success: 'icon-chenggong',
    warn: 'icon-warn'
}
export const iconList = Object.keys(iconMap)
export default {
    name: 'Icon',
    props: {
        type: {
            type: String,
            required: true
        }
    },
    computed: {
        fontClass() {
            return iconMap[this.type]
        }
    }
}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2513884_0pzyuc60i6r.css';
.icon-container {
    font-size: inherit;
}
</style>