import React, { createContext, useState, ReactNode } from 'react';

interface PanelContextProps {
  rightPanelOpen: boolean;
  toggleRightPanel: () => void;
}

export const PanelContext = createContext<PanelContextProps>({
  rightPanelOpen: false,
  toggleRightPanel: () => {},
});

interface PanelProviderProps {
  children: ReactNode;
}

export const PanelProvider: React.FC<PanelProviderProps> = ({ children }) => {
  const [rightPanelOpen, setRightPanelOpen] = useState<boolean>(false);

  const toggleRightPanel = () => {
    setRightPanelOpen((prev) => !prev);
  };

  return (
    <PanelContext.Provider value={{ rightPanelOpen, toggleRightPanel }}>
      {children}
    </PanelContext.Provider>
  );
};