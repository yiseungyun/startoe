'use client'
import { styled } from "styled-components";

const Text = styled.div`
  color: #353535;
  font-size: 32px;
  font-weight: 700;
  padding-left: 7%;
  letter-spacing: 0;
  line-height: normal;
  padding-top: 49px;
  height: 80px;
`

export default function Top() {
  return (
    <Text>토익스피킹은?</Text>
  );
}