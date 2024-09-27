// src/components/common/DynamicChart.tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';

interface DynamicChartProps {
  type: 'line' | 'bar' | 'pie' | 'gauge';
  data: any;
  options?: any;
}

const DynamicChart: React.FC<DynamicChartProps> = ({ type, data, options }) => {
  const defaultOptions = {
    tooltip: {
      trigger: 'axis',
    },
    series: [
      {
        type,
        data,
      },
    ],
  };

  return (
    <ReactECharts option={{ ...defaultOptions, ...options }} style={{ height: '300px', width: '100%' }} />
  );
};

export default DynamicChart;