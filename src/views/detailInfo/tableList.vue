<template>
  <div class="tablelist">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" align="center" label="ID" width="60">
      </el-table-column>
      <el-table-column prop="name" align="center" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="money" label="账户余额" align="center" width="120">
      </el-table-column>
      <el-table-column align="center" label="个人图片" width="200">
        <template slot-scope="scope">
          <img width="150px" height="100px" :src="scope.row.imgurl" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="地址"
        width="120"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        label="入住日期"
        align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="到期时间"
        align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.datend }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <!-- <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template> -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tableList",
  data() {
    return {
      forminfo: [],
      tableData: [
        {
          id: 1,
          money: '$ 20002310',
          date: '4203-06-21',
          datend: '9827-29-311',
          name: "阿汤哥",
          imgurl: '../../../static/image/tom.jpg',
          address: "精英路288号"
        },
        {
          id: 2,
          money: '$ 300000000000',
          date: '4203-06-21',
          datend: '9827-29-311',
          name: "小唐尼",
          imgurl: '../../../static/image/IronMan.jpg',
          address: "氪金路888号"
        },
        {
          id: 3,
          money: '$ 200000',
          date: '4203-06-21',
          datend: '9827-29-311',
          name: "桃总",
          imgurl: '../../../static/image/taozong.jpg',
          address: "科技路678号"
        },
        {
          id: 4,
          money: '$ 1233333',
          date: '4203-06-21',
          datend: '9827-29-311',
          name: "狼叔",
          imgurl: '../../../static/image/langhsu.jpg',
          address: "异变路999号"
        },
        {
          id: 5,
          money: '$ 2344441',
          date: '4203-06-21',
          datend: '9827-29-311',
          name: "寡姐",
          imgurl: '../../../static/image/guajie.jpg',
          address: "精英路666号"
        },
        {
          id: 6,
          money: '$ 2341132412',
          date: '4203-06-21',
          datend: '9827-29-311',
          name: "抖森",
          imgurl: '../../../static/image/dousen.jpeg',
          address: "创神路333号"
        }
      ],
      search: '',
      multipleSelection: []
    };
  },
  mounted() {
    this.forminfo = this.$route.query.formdata
    console.log(this.forminfo)
    this.tableData.push(this.forminfo)
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  padding-left: 10px;
  padding-top: 10px;
}
</style>
