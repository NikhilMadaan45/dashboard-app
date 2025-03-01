import { createContext, useContext, useState, ReactNode } from "react";

interface WidgetContextType {
  activeWidget: string | null;
  setActiveWidget: (widget: string | null) => void;
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

export const WidgetProvider = ({ children }: { children: ReactNode }) => {
  const [activeWidget, setActiveWidget] = useState<string | null>(null);

  return (
    <WidgetContext.Provider value={{ activeWidget, setActiveWidget }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidgetContext = () => {
  const context = useContext(WidgetContext);
  if (!context) throw new Error("useWidgetContext must be used within WidgetProvider");
  return context;
};
