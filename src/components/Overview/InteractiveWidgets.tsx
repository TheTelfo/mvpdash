import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import {
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
  Button,
  Box,
} from '@mui/material';
import ReactECharts from 'echarts-for-react';

interface InteractiveWidgetsProps {
  predictionData: PredictionData[];
}

interface PredictionData {
  label: string;
  value: number;
}

const InteractiveWidgets: React.FC<InteractiveWidgetsProps> = ({ predictionData }) => {
  const [showUnlockedPredictions, setShowUnlockedPredictions] = useState(false);
  const [customCharts, setCustomCharts] = useState<string[]>(['BarChart']);

  const handleTogglePredictionUnlock = () => {
    setShowUnlockedPredictions((prev) => !prev);
  };

  const handleAddChart = (chartType: string) => {
    if (!customCharts.includes(chartType)) {
      setCustomCharts((prev) => [...prev, chartType]);
    }
  };

  return (
    <Grid container spacing={3}>
      {/* Toggle for Unlocked Predictions */}
      <Grid xs={12} component="div">
        <Card>
          <CardContent>
            <FormControlLabel
              control={
                <Switch
                  checked={showUnlockedPredictions}
                  onChange={handleTogglePredictionUnlock}
                  color="primary"
                />
              }
              label="Show Unlocked Predictions"
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Customizable Charts */}
      {customCharts.map((chartType, index) => (
        <Grid xs={12} md={6} key={index} component="div">
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">{chartType}</Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleAddChart(chartType)}
                >
                  Add
                </Button>
              </Box>
              {chartType === 'BarChart' && (
                <ReactECharts
                  option={{
                    xAxis: {
                      type: 'category',
                      data: predictionData.map((d) => d.label),
                    },
                    yAxis: {
                      type: 'value',
                    },
                    series: [
                      {
                        data: predictionData.map((d) => d.value),
                        type: 'bar',
                      },
                    ],
                  }}
                  style={{ height: '300px', width: '100%' }}
                />
              )}
              {chartType === 'LineChart' && (
                <ReactECharts
                  option={{
                    xAxis: {
                      type: 'category',
                      data: predictionData.map((d) => d.label),
                    },
                    yAxis: {
                      type: 'value',
                    },
                    series: [
                      {
                        data: predictionData.map((d) => d.value),
                        type: 'line',
                      },
                    ],
                  }}
                  style={{ height: '300px', width: '100%' }}
                />
              )}
              {/* Add more chart types as needed */}
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Button to Add More Charts */}
      <Grid xs={12} component="div">
        <Card>
          <CardContent>
            <Button variant="contained" color="primary" onClick={() => handleAddChart('LineChart')}>
              Add Line Chart
            </Button>
            {/* Add buttons for more chart types as needed */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InteractiveWidgets;
