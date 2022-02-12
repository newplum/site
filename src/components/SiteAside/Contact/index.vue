<template>
  <ul class="contact-container">
      <li>
          <a href="https://www.github.com" target="_blank">
              <div class="icon"><Icon type="github" /></div>
                <span class="text">newplum</span>
          </a>
      </li>
      <li>
          <a href="mailto:1105372736@qq.com">
              <div class="icon"><Icon type="email" /></div>
                <span class="text">1105372736@qq.com</span>
          </a>
      </li>
      <li>
          <a href="tencent://message/?Menu=yes&uin=1105372736&Site=80fans&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a545b1714f9d45">
              <div class="icon"><Icon type="qq" /></div>
                <span class="text">1105372736</span>
          </a>
          <div class="pop">
              <img src="@/assets/images/kakashi.jpeg" alt="">
          </div>
      </li>
      <li>
          <a>
              <div class="icon"><Icon type="weixin" /></div>
                <span class="text">345393249</span>
          </a>
          <div class="pop">
              <img src="@/assets/images/kakashi.jpeg" alt="">
          </div>
      </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon'
import '@/styles/global.less'
export default {
    components: {
        Icon
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.contact-container {
    color: @lightWords;
    @itemHeight: 22px;
    padding: 0;
    margin: 0;
    li {
        margin: 15px 0;
        list-style: none;
        height: @itemHeight;
        position: relative;
        &:hover {
            .pop {
                transform: scale(1);
            }
        }
        a {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 0 10px;
            .icon {
                background: @lightWords;
                border-radius: 50%;
                width: 22px;
                height: 22px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #000;
                margin-right: 5px;
            }
            .text {
                font-size: 14px;
            }
        }

        .pop {
            position: absolute;
            left: 0;
            bottom: @itemHeight + 8px;
            padding: 10px;
            background: #fff;
            border-radius: 5px;
            transform: scaleY(0);
            transform-origin: center bottom;
            transition: 0.3s;
            &::after {
                content: "";
                position: absolute;
                left: 50%;
                bottom: -4px;
                transform: translate(-50%) rotate(45deg);
                width: 8px;
                height: 8px;
                background: #fff;
            }
            img {
                width: 100px;
                height: 100px;
                object-fit: cover;
            }
        }
    }
}
</style>