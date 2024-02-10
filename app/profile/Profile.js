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

  & .welcomeDiv {
    display: flex;
  }
  & .welcomeText {
    color: #353535;
    font-size: 32px;
    font-weight: 700;
    left: 31.5px;
    display: inline-block;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    padding-top: 35px;
  }
  & .welcomeImg {
    width: 60px;
    height: 90px;
    margin-top: 10px;
    position: absolute;
    left: 270px;
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