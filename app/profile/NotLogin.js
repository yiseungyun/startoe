'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
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
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 58px;
    bottom: 170px;
    width: 100%;
    max-width: var(--pc-width-size);
    min-width: var(--min-width-size);
  }
  .icon {
    width: calc(100% - 60px);
    margin: auto;
    margin-bottom: 12px;
  }
  .sign {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
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

export default function NotLogin() {
  const router = useRouter();
  
  return (
    <Container>
      <div className="title">
        
      </div>
      <div className="sign">
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
        </div>
      </div>
    </Container>
  );
}