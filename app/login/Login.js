'use client'
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  
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
  .login-form {
    position: relative;
    top: 12%;
  }
  .login-input {
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
  .signup-div {
    position: absolute;
    width: 100%;
    margin-top: 132px;
  }
  .text1 {
    font-size: 19px;
    font-weight: 500;
    color: #353535;
    text-align: center;
  }
  .text2 {
    font-size: 21px;
    font-weight: 600;
    color: #1A67C3;
    margin-top: 5px;
    text-align: center;
  }
`

export default function Login() {
  const router = useRouter()

  return (
    <Container>
      <div className="div-wrapper">
        <div className="title">로그인</div>
        <div className="login-form">
          <form action="">
              <input className="login-input" type="text" placeholder="id"/>
              <br/>
              <input className="login-input" type="password" placeholder="password"/>
          </form>
          <div className="sign-button">
            <div className="sign-background">
              <div className="div">로그인</div>
            </div>
          </div>
          <div className="signup-div">
            <div className="signup-text">
              <div className="text1">아직 회원이 아니신가요?</div>
              <div className="text2" onClick={()=>{
                router.push('/signup')
              }}>회원가입하기</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}