'use client'
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { postBookmarkData } from "../api/bookmark";
import { bookmarkState } from "../recoil/bookmarkAtom";
import LearningCard from "./LearningCard"

const Container = styled.div`
  width: 100%;
  padding-top: 45px;

  .title {
    color: #353535;
    font-size: 32px;
    font-weight: 680;
    padding-left: 6%;
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
  const [user_id, setUser_id] = useState(null);

  const handleBookmark = (id) => {
    const isBookmark = bookmark[title_dict[title]].indexOf(id);
    let update = [...bookmark[title_dict[title]]]
    let update_all = [...bookmark.all]
    if (isBookmark === -1) {
      update = [id, ...update];
      update_all = [[title_dict[title], id], ...update_all];
    } else {
      update = update.filter((item) => item !== id);
      update_all = update_all.filter((item) => !(item[0] === title_dict[title] && item[1] === id));
    }
    setBookmark({
      ...bookmark,
      all: update_all,
      [title_dict[title]]: update
    });
  };

  useEffect(() => {
    setUser_id(localStorage.getItem('userInfo'));
  }, [typeof window])

  const mutation = useMutation({
    mutationFn: () => postBookmarkData( { bookmark, user_id }), 
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.log(error);
    }
  })

  useEffect(() => {
    return () => mutation.mutate();
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