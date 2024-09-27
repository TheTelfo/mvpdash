// src/hooks/useWidgets.ts
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addWidget, removeWidget, updateWidget, setCurrentWidget, clearCurrentWidget } from '../store/slices/widgetSlice';

export const useWidgets = () => {
  const dispatch: AppDispatch = useDispatch();
  const widgets = useSelector((state: RootState) => state.widgets.widgets);
  const currentWidget = useSelector((state: RootState) => state.widgets.currentWidget);

  const add = (widget: any) => dispatch(addWidget(widget));
  const remove = (id: string) => dispatch(removeWidget(id));
  const update = (widget: any) => dispatch(updateWidget(widget));
  const setCurrent = (widget: any) => dispatch(setCurrentWidget(widget));
  const clearCurrent = () => dispatch(clearCurrentWidget());

  return {
    widgets,
    currentWidget,
    add,
    remove,
    update,
    setCurrent,
    clearCurrent,
  };
};