'use client'
import styled from "styled-components";

const StyledScreen = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;

  & .main {
    width: 255px;
    position: absolute;
    top: 45%;
    transform: translate(-0%, -50%);
  }
  & .error {
    height: 200px;
    witdh: 135px;
    display: block;
    margin: auto;
  }
  & .text-wrapper {
    color: #353535;
    font-size: 26px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
  }
`;

export const NotLogin = () => {
  return (
    <StyledScreen>
      <div className="main">
        <img className="error" alt="errer.png" src="error.png"/>
        <div className="text-wrapper">로그인 후 이용해주세요</div>
      </div>
    </StyledScreen>
  );
};