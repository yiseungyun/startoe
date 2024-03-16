'use client'
import { styled } from "styled-components";

const Container = styled.div`
  background-color: ${(props) =>
    props.type === "kakao"
    ? '#FEE500'
    : '#F6F6F6'
    };
  border-radius: 12px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;
  margin-bottom: 12px;
  width: calc(100% - 55px);
  height: 45px;

  .icon {
    position: absolute;
    left: 23px;
    top: 50%;
    transform: translate(0, -50%);
    height: 23px;
    width: 23px;
  }
  .logo {
    width: 100%;
    height: 100%;
  }
  .div {
    width: calc(100% - 70px);
    color: #0A0A0A;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    right: 20px;
    text-align: center;
    top: 50%;
    transform: translate(0, -48%);
    withe-space: nowrap;
  }
`

export default function SocialLogin({ text, type, onClick }) {
  return (
    <Container type={type} onClick={() => { onClick(); }}>
      <div className="icon">
        <img className="logo" src={`${type}-icon.png`} alt="social icon"/>
      </div>
      <div className="div">{text}</div>
    </Container>
  );
}
