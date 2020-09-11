<template>
  <div class="MyAchievement">
    <div class="MyAchievement-echart">
      <div class="echart-title">我的业绩</div>
      <div class="echart-content">
        <div id="myChart" :style="{ width: '1500px', height: '460px' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("myChart")); //获取容器元素
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
      let option = {
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
          y: "270",
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
          textStyle: { color: "#FFFFFF", fontsize: "14px" }
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
      };
      //防止越界，重绘canvas
      window.onresize = myChart.resize;
      myChart.setOption(option); //设置option
    }
  }
};
</script>

<style lang="scss" scoped>
.MyAchievement {
  display: flex;
  flex-direction: column;
  padding: 0px 90px;
}
.MyAchievement .MyAchievement-echart {
  width: 100%;
  height: 570px;
  border-radius: 10px;
  border: 1px solid #d3d9e9;
  box-shadow: 4px 6px 10px -2px #d3d9e9;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.MyAchievement-echart .echart-title {
  width: 100%;
  height: 70px;
  background-color: #00abf7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 26px;
  color: #fff;
  text-align: center;
  line-height: 75px;
}
.MyAchievement-echart .echart-content {
  width: 100%;
  height: 500px;
  display: flex;
  // align-items: center;
  justify-content: center;
}
.echart-content #myChart {
  margin-top: 35px;
}
</style>
