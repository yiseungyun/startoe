'use client'
import { signOut } from "next-auth/react";
import { styled } from "styled-components";

const DivWrapperContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100%;

  & .welcomeDiv {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  & .welcomeText {
    color: #353535;
    font-size: 32px;
    font-weight: 700;
    white-space: nowrap;
    letter-spacing: 0;
    line-height: normal;
    position: flex;
    text-align: center;
    padding-top: 50px;
    padding-right: 10px;
  }
  & .welcomeImg {
    width: 60px;
    height: 90px;
    margin-top: 25px;
    position: flex;
  }
  & .sign {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 20%;
    margin-bottom: 20px;
  }
  & .sign-button {
    position: absolute;
  }
  & .sign-background {
    background-color: #3681D9;
    border-radius: 15px;
    width: 275px;
    height: 53px;
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 12px;
  }
  & .div {
    color: #ffffff;
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 14px;
    withe-space: nowrap;
  }
`

export default function Profile() {
  return (
    <DivWrapperContainer>
      <div className="welcomeDiv">
        <div className="welcomeText">회원님, 반가워요 !</div>
        <img className="welcomeImg" src="cat.png"/>
      </div>
      <div className="sign" onClick={()=>{
          signOut({
            redirect: true,
            callbackUrl: '/',
          })
        }}>
        <div className="sign-button">
          <div className="sign-background">
            <div className="div">로그아웃</div>
          </div>
        </div>
      </div>
    </DivWrapperContainer>
  );
}