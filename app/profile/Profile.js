'use client'
import { signOut } from "next-auth/react";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100%;

  .welcome-box {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .welcome-text {
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
  .welcome-img {
    width: 60px;
    height: 90px;
    margin-top: 25px;
    position: flex;
  }
  .sign {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 20%;
    margin-bottom: 20px;
    width: 100%;
  }
  .sign-button {
    position: absolute;
    width: 100%;
  }
  .sign-background {
    background-color: var(--primary);
    border-radius: 12px;
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: center;
    position: relative;
    margin: auto;
    margin-bottom: 12px;
    width: calc(100% - 60px);
  }
  .div {
    color: #ffffff;
    font-size: 21px;
    font-weight: 500;
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
    <Container>
      <div className="welcome-box">
        <div className="welcome-text">회원님, 반가워요 !</div>
        <img className="welcome-img" src="cat.png"/>
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
    </Container>
  );
}