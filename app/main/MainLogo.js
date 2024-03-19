import Image from "next/image";
import { styled } from "styled-components";

const Container = styled.div`
  height: 240px;
  position: absolute;
  top: 43px;
  width: calc(100% - 50px);
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);

  .main-div {
    height: 195px;
    position: absolute;
    left: 4%;
    top: 5px;
    width: 220px;
  }
  .main-character {
    right: -5px;
    position: absolute;
    top: 68px;
  }
  .title {
    height: 61px;
    position: absolute;
    width: 152px;
  }
  .title-text {
    color: var(--main-text);
    font-size: 50px;
    font-weight: 700;
    left: 6px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 2px;
  }
  .underline {
    background-color: #f4d5db;
    height: 15px;
    position: absolute;
    top: 44px;
    width: 141px;
  }
  .description {
    height: 120px;
    left: 6px;
    position: absolute;
    top: 75px;
    width: 220px;
  }
  .description-text {
    color: #101010;
    font-size: 29px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 6px;
  }
  .span {
    color: var(--primary);
  }
`

export default function MainLogo() {
  return (
    <Container>
      <Image className="main-character" width='193' height='162' alt={"main character"} priority={true} src={"/main-character.png"}/>
      <div className="main-div">
        <div className="description">
          <div className="description-text">스마트하게</div>
          <div className="description-text" style={{top: '48px'}}><span className="span">토익스피킹</span> 공부를</div>
          <div className="description-text" style={{top: '90px'}}>시작하다</div>
        </div>
        <div className="title">
          <div className="underline"/>
          <div className="title-text">스타토</div>
        </div>
      </div>
  </Container>
  );
}
