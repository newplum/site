/*
 * @Description:
 * @Version: 1.0
 * @Author: lilingyun
 * @Date: 2022-02-12 13:24:44
 * @FilePath: \my-site\src\router\index.js
 * @LastEditors: lilingyun
 * @LastEditTime: 2022-02-12 14:58:12
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
