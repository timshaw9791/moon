<template>
  <div id="Histogram" :style="{ width: '700px', height: '300px' }"></div>
</template>

<script lang="ts" setup>
// 引入echarts
import * as echarts from 'echarts'
import { onMounted } from 'vue'
const chartProps = defineProps<{
  list: { value: number; name: string }[]
}>()
onMounted(() => {
  // 需要获取到element,所以是onMounted的Hook
  let myChart = echarts.init(document.getElementById('Histogram'))
  // 绘制图表
  myChart.setOption({
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ],
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  })
  window.onresize = function () {
    // 自适应大小
    myChart.resize()
  }
})
</script>
