import React from 'react'
import styled from 'styled-components'
import tomato from "../assets/tomato.png"
import { BsFillAlarmFill, BsInfoCircleFill } from "react-icons/bs";
import { RiSettings2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
      <Wrapper>
        <img src={tomato} alt="tomato" />
        <ul>
          <li>
            <Link to="/">
              <BsFillAlarmFill /> <span> Timer</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <RiSettings2Fill />
              <span> Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <BsInfoCircleFill />
              <span> About Me</span>
            </Link>
          </li>
        </ul>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  max-width: 15vw;
  width: 100%;
  height: 100vh;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  img {
    object-fit: contain;
    width: 100%;
    max-width: 100px;
    margin-bottom: 50px;
  }

  ul :not(li:last-child) {
    margin-bottom: 35px;
  }

  li {
    font-size: 1.2rem;
    font-weight: 600;
    color: hsla(360, 100%, 57%, 1);
    transition: transform 0.8s;
    svg {
      margin-bottom: 0px !important;
    }
  }

  a {
    color: hsla(360, 100%, 57%, 1);
    text-decoration: none;
  }

  li:hover {
    transform: scale(1.2);

    cursor: pointer;
  }
  a:hover {
    color: green;
  }
`;

export default Sidebar
