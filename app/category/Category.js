'use client'
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 30px;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);
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
    padding-top: 32px;
  }
  .category-img {
    height: 106px;
    padding-left: 232px;
    top: 28px;
    width: 123px;
  }
`

const PartList = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 170px;
  padding-bottom: 80px;
  width: 100%;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);
`

const PartItem = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: center;

  .background {
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 2.3px 0.7px rgb(0, 0, 0, 0.1);
    height: 112px;
    position: relative;
    width: calc(100% - 50px);
  }
  .card-text {
    width: 80%;
    padding-left: 3%
    padding-right: 15%;
  }
  .card-title {
    color: #444444;
    font-size: 25px;
    font-weight: 600;
    line-height: normal;
    padding-left: 12%;
    padding-top: 5px;
    white-space: nowrap;
  }
  .card-description {
    color: #868686;
    font-size: 19px;
    font-weight: 550;
    margin-top: 1%;
    padding-left: 12%;
    line-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  .forward {
    width: 100%;
    position: absolute;
    height: 41px;
    width: 33px;
    opacity: 0.9;
    right: 4%;
  }
`

export const Category = () => {
  const router = useRouter()
  return (
    <Container>
      <div className="title-text">파트별 학습하기</div>
      <img className="category-img" alt="Learning image" src="learning.png"/>
      <PartList>
        <PartItem onClick={()=>{ router.push('/category/template') }}>
          <div className="background">
          <div className="card-text">
            <div className="card-title">문장구조 학습하기</div>
            <div className="card-description">자주 나오는 문장구조 학습하기</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"/>
          </div>
        </PartItem>
        <PartItem onClick={()=>{ router.push('/category/part2') }}>
          <div className="background">
          <div className="card-text">
            <div className="card-title">PART2 학습하기</div>
            <div className="card-description">사진 묘사</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"/>
          </div>
        </PartItem>
        <PartItem onClick={()=>{ router.push('/category/part3') }}>
          <div className="background">
          <div className="card-text">
            <div className="card-title">PART3 학습하기</div>
            <div className="card-description">듣고 질문에 답하기</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"></img>
          </div>
        </PartItem>
        <PartItem onClick={()=>{ router.push('/category/part4') }}>
          <div className="background">
          <div className="card-text">
            <div className="card-title">PART4 학습하기</div>
            <div className="card-description">정보를 사용해 답하기</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"></img>
          </div>
        </PartItem>
        <PartItem onClick={()=>{ router.push('/category/part5') }}>
          <div className="background">
          <div className="card-text">
            <div className="card-title">PART5 학습하기</div>
            <div className="card-description">의견 제시하기</div>
          </div>
          <img className="forward" alt="forward icon" src="forward.png"></img>
          </div>
        </PartItem>
      </PartList>
    </Container>
  );
};