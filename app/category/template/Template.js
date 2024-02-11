'use client'
import styled from "styled-components";

const StyledScreen = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 45px;

  & .title {
    color: #353535;
    font-size: 32px;
    font-weight: 680;
    padding-left: 20px;
    letter-spacing: 0;
    line-height: normal;
    padding-top: 15px;
    padding-bottom: 10px;
  }
  & .card-list {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-bottom: 100px;
  }
  & .card-text {
    width: 83%;
    padding-right: 8px;
  }
  & .card {
    width: 86%;
    background-color: rgb(26, 103, 195, 0.1);
    padding-left: 20px;
    border-radius: 10px;
    display: flex;
    margin-bottom: 18px;
    margin-left: auto;
    margin-right: auto;
  }
  & .card-Eng {
    color: #353535;
    width: 100%;
    font-weight: 560;
    font-size: 22px;
  }
  & .card-Kor {
    color: #424242;
    width: 100%;
    font-weight: 470;
    font-size: 20px;
    margin-top: -10px;

  }
  & .heart {
    width: 42px;
    height: 42px;
    padding-right: 13px;
    margin: auto;
  }
`

export default function Template() {
  return (
    <StyledScreen>
      <div className="title">문장구조</div>
      <div className="card-list">
        <div className="card">
          <div className="card-text">
            <p className="card-Eng">There are 2 people in this picture.</p>
            <p className="card-Kor">사진에 2명의 사람이 있습니다.</p>
          </div>
          <img className="heart" src="/heart-unclick.png"/>
        </div>
        <div className="card">
          <div className="card-text">
            <p className="card-Eng">There are 2 people in this picture.</p>
            <p className="card-Kor">사진에 2명의 사람이 있습니다.</p>
            </div>
          <img className="heart" src="/heart-unclick.png"/>
        </div>
      </div>
    </StyledScreen>
  );
}