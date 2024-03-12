'use client'
import { styled } from "styled-components";

const Container = styled.div`
  background-color: var(--primary);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;
  margin-bottom: 12px;
  width: calc(100% - 55px);
  height: 53px;

  .div {
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(0, -48%);
    withe-space: nowrap;
  }
`

export default function Button({ text }) {
  return (
    <Container>
      <div className="div">{text}</div>
    </Container>
  );
}
