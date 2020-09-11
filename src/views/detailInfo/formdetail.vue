<template>
  <div class="detail">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
      style="width: 60%; margin: auto; padding-top: 50px;"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="账户余额" prop="money">
        <el-input v-model="ruleForm.money" readonly></el-input>
      </el-form-item>
      <el-form-item label="个人图片上传" prop="filelist" required>
        <el-upload
          action="#"
          list-type="picture-card"
          ref="upload"
          :auto-upload="false"
          :http-request="httpRequestUpload"
          :on-success="handlerPicturecardsuccess"
          :on-error="handlerPicturecarderror"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-progress="uploadVideoProcess"
          :on-change="imgPreview"
          :file-list="ruleForm.filelist"
          >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
          <el-progress v-if="videoFlag == true" type="circle" :percentage="videoUploadPercent" style="margin-top:30px;"></el-progress>
        </el-dialog>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="入住日期" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" @change="getdatepick" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="入住套餐业务" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio v-for="item in setmeal" :key="item.id" :label="item.value" name="type"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="入住形式" prop="desc">
        <el-radio-group v-model="ruleForm.desc">
          <el-radio-button label="日租"></el-radio-button>
          <el-radio-button label="月租"></el-radio-button>
          <el-radio-button label="季租"></el-radio-button>
          <el-radio-button label="年租"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item style="padding-top: 50px">
        <el-button type="primary" @click="submitForm('ruleForm')"
          style="margin-right:50px">立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      setmeal: [
        {
          id: 1,
          value: '黄金VIP'
        },
        {
          id: 2,
          value: '铂金VIP'
        },
        {
          id: 3,
          value: '钻石VIP'
        },
        {
          id: 4,
          value: '至尊VIP'
        }
      ],
      getdate: '',
      dialogImageUrl: '',
      dialogVisible: false,
      ruleForm: {
        name: "",
        money: "$ 123129921",
        address: '',
        filelist: [],
        date1: '',
        date2: '',
        type: '',
        desc: ""
      },
      loading: false,
      videoFlag: false,
      rules: {
        name: [
          { required: true, message: "客户名称", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" }
        ],
        // money: [
        //   { required: true, message: "请输入", trigger: "change" }
        // ],
        date1: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请选择入住形式", trigger: "change" }],
        filelist: [
          { required: true, message: "请上传用户照片", trigger: "change" }
        ]
      }
    };
  },
  mounted () {
    let formOne = this.$refs.ruleForm;
    let optionsone = {
      target: formOne,
      fullscreen: false
    }
  },
  methods: {
    httpRequestUpload (param) {
      console.log(param)
      this.ruleForm.filelist.push(param.file)
      if (param) {
        this.$message.success("上传成功")
        this.ruleForm.filelist.splice(1, 1)
      }
      this.$nextTick(() => {
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent)
            // let num = progressEvent.loaded / progressEvent.total * 100 | 0;  //百分比
            // file.onProgress({percent: num})     //进度条
        }
      })
      console.log(this.ruleForm.filelist)
    // this.axios.post(file)//上传文件
    //       .then(response=>{
    //           file.onSuccess(response)
    //       })
    //       .catch(({err}) => {
    //           file.onError(err)
    //       })
      
    },
    uploadVideoProcess(event, file, filelist){
        this.videoFlag = true;
        this.videoUploadPercent = file.percentage.toFixed(0);
        console.log(event)
        // onUploadProgress: (progressEvent) => {
        //                 let num = progressEvent.loaded / progressEvent.total * 100 | 0;  //百分比
        //                 file.onProgress({percent: num})     //进度条
        //             }
    },
    getdatepick (val) {
      this.getdate = val
      console.log(this.getdate)
    },
    imgPreview(file, filelist) {
      let fileName = file.name;
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
      if (regex.test(fileName.toLowerCase())) {
        this.dialogImageUrl = URL.createObjectURL(file.raw)  // 获取URL
        console.log(this.dialogImageUrl)
      } else {
        this.$message.error('请选择图片文件');
      }
    },
    handlerPicturecardsuccess (res) {
        this.$message.success("上传成功")
        console.log(res)
    },
    handlerPicturecarderror (err, file, filelist) {
      console.log(err)
    },
    handleRemove(file, filelist) {
      console.log(file, filelist);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    routetotable (forminfo) {
      this.$router.push({
        path: '/tableList',
        query: {
          formdata: forminfo
        }
      })
    },
    submitForm(formName) {
      this.$refs.upload.submit()
      this.loading = true
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {
            name: this.ruleForm.name,
            money: this.ruleForm.money,
            address: this.ruleForm.address,
            imgurl: this.dialogImageUrl,
            date: this.getdate,
            type: this.ruleForm.type,
            desc: this.ruleForm.desc
          }
          console.log(this.dialogImageUrl)
          setTimeout(() => {
            this.loading = false
            this.routetotable(params)
            this.filelist = []
          },1000)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  padding-left: 10px;
  padding-top: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
