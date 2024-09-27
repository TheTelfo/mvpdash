import React from 'react';
import Grid from '@mui/material/Grid2';
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

interface InsightsActionsProps {
  insights: Insight[];
  actions: Action[];
}

interface Insight {
  id: number;
  title: string;
  description: string;
}

interface Action {
  id: number;
  title: string;
  onClick: () => void;
}

const InsightsActions: React.FC<InsightsActionsProps> = ({ insights, actions }) => {
  return (
    <Grid container spacing={3} className="mb-4">
      {/* Automated Insights */}
      <Grid xs={12} md={6} component="div">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Automated Insights
            </Typography>
            <List>
              {insights.map((insight) => (
                <ListItem key={insight.id}>
                  <ListItemText primary={insight.title} secondary={insight.description} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Suggested Actions */}
      <Grid xs={12} md={6} component="div">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Suggested Actions
            </Typography>
            <List>
              {actions.map((action) => (
                <ListItem
                  key={action.id}
                  secondaryAction={
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={action.onClick}
                    >
                      Implement
                    </Button>
                  }
                >
                  <ListItemText primary={action.title} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InsightsActions;