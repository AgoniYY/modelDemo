<template>
  <div class="sider">
    <el-aside>
      <el-menu :default-active="$route.path" :router="true" @select="select">
        <template>
            <el-menu-item index="/homeview">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">系统首页</span>
            </el-menu-item>
            <el-menu-item index="/tableList">
                <i class="el-icon-sell"></i>
                <span slot="title">基础表格</span>
            </el-menu-item>
            <el-menu-item index="/tabchoose">
                <i class="el-icon-sell"></i>
                <span slot="title">地图选项</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-office-building"></i>
                    <span>表单相关</span>
                </template>
                <el-menu-item index="/formdetail">
                    <i class="el-icon-sell"></i>
                    <span slot="title">基本表单</span>
                </el-menu-item>
                <el-submenu index="1-1">
                  <template slot="title">三级列表</template>
                  <el-menu-item index="/richtext">富文本编辑器</el-menu-item>
                </el-submenu>
                <el-menu-item index="/">
                    <i class="el-icon-sell"></i>
                    <span slot="title">文件上传</span>
                </el-menu-item>
            </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
  export default {
    name: "sider",
    data() {
      return {};
    },
    methods: {
      select (index) {
          this.$emit('select', index)
      }
    }
  };

</script>

<style lang="less" scoped>
.sider {
    height: 100%;
    .el-aside {
      width: 200px !important;
      height: 100%;
      background-color: #96b97d;
    }
    .el-menu {
      background-color: #96b97d;
    }
}
</style>
