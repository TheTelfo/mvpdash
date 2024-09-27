// src/routes/index.tsx

import { Routes, Route, Navigate } from 'react-router-dom';
import Overview from '../pages/Overview';
import WidgetDetail from '../pages/WidgetDetail';
import Framework from '../pages/Framework';
import NotFound from '../pages/NotFound'; // Create a 404 page

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/overview" replace />} />
    <Route path="/overview" element={<Overview />} />
    <Route path="/widget-detail/:id" element={<WidgetDetail />} />
    <Route path="/framework" element={<Framework />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;