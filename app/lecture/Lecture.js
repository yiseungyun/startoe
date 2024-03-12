'use client'
import styled from "styled-components";

const Container = styled.div`
  padding-top: 45px;
  max-width: var(--pc-width-size);
  width: 100%;
  position: relative;
  background-color: #ffffff;
  height: 100vh;

  .title-text {
    color: #353535;
    font-size: 32px;
    font-weight: 700;
    padding-left: 31.5px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    padding-top: 17px;
  }
  .lecture-img {
    height: 101px;
    padding-left: 226px;
    position: absolute;
    witdh: 123px;
  }
`

const LectureList = styled.div`
  position: absolute;
  top: 135px;
  padding-bottom: 80px;
  width: 100%;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);
`

const LectureItem = styled.div`
  background-color: #1a67c31a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 190px;
  width: calc(100% - 50px);
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  .lecture-title {
    color: #353535;
    font-size: 1.35em;
    padding-top: 0.35em;
    text-align: center;
    font-weight: 600;
  }
  .profile {
    background-color: #ffffff;
    border-radius: 50%;
    height: 65%;
    margin-top: 8px;
  }
`

export const Lecture = () => {
  return (
    <Container>
      <div className="title-text">토익스피킹 강의</div>
      <img className="lecture-img" alt="lecture image" src="lecture.png"/>
      <LectureList>
        <LectureItem onClick={() => {window.open("https://www.youtube.com/@JAKE_TOS")}}>
          <img className="profile" src="https://yt3.googleusercontent.com/dATZzaPWJUcwPa4NUynTFLaq_ID8OblZrAUllHpWkRnFAl0j-DwOQDXYYWXDtrgZwl43EXQxOQ=s176-c-k-c0x00ffffff-no-rj"/>
          <div className="lecture-title">제이크 토익스피킹</div>
        </LectureItem>
        <LectureItem onClick={() => {window.open("https://www.youtube.com/@rabbit_jennycha")}}>
          <img className="profile" src="https://yt3.googleusercontent.com/98ibbZy9o5GQX7ko63mrH4NBV8buGtV5fgPHwfuWlejNaefDKN4S8x6AKOds0mNt6YiESzsdWWQ=s176-c-k-c0x00ffffff-no-rj"/>
          <div className="lecture-title">시계토끼제니쌤</div>
        </LectureItem>
        <LectureItem onClick={() => {window.open("https://www.youtube.com/@sunnyspeaking")}}>
          <img className="profile" src="https://yt3.googleusercontent.com/GRcyoiWFy08xSDd06lZh-xaHnS70MIOMtOyNVRoh_PZvqBXvdd9cSM1AP9QktLKs_kXXliNT=s176-c-k-c0x00ffffff-no-rj"/>
          <div className="lecture-title">써니토익스피킹</div>
        </LectureItem>
      </LectureList>
    </Container>
  );
};