<template>
  <div class="container">
    <div id="my-chart" style="width: 100%; height: 200px"></div>
  </div>
</template>
<script>
// 饼状图
import * as echarts from 'echarts';
export default {
  name: "PieChart",
  data() {
    return {
      options: {
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
        title: {
          text: '基金类型',
          textStyle: {
            fontSize:'12px',
            color:'#91959A',
            fontWeight: 'normal'
          },
          left: '20%',
          top: '40%'
        },
        legend: {
          orient: 'vertical',
          itemHeight: 8,
          itemWidth: 8,
          right: 0,
          top: '20%',
          formatter: (name) => {
            return `${name}`
          }
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            center: ['30%', '50%'],
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" }
            ]
          }
        ]
      }
    };
  },
  created() {
    // this.$nextTick(() => {
    //   var myChart = echarts.init(document.getElementById("my-chart"));
    //   myChart.setOption(this.options);
    // });
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("my-chart"));
    myChart.setOption(this.options);
  },
  methods: {}
};
</script>
