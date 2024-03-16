'use client'
import { useQueries } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getLearningOneData } from "../api/data";
import { bookmarkState } from "../recoil/bookmarkAtom";
import LearningCard from "./LearningCard";

const Container = styled.div`
  padding-top: 30px;
  width: 100%;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);
  position: relative;
  min-height: 100vh;
  background-color: #ffffff;

  .bookmark-text {
    color: #353535;
    font-size: 32px;
    font-weight: 700;
    padding-left: 30px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    padding-top: 32px;
  }
  .bookmark-img {
    height: 100px;
    padding-left: 125px;
    position: absolute;
    width: 135px;
  }
  .card-list {
    display: flex;
    flex-direction: column;
    padding-top: 110px;
    padding-bottom: 80px;
  }
`

export const Bookmark = () => {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);

  const getBookmark = useQueries({
    queries: bookmark.all.map((data) => {
      return {
        queryKey: ['bookmark', data],
        queryFn: () => getLearningOneData(data[0], String(Math.ceil(data[1]/10)), data[1]),
        staleTime: 10 * 60 * 1000,
      }
    }),
    combine: (results) => {
      return ({
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending)
      })
    }
  });

  const deleteBookmark = (category, id) => {
    let update = [...bookmark[category]]
    let update_all = [...bookmark.all]
    update = update.filter((item) => item !== id);
    update_all = update_all.filter((item) => !(item[0] === category && item[1] === id));
    setBookmark({
      ...bookmark,
      all: update_all,
      [category]: update
    });
  };
 
  return (
    <Container>
      <div className="bookmark-text">북마크</div>
      <img className="bookmark-img" alt="Bookmark image" src="/bookmark.png"/>
      <div className="card-list">
        {
          getBookmark.pending
          ? null
          : getBookmark.data.map((a, i) => {
            return (
              <LearningCard content={a} key={i+1} onClick={() => {
                deleteBookmark(a.category, a.id);
              }}/>
              )
            })
        }
      </div>
    </Container>
  );
};