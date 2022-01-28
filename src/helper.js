
export const convertTime = (totalMilliSec) =>{
    const totalSec = totalMilliSec/1000;
    const minutes = Math.floor(totalSec / 60) % 60;
    const seconds = Math.floor(totalSec) % 60;
    return {seconds,minutes};
}

export const formatTime = (time) =>{
    return time < 10 ? `0${time}` : time;
}

