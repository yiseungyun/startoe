'use client'
import { useRouter } from "next/navigation";
import styled from "styled-components";

const StyledScreen = styled.div`
  margin-top: 30px;
`

const TitleText = styled.div`
  color: #353535;
  font-size: 32px;
  font-weight: 700;
  left: 31.5px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  padding-top: 32px;
`

const LearningImage = styled.img`
  height: 106px;
  left: 237px;
  position: absolute;
  top: 28px;
  width: 123px;
`

const PartList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 165px;
  left: 24px;
  width: 87%;
  padding-bottom: 80px;
`

const PartItem = styled.div`
  margin-bottom: 25px;
  .background {
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 2.3px 0.7px rgb(0, 0, 0, 0.1);
    height: 112px;
    padding: 0 -10%;
  }
  & .cardText {
    width: 80%;
    padding-left: 3%
    padding-right: 15%;
  }
  & .cardTitle {
    color: #444444;
    font-size: 25px;
    font-weight: 600;
    line-height: normal;
    padding-left: 12%;
    padding-top: 5px;
    white-space: nowrap;
  }
  & .cardDescription {
    color: #868686;
    font-size: 19px;
    font-weight: 550;
    margin-top: 1%;
    padding-left: 12%;
    line-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  & .forward {
    height: 47px;
    width: 43px;
    padding-left: 8px;
    opacity: 0.9;
  }
`

export const Category = () => {
  const router = useRouter()
  return (
    <StyledScreen>
      <TitleText>파트별 학습하기</TitleText>
      <LearningImage alt="Learning image" src="learning.png"/>
      <PartList>
        <PartItem onClick={()=>{ router.push('/category/template') }}>
          <div className="background">
          <div className="cardText">
            <div className="cardTitle">문장구조 학습하기</div>
            <div className="cardDescription">자주 나오는 문장구조 학습하기</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"/>
          </div>
        </PartItem>
        <PartItem onClick={()=>{ router.push('/category/part2') }}>
          <div className="background">
          <div className="cardText">
            <div className="cardTitle">PART2 학습하기</div>
            <div className="cardDescription">사진 묘사</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"/>
          </div>
        </PartItem>
        <PartItem onClick={()=>{ router.push('/category/part3') }}>
          <div className="background">
          <div className="cardText">
            <div className="cardTitle">PART3 학습하기</div>
            <div className="cardDescription">듣고 질문에 답하기</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"></img>
          </div>
        </PartItem>
        <PartItem onClick={()=>{ router.push('/category/part4') }}>
          <div className="background">
          <div className="cardText">
            <div className="cardTitle">PART4 학습하기</div>
            <div className="cardDescription">정보를 사용해 답하기</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"></img>
          </div>
        </PartItem>
        <PartItem onClick={()=>{ router.push('/category/part5') }}>
          <div className="background">
          <div className="cardText">
            <div className="cardTitle">PART5 학습하기</div>
            <div className="cardDescription">의견 제시하기</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"></img>
          </div>
        </PartItem>
      </PartList>
    </StyledScreen>
  );
};