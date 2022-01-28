import React from "react";
import styled from "styled-components";
import {useMainContext} from "../context/main_context"
import {convertTime} from "../helper"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const Settings = () => {
  const { handleChange, isAutoPlay, standTime, breakTime,darkTheme,isNotify } = useMainContext();
  const standCurrentTime = convertTime(standTime);
  const breakCurrentTime = convertTime(breakTime);
  const {seconds: secondsStand, minutes: minutesStand} = standCurrentTime;
  const {seconds: secondsBreak, minutes: minutesBreak} = breakCurrentTime;
  return (
    <Wrapper>
      <div className="title">Work Duration : </div>
      <form className="form-container">
        {/*Minutes settings section */}
        <div className="form-control">
          <label htmlFor="minutes">Minutes: </label>
          <input
            id="minutes"
            name="standMinutes"
            type="text"
            value={minutesStand}
            min="5"
            max="59"
            onChange={handleChange}
          />
        </div>

        {/*Seconds settings section */}
        <div className="form-control">
          <label htmlFor="seconds">Seconds:</label>
          <input
            id="seconds"
            name="standSeconds"
            type="text"
            value={secondsStand}
            min="0"
            max="59"
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="title">Break Duration : </div>
      <form className="form-container">
        {/*Minutes settings break section */}
        <div className="form-control">
          <label htmlFor="breakMinutes"> Minutes: </label>
          <input
            id="breakMinutes"
            name="breakMinutes"
            type="text"
            value={minutesBreak}
            min="5"
            max="59"
            onChange={handleChange}
          />
        </div>

        {/*Seconds settings section */}
        <div className="form-control">
          <label htmlFor="breakSeconds">Seconds:</label>
          <input
            id="breakSeconds"
            name="breakSeconds"
            value={secondsBreak}
            type="text"
            min="0"
            max="59"
            onChange={handleChange}
          />
        </div>
      </form>

      <form className="form-control">
        {/*Auto Play */}
        <FormGroup>
          <FormControlLabel name="autoplay"
            control={<Switch checked={isAutoPlay} />} 
            label="Auto Play?" 
            onChange={handleChange}
            />
        </FormGroup>
        

        {/*Dark Theme */}
        <FormGroup>
          <FormControlLabel name="theme"
            control={<Switch checked={darkTheme} />} 
            label="Dark Theme?" 
            onChange={handleChange}
            />
        </FormGroup>

        {/*Notifications */}
        <FormGroup>
          <FormControlLabel name="notify"
            control={<Switch checked={isNotify} />} 
            label="Notifications?" 
            onChange={handleChange}
            />
        </FormGroup>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  max-width: 100%;

  .title {
    margin-bottom: 10px;
    margin-top: 15px;
    font-size: 25px;
  }

  .form-control {
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items:left;

    label {
      margin-right: 8px;
    }
  }

  input {
    text-align: center;
  }

  input:focus {
    outline: none;
    text-align: center;
  }

  .input-item {
    margin-top: 5px;
    margin-bottom: 15px;
  }

`;

export default Settings;
