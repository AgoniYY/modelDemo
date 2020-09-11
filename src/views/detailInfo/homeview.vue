<template>
  <div class="homeview">
    <div class="infolist">
      <div class="userinfo">
        <div class="avatar">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <div class="username">
          <strong>UFO</strong>
          <p>SuperET</p>
        </div>
      </div>
      <hr size="3" width="95%" style="margin: auto" color="#A9A9A9" />
      <div class="loginstatus">
        <p>
          上次登录时间: <span>{{ dates }}</span>
        </p>
        <p>上次登录地点: <span></span></p>
      </div>
    </div>
    <div class="datalsit">
      <div class="datalists" v-for="(item, index) in avatarlist" :key="index">
        <div class="avatar">
          <el-avatar
            :style="{'background-color': item.color}"
            :icon="item.icon"
            shape="square"
            :size="100"
          ></el-avatar>
        </div>
        <div class="datanum">
          <strong>{{item.num}}</strong>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    <div class="language">
      <p>语言详情</p>
      <el-divider></el-divider>
      <div class="progress">
        <span>Typescript</span>
        <el-progress :percentage="50"></el-progress>
        <!-- <el-progress :percentage="100" :format="format"></el-progress> -->
        <span>Vue</span>
        <el-progress :percentage="100" :color="customColors"></el-progress>
        <span>Javascript</span>
        <el-progress :percentage="80" :color="customColor"></el-progress>
        <span>CSS</span>
        <el-progress :percentage="50" :color="customColorcs"></el-progress>
      </div>
    </div>
    <div class="needdealt">
      <p>待办事项</p>
      <el-divider></el-divider>
      <el-table
        size="medium "
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        :show-header="false"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
    <div class="footerdata">
      <div class="leftfoot">
        <div
          id="viewechart"
          ref="echarts"
          style="width: 798px; height: 360px; padding-top: 20px;"
        ></div>
      </div>
      <div class="rightfoot">
        <div
          id="viewechartr"
          ref="echarts"
          style="width: 798px; height: 360px;"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "homeview",
  data() {
    return {
      circleUrl: "../../../static/image/2019921106136688.png",
      dates: "",
      customColor: "#FFA500",
      customColors: "#228B22",
      customColorcs: "#B22222",
      avatarlist: [
        {
          color: 'red',
          icon: 'el-icon-s-promotion',
          num: '62830',
          text: '分享'
        },
        {
          color: 'green',
          icon: 'el-icon-s-custom',
          num: '38297502',
          text: '观看'
        },
        {
          color: 'blue',
          icon: 'el-icon-message-solid',
          num: '2827391',
          text: '通知'
        }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  mounted() {
    this.getdate();
    this.getinitchart();
    this.getinitcharts()
  },
  methods: {
    getinitcharts() {
      let mycharts = echarts.init(document.querySelector("#viewechartr"));
      // Generate data
      var category = [];
      var dottedBase = +new Date();
      var lineData = [];
      var barData = [];

      for (var i = 0; i < 20; i++) {
        var date = new Date((dottedBase += 3600 * 24 * 1000));
        category.push(
          [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
        );
        var b = Math.random() * 200;
        var d = Math.random() * 200;
        barData.push(b);
        lineData.push(d + b);
      }

      // option
      mycharts.setOption({
        backgroundColor: "#FFFFFF",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["line", "bar"],
          textStyle: {
            color: "#ccc"
          }
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        series: [
          {
            name: "line",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 15,
            data: lineData
          },
          {
            name: "bar",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 5,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#14c8d4" },
                { offset: 1, color: "#43eec6" }
              ])
            },
            data: barData
          },
          {
            name: "line",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(20,200,212,0.5)" },
                { offset: 0.2, color: "rgba(20,200,212,0.2)" },
                { offset: 1, color: "rgba(20,200,212,0)" }
              ])
            },
            z: -12,
            data: lineData
          },
          {
            name: "dotted",
            type: "pictorialBar",
            symbol: "rect",
            itemStyle: {
              color: "#87CEFA"
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
          }
        ]
      });
    },
    getinitchart() {
      let mychart = echarts.init(document.querySelector("#viewechart"));
      let data = [100, 52, 200, 334, 390, 330, 220, 100, 230, 450];
      let yMax = 1000;
      let dataShadow = new Array(data.length).fill(1000, 0, data.length);
      let labelOption = {
        normal: {
          show: true,
          align: "middle",
          formatter: obj =>
            obj.value > 0 ? `${obj.value}\n ${obj.value}%` : "",
          fontSize: 12
        }
      };
      mychart.setOption({
        color: [
          "#FF9051",
          "#FF9051",
          "#FF9051",
          "#FF9051",
          "#FF9051",
          "#EA5404",
          "#EA5404",
          "#EA5404",
          "#FFBF54",
          "#FFBF54",
          "#A7A442",
          "#A7A442",
          "#9BC1C3",
          "#9BC1C3",
          "#F07676"
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: ""
        },
        grid: {
          left: 50,
          top: 30,
          bottom: 60,
          right: 50,
          containLabel: true
        },
        legend: {
          icon: "square",
          orient: "horizontal", //horizontal 横向排列 vertical 纵向排列
          x: "center",
          y: "310",
          itemGap: 14, // 各个item之间的间隔，默认为10px /横向布局时为水平间隔，纵向布局时为纵向间隔
          itemWidth: 8, // 图例图形宽度
          itemHeight: 8, // 图例图形高度
          data: [
            "水果类",
            "蔬菜类",
            "配料类",
            "砂锅类",
            "洗浴类",
            "盘子类",
            "其他"
          ],
          textStyle: {
            color: [
              "#FF9051",
              "#EA5404",
              "#FFBF54",
              "#A7A442",
              "#9BC1C3",
              "#F07676"
            ],
            fontsize: "14px"
          }
        },
        xAxis: {
          type: "category",
          axisLabel: {
            show: true,
            textStyle: { color: "#A8A8A8", fontSize: "12" }
          },
          axisLine: {
            //x坐标轴的设置
            lineStyle: {
              color: "#A8A8A8",
              width: 1 //这里是坐标轴的宽度
            }
          },
          axisTick: { show: false, alignWithLabel: true },
          data: [
            "苹果",
            "橘子",
            "橙子",
            "车厘子",
            "油麦菜",
            "土豆",
            "砂锅",
            "洗发露",
            "青花瓷盘子",
            "其他"
          ]
        },
        yAxis: [
          {
            name: "达标率",
            max: 1000,
            splitNumber: 1,
            splitLine: {
              //分割线
              show: true,
              lineStyle: { type: "dashed", color: "#A8A8A8" }
            },
            axisLine: {
              //坐标轴
              show: false,
              lineStyle: {
                color: "#A8A8A8",
                width: 1 //这里是坐标轴的宽度
              }
            },
            axisTick: { show: false }
          }
        ],
        series: [
          {
            // 最外层的边框
            type: "bar",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0.05)",
                borderColor: "#FF9051",
                borderWidth: 1,
                borderType: "solid"
              }
            },
            barGap: "-100%",
            barCategoryGap: "40%",
            data: dataShadow,
            animation: false
          },
          {
            name: "水果类",
            type: "bar",
            stack: "水果类",
            label: labelOption,
            data: [210, 100, 300, 500, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "苹果",
            type: "bar",
            stack: "水果类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "橘子",
            type: "bar",
            stack: "水果类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "橙子",
            type: "bar",
            stack: "水果类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "车厘子",
            type: "bar",
            stack: "水果类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "蔬菜类",
            type: "bar",
            stack: "蔬菜类",
            label: labelOption,
            data: [0, 0, 0, 0, 600, 900, 0, 0, 0, 0]
          },
          {
            name: "土豆",
            type: "bar",
            stack: "蔬菜类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "油麦菜",
            type: "bar",
            stack: "蔬菜类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "砂锅类",
            type: "bar",
            stack: "砂锅类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 200, 0, 0, 0, 0]
          },
          {
            name: "砂锅",
            type: "bar",
            stack: "砂锅类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "洗浴类",
            type: "bar",
            stack: "洗浴类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 750, 0, 0, 0]
          },
          {
            name: "洗发露",
            type: "bar",
            stack: "洗浴类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "盘子类",
            type: "bar",
            stack: "盘子类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 680, 0, 0]
          },
          {
            name: "青花瓷盘子",
            type: "bar",
            stack: "盘子类",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "其他",
            type: "bar",
            label: labelOption,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 320, 0]
          },
          {
            //中间的虚线
            type: "line",
            symbol: "none",
            data: [500, 600, 700, 800, 800, 600, 500, 700, 800, 800],
            animation: false,
            lineStyle: {
              color: "rgba(58, 58, 58, 0)"
            },
            markLine: {
              symbol: ["circle", "triangle"],
              symbolSize: [6, 8],
              precision: 0,
              label: {
                position: "end",
                formatter: " 80%"
              },
              lineStyle: {
                normal: {
                  type: "dashed",
                  color: "#E7C387"
                }
              },
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            type: "line",
            symbol: "none",
            data: [500, 600, 700, 800, 800, 600, 500, 700, 800, 800],
            animation: false,
            lineStyle: { color: "rgba(58, 58, 58, 0)" },
            markLine: {
              symbol: ["none", "none"],
              label: {
                position: "start",
                formatter: "时间刻度 "
              },
              lineStyle: {
                normal: {
                  type: "dashed",
                  color: "#E7C387"
                }
              },
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    },
    handleSelectionChange(row) {
      console.log(row);
    },
    getdate() {
      var date = new Date();
      var hh = date.getHours();
      var mm = date.getMinutes();
      var ss = date.getSeconds();
      var yy = date.getFullYear();
      var MM = date.getMonth(); //因为1月这个方法返回为0，所以加1
      var dd = date.getDate();
      var nowday = new Date(yy, MM, dd, hh, mm, ss)
        .toLocaleString()
        .replace("年", "-")
        .replace("月", "-")
        .replace("日", "");
      this.dates = nowday;
    }
  }
};
</script>

<style lang="less" scoped>
.homeview {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .infolist {
    width: 30%;
    height: 252px;
    background-color: white;
    // box-shadow: 1px 1px 5px black;
    .userinfo {
      width: 100%;
      height: 142px;
      display: flex;
      align-items: center;
      .avatar {
        padding-left: 20px;
        .el-avatar {
          width: 120px !important;
          height: 120px !important;
        }
      }
      .username {
        margin-left: 40px;
        font-size: 20px;
        p {
          font-size: 13px;
          color: lightslategray;
        }
      }
    }
    .loginstatus {
      padding: 20px;
      font-size: 14px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      p {
        padding-top: 10px;
      }
    }
  }
  .datalsit {
    width: 70%;
    position: relative;
    display: flex;
    height: 100px;
    .datalists {
      width: 33%;
      display: flex;
      align-items: center;
      margin-left: 20px;
      border-radius: 4px;
      cursor: pointer;
      background-color: white;
      .datanum {
        margin: auto;
        strong {
          font-size: 30px;
        }
        p {
          font-size: 14px;
          color: #999;
        }
      }
      .avatar {
        height: 100px;
      }
    }
    .datalists:hover {
      box-shadow: 1px 1px 5px black;
    }
  }
  .language {
    width: 30%;
    height: 252px;
    background-color: white;
    // box-shadow: 1px 1px 5px black;
    margin-top: 20px;
    p {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      margin-left: 20px;
      margin-top: 20px;
      line-height: 20px;
    }
    .progress {
      padding-left: 20px;
    }
  }
  .needdealt {
    margin-left: 20px;
    width: 68.7%;
    height: 405px;
    position: relative;
    background-color: white;
    // box-shadow: 1px 1px 5px black;
    bottom: 134px;
    p {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      margin-left: 20px;
      margin-top: 20px;
      line-height: 20px;
    }
  }
  .footerdata {
    width: 100%;
    height: 340px;
    position: relative;
    bottom: 100px;
    display: flex;
    justify-content: space-between;
    .leftfoot {
      width: 48%;
      height: 360px;
      background-color: white;
      // box-shadow: 1px 1px 5px black;
    }
    .rightfoot {
      width: 48%;
      height: 360px;
      background-color: white;
    }
  }
}
</style>
