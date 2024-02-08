'use client'
import styled from "styled-components";

const StyledScreen = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .main {
    height: 260px;
    width: 255px;
    position: absolute;
    top: 26%;
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

export const Bookmark = () => {
  return (
    <>
      {/* 로그인한 경우 */}
      {/* 로그인하지 않은 경우 */}
      <StyledScreen>
        <div className="main">
          <img className="error" alt="errer.png" src="error.png"/>
          <div className="text-wrapper">로그인 후 이용해주세요</div>
        </div>
      </StyledScreen>
    </>
  );
};