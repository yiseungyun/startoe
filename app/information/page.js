'use client'
import { styled } from "styled-components";
import InfoCard from "./InfoCard";
import Top from "./Top";

const Container = styled.div`
  max-width: var(--pc-width-size); 
  width: 100%;
`
const Cardlist = styled.div`
  padding-bottom: 90px;
`

export default function information() {

  return (
    <Container>
      <Top/>
      <Cardlist>
        <InfoCard 
          title="시험 일정은?"
          text="🕔 매주 주말마다 시험이 있어요
            \n가끔 평일에도 시험 일정이 있어요"/>
        <InfoCard
          title="시험 유형은?"
          text="📝 11문제가 출제돼요
            \nQ1-2 문장 읽기
            \nQ3-4 사진 묘사
            \nQ5-7 듣고 질문에 답하기
            \nQ8-10 제공된 정보를 사용해 질문에 답하기
            \nQ11 의견 제시하기"/>
        <InfoCard
          title="시험 성적은?"
          text="💌 약 5일 뒤에 발표돼요
            \nAdvanced: AL, AM, AH
            \nIntermediate: IL, IM1, IM2, IM3, IH
            \nNovice: NL, NM, NH
            "/>
      </Cardlist>
    </Container>
  );
}
