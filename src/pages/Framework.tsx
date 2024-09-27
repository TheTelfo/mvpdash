import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Header from '../components/Framework/Header';
import KPISelectionPanel from '../components/Framework/KPISelectionPanel';
import ModelMappingInterface from '../components/Framework/ModelMappingInterface';
import DataSourceSelection from '../components/Framework/DataSourceSelection';
import FeatureExtractionControls from '../components/Framework/FeatureExtractionControls';
import MappedKPIsVisualization from '../components/Framework/MappedKPIsVisualization';
import ActionButtons from '../components/Framework/ActionButtons';
import RightPanel from '../components/layout/RightPanel';
import {
  dummyKPIs,
  dummyDataSources,
  dummyRowData,
  dummyColumnDefs,
  dummyGraphOption,
} from '../data/FrameData';

const Framework: React.FC = () => {
  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    region: 'All',
  });
  const [selectedKPIs, setSelectedKPIs] = useState<string[]>([]);
  const [selectedDataSources, setSelectedDataSources] = useState<string[]>([]);
  const [isExtracting, setIsExtracting] = useState(false);

  const handleRunExtraction = () => {
    setIsExtracting(true);
    // Simulate extraction process
    setTimeout(() => {
      setIsExtracting(false);
    }, 2000);
  };

  const handleDropKPI = (item: any) => {
    console.log('Dropped KPI:', item);
  };

  return (
    <Box display="flex">
      <Container maxWidth="xl">
        <Header filters={filters} setFilters={setFilters} />
        <KPISelectionPanel
          availableKPIs={dummyKPIs}
          selectedKPIs={selectedKPIs}
          setSelectedKPIs={setSelectedKPIs}
        />
        <ModelMappingInterface onDropKPI={handleDropKPI} />
        <DataSourceSelection
          dataSources={dummyDataSources}
          selectedDataSources={selectedDataSources}
          setSelectedDataSources={setSelectedDataSources}
        />
        <FeatureExtractionControls
          isExtracting={isExtracting}
          onRunExtraction={handleRunExtraction}
        />
        <MappedKPIsVisualization
          rowData={dummyRowData}
          columnDefs={dummyColumnDefs}
          graphOption={dummyGraphOption}
        />
        <ActionButtons
          onSave={() => console.log('Save KPI Model')}
          onRun={() => console.log('Run KPI Model')}
        />
      </Container>
      <RightPanel selectedKPIs={selectedKPIs} setSelectedKPIs={setSelectedKPIs} />
    </Box>
  );
};

export default Framework;