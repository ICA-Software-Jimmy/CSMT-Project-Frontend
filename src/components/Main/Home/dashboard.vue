<template>
    <div class="charts-box">
      <h2>Bar Chart</h2>
      <canvas ref="barChartRef"></canvas>
  
      <h2>Pie Chart</h2>
      <canvas ref="pieChartRef"></canvas>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'ChartsPage',
    setup() {
      const barChartRef = ref(null);
      const pieChartRef = ref(null);
  
      onMounted(() => {
        // Bar Chart
        const barCtx = barChartRef.value.getContext('2d');
        new Chart(barCtx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
  
        // Pie Chart
        const pieCtx = pieChartRef.value.getContext('2d');
        new Chart(pieCtx, {
          type: 'pie',
          data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
              label: '# of Votes',
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
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    return `${tooltipItem.label}: ${tooltipItem.raw}`;
                  }
                }
              }
            }
          }
        });
      });
  
      return {
        barChartRef,
        pieChartRef
      };
    }
  };
  </script>
  
  <style>
  canvas {
    max-width: 600px;
    margin: 20px auto;
  }

  .charts-box{
    margin-bottom: 20px;
  }
  </style>
  