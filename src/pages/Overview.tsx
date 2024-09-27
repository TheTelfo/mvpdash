// src/pages/Overview.tsx

import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Header, { Filters } from '../components/Overview/Header';
import KPISummary from '../components/Overview/KPISummary';
import SystemUsage from '../components/Overview/SystemUsage';
import ModelPerformance from '../components/Overview/ModelPerformance';
import InsightsActions from '../components/Overview/InsightsActions';
import InteractiveWidgets from '../components/Overview/InteractiveWidgets';
import WidgetContainer from '../components/widgets/WidgetContainer';
import {
  dummyKPIs,
  dummySystemUsage,
  dummyMetrics,
  dummyTrendData,
  dummyInsights,
  dummyActions,
  dummyPredictionData,
} from '../data/dummyData';

const Overview: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    startDate: null,
    endDate: null,
    region: 'All',
  });

  const [systemUsage] = useState(dummySystemUsage); // Removed setSystemUsage

  useEffect(() => {
    // Fetch or update system usage data here
    // For now, we're using dummy data
  }, []); // Empty dependency array to run once

  return (
    <Container maxWidth="xl" className="pt-4">
      {/* Header Section */}
      <Header filters={filters} setFilters={setFilters} />

      {/* KPI Summary Cards */}
      <KPISummary kpis={dummyKPIs} />

      {/* System Usage Overview */}
      <SystemUsage
        cpuUsage={systemUsage.cpuUsage}
        gpuUsage={systemUsage.gpuUsage}
        apiUsageData={systemUsage.apiUsageData}
        resourceAllocationData={systemUsage.resourceAllocationData}
      />

      {/* Model Performance Section */}
      <ModelPerformance metrics={dummyMetrics} trendData={dummyTrendData} />

      {/* Insights & Actions Panel */}
      <InsightsActions insights={dummyInsights} actions={dummyActions} />

      {/* Interactive Widgets */}
      <InteractiveWidgets predictionData={dummyPredictionData} />

      {/* Widget Container */}
      <WidgetContainer />
    </Container>
  );
};

export default Overview;
