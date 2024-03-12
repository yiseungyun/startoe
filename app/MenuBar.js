'use client'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  background-color: #ffffff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  max-width: var(--pc-width-size);
  min-width: var(--min-width-size);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 59px;
  top: 11px;
  width: 18%;

  .menuText {
    color: ${(props) => 
      props.text === "click"
        ? 'var(--primary)'
        : '#2e2e2e' };
    font-size: 14px;
    font-weight: ${(props) => 
      props.text === "click"
        ? '600'
        : '500' };
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    bottom: 9px;
  }

  .testImg {
    height: 32px;
    position: absolute;
    top: 11px;
    width: 32px;
  }
  .categoryImg {
    height: 31px;
    position: absolute;
    top: 12px;
    width: 33px;
  }
  .profileImg {
    height: 32px;
    position: absolute;
    top: 11px;
    width: 32px;
  }
  .bookmarkImg {
    height: 32px;
    position: absolute;
    top: 11px;
    width: 26px;
  }
  .homeImg {
    height: 33px;
    position: absolute;
    top: 11px;
    width: 32px;
  }
`;

export const MenuBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [click, setClick] = useState(['unclick', 'unclick', 'unclick', 'unclick', 'unclick']);

  useEffect(()=>{
    let update = ['unclick', 'unclick', 'unclick', 'unclick', 'unclick'];
    if (pathname === '/' || pathname === '/lecture') {
      update[0] = 'click';
    } else if (pathname.substring(0, 9) === '/category') {
      update[1] = 'click';
    } else if (pathname === '/bookmark') {
      update[2] = 'click';
    } else if (pathname === '/test') {
      update[3] = 'click';
    } else if (pathname === '/profile' || pathname === '/login' || pathname === '/signup') {
      update[4] = 'click';
    }
    setClick(update);
  }, [pathname]);

  return (
    <MenuWrapper>
      <ButtonWrapper onClick={()=>{   
        router.push('/');
        }}>
        <img className="homeImg" alt="home icon" src={`/home-${click[0]}.png`}/>
        <div className="menuText" text="click">홈</div>
      </ButtonWrapper>
      <ButtonWrapper onClick={()=>{
        router.push('/category');
        }}>
        <img className="categoryImg" alt="category icon" src={`/category-${click[1]}.png`}/>
        <div className="menuText" text={click[1]}>카테고리</div>
      </ButtonWrapper>
      <ButtonWrapper onClick={()=>{ 
        router.push('/bookmark');
        }}>
        <img className="bookmarkImg" alt="bookmark icon" src={`/bookmark-${click[2]}.png`}/>
        <div className="menuText" text={click[2]}>북마크</div>
      </ButtonWrapper>
      <ButtonWrapper onClick={()=>{ 
        router.push('/test');
        }}>
        <img className="testImg" alt="test icon" src={`/test-${click[3]}.png`}/>
        <div className="menuText" text={click[3]}>테스트</div>
      </ButtonWrapper>    
      <ButtonWrapper onClick={()=>{ 
        router.push('/profile');
         }}>
        <img className="profileImg" alt="profile icon" src={`/profile-${click[4]}.png`}/>
        <div className="menuText" text={click[4]}>프로필</div>
      </ButtonWrapper>
    </MenuWrapper>
  );
};