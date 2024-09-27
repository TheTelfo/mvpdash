import React from 'react';
import Grid from '@mui/material/Grid2';
import { Card, CardContent, Typography } from '@mui/material';
import ReactECharts from 'echarts-for-react';

interface SystemUsageProps {
  cpuUsage: number;
  gpuUsage: number;
  apiUsageData: { time: string; calls: number }[];
  resourceAllocationData: { name: string; value: number }[];
}

const SystemUsage: React.FC<SystemUsageProps> = ({
  cpuUsage,
  gpuUsage,
  apiUsageData,
  resourceAllocationData,
}) => {
  // Prepare data for API Usage Chart
  const apiUsageOption = {
    xAxis: {
      type: 'category',
      data: apiUsageData.map((d) => d.time),
    },
    yAxis: {
      type: 'value',
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    series: [
      {
        data: apiUsageData.map((d) => d.calls),
        type: 'line',
      },
    ],
  };

  // Prepare data for Resource Allocation Pie Chart
  const resourceAllocationOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Resource Allocation',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: resourceAllocationData.map((d) => ({ value: d.value, name: d.name })),
      },
    ],
  };

  return (
    <Grid container spacing={3}>
      {/* CPU Usage Gauge */}
      <Grid xs={12} md={6} component="div">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              CPU Usage
            </Typography>
            <ReactECharts
              option={{
                series: [
                  {
                    type: 'gauge',
                    progress: {
                      show: true,
                      width: 18,
                    },
                    axisLine: {
                      lineStyle: {
                        width: 18,
                      },
                    },
                    pointer: {
                      length: '70%',
                      width: 6,
                    },
                    detail: {
                      valueAnimation: true,
                      formatter: '{value}%',
                      color: '#fff',
                    },
                    data: [{ value: cpuUsage, name: 'CPU' }],
                  },
                ],
              }}
              style={{ height: '200px', width: '100%' }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* GPU Usage Gauge */}
      <Grid xs={12} md={6} component="div">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              GPU Usage
            </Typography>
            <ReactECharts
              option={{
                series: [
                  {
                    type: 'gauge',
                    progress: {
                      show: true,
                      width: 18,
                    },
                    axisLine: {
                      lineStyle: {
                        width: 18,
                      },
                    },
                    pointer: {
                      length: '70%',
                      width: 6,
                    },
                    detail: {
                      valueAnimation: true,
                      formatter: '{value}%',
                      color: '#fff',
                    },
                    data: [{ value: gpuUsage, name: 'GPU' }],
                  },
                ],
              }}
              style={{ height: '200px', width: '100%' }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* API Usage Over Time */}
      <Grid xs={12} md={6} component="div">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              API Usage Over Time
            </Typography>
            <ReactECharts
              option={apiUsageOption}
              style={{ height: '200px', width: '100%' }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Resource Allocation Pie Chart */}
      <Grid xs={12} md={6} component="div">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Resource Allocation
            </Typography>
            <ReactECharts
              option={resourceAllocationOption}
              style={{ height: '200px', width: '100%' }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SystemUsage;