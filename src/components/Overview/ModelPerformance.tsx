import React, { useMemo } from 'react';
import Grid from '@mui/material/Grid2';
import { Card, CardContent, Typography } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import ReactECharts from 'echarts-for-react';
import { ColDef, ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Register AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface Metric {
  metric: string;
  value: number;
  trend: number[];
}

interface TrendData {
  time: string;
  metric: number;
}

interface ModelPerformanceProps {
  metrics: Metric[];
  trendData: TrendData[];
}

const ModelPerformance: React.FC<ModelPerformanceProps> = ({ metrics, trendData }) => {
  const columnDefs = useMemo<ColDef[]>(() => [
    { headerName: 'Metric', field: 'metric', sortable: true, filter: true },
    { headerName: 'Value', field: 'value', sortable: true, filter: true },
    // Add more columns as needed
  ], []);

  const trendChartOption = useMemo(() => ({
    xAxis: {
      type: 'category',
      data: trendData.map((d) => d.time),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: trendData.map((d) => d.metric),
        type: 'line',
      },
    ],
  }), [trendData]);

  return (
    <Grid container spacing={3}>
      {/* Metrics Table */}
      <Grid xs={12} component="div">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Model Performance Metrics
            </Typography>
            <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
              <AgGridReact
                rowData={metrics}
                columnDefs={columnDefs}
                modules={[ClientSideRowModelModule]}
                defaultColDef={{
                  flex: 1,
                  minWidth: 100,
                  resizable: true,
                }}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Performance Trend Chart */}
      <Grid xs={12} component="div">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Performance Trend
            </Typography>
            <ReactECharts
              option={trendChartOption}
              style={{ height: '400px', width: '100%' }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ModelPerformance;