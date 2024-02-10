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
    width: 207px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .rocket {
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
  }
`;

export const Test = () => {
  return (
    <StyledScreen>
      <div className="main">
        <img className="rocket" alt="Rocket" src="rocket.png" />
        <p className="text-wrapper">
          아직 준비 중이에요
          <br />
          조금 이따 만나요!
        </p>
      </div>
    </StyledScreen>
  );
};