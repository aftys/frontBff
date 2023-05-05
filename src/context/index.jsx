import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  settings:false,

};



export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor,setColor]=useState("#fca5a5")
  const [currentMode,setCurrentMode]=useState("Light")
  const handleClick = (clicked) => {
    const notClicked=isClicked[clicked];
    setIsClicked({ ...initialState, [clicked]: !notClicked });
}

function setMode(mode){
  setCurrentMode(mode)
  localStorage.setItem('mode',mode)
}
  
  return (
    
    <StateContext.Provider value={{initialState,activeMenu, setActiveMenu,isClicked, setIsClicked,handleClick,currentColor,setColor,currentMode,setMode}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
