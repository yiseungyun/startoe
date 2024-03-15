'use client'
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { bookmarkState } from "../recoil/StartoeAtom";
import LearningCard from "./LearningCard"

const Container = styled.div`
  width: 100%;
  padding-top: 45px;
  background-color: #ffffff;

  .title {
    color: #353535;
    font-size: 32px;
    font-weight: 680;
    padding-left: 26px;
    letter-spacing: 0;
    line-height: normal;
    padding-top: 15px;
    padding-bottom: 10px;
  }
  .card-list {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-bottom: 100px;
  }
  .no-content {
    height: calc(100vh - 267px);
  }
`

export default function Part({ title, data }) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const title_dict = {"문장구조": "template", "PART2": "part2", "PART3": "part3", "PART4": "part4", "PART5": "part5"};

  const handleBookmark = (id) => {
    const isBookmark = bookmark[title_dict[title]].indexOf(id);
    let update = [...bookmark[title_dict[title]]]
    let update_all = [...bookmark.all]
    if (isBookmark === -1) {
      update.push(id);
      update_all.push([title_dict[title], id]);
    } else {
      update = update.filter((item) => item !== id);
      update_all = update_all.filter((item) => !(item[0] === title_dict[title] && item[1] === id));
    }
    setBookmark({
      ...bookmark,
      all: update_all,
      [title_dict[title]]: update
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageBookmark = localStorage.getItem('bookmark');
      if (localStorageBookmark) {
        const localItem = JSON.parse(localStorageBookmark);
        setBookmark(localItem.bookmarkState);
      } else {
        setBookmark({ all: [], template: [], part2: [], part3: [], part4: [], part5: [] });
      }
    }
  }, [])

  return (
    <Container>
      <div className="title">{title}</div>
      <div className="card-list">
        {
          data ?
            data.map((a, i) => {
              return (
                <LearningCard content={a} key={i+1} isClick={bookmark[title_dict[title]].indexOf(i+1) !== -1} onClick={() => {
                  handleBookmark(a.id);
                }}/>
              )
            })
            : <div className="no-content"></div>
        }
      </div>
    </Container>
  );
}