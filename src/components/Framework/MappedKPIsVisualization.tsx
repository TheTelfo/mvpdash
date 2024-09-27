import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import ReactECharts from 'echarts-for-react';

interface MappedKPIsVisualizationProps {
  rowData: any[];
  columnDefs: any[];
  graphOption: any;
}

const MappedKPIsVisualization: React.FC<MappedKPIsVisualizationProps> = ({ rowData, columnDefs, graphOption }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="ag-theme-alpine" style={{ height: '50%', width: '100%' }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
      <ReactECharts option={graphOption} style={{ height: '50%', width: '100%' }} />
    </div>
  );
};

export default MappedKPIsVisualization;