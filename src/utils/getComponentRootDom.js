import Vue from 'vue'
/**
 * 获取某组件渲染的Dom根元素
 * @param {*} component 
 * @param {*} props 
 * @returns 
 */
export default function (component, props) {
    const vm = new Vue({
        render: h => h(component, {props})
    }).$mount()
    return vm.$el
}