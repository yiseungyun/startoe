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
  .opacity {
    opacity: 0;
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
  const [click, setClick] = useState(
    pathname === '/' || pathname === '/lecture' || pathname === '/information'
    ? 1 : pathname.substring(0, 9) === '/category'
    ? 2 : pathname === '/bookmark'
    ? 3 : pathname === '/test'
    ? 4 : 5
  );

  useEffect(()=>{
    if (pathname === '/' || pathname === '/lecture' || pathname === '/information') {
      setClick(1);
    } else if (pathname.substring(0, 9) === '/category') {
      setClick(2);
    } else if (pathname === '/bookmark') {
      setClick(3);
    } else if (pathname === '/test') {
      setClick(4);
    } else if (pathname === '/profile' || pathname === '/login' || pathname === '/signup') {
      setClick(5);
    }
  }, [pathname]);

  return (
    <MenuWrapper>
      <Link className="button" href={'/'}>
        <Image className="home-img" width='30' height='32' alt={"home icon"} 
          priority={true} loading='eager' src={`/home-unclick.png`}/>
        <Image className={
          click === 1 ?
            "home-img"
            : "home-img opacity"
          } width='30' height='32' alt={"home icon"} 
          priority={true} loading='eager' src={`/home-click.png`}/>
        <Text className="menu-text" $text={ click === 1 ? "click" : "unclick"}>홈</Text>
      </Link>
      <Link className="button" href={'/category'}>
        <Image className="category-img" width='31' height='29' alt={"category icon"}
          priority={true} loading='eager' src={`/category-unclick.png`}/>
        <Image className={
           click === 2 ? 
            "category-img"
            : "category-img opacity"
          } width='31' height='29' alt={"category icon"}
          priority={true} loading='eager' src={`/category-click.png`}/>
        <Text className="menu-text" $text={ click === 2 ? "click" : "unclick"}>카테고리</Text>
      </Link>
      <Link className="button" href={'/bookmark'}>
        <Image className="bookmark-img" width='24' height='30' alt={"bookmark icon"} 
          priority={true} loading='eager' src={`/bookmark-unclick.png`}/>
        <Image className={
          click === 3 ? 
            "bookmark-img"
            : "bookmark-img opacity"
          } width='24' height='30' alt={"bookmark icon"} 
          priority={true} loading='eager' src={`/bookmark-click.png`}/>
        <Text className="menu-text" $text={ click === 3 ? "click" : "unclick"}>북마크</Text>
      </Link>
      <Link className="button" href={'/test'}>
        <Image className="test-img" width='30' height='30' alt={"test icon"} 
          priority={true} loading='eager' src={`/test-unclick.png`}/>
        <Image className={
          click === 4 ?
            "test-img"
            : "test-img opacity"
          } width='30' height='30' alt={"test icon"} 
          priority={true} loading='eager' src={`/test-click.png`}/>
        <Text className="menu-text" $text={ click === 4 ? "click" : "unclick"}>테스트</Text>
      </Link>
      <Link className="button" href={'/profile'}>
        <Image className="profile-img" width='30' height='30' alt={"profile icon"}
          priority={true} loading='eager' src={`/profile-unclick.png`}/>
        <Image className={
          click === 5 ?
            "profile-img"
            : "profile-img opacity"
          } width='30' height='30' alt={"profile icon"}
          priority={true} loading='eager' src={`/profile-click.png`}/>
        <Text className="menu-text" $text={ click === 5 ? "click" : "unclick"}>프로필</Text>
      </Link>
    </MenuWrapper>
  );
};