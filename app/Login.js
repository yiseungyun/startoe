'use client'
import { signIn } from "next-auth/react";
import { styled } from "styled-components";
import SocialLogin from "./SocialLogin";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
    bottom: 30px;
    justify-content: center;
    width: 100%;
  }
`

const Body = styled.div`
  text-align: center;
  position: absolute;
  top: 42%;
  transform: translate(0, -50%);
  .logo {
    width: 17vh;
    padding-right: 2.5vh;
  }
  .logo-title {
    font-size: 5.8vh;
    font-weight: 700;
    color: #353535;
    padding-top: 3vh;
    padding-bottom: 3vh;
  }
  .logo-text {
    font-size: 3vh;
    font-weight: 540;
    color: #6C9ACF;
  }
`

export default function Login() {

  return (
    <Container>
      <Body>
        <img className="logo" src="./main-logo.png" alt="startoe logo image"/>
        <div className="logo-title">스타토</div>
        <div className="logo-text">스마트하게<br/>토익스피킹 공부를 시작하다</div>
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