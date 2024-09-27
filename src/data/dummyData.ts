// src/data/dummyData.ts

export const dummyKPIs = {
  accuracy: 95,
  precision: 90,
  recall: 85,
  predictions: 1500,
  confidenceLevels: 92,
  insights: 12,
  actions: 5,
};

export const dummySystemUsage = {
  cpuUsage: 65,
  gpuUsage: 75,
  apiUsageData: [
    { time: '08:00', calls: 200 },
    { time: '09:00', calls: 450 },
    { time: '10:00', calls: 300 },
    { time: '11:00', calls: 500 },
    { time: '12:00', calls: 400 },
  ],
  resourceAllocationData: [
    { name: 'CPU', value: 60 },
    { name: 'GPU', value: 25 },
    { name: 'Memory', value: 15 },
  ],
};

export const dummyMetrics = [
  { metric: 'Accuracy', value: 95, trend: [90, 92, 93, 94, 95] },
  { metric: 'Precision', value: 90, trend: [85, 87, 88, 89, 90] },
  { metric: 'Recall', value: 85, trend: [80, 82, 83, 84, 85] },
  // Add more metrics as needed
];

export const dummyTrendData = [
  { time: 'Jan', metric: 80 },
  { time: 'Feb', metric: 82 },
  { time: 'Mar', metric: 85 },
  { time: 'Apr', metric: 88 },
  { time: 'May', metric: 90 },
  { time: 'Jun', metric: 92 },
  // Add more trend data points as needed
];

export const dummyInsights = [
  {
    id: 1,
    title: 'Sales Increase',
    description: 'Sales have increased by 20% in Q2.',
  },
  {
    id: 2,
    title: 'Customer Churn',
    description: 'Customer churn rate has decreased by 5%.',
  },
  // Add more insights as needed
];

export const dummyActions = [
  {
    id: 1,
    title: 'Increase Marketing Spend',
    onClick: () => alert('Implementing Increase Marketing Spend'),
  },
  {
    id: 2,
    title: 'Launch New Feature',
    onClick: () => alert('Implementing Launch New Feature'),
  },
  // Add more actions as needed
];

export const dummyPredictionData = [
  { label: 'Jan', value: 50 },
  { label: 'Feb', value: 70 },
  { label: 'Mar', value: 65 },
  { label: 'Apr', value: 80 },
  { label: 'May', value: 75 },
  { label: 'Jun', value: 90 },
  // Add more prediction data as needed
];

export const kpiData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  values: [80, 85, 90, 95, 100, 105],
};

export const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  values: [50, 60, 55, 65, 70, 75],
};

export const barChartData = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  values: [120, 200, 150, 80],
};
