<template>
    <div class="test-container">
        <ImageLoader :src="src" :placeholder="placeholder" :duration="3000" @loaded="handleLoaded" />
    </div>
</template>

<script>
import ImageLoader from './'
export default {
    components: {
        ImageLoader
    },
    data () {
        return {
            src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201112%2F05%2F195603ls1fjzbx3xthjlff.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622092154&t=717866410d57f756af44b8de8d106172',
            placeholder: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F0069MmKxly1gou2fs37h8j33l06dcnpg.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622092202&t=e9adcbb3c71d4d800cc082dbaf890b97',
        }
    },
    methods: {
        handleLoaded(){
            console.log('图片加载完成')
        }
    }
}
</script>

<style>
.test-container {
    width: 500px;
    height: 400px;
    border: 1px solid;
    margin: 0 auto;
}
</style>