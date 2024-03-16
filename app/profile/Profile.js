'use client'
import { signOut } from "next-auth/react";
import { styled } from "styled-components";
import Button from "./Button";

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
    padding-left: 32px;
  }
  .welcome-text {
    color: #353535;
    font-size: 31px;
    font-weight: 700;
    white-space: nowrap;
    letter-spacing: 0;
    line-height: normal;
    position: flex;
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
    position: fixed;
    bottom: 145px;
    width: 100%;
  }
  .sign-button {
    position: absolute;
    width: 100%;
    max-width: var(--pc-width-size);
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
          <Button text="로그아웃"/>
        </div>
      </div>
    </Container>
  );
}