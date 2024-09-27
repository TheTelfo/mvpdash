import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Widget {
  id: string;
  name: string;
  type: 'KPI' | 'LineChart' | 'BarChart';
  title: string;
  data: any;
  // ...other properties
}

interface WidgetState {
  widgets: Widget[];
  currentWidget: Widget | null;
}

const initialState: WidgetState = {
  widgets: [],
  currentWidget: null,
};

const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<Widget>) => {
      state.widgets.push(action.payload);
    },
    removeWidget: (state, action: PayloadAction<string>) => {
      state.widgets = state.widgets.filter(widget => widget.id !== action.payload);
      if (state.currentWidget?.id === action.payload) {
        state.currentWidget = null;
      }
    },
    updateWidget: (state, action: PayloadAction<Widget>) => {
      const index = state.widgets.findIndex(widget => widget.id === action.payload.id);
      if (index !== -1) {
        state.widgets[index] = action.payload;
        if (state.currentWidget?.id === action.payload.id) {
          state.currentWidget = action.payload;
        }
      }
    },
    setCurrentWidget: (state, action: PayloadAction<Widget>) => {
      state.currentWidget = action.payload;
    },
    clearCurrentWidget: (state) => {
      state.currentWidget = null;
    },
  },
});

export const { addWidget, removeWidget, updateWidget, setCurrentWidget, clearCurrentWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
