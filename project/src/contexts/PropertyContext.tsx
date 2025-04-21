import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property } from '../types';

interface PropertyContextType {
  properties: Property[];
  selectedProperty: Property | null;
  setSelectedProperty: (property: Property | null) => void;
  isLoading: boolean;
}

const PropertyContext = createContext<PropertyContextType>({
  properties: [],
  selectedProperty: null,
  setSelectedProperty: () => {},
  isLoading: true
});

export const useProperty = () => useContext(PropertyContext);

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch properties from Supabase
    setIsLoading(false);
  }, []);

  return (
    <PropertyContext.Provider 
      value={{ 
        properties, 
        selectedProperty, 
        setSelectedProperty,
        isLoading 
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};