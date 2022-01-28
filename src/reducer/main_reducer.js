import addNotification from 'react-push-notification';

const endMainSection = ()=>{
   addNotification({
            title: 'Notificatiions',
            subtitle: 'Relax now!!!',
            message: 'End of studying section!!! ',
            theme: 'red',
            native: true // when using native, your OS will handle theming.
        });
}

const endBreakSection = ()=>{
   addNotification({
            title: 'Notificatiions',
            subtitle: "Let's study!!!",
            message: 'Start studying section!!! ',
            theme: 'red',
            native: true // when using native, your OS will handle theming.
        });
}



const main_reducer = (state, action) => {
  if (action.type === "SET_PLAY") {
    const isPlay = !state.isPlay;
    return { ...state, isPlay };
  }

  if(action.type==="RELOAD_PAGE"){
    let time =0;
    if(state.isMainSection){
       time = state.standTime;

    }else{
       time = state.breakTime
    }
    
    return {...state,time}
  }

  if (action.type === "START_TIME") {
    if (state.isPlay === false) {
      const time = state.time;
      return { ...state, time };
    }

    if (state.time > 0) {
      const time = state.time - 1000;
      return { ...state, time };
    } 

    else if (state.time === 0) {
      if (state.isMainSection) {
       if(state.isNotify){
        endMainSection();  //Notify when main section has ended
       }
        const isMainSection = false;  //Change main section to break section
        const time = state.breakTime;
        if(state.isAutoPlay){
          return { ...state, time, isMainSection };
        }
        const isPlay = false;
        return { ...state, time, isPlay, isMainSection };
      }

      //Change break section to main section
      if(state.isNotify){
        endBreakSection();//Notify when break section has ended

      }
      const isMainSection = true;
      const time = state.standTime;
       if (state.isAutoPlay) {
         return { ...state, time, isMainSection };
       }
      const isPlay = false;
      return { ...state, time, isPlay, isMainSection };
    }
  }
  if (action.type === "RESET_TIME") {
    let time = 0;
    if (state.isMainSection) {
      time = state.standTime;
    } else {
      time = state.breakTime;
    }

    const isPlay = false;
    return { ...state, time, isPlay };
  }

  if (action.type === "CHANGE_SECTION") {
    let time = 0;
    let isPlay = true;
    if(state.isAutoPlay ===true){
      isPlay = true;
    }else{
      isPlay = false;
    }
    const isMainSection = !state.isMainSection;
    if (!state.isMainSection) {
      time = state.standTime;
    } else {
      time = state.breakTime;
    }
    
    return { ...state,isPlay, time, isMainSection };
  }

  if(action.type === "SET_AUTOPLAY"){
    const isAutoPlay = action.payload;
    
    return {...state, isAutoPlay}
  }

  if (action.type === "SET_STANDMINUTE") {
    const standTime = Number(action.payload) * 60 * 1000 + state.standSeconds;
    const standMinutes = action.payload * 60 * 1000;
    let time = standTime
    return { ...state, standTime, standMinutes,time };
  }

  if(action.type==="SET_STANDSECOND"){
    let standSeconds = action.payload*1000;
    const standTime = state.standMinutes+Number(action.payload)*1000;
    
    const time = standTime;
    return {...state,standSeconds,standTime,time}
  }

  if(action.type==="SET_BREAKMINUTE"){
    let breakMinutes = action.payload*60*1000;
    const breakTime = Number(action.payload)*60*1000 + state.breakSeconds;

    return {...state,breakMinutes,breakTime}
  }

  if(action.type==="SET_BREAKSECOND"){
    let breakSeconds = action.payload*1000;
    const breakTime = state.breakMinutes + action.payload*1000;

    return {...state,breakSeconds,breakTime};
  }
  
  if(action.type==="SET_NOTIFY"){
    const isNotify = action.payload;

    return {...state,isNotify}
  }

  if(action.type==="SET_THEME"){
    const darkTheme = action.payload
    let themeName="abc"
    if(darkTheme){
      themeName = "dark-theme"
    }
    else{
      themeName="light-theme"
    }
    return {...state,darkTheme,themeName}
  }

    throw new Error(`No Matching "${action.type}" - action type`);
};

export default main_reducer;
