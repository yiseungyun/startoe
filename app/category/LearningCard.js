'use client'
import { styled } from "styled-components";

const Container = styled.div`
  width: 84%;
  position: relative;
  background-color: rgb(26, 103, 195, 0.1);
  border-radius: 10px;
  border-left: solid 24px ${({ $click }) => 
    $click === "true" ? 'rgba(66, 120, 183, 0.75)' : 'rgba(185, 185, 185, 0.6)'
  };
  display: flex;
  margin-bottom: 18px;
  margin-left: auto;
  margin-right: auto;

  .card-Eng {
    color: #353535;
    font-weight: 560;
    font-size: 21px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .card-Kor {
    color: #424242;
    font-weight: 470;
    font-size: 17.5px;
    margin-top: -11px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .bookmark {
    position: absolute;
    left: -24px;
    width: 24px;
    height: 100%;
  }
`

export default function LearningCard({ bookmark, content, onClick }) {
  return (
    <Container $click={bookmark.toString()}>
      <div className="card-text">
        <p className="card-Eng">{content.eng}</p>
        <p className="card-Kor">{content.kor}</p>
      </div>
      <div className="bookmark" onClick={()=> onClick()}/>
    </Container>
  );
}