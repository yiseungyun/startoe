'use client'
import { signIn } from "next-auth/react";
import { styled } from "styled-components";
import SocialLogin from "../SocialLogin";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: realtive;
  height: 100%;
  width: 100%;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);

  .title {
    height: 202px;
    position: absolute;
    top: 23%;
    width: 255px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .description {
    color: #353535;
    font-size: 23px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    white-space: nowrap;
  }
  .social {
    flex-direction: column;
    bottom: 30px;
    width: 100%;
    max-width: var(--pc-width-size);
    min-width: var(--min-width-size);
  }
  .sign {
    position: fixed;
    display: flex;
    bottom: 20px;
    justify-content: center;
    width: 100%;
  }
`

const Body = styled.div`
  text-align: center;
  position: absolute;
  max-width: var(--pc-width-size);
  width: 100%;

  .logo {
    position: absolute;
    width: 31vh;
    left: 3.5vh;
    padding-top: 25vh;
  }
`

export default function Login() {

  return (
    <Container>
      <Body>
        <img className="logo" src="./main-logo.png" alt="startoe main image"/>
      </Body>
      <div className="sign">
        <div className="social">
          <SocialLogin className="icon" text="구글로 로그인" type="google" onClick={()=>{
            signIn("google", {
              redirect: true,
              callbackUrl: '/',
            })
          }}/>
          <SocialLogin className="icon" text="카카오 로그인" type="kakao" onClick={()=>{
            signIn("kakao", {
              redirect: true,
              callbackUrl: '/',
            })
          }}/>
        </div>
      </div>
    </Container>
  );
}