'use client'
import { useRouter } from "next/navigation";
import styled from "styled-components";

const ScreenWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const DivWrapper = styled.div`
  background-color: #ffffff;
  height: 852px;
`;

const LectureWrapper = styled.div`
  height: 130px;
  left: 34px;
  position: absolute;
  top: 610px;
  width: 90%;
`;

const OverlapGroupWrapper = styled.div`
  background-color: #1a67c31a;
  border-radius: 10px;
  height: 130px;
  position: relative;
  width: 92%;
`;

const YoungWomanGiving = styled.img`
  height: 106px;
  left: 10%;
  position: absolute;
  top: 16px;
  width: 127px;
`;

const TextWrapper = styled.div`
  color: #353535;
  font-size: 1.5rem;
  font-weight: 600;
  right: 9.3%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: right;
  top: 36px;
`;

const ApplyTestWrapper = styled.div`
  height: 130px;
  left: 34px;
  position: absolute;
  top: 455px;
  width: 90%;
`;

const PiggyBankWith = styled.img`
  height: 101px;
  left: 12%;
  position: absolute;
  top: 20px;
  width: 128px;
`;

const LearningDayWrapper = styled.div`
  height: 130px;
  left: 34px;
  position: absolute;
  top: 300px;
  width: 90%;
`;

const BooksGraduationHat = styled.img`
  height: 126px;
  left: 12%;
  position: absolute;
  top: 4px;
  width: 136px;
`;

const OverlapWrapper = styled.div`
  height: 240px;
  left: 32px;
  position: absolute;
  top: 43px;
  width: 90%;
`;

const CatLiesOnOpen = styled.img`
  height: 162px;
  right: 0%;
  position: absolute;
  top: 68px;
  width: 193px;
`;

const MainWrapper = styled.div`
  height: 195px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 220px;
`;

const DescriptionWrapper = styled.div`
  height: 120px;
  left: 6px;
  position: absolute;
  top: 75px;
  width: 220px;
`;

const MainTextWrapper = styled.div`
  color: #101010;
  font-size: 29px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 6px;
`;

const Span = styled.span`
  color: #1c6ecf;
`;

const TitleWrapper = styled.div`
  height: 61px;
  left: 0;
  position: absolute;
  top: 0;
  width: 152px;
`;

const OverlapGroup2Wrapper = styled.div`
  height: 61px;
  position: relative;
  width: 150px;
`;

const UnderLine = styled.div`
  background-color: #f4d5db;
  height: 15px;
  left: 0;
  position: absolute;
  top: 44px;
  width: 141px;
`;

const Title = styled.div`
  color: #1967c2;
  font-size: 50px;
  font-weight: 700;
  left: 6px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 2px;
`;

export const Main = () => {
  const router = useRouter()
  return (
    <>
    <ScreenWrapper>
      <DivWrapper>
        <LectureWrapper onClick={()=>{ router.push('/lecture') }}>
          <OverlapGroupWrapper>
            <YoungWomanGiving
              alt="Young woman giving"
              src="young-woman-giving-an-online-lesson.png"
            />
            <TextWrapper>
              토익스피킹
              <br />
              강의 듣기
            </TextWrapper>
          </OverlapGroupWrapper>
        </LectureWrapper>
        <ApplyTestWrapper onClick={()=>{ window.open('https://www.toeicswt.co.kr/receipt/receiptStep1.php') }}>
          <OverlapGroupWrapper>
            <TextWrapper>
              토익스피킹
              <br />
              접수하기
            </TextWrapper>
            <PiggyBankWith alt="Piggy bank with" src="/piggy-bank-with-coins.png" />
          </OverlapGroupWrapper>
        </ApplyTestWrapper>
        <LearningDayWrapper>
          <OverlapGroupWrapper>
            <BooksGraduationHat
              alt="Books graduation hat"
              src="/books-graduation-hat-and-diploma-scroll.png"
            />
            <TextWrapper>
              연속학습
              <br />
              0일차
            </TextWrapper>
          </OverlapGroupWrapper>
        </LearningDayWrapper>
      </DivWrapper>
      <OverlapWrapper>
        <CatLiesOnOpen alt="Cat lies on open" src="/cat-lies-on-open-books.png" />
        <MainWrapper>
          <DescriptionWrapper>
            <MainTextWrapper style={{top: '90px'}}>시작하다</MainTextWrapper>
            <MainTextWrapper style={{top: '48px'}}><Span>토익스피킹</Span> 공부를</MainTextWrapper>
            <MainTextWrapper>스마트하게</MainTextWrapper>
          </DescriptionWrapper>
          <TitleWrapper>
            <OverlapGroup2Wrapper>
              <UnderLine/>
              <Title>스타토</Title>
            </OverlapGroup2Wrapper>
          </TitleWrapper>
        </MainWrapper>
      </OverlapWrapper>
    </ScreenWrapper>
    </>
  );
};
