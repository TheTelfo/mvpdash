// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from './slices/widgetSlice';
// Import other reducers as needed

export const store = configureStore({
  reducer: {
    widgets: widgetReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
