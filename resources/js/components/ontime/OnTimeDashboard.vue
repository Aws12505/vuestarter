<template>
  <div class="space-y-6">
    <!-- Metrics Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <TotalLateStops 
        v-for="(metric, index) in metrics" 
        :key="index" 
        :title="metric.title" 
        :value="metric.value" 
      />
    </div>

    <!-- Bottom Section -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <BottomDrivers :title="'Bottom 5 Drivers'" :drivers="bottomDrivers" class="lg:col-span-1" />
      <LineChart :title="'On-Time Score'" :chartData="lineChartData" :averageOntime="averageOntime" class="lg:col-span-3" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TotalLateStops from './TotalLateStops.vue';
import BottomDrivers from './BottomDrivers.vue';
import LineChart from './LineChart.vue';

// Props to receive data from parent component
const props = defineProps({
  metricsData: {
    type: Object,
    default: () => ({})
  },
  driversData: {
    type: Array,
    default: () => []
  },
  chartData: {
    type: Object,
    default: () => ({})
  },
  averageOntime: {
    type: Number,
    default: null
  }
});

// Computed properties to use either provided data or default data
const metrics = computed(() => {
  if (props.metricsData && props.metricsData.by_category) {
    // Transform the categories data into the format expected by TotalLateStops component
    return [
      { title: 'Total Delayed Stops', value: props.metricsData.totalDelays },
      { title: 'Delayed for +601 Minutes', value: props.metricsData.moreThan601Count},
      { title: 'Delayed for 121-600 Minutes', value: props.metricsData.between121_600Count},
      { title: 'Delayed for 1-120 Minutes', value: props.metricsData.between1_120Count}
    ];
  }
  return [];
});

const bottomDrivers = computed(() => {
  if (props.driversData && props.driversData.length) {
    return props.driversData;
  }
  return [];
});

const lineChartData = computed(() => {
  if (props.chartData && Object.keys(props.chartData).length) {
    return props.chartData;
  }
  return {};
});
</script>