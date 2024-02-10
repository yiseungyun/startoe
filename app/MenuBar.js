'use client'
import { useRouter } from "next/navigation";
import styled from "styled-components";

const MenuWrapper = styled.div`
  background-color: #ffffff;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;  
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 94%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 59px;
  top: 11px;
  width: 41px;
`;

const TestImg = styled.img`
  height: 32px;
  position: absolute;
  top: 11px;
  width: 32px;
`;

const MenuText = styled.div`
  color: #2e2e2e;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  bottom: 12%;
`;

const CategoryImg = styled.img`
  height: 31px;
  position: absolute;
  top: 11px;
  width: 33px;
`;

const ProfileImg = styled.img`
  height: 32px;
  position: absolute;
  top: 11px;
  width: 32px;
`;

const BookmarkImg = styled.img`
  height: 32px;
  position: absolute;
  top: 11px;
  width: 26px;
`;

const HomeImg = styled.img`
  height: 33px;
  position: absolute;
  top: 11px;
  width: 32px;
`;

export const MenuBar = () => {
  const router = useRouter();
  return (
    <>
      <MenuWrapper>
        <ButtonWrapper onClick={()=>{ router.push('/') }}>
          <HomeImg alt="Material symbols" src="home-unclick.png" />
          <MenuText>홈</MenuText>
        </ButtonWrapper>
        <ButtonWrapper onClick={()=>{ router.push('/category') }}>
          <CategoryImg alt="Mingcute menu fill" src="category-unclick.png" />
          <MenuText>카테고리</MenuText>
        </ButtonWrapper>
        <ButtonWrapper onClick={()=>{ router.push('/bookmark') }}>
          <BookmarkImg alt="Unclick bookmark" src="bookmark-unclick.png" />
          <MenuText>북마크</MenuText>
        </ButtonWrapper>
        <ButtonWrapper onClick={()=>{ router.push('/test') }}>
          <TestImg alt="Ion search" src="test-unclick.png" />
          <MenuText>테스트</MenuText>
        </ButtonWrapper>    
        <ButtonWrapper onClick={()=>{ router.push('/profile') }}>
          <ProfileImg alt="Icon park solid" src="profile-unclick.png" />
          <MenuText>프로필</MenuText>
        </ButtonWrapper>
      </MenuWrapper>
    </>
  );
};