   // src/components/Overview/KPISummary.tsx

   import React from 'react';
   import { Grid, Card, CardContent, Typography } from '@mui/material';

   interface KPIs {
     accuracy: number;
     precision: number;
     recall: number;
     predictions: number;
     confidenceLevels: number;
     insights: number;
     actions: number;
   }

   interface KPISummaryProps {
     kpis: KPIs;
   }

   const KPISummary: React.FC<KPISummaryProps> = ({ kpis }) => {
     const summaryCards = [
       {
         title: 'Model Accuracy',
         value: `${kpis.accuracy}%`,
         color: '#4caf50',
       },
       {
         title: 'Model Precision',
         value: `${kpis.precision}%`,
         color: '#2196f3',
       },
       {
         title: 'Model Recall',
         value: `${kpis.recall}%`,
         color: '#ff9800',
       },
       {
         title: 'Predictions',
         value: kpis.predictions,
         color: '#9c27b0',
       },
       {
         title: 'Average Confidence',
         value: `${kpis.confidenceLevels}%`,
         color: '#f44336',
       },
       {
         title: 'Key Insights',
         value: kpis.insights,
         color: '#00bcd4',
       },
       {
         title: 'Suggested Actions',
         value: kpis.actions,
         color: '#ffc107',
       },
     ];

     return (
       <Grid container spacing={3} className="mb-4">
         {summaryCards.map((card) => (
           <Grid item xs={12} sm={6} md={4} key={card.title}>
             <Card>
               <CardContent>
                 <Typography color="textSecondary" gutterBottom>
                   {card.title}
                 </Typography>
                 <Typography variant="h5" component="div" style={{ color: card.color }}>
                   {card.value}
                 </Typography>
               </CardContent>
             </Card>
           </Grid>
         ))}
       </Grid>
     );
   };

   export default KPISummary;