import React from 'react';
import { useDrag } from 'react-dnd';

const widgetTemplates = [
  { type: 'KPI', name: 'KPI Card' },
  { type: 'LineChart', name: 'Line Chart' },
  { type: 'BarChart', name: 'Bar Chart' },
  // Add more widget types as needed
];

const WidgetLibrary: React.FC = () => {
  return (
    <div>
      <h2 className="mb-2 text-lg font-bold">Widget Library</h2>
      <div className="space-y-2">
        {widgetTemplates.map((widget) => (
          <DraggableWidgetTemplate key={widget.type} widget={widget} />
        ))}
      </div>
    </div>
  );
};

interface DraggableWidgetTemplateProps {
  widget: { type: string; name: string };
}

const DraggableWidgetTemplate: React.FC<DraggableWidgetTemplateProps> = ({ widget }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'WIDGET_TEMPLATE',
    item: widget,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`cursor-move rounded border bg-white p-2 ${isDragging ? 'opacity-50' : ''}`}
    >
      {widget.name}
    </div>
  );
};

export default WidgetLibrary;
