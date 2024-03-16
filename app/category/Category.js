'use client'
import styled from "styled-components";
import PartItem from "./PartItem";

const Container = styled.div`
  padding-top: 30px;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);
  position: relative;

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
  padding-top: 35px;
  padding-bottom: 80px;
  width: 100%;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);
`

export const Category = () => {
  return (
    <Container>
      <div className="title-text">파트별 학습하기</div>
      <img className="category-img" alt="Learning image" src="learning.png"/>
      <PartList>
        <PartItem path="/category/template" title="문장구조 학습하기" description="자주 나오는 문장구조 학습하기"/>
        <PartItem path="/category/part2" title="PART2 학습하기" description="사진 묘사"/>
        <PartItem path="/category/part3" title="PART3 학습하기" description="듣고 질문에 답하기"/>
        <PartItem path="/category/part4" title="PART4 학습하기" description="정보를 사용해 답하기"/>
        <PartItem path="/category/part5" title="PART5 학습하기" description="의견 제시하기"/>
      </PartList>
    </Container>
  );
};