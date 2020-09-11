<template>
  <div class="header">
    <div class="logo"><strong>{{logo}}</strong></div>
      <div class="search">
        <el-input v-model="input" placeholder="请输入搜索内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="navinfo">
        <ul>
          <li v-for="item in navList" :key="item.id"><strong>{{item.value}}</strong></li>
        </ul>
        <div class="userlogin">
          <span @click="loginshow"><a>登录</a></span>
          <span>/</span>
          <span @click="register"><a>注册</a></span>
        </div>
      </div>
      <el-dialog :title="title" center :visible.sync="dialogFormVisible" width="20%">
        <el-form :model="form" :rules="rules" ref="form" autocomplete="off">
          <el-form-item label="账号" prop="account" label-width="80px">
            <el-input v-model="form.account" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" label-width="80px">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verification" label-width="80px">
            <el-input v-model="form.verification"></el-input>
          </el-form-item>
        </el-form>
        <div class="idenCode" @click="refreshCode">
          <!-- <s-identify :identifyCode="identifyCode"></s-identify> -->
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit('form')">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog :title="title" center :visible.sync="dialogFormVisibles" width="20%">
        <el-form :model="form" :rules="rules" ref="form" autocomplete="off">
          <el-form-item label="用户名" prop="account" label-width="80px">
            <el-input v-model="form.account" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" label-width="80px">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password" label-width="80px">
            <el-input v-model="form.passwords" show-password></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verification" label-width="80px">
            <el-input v-model="form.verification"></el-input>
          </el-form-item>
        </el-form>
        <div class="idenCode" @click="refreshCode">
          <!-- <s-identify :identifyCode="identifyCode"></s-identify> -->
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibles = false">取 消</el-button>
          <el-button type="primary" @click="submit('form')">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
// import SIdentify from '../../common/identify'

export default {
  name: "headers",
//   components: {SIdentify},
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: '',
      navList: [
        {
          id: 1,
          value: '首页',
          path: '/'
        },
        {
          id: 2,
          value: 'API',
          path: '/api'
        },
        {
          id: 3,
          value: '帮助',
          path: '/help'
        },
        {
          id: 4,
          value: '关于',
          path: '/about'
        }
      ],
      logo: "LOGO",
      input: '',
      title: '',
      form: {
        account: '',
        password: '',
        passwords: '',
        verification: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        passwords: [
          { required: true, message: '请确认密码', trigger: 'blur' }
        ],
        verification: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
      },
      dialogFormVisible: false, // 登录
      dialogFormVisibles: false // 注册
    };
  },
  mounted () {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    loginshow () {
      this.title = '用户登录'
      this.dialogFormVisible = true
    },
    register() {
      this.title = '用户注册'
      this.dialogFormVisibles = true
    },
    submit (form) {
      if (this.form.verification == this.identifyCode) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            // this.$refs.form.resetFields();
            console.log('submit!!!')
            this.dialogFormVisible = false
          } else {
            console.log('error')
          }
        })
      } else {
        this.form.verification = ''
        this.$message.error('验证码错误，请重试')
      }
    },
    registerform (from) {
      if (this.form.verification == this.identifyCode) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            // this.$refs.form.resetFields();
            console.log('submit!!!')
            this.dialogFormVisible = false
          } else {
            console.log('error')
          }
        })
      } else {
        this.form.verification = ''
        this.$message.error('验证码错误，请重视')
      }
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  min-height: 58px;
  // border: 1px solid black;
  box-shadow: 0px 1px 5px black;
  background-color: rgb(150, 185, 125);
  position: relative;
  top: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .logo {
    width: 200px;
    height: 58px;
    line-height: 58px;
    margin-left: 5%;
    color: white;
    font-size: 23px;
  }
  .search {
    width: 260px;
    height: 58px;
    .el-input--small {
      width: 100%;
      height: 30px;
      margin-top: 10px;
    }
  }
  .navinfo {
    width: 30%;
    height: 58px;
    position: relative;
    right: 10%;
    display: flex;
    ul {
      width: 100%;
      height: 58px;
      list-style: none;
      display: flex;
      li {
        width: 100px;
        line-height: 58px;
        color: white;
        font-size: 15px;
        cursor: pointer;
      }
    }
    .userlogin {
      width: 100px;
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
        line-height: 58px;
        color: white;
        a {
          cursor: pointer;
          color: white;
        }
      }
    }
  }
  .idenCode {
    width: 114px;
    margin: auto;
    height: 40px;
    border: 1px solid red;
  }
}
</style>
