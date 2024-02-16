'use client'
import styled from "styled-components";

const StyledScreen = styled.div`
  margin-top: 45px;
  max-width: var(--pc-width-size);
  width: 100%;
`

const TitleText = styled.div`
  color: #353535;
  font-size: 32px;
  font-weight: 700;
  padding-left: 31.5px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  padding-top: 17px;
`

const LectureImage = styled.img`
  height: 101px;
  padding-left: 226px;
  position: absolute;
  witdh: 123px;
`

const LectureList = styled.div`
  position: absolute;
  top: 132px;
  width: 90%;
  padding-bottom: 80px;
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
  width: 92%;
  margin-bottom: 20px;
  align-items: center;
  margin-left: 4%;
`

const Profile = styled.img`
  background-color: #ffffff;
  border-radius: 50%;
  height: 65%;
  margin-top: 2%;
`

const LectureTitle = styled.div`
  color: #353535;
  font-size: 1.35em;
  padding-top: 0.35em;
  text-align: center;
  font-weight: 600;
`

export const Lecture = () => {
  return (
    <StyledScreen>
      <TitleText>토익스피킹 강의</TitleText>
      <LectureImage alt="lecture image" src="lecture.png"/>
      <LectureList>
        <LectureItem onClick={() => {window.open("https://www.youtube.com/@JAKE_TOS")}}>
          <Profile src="https://yt3.googleusercontent.com/dATZzaPWJUcwPa4NUynTFLaq_ID8OblZrAUllHpWkRnFAl0j-DwOQDXYYWXDtrgZwl43EXQxOQ=s176-c-k-c0x00ffffff-no-rj"/>
          <LectureTitle>제이크 토익스피킹</LectureTitle>
        </LectureItem>
        <LectureItem onClick={() => {window.open("https://www.youtube.com/@rabbit_jennycha")}}>
          <Profile src="https://yt3.googleusercontent.com/98ibbZy9o5GQX7ko63mrH4NBV8buGtV5fgPHwfuWlejNaefDKN4S8x6AKOds0mNt6YiESzsdWWQ=s176-c-k-c0x00ffffff-no-rj"/>
          <LectureTitle>시계토끼제니쌤</LectureTitle>
        </LectureItem>
        <LectureItem onClick={() => {window.open("https://www.youtube.com/@sunnyspeaking")}}>
          <Profile src="https://yt3.googleusercontent.com/GRcyoiWFy08xSDd06lZh-xaHnS70MIOMtOyNVRoh_PZvqBXvdd9cSM1AP9QktLKs_kXXliNT=s176-c-k-c0x00ffffff-no-rj"/>
          <LectureTitle>써니토익스피킹</LectureTitle>
        </LectureItem>
      </LectureList>
    </StyledScreen>
  );
};