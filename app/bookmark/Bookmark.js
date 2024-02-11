'use client'
import { useRouter } from "next/navigation";
import styled from "styled-components";

const StyledScreen = styled.div`
  margin-top: 30px;
  height: 100vh;
  width: 100%;

  & .bookmark-text {
    color: #353535;
    font-size: 32px;
    font-weight: 700;
    left: 30px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    padding-top: 32px;
  }
  & .bookmark-img {
    height: 100px;
    left: 125px;
    position: absolute;
    width: 135px;
  }
  & .card-list {
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    padding-top: 110px;
    padding-bottom: 80px;
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

export const Bookmark = () => {
  const router = useRouter()
  return (
    <StyledScreen>
      <div className="bookmark-text">북마크</div>
      <img className="bookmark-img" alt="Bookmark image" src="/bookmark.png"/>
      <div className="card-list">
        <div className="card">
          <div className="card-text">
            <p className="card-Eng">There are 2 people in this picture.</p>
            <p className="card-Kor">사진에 2명의 사람이 있습니다.</p>
          </div>
          <img className="heart" src="/heart-click.png"/>
        </div>
        <div className="card">
          <div className="card-text">
            <p className="card-Eng">There are 2 people in this picture.</p>
            <p className="card-Kor">사진에 2명의 사람이 있습니다.</p>
            </div>
          <img className="heart" src="/heart-click.png"/>
        </div>
      </div>
    </StyledScreen>
  );
};