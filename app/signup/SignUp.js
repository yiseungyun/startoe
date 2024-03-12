'use client'
import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .title {
    position: absolute;
    font-size: 33px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  .div-wrapper {
    position: relative;
    top: 20%;
  }
  .signup-form {
    position: relative;
    top: 12%;
  }
  .signup-input {
    border-color: #3681D9;
    opacity: 0.7;
    width: 270px;
    font-size: 22px;
    margin-top: 15px;
    padding-bottom: 10px;
    border-width: 0 0 1.5px;
  }
  .sign-button {
    position: absolute;
    margin-top: 50px;
  }
  .sign-background {
    background-color: #3681D9;
    border-radius: 15px;
    width: 275px;
    height: 53px;
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 12px;
  }
  .div {
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

export default function SignUp() {
  return (
    <Container>
      <div className="div-wrapper">
        <div className="title">회원가입</div>
        <div className="signup-form">
          <form action="">
              <input className="signup-input" type="text" placeholder="id"/>
              <br/>
              <input className="signup-input" type="email" placeholder="email"/>
              <br/>
              <input className="signup-input" type="password" placeholder="password"/>
          </form>
          <div className="sign-button">
            <div className="sign-background">
              <div className="div">회원가입</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}