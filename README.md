## 스타토 (ver.1)
> 💡 토익스피킹을 스마트하게 시작하다

토익스피킹 공부를 위한 템플릿을 학습할 수 있는 사이트로, 책을 들고다니거나 태블릿을 들고다니며 공부하지 못할 경우도 많고 불편함도 있기 때문에 휴대폰으로 쉽게 학습할 수 있도록 모바일에 맞추어 디자인하였습니다.
### 진행 기간
2024.02.02 ~ 2024.02.20 / 2024.03.13 ~ 2024.03.16

---
## 시스템 아키텍처
![image](https://github.com/yiseungyun/startoe/assets/73896327/5fa9a471-8f3a-488d-9445-b28490f72f47)

- Framework: `Next.js`
- Language: `javascript`
- Design: `styled components`
- Login: `OAuth 2.0`
- State Management: `Recoil`, `React Query(Tanstack Query v5)`
- Data Fetching: `Axios`, `React Query(Tanstack Query v5)`
- Database: `MongoDB`
- Design Tool: `Figma`
- Deploy: `Vercel`
### 기술 선택 이유
#### Next.js
개인 프로젝트였고, 완성도 있는 서비스를 만들고 싶어서 API 라우트를 이용해 서버리스로 만들 수 있는 Next.js를 사용했습니다.
#### React Query
서버 상태를 쉽게 관리할 수 있고, v5버전부터 병렬 처리하기가 쉬워져서 사용하였습니다.
#### MongoDB
유연하게 사용할 수 있는 비관계형 데이터베이스를 이용하였습니다.
#### Recoil 
테스트 페이지를 위해 북마크 상태를 전역 상태에 저장했습니다. (하지만 아직 테스트 페이지는 구상중입니다.)

---

## 주요 기능
### 로그인/로그아웃
![image](https://github.com/yiseungyun/startoe/assets/73896327/b8beb7e7-60b5-4b5c-8e33-3c7ca89ea520)

구글과 카카오로 간편하게 소셜 로그인이 가능해요
### 메인
![image](https://github.com/yiseungyun/startoe/assets/73896327/162d7a28-24be-4ca3-b48c-8a499b9f5c48)

토익스피킹 시험 접수와 정보, 그리고 유명 강사를 소개해드려요
### 학습
![image](https://github.com/yiseungyun/startoe/assets/73896327/a785240a-83f8-4922-8c14-ad6295cdfd9f)

각 파트별로 학습할 수 있어요
### 북마크
![image](https://github.com/yiseungyun/startoe/assets/73896327/1e7cdf16-2802-4f4b-90ce-be0458259169)

원하는 문장은 저장해두고 다시 볼 수 있어요

**테스트 기능 구상 후 추가 예정*

---
## 트러블 슈팅
### ① styled-components FOUC 에러
[🔗 해결 과정 글 보러가기](https://velog.io/@yiseungyun/Next.js-14%EC%97%90%EC%84%9C-styled-components-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
### ② SSR에서 React query 사용 에러
[🔗 해결 과정 글 보러가기](https://velog.io/@yiseungyun/Next.js-SSR%EC%97%90%EC%84%9C-React-Query-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
### ③ unknown prop과 정적 스타일링 문제 해결
[🔗 해결 과정 글 보러가기](https://velog.io/@yiseungyun/Next.js-styled-component%EC%9D%98-unknown-prop)
___
## 성능 최적화
### 2024.03.20 진행 내역
[🔗 성능 최적화 글 보러가기](https://velog.io/@yiseungyun/Next.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0)
___

## 앞으로의 계획
- 학습 데이터 적재 
- 테스트 기능 추가
- 성능 향상을 위한 작업
> 📌 추가하지 않은 기능은 좀 더 구상 후 추가할 예정이에요
