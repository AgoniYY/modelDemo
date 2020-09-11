<template>
    <div class="home">
        <el-header>
            <Header/>
        </el-header>
        <el-container>
            <transition name="fade">
                <sider class="sider"/>
            </transition>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

import Header from '../components/Header'
import sider from '../views/layouts/Sider'

export default {
    name: 'home',
    components: {sider, Header},
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    height: 100%;
    overflow: -Scroll;
    overflow-y: hidden;
    .el-container {
        width: 100%;
        height: 100%;
        .el-main {
            background-color: #f0f0f0;
        }
    }
}
.el-header {
    padding: 0px
}
</style>