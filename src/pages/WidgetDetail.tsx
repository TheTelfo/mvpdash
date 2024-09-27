// src/pages/WidgetDetail.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const WidgetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid widget ID</div>;
  }

  const widget = useSelector((state: RootState) =>
    state.widgets.widgets.find((w) => w.id.toString() === id)
  );

  if (!widget) {
    return <div>Widget not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">{widget.name} Details</h1>
      {/* Render detailed information about the widget */}
      {/* Example: Display widget settings or data */}
      <div>
        <p>Type: {widget.type}</p>
        {/* Additional widget details */}
      </div>
    </div>
  );
};

export default WidgetDetail;
