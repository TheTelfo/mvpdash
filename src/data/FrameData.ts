export const dummyKPIs = [
    'Accuracy',
    'Precision',
    'Recall',
    'Predictions',
    'Confidence Levels',
    'Insights',
    'Actions',
  ];
  
  export const dummyDataSources = [
    { name: 'DataSource1', health: 'Healthy' },
    { name: 'DataSource2', health: 'Unhealthy' },
    { name: 'DataSource3', health: 'Healthy' },
  ];
  
  export const dummyRowData = [
    { kpi: 'Accuracy', model: 'Model1', dataSource: 'DataSource1' },
    { kpi: 'Precision', model: 'Model2', dataSource: 'DataSource2' },
  ];
  
  export const dummyColumnDefs = [
    { headerName: 'KPI', field: 'kpi' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Data Source', field: 'dataSource' },
  ];
  
  export const dummyGraphOption = {
    title: {
      text: 'KPI-Model-Data Source Relationships',
    },
    tooltip: {},
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: [
          { name: 'Accuracy', category: 0 },
          { name: 'Model1', category: 1 },
          { name: 'DataSource1', category: 2 },
        ],
        links: [
          { source: 'Accuracy', target: 'Model1' },
          { source: 'Model1', target: 'DataSource1' },
        ],
      },
    ],
  };