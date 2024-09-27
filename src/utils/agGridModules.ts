import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';

// Import other AG Grid modules as needed

export const registerAgGridModules = () => {
  ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    // Add other modules here
  ]);
};