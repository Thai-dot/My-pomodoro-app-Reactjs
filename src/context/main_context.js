import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducer/main_reducer";

const getLocalStorage=()=>{
  let getItem = localStorage.getItem("timeObject");
  if(getItem){
    return JSON.parse(localStorage.getItem("timeObject"))
  }
  else{
    return [];
  }
}



const getObjectItem = getLocalStorage();

const initialState = {
  isPlay: false,
  time: getObjectItem.time == null ? 1500000:getObjectItem.time , //default 25 minutes -> 1500000 milliseconds
  standTime: getObjectItem.standTime==null? 15000:getObjectItem.standTime,
  breakTime: getObjectItem.breakTime==null?30000:getObjectItem.breakTime, //default break time 5 minutes
  isMainSection: true, //display 25 minutes section
  isAutoPlay: getObjectItem.isAutoPlay,
  standMinutes: getObjectItem.standMinutes==null ? 1500000 :getObjectItem.standMinutes ,
  standSeconds: getObjectItem.standSeconds==null ? 0 :getObjectItem.standSeconds ,
  breakMinutes:getObjectItem.breakMinutes==null?30000:getObjectItem.breakMinutes,
  breakSeconds:getObjectItem.breakSeconds==null?0:getObjectItem.breakSeconds,
  darkTheme: getObjectItem.darkTheme,
  isNotify:getObjectItem.isNotify,
  themeName: getObjectItem.themeName,
};



const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const startTime = () => {
      dispatch({ type: "START_TIME" });
    };
    const setTime = setInterval(startTime, 1000);
    const objectTime = {
      time:state.time,
      isAutoPlay:state.isAutoPlay,
      standTime:state.standTime,
      breakTime:state.breakTime,
      isNotify:state.isNotify,
      darkTheme:state.darkTheme,
      themeName:state.themeName,

    }
    document.documentElement.className=state.themeName;
    localStorage.setItem("timeObject",JSON.stringify(objectTime))
    return () => clearInterval(setTime);
  }, [state.time, state.isAutoPlay, state.standTime,state.standMinutes,state.standSeconds,state.breakTime,state.breakMinutes,state.breakSeconds,state.isNotify,state.darkTheme,state.themeName]);


  window.onload = (e) => {
  dispatch({ type: "RELOAD_PAGE" });
};

  const handleClickPlayButton = () => {
    dispatch({ type: "SET_PLAY" });
  };

  const handleClickReset = () => {
    dispatch({ type: "RESET_TIME" });
  };

  const handleClickChangeSection = () => {
    dispatch({ type: "CHANGE_SECTION" });
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    const name = e.target.name;
    const checked = e.target.checked;
  
    if (name === "autoplay") {
      dispatch({ type: "SET_AUTOPLAY", payload: checked });
    }
    if (name === "standMinutes") {
      const standMinute = e.target.value;
      
      dispatch({ type: "SET_STANDMINUTE", payload: standMinute });
    }
    if (name === "standSeconds") {
      const standSecond = e.target.value;
      dispatch({ type: "SET_STANDSECOND", payload: standSecond });
    }

    if(name==="breakMinutes"){
      const breakMinute = e.target.value;
      dispatch({type:"SET_BREAKMINUTE",payload:breakMinute});
    }

    if(name==="breakSeconds"){
      const breakSecond = e.target.value;
      dispatch({type:"SET_BREAKSECOND",payload: breakSecond});
    }
    if(name==="theme"){
      dispatch({type:"SET_THEME",payload:checked})
    }
    if(name==="notify"){
      dispatch({type:"SET_NOTIFY",payload:checked});
    }
  };
  

  return (
    <MainContext.Provider
      value={{
        ...state,
        handleClickPlayButton,
        handleClickReset,
        handleClickChangeSection,
        handleChange,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};
