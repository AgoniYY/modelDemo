import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/homeview',
            children: [
                {
                    path: '/homeview', // 首页
                    name: 'homeview',
                    component: () => import(/* webpackChunkName: "homeview" */ '../views/detailInfo/homeview.vue')
                },
                {
                    path: '/formdetail', // 用户信息
                    name: 'formdetail',
                    component: () => import(/* webpackChunkName: "formdetail" */ '../views/detailInfo/formdetail.vue')
                },
                {
                    path: '/tableList', // table表格数据
                    name: 'tableList',
                    component: () => import(/* webpackChunkName: "tableList" */ '../views/detailInfo/tableList.vue')
                },
                {
                    path: '/tabchoose', // 标签选择
                    name: 'tabchoose',
                    component: () => import(/* webpackChunkName: "tabchoose" */ '../views/detailInfo/tabchoose.vue')
                },
                {
                    path: '/richtext', // 标签选择
                    name: 'richtext',
                    component: () => import(/* webpackChunkName: "richtext" */ '../views/detailInfo/richtext.vue')
                },
            ]
        },
    ],
    mode: 'history'
})
