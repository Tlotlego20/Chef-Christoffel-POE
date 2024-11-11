// MenuContext.tsx
import React, { createContext, useContext, useState } from 'react';

type MenuItem = {
  id: string;
  name: string;
  course: string;
  price: number;
};

type MenuContextType = {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  removeMenuItem: (id: string) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within a MenuProvider");
  return context;
};

export const MenuProvider: React.FC = ({ children }: any)=> {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', name: 'Sushi', course: 'starter', price: 499.99 },
    { id: '2', name: 'Dunked Wings', course: 'starter', price: 45.99 },
    { id: '3', name: 'Burger', course: 'main', price: 99.99 },
    { id: '4', name: 'Steak', course: 'main', price: 149.99 },
  ]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems([...menuItems, item]);
  };

  const removeMenuItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem, removeMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};
