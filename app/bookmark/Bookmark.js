'use client'
import styled from "styled-components";
import LearningCard from "./LearningCard";

const Container = styled.div`
  padding-top: 30px;
  height: 100vh;
  width: 100%;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);
  position: relative;
  background-color: #ffffff;

  .bookmark-text {
    color: #353535;
    font-size: 32px;
    font-weight: 700;
    padding-left: 30px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    padding-top: 32px;
  }
  .bookmark-img {
    height: 100px;
    padding-left: 125px;
    position: absolute;
    width: 135px;
  }
  .card-list {
    display: flex;
    flex-direction: column;
    padding-top: 110px;
    padding-bottom: 80px;
  }
`

export const Bookmark = () => {
  return (
    <Container>
      <div className="bookmark-text">북마크</div>
      <img className="bookmark-img" alt="Bookmark image" src="/bookmark.png"/>
      <div className="card-list">
        <LearningCard content={{kor: "테스트", eng: "test"}}/>
      </div>
    </Container>
  );
};