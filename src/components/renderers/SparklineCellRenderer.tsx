import React from 'react';
import ReactECharts from 'echarts-for-react';

interface SparklineCellRendererProps {
  value: number[];
}

const SparklineCellRenderer: React.FC<SparklineCellRendererProps> = ({ value }) => {
  const options = {
    xAxis: {
      type: 'category',
      data: value.map((_, index) => index + 1),
      show: false,
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        data: value,
        type: 'line',
        smooth: true,
        areaStyle: {},
        symbol: 'none',
      },
    ],
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    tooltip: {
      show: false,
    },
    animation: false,
  };

  return (
    <ReactECharts option={options} style={{ height: '50px', width: '100%' }} />
  );
};

export default SparklineCellRenderer;