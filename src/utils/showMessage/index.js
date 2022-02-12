import {getComponentRootDom} from '@/utils'
import styles from './index.module.less'
import Icon from '@/components/Icon'

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 success, info, warn, error
 * * @param {Number} duration 多久消失,如果为0则不消失
 * @param {HTMLElement} container 处于哪个组件中，不传默认为body
 */
export default function (options = {}) {
    const content = options.content || ''
    const type = options.type || 'info'
    const duration = options.duration || 2000
    const container = options.container || document.body
    const callback = options.callback
    const div = document.createElement('div')
    const iconDom = getComponentRootDom(Icon, {type}).outerHTML
    div.innerHTML = `<span class="${styles.icon}">${iconDom}</span><div class="${styles.text}">${content}</div>`
    // 设置在容器中居中
    if(options.container) {
        if(getComputedStyle(container).position === 'static') {
            container.style.position = 'relative'
        }
    }
    
    div.className = `${styles.showMessage} ${styles[`showMessage-${type}`]}`
    container.appendChild(div)
    // 触发reflow，强制渲染一次dom
    div.clientHeight
    // 显示
    div.style.opacity = 1
    div.style.transform = 'translate(-50%, -50%) translateY(0)'
    // duration事件后消失
    setTimeout(() => {
        div.style.opacity = 0
        div.style.transform = 'translate(-50%, -50%) translateY(-25px)'
        div.addEventListener('transitionend', () => {
            div.remove()
            callback && callback()
        }, {once: true})
    }, duration);
}