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

  .menu-text {
    color: ${({ $text }) => 
      $text === "click"
        ? 'var(--primary)'
        : '#2e2e2e' };
    font-size: 14px;
    font-weight: ${({ $text }) => 
      $text === "click"
        ? '700'
        : '500' };
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    bottom: 9px;
  }

  .test-img {
    height: 30px;
    position: absolute;
    top: 11.5px;
    width: 30px;
  }
  .category-img {
    height: 29px;
    position: absolute;
    top: 12.5px;
    width: 31px;
  }
  .profile-img {
    height: 30px;
    position: absolute;
    top: 11px;
    width: 30px;
  }
  .bookmark-img {
    height: 30px;
    position: absolute;
    top: 12px;
    width: 24px;
  }
  .home-img {
    height: 32px;
    position: absolute;
    top: 11px;
    width: 30px;
  }
`;

export const MenuBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [click, setClick] = useState(['unclick', 'unclick', 'unclick', 'unclick', 'unclick']);

  useEffect(()=>{
    let update = ['unclick', 'unclick', 'unclick', 'unclick', 'unclick'];
    if (pathname === '/' || pathname === '/lecture' || pathname === '/information') {
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
      <ButtonWrapper $text={click[0]} onClick={()=>{   
        router.push('/');
        }}>
        <img className="home-img" alt="home icon" src={`/home-${click[0]}.png`}/>
        <div className="menu-text">홈</div>
      </ButtonWrapper>
      <ButtonWrapper $text={click[1]} onClick={()=>{
        router.push('/category');
        }}>
        <img className="category-img" alt="category icon" src={`/category-${click[1]}.png`}/>
        <div className="menu-text">카테고리</div>
      </ButtonWrapper>
      <ButtonWrapper $text={click[2]} onClick={()=>{ 
        router.push('/bookmark');
        }}>
        <img className="bookmark-img" alt="bookmark icon" src={`/bookmark-${click[2]}.png`}/>
        <div className="menu-text">북마크</div>
      </ButtonWrapper>
      <ButtonWrapper $text={click[3]} onClick={()=>{ 
        router.push('/test');
        }}>
        <img className="test-img" alt="test icon" src={`/test-${click[3]}.png`}/>
        <div className="menu-text">테스트</div>
      </ButtonWrapper>    
      <ButtonWrapper $text={click[4]} onClick={()=>{ 
        router.push('/profile');
         }}>
        <img className="profile-img" alt="profile icon" src={`/profile-${click[4]}.png`}/>
        <div className="menu-text">프로필</div>
      </ButtonWrapper>
    </MenuWrapper>
  );
};