<template>
  <div class="bg-background rounded-lg border shadow-sm p-4">
    <h3 class="text-base font-semibold mb-4">{{ title }}</h3>
    <div class="h-64">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
  title: {
    type: String,
    default: 'On-Time Score'
  },
  chartData: {
    type: Object,
    default: () => ({
      labels: [],
      datasets: []
    })
  },
  averageOntime: {
    type: Number,
    default: null
  }
});

const chartCanvas = ref(null);
let chart = null;

// Function to initialize or update the chart
const initChart = () => {
  if (chart) {
    chart.destroy();
  }

  if (!chartCanvas.value) return;

  const ctx = chartCanvas.value.getContext('2d');
  
  // Get data values for calculating min and max
  const dataValues = [];
  props.chartData.datasets.forEach(dataset => {
    if (dataset.data && dataset.data.length) {
      dataValues.push(...dataset.data);
    }
  });
  
  // Calculate min and max values for Y-axis
  const minValue = dataValues.length > 0 ? Math.min(...dataValues) : 0;
  const maxValue = dataValues.length > 0 ? Math.max(...dataValues) : 100;
  
  // Add some padding to the min/max values (10% of the range)
  const range = maxValue - minValue;
  const padding = range * 0.1;
  const yMin = Math.max(0, minValue - padding); // Don't go below 0
  const yMax = maxValue + padding;
  
  chart = new Chart(ctx, {
    type: 'line',
    data: props.chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // Hide the legend that shows the data series name
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const score = context.raw || 0;
              const averageValue = props.averageOntime || 0;
              
              // Determine the time period label
              const timeFilter = props.chartData.dateRangeLabel || 'selected period';
              
              // Format the average value with 2 decimal places
              const formattedAverageValue = Number(averageValue).toFixed(2);
              
              return [
                `On-Time Score: ${score}`,
                `Average Score Over ${timeFilter}: ${formattedAverageValue}`
              ];
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: minValue > 10 ? false : true,
          min: Math.max(Math.floor(yMin-2.5),0),
          max: Math.min(Math.ceil(yMax+2.5),100),
          ticks: {
            stepSize: Math.ceil(range / 5) // Create approximately 5 steps
          }
        }
      }
    }
  });
};

// Initialize chart when component is mounted
onMounted(() => {
  initChart();
});

// Watch for changes in chart data and update chart
watch(() => props.chartData, () => {
  initChart();
}, { deep: true });
</script>