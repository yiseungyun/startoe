'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const DivWrapperContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .title {
    height: 202px;
    position: absolute;
    top: 20%;
    width: 255px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  & .description {
    color: #353535;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 171px;
    white-space: nowrap;
  }
  & .image {
    height: 144px;
    left: 52px;
    position: absolute;
    top: 0;
    width: 150px;
  }
  & .social {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 58px;
    bottom: 18%;
    width: 234px;
  }
  & .icon {
    height: 50px;
    width: 50px;
  }
  & .sign {
    display: flex;
    justify-content: center;
  }
  & .sign-button {
    position: absolute;
    bottom: 27%;
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

export default function NotLogin() {
  const router = useRouter();
  return (
    <DivWrapperContainer>
      <div className="title">
        <div className="description">로그인 후 이용해주세요</div>
        <img className="image" src="book-and-bulb.png"/>
      </div>
      <div className="sign">
        <div className="sign-button">
          <div className="sign-background" onClick={()=>{
            router.push('/login')
          }}>
            <div className="div">로그인</div>
          </div>
        </div>
        <div className="social">
          <img className="icon" src="google.png" onClick={()=>{
            signIn("google", {
              redirect: true,
              callbackUrl: '/',
            })
          }}/>
          <img className="icon" src="kakao.png" onClick={()=>{
            signIn("kakao", {
              redirect: true,
              callbackUrl: '/',
            })
          }}/>
          <img className="icon" src="github.png"/>
        </div>
      </div>
    </DivWrapperContainer>
  );
}