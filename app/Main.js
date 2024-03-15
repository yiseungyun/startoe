'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { bookmarkState } from "./recoil/bookmarkAtom";
import { userState } from "./recoil/userAtom";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Top = styled.div`
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
    height: 162px;
    right: -5px;
    position: absolute;
    top: 68px;
    width: 193px;
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
  const [, setUser] = useRecoilState(userState);
  const [, setBookmark] = useRecoilState(bookmarkState);
  useEffect(() => {
    if (!localStorage.getItem('bookmark')) {
      setBookmark({
        all: user_info.all,
        template: user_info.template,
        part2: user_info.part2,
        part3: user_info.part3,
        part4: user_info.part4,
        part5: user_info.part5
      });
    }
    if (!localStorage.getItem('userInfo')) {
      localStorage.setItem('userInfo', JSON.stringify(user_info.user_id))
      setUser(user_info.user_id);
    }
  }, [])

  return (
    <Container>
      <Top>
        <img className="main-character" alt="main character" src="/cat-lies-on-open-books.png" />
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
      </Top>
      <CardList>
        <div className="card">
          <div className="card-box">
            <img className="education-img"
              alt="education image"
              src="/books-graduation-hat-and-diploma-scroll.png"
            />
            <div className="card-text">토익스피킹<br/>알아보기</div>
          </div>
        </div>
        <div className="card" onClick={()=>{ window.open('https://www.toeicswt.co.kr/receipt/receiptStep1.php') }}>
          <div className="card-box">
            <div className="card-text">토익스피킹<br/>접수하기</div>
            <img className="test-img" alt="test image" src="/Piggy-bank-with-coins.png" />
          </div>
        </div>
        <div className="card" onClick={()=>{ router.push('/lecture') }}>
          <div className="card-box">
            <img className="lecture-img"
              alt="lecture image"
              src="young-woman-giving-an-online-lesson.png"
            />
            <div className="card-text">토익스피킹<br/>강의 듣기</div>
          </div>
        </div>
      </CardList>
    </Container>
  );
};
