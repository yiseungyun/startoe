'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 59px;
    top: 11px;
    width: 18%;
  }

  .test-img {
    position: absolute;
    top: 11.5px;
  }
  .category-img {
    position: absolute;
    top: 12.5px;
  }
  .profile-img {
    position: absolute;
    top: 11px;
  }
  .bookmark-img {
    position: absolute;
    top: 12px;
  }
  .home-img {
    position: absolute;
    top: 11px;
  }
`;

const Text = styled.div`
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
`

export const MenuBar = () => {
  const pathname = usePathname();
  const [click, setClick] = useState([
    pathname === '/' || pathname === '/lecture' || pathname === '/information'
    ? 'click' : 'unclick', 
    pathname.substring(0, 9) === '/category'
    ? 'click' : 'unclick', 
    pathname === '/bookmark'
    ? 'click' : 'unclick', 
    pathname === '/test'
    ? 'click' : 'unclick', 
    pathname === '/profile' || pathname === '/login' || pathname === '/signup'
    ? 'click' : 'unclick'
  ]);

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
      <Link className="button" href={'/'}>
        <Image className="home-img" width='30' height='32' alt={"home icon"} 
          priority={true} loading='eager' src={`/home-${click[0]}.png`}/>
        <Text className="menu-text" $text={click[0]}>홈</Text>
      </Link>
      <Link className="button" href={'/category'}>
        <Image className="category-img" width='31' height='29' alt={"category icon"}
          priority={true} loading='eager' src={`/category-${click[1]}.png`}/>
        <Text className="menu-text" $text={click[1]}>카테고리</Text>
      </Link>
      <Link className="button" href={'/bookmark'}>
        <Image className="bookmark-img" width='24' height='30' alt={"bookmark icon"} 
          priority={true} loading='eager' src={`/bookmark-${click[2]}.png`}/>
        <Text className="menu-text" $text={click[2]}>북마크</Text>
      </Link>
      <Link className="button" href={'/test'}>
        <Image className="test-img" width='30' height='30' alt={"test icon"} 
          priority={true} loading='eager' src={`/test-${click[3]}.png`}/>
        <Text className="menu-text" $text={click[3]}>테스트</Text>
      </Link>
      <Link className="button" href={'/profile'}>
        <Image className="profile-img" width='30' height='30' alt={"profile icon"}
          priority={true} loading='eager' src={`/profile-${click[4]}.png`}/>
        <Text className="menu-text" $text={click[4]}>프로필</Text>
      </Link>
    </MenuWrapper>
  );
};