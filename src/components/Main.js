import React from "react";
import styled from "styled-components";
import {
  FaPlayCircle,
  FaStopCircle,
  FaUndoAlt,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useMainContext } from "../context/main_context";
import { convertTime, formatTime } from "../helper";

const Main = () => {
  const {
    isPlay,
    handleClickPlayButton,
    time,
    handleClickReset,
    handleClickChangeSection,
  } = useMainContext();

  const { minutes, seconds } = convertTime(time);
  
  
  return (
    <Wrapper>
      <div className="time">
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>

      <div className="button-container">
        {isPlay ? (
          <FaStopCircle className="btn" onClick={handleClickPlayButton} />
        ) : (
          <FaPlayCircle className="btn" onClick={handleClickPlayButton} />
        )}

        <FaUndoAlt className="btn" onClick={handleClickReset} />

        <FaAngleDoubleRight
          className="btn"
          onClick={handleClickChangeSection}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .time {
    font-size: 7.5rem;
    padding: 25px;
  }

  .button-container {
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    max-width: 180px;
    width: 100%;
  }
  .btn {
    font-size: 33px;
    transition: all 0.5s;
    cursor: pointer;
  }
  .btn:hover {
    color: blue;
  }
`;

export default Main;
