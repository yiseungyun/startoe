'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { bookmarkState } from "../recoil/bookmarkAtom";
import MainLogo from "./MainLogo";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const CardList = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);
  position: absolute;
  margin-top: 300px;
  padding-bottom: 80px;

  .card {
    position: relative;
    width: 100%;
  }
  .card-box {
    background-color: #1a67c31a;
    border-radius: 10px;
    height: 130px;
    position: relative;
    margin: auto;
    width: calc(100% - 60px);
    margin-bottom: 25px;
  }
  .education-img {
    height: 126px;
    left: 12%;
    position: absolute;
    top: 4px;
    width: 136px;
  }
  .test-img {
    height: 101px;
    left: 12%;
    position: absolute;
    top: 20px;
    width: 128px;
  }
  .lecture-img {
    height: 106px;
    left: 10%;
    position: absolute;
    top: 16px;
    width: 127px;
  }
  .card-text {
    color: #353535;
    font-size: 1.5rem;
    font-weight: 600;
    right: 9.3%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: right;
    top: 36px;
  }
`;

export const Main = ({ user_info }) => {
  const router = useRouter()
  const [, setBookmark] = useRecoilState(bookmarkState);
  useEffect(() => {
    if (!localStorage.getItem('bookmark')) {
      const bookmarkState = {
        all: user_info.all,
        template: user_info.template,
        part2: user_info.part2,
        part3: user_info.part3,
        part4: user_info.part4,
        part5: user_info.part5
      }
      setBookmark(bookmarkState);
    }
    if (!localStorage.getItem('userInfo')) {
      localStorage.setItem('userInfo', JSON.stringify(user_info.user_id))
    }
  }, [])

  return (
    <Container>
      <MainLogo/>
      <CardList>
        <div className="card">
          <div className="card-box">
            <img className="education-img"
              alt="information page icon"
              src="/ts-information.png"
            />
            <div className="card-text" onClick={()=>{ router.push('/information') }}>토익스피킹<br/>알아보기</div>
          </div>
        </div>
        <div className="card" onClick={()=>{ window.open('https://www.toeicswt.co.kr/receipt/receiptStep1.php') }}>
          <div className="card-box">
            <div className="card-text">토익스피킹<br/>접수하기</div>
            <img className="test-img" alt="test image" src="/ts-register.png" />
          </div>
        </div>
        <div className="card" onClick={()=>{ router.push('/lecture') }}>
          <div className="card-box">
            <img className="lecture-img"
              alt="lecture image"
              src="/ts-lecture.png"
            />
            <div className="card-text">토익스피킹<br/>강의 듣기</div>
          </div>
        </div>
      </CardList>
    </Container>
  );
};
