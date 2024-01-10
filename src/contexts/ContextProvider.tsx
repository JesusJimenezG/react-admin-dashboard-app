import React, { Provider, createContext, useContext, useState } from 'react';

type NavbarState = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

type ContextType = {
  activeMenu: boolean;
  setActiveMenu: (value: any) => void;
  isClicked: NavbarState;
  setisClicked: (value: any) => void;
  screenSize: any;
  setScreenSize: (value: any) => void;
  handleClick: (name: string) => void;
};

const initialState: NavbarState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const StateContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: any) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (name: string) => {
    setisClicked({ ...initialState, [name]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setisClicked,
        screenSize,
        setScreenSize,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
