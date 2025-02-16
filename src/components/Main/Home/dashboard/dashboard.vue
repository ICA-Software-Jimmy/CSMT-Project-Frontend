<template>
  <div class="charts-box">
    <div class="box-1">
      <h2>個案總數量 : {{ caseNumAll }} 案</h2>
    </div>
    <div class="charts-container">
      <div class="box-2">
        <h2>個案年齡分布</h2>
        <canvas ref="barChartRef"></canvas>
      </div>
      <div class="box-3">
        <h2>個案狀態分布</h2>
        <canvas ref="pieChartRef"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';

// 註冊 Chart.js 所需的模組
Chart.register(...registerables);

// 定義響應式變數
const caseNumAll = ref(150);
const barChartRef = ref(null);
const pieChartRef = ref(null);

// 初始化圖表
onMounted(() => {
  // 確保 Canvas 已經載入
  if (!barChartRef.value || !pieChartRef.value) return;

  // 年齡分布 - 長條圖
  new Chart(barChartRef.value.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['10歲以下', '10~13歲', '14~17歲', '18~20歲', '20歲以上'],
      datasets: [{
        label: '人數',
        data: [12, 19, 3, 5, 2], // 修正數據數量
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // 個案狀態分布 - 圓餅圖
  new Chart(pieChartRef.value.getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['緊急協助', '定期追蹤', '結案'],
      datasets: [{
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`
          }
        }
      }
    }
  });
});
</script>

<style scoped>
.charts-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  margin: 0 auto;

}

.charts-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #9B9B93; 
  border-radius: 8px;
}
.box-1{
  width: 100%;
  border: 1px solid #9B9B93; 
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 16px;
  text-align: center;
}
.box-2, .box-3 {
  width: 60%;
  margin:32px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


  