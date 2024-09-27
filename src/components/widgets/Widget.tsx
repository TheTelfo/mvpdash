import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { setCurrentWidget } from '../../store/slices/widgetSlice';
import { Card, CardContent, Typography } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { PanelContext } from '../../context/PanelContext';

interface WidgetProps {
  widget: WidgetData;
}

interface WidgetData {
  id: number | number;
  name: string;
  type: 'KPI' | 'LineChart' | 'BarChart';
  title: string;
  data: any;
}

const Widget: React.FC<WidgetProps> = ({ widget }) => {
  const dispatch = useDispatch();
  const { toggleRightPanel } = React.useContext(PanelContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'WIDGET',
    item: { id: widget.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleClick = () => {
    dispatch(setCurrentWidget({ ...widget, id: widget.id.toString() }));
    toggleRightPanel();
  };

  const getChartOptions = () => {
    switch (widget.type) {
      case 'KPI':
        return {
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
              detail: {
                valueAnimation: true,
                formatter: '{value}%',
              },
              data: [
                {
                  value: widget.data.values[widget.data.values.length - 1],
                  name: widget.title,
                },
              ],
            },
          ],
        };
      case 'LineChart':
        return {
          xAxis: { type: 'category', data: widget.data.labels },
          yAxis: { type: 'value' },
          series: [
            {
              data: widget.data.values,
              type: 'line',
              smooth: true,
            },
          ],
          tooltip: {
            trigger: 'axis',
          },
        };
      case 'BarChart':
        return {
          xAxis: { type: 'category', data: widget.data.labels },
          yAxis: { type: 'value' },
          series: [
            {
              data: widget.data.values,
              type: 'bar',
            },
          ],
          tooltip: {
            trigger: 'axis',
          },
        };
      default:
        return {};
    }
  };

  return (
    <Card ref={drag} onClick={handleClick} sx={{ opacity: isDragging ? 0.5 : 1 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {widget.title}
        </Typography>
        <ReactECharts option={getChartOptions()} style={{ height: 200 }} />
      </CardContent>
    </Card>
  );
};

export default Widget;