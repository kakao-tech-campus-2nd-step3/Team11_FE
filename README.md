<div align="center">
  <img src="https://github.com/kakao-tech-campus-2nd-step3/Team11_BE/raw/Evaluation/boomerang/src/main/resources/static/esset/footer.png" alt="Footer" width="80%">
 <br><br>
  <img src="https://raw.githubusercontent.com/kakao-tech-campus-2nd-step3/Team11_BE/Evaluation/boomerang/src/main/resources/static/esset/logo.png" alt="Logo" width="30%">
</div>

## 🎯 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [문제 인식](#문제-인식)
3. [문제 해결](#문제-해결)
4. [배포된 인스턴스 주소](#배포된-인스턴스-주소)
5. [기술 스택](#기술-스택)
6. [개발 환경 설정](#개발-환경-설정)
7. [설치 및 실행 방법](#설치-및-실행-방법)
8. [주요 기능별 설명](#🔧-주요-기능별-설명)
   - [전세사기 유형 검사와 맞춤형 가이드라인 제공 페이지](#1-전세사기-유형-검사와-맞춤형-가이드라인-제공-페이지)
   - [전세사기 예방 안전도 검사 페이지](#2-전세사기-예방-안전도-검사-페이지)
   - [멘토 멘티 상담 페이지](#3-멘토-멘티-상담-페이지)
   - [커뮤니티 페이지](#4-커뮤니티-페이지)
9. [FE 핵심 기능 개발](#fe-핵심-기능-개발)
   - [API 요청 처리 최적화](#1️⃣-api-요청-처리-최적화)
   - [화면 렌더링 부담 줄이기](#2️⃣-화면-렌더링-부담-줄이기)
   - [번들 사이즈 최적화](#3️⃣-번들-사이즈-최적화)
   - [배포 전략](#4️⃣-배포-전략)
   - [텍스트 에디터](#5️⃣-텍스트-에디터)
10. [기간](#📅-기간)
11. [라이센스](#📄-라이센스)
12. [팀원 소개](#🧑‍🤝‍🧑-팀원-소개)

## 프로젝트 소개

**부메랑** 집주인에게 간 보증금이 돌아오는 그날까지 함께하는 메이트 라는 슬로건을 갖고 개발하기 시작하였습니다.
따라서 탄생한 **부메랑** 전세 사기 피해자를 위한 맞춤형 솔루션을 제공하며, 추가 피해자를 막기 위해 예방 서비스를 개발하여 안전하게 보증금 계약을 할 수 있게하는 올인원 플랫폼입니다.

## 📝 문제 인식

2024년 8월 기준 전세사기 피해자는 2만명을 돌파했으며, 보증보험이 가입되어 있는 경우에는 국교교통부 전세사기 피해자로 인정이 안되어, 실제 피해자는 이보다 훨씬 많을 것으로 추정됩니다.

피해자들이 겪는 주요 어려움은 다음과 같습니다.

- 복잡한 법률 용어와 절차에 대한 이해 부족
- 금전적 부분에 대한 심리적 부담
- 필요한 정보가 여러 사이트에 분산
- 피해자들간의 정보 공유 커뮤니티 부재
- 실질적 질문에 대한 답변 부재

## 💡 문제 해결

더 이상 무시할 수 없는 큰 전세사기 피해자들이 환급 과정에서 겪는 복잡한 절차와 정보 부족의 어려움을 덜기 위해 개발되었습니다.  
 따라서 피해자들이 환급 과정에만 집중할 수 있도록, 유형 파악부터 환급까지 공신력 있는 솔루션 제공하여 피해자의 시간적 피해를 줄이려 노력했습니다.  
 또한, 멘토 상담과 커뮤니티와 같은 피해자들에게 실질적인 도움이 되는 기능들을 지속적으로 추가하며 발전시켰습니다.
피해자뿐만 아니라 일반 사용자들이 예방을 위한 기능도 구현하여 예방부터 사기 대처까지 제공하는 올인원 플랫폼으로 만들었습니다.

## 📮 배포된 인스턴스 주소

- **FE:** [http://54.252.224.76](http://54.252.224.76/)
- **BE:** [http://52.79.80.3:8080](http://52.79.80.3:8080/)

## 기술 스택

| 분류                 | 기술                                       |
| -------------------- | ------------------------------------------ |
| **FrontEnd**         | React, TypeScript                          |
| **State Management** | Context API, React Query, React Router Dom |
| **Build Tools**      | Vite                                       |
| **Data Fetching**    | Tanstack Query, Axios                      |
| **Style**            | Chakra UI, Lexical                         |
| **CI/CD**            | GitHub Actions                             |
| **Version Control**  | Git, GitHub                                |
| **Deployment**       | AWS EC2, Nginx                             |
| **Others**           | ESLint, Prettier                           |

## 개발 환경 설정

### 필수 사항

- **Node.js:** >= 18.18.0
- **npm:** >= 9.8.1

## 🏃 설치 및 실행 방법

```bash

git clone https://github.com/kakao-tech-campus-2nd-step3/Team11_FE.git

cd Team11_FE

npm install

npm run start

```

## 🔧 주요 기능별 설명

### 1. 전세사기 유형 검사와 맞춤형 가이드라인 제공 페이지

**🏆 유형검사, 해결방법, 서류 작성까지 한 번에 하는 원스톱 서비스 제공**

- 📝 주요 기능
  - 계약 종류/보험 가입여부 기반 유형 검사
  - 유형별 맞춤형 환급 과정 안내
  - 단계별 진행도 체크 관리
  - 상세 설명 및 필요 서류 안내

### 2. 전세사기 예방 안전도 검사 페이지

**🏆 전세 계약 전 사전 위험을 파악하고 객관적인 안전성을 검증하며 추가 확인사항을 안내**

- 📝 주요 기능
  - 위험도 점수화 평가 식 적용 :`(집값*0.8 - 채권액 - 전세보증금 > 0)`
  - 자가진단 리스트 제공
  - 경매 이후 보증금 반환 금액 조회 서비스 제공
  - 등기부 등본 변동 알림을 위한 카카오톡 채널 추가 페이지 제공

### 3. 멘토 멘티 상담 페이지

**🏆 실시간 전문가 상담으로 개인 맞춤 조언과 전문적인 법률 절차 안내를 제공**

- 📝 주요 기능
  - 사이드 바 구현
  - 멘티 전용 페이지 구현
  - 멘토 전용 페이지 구현

### 4. 커뮤니티 페이지

**🏆 피해자 간 정보 공유와 심리적 지지를 통해 안전한 소통 공간과 맞춤형 정보 접근성을 제공**

- 📝 주요 기능
  - 게시판 별 (자유/지역별/시크릿/단계별) 글 조회 페이지 및 댓글 구현
  - 베스트 게시글 : `1주일 이내, 댓글수 * 10 + 좋아요 수 * 7`
  - 글 쓰기 페이지의 **텍스트 에디터** 구현

# FE 핵심 기능 개발

### 1️⃣ API 요청 처리 최적화

API 요청 관련 비동기 처리 페이지에서 API 요청과 상관 없는 컴포넌트들을 요청에 의존하는 컴포넌트와 최대한 분리하려고 했습니다. 요청의 응답이 올 때까지 화면에서 스피너 하나를 보여주는 것이 아니라, 요청과 상관 없는 부분은 화면 바로 렌더링 되도록 Suspense를 사용하여 분리했고, 스피너 또는 각 화면에 대한 스켈레톤 UI를 사용해 사용자가 빈 화면을 보는 시간을 최대한 줄이려 했습니다. 추가적으로 useEffect 내부에서 요청을 보내는 건 페이지가 마운트 된 후에 날아가기 때문에, 사용자의 대기시간을 최소한으로 하기 위해 useEffect 내부에서 요청을 보내는 것을 최대한 지향했습니다.

### 2️⃣ 화면 렌더링 부담 줄이기

리액트의 핵심은 상태이지만, 최대한 상태를 적게 사용하는 방향으로 페이지를 구현했습니다. useState와 Context API를 통한 전역 상태를 사용하는 것 보단, react-router-dom과 tanstack-query으로 대체해 상태 생성을 최소한으로 줄이려 했습니다.

### 3️⃣ 번들 사이즈 최적화

번들 사이즈를 최대한 줄이기 위해 라이브러리 사용을 최소한으로 하고자 했습니다. 라이브러리 내부의 모든 기능을 다 사용하는 경우는 거의 없다고 생각해 사용되지 않는 코드를 최대한 줄이려 대부분의 기능을 직접 구현했습니다. 개발 기간과 번들링 사이즈의 트레이드오프를 생각하며 라이브러리 도입 여부를 결정했습니다.

### 4️⃣ 배포 전략

현재 백엔드서버가 배포된 환경이 Amazon EC2라서, 인덱스 파일을 제공하는 것 또한 서버에 부담이 될 것이라 판단해 사용자에게 인덱스 파일을 제공하는 프론트 엔드 서버를 따로 배포했습니다. 인덱스 파일만 제공하는 것이 아니라 포함된 이미지 모두 제공해야 하기 때문에 생각보다 부담이 많이 될 것이라 판단했습니다.

### 5️⃣ 텍스트 에디터

구현하는데 매우 많은 시간과 노력이 들었던 컴포넌트 입니다. 자체 기능이 많기도 하고, 최대한 직접 구현하려고해 많이 어려웠던 컴포넌트 입니다. 제공하는 기능은 폰트 스타일, 사이즈 변경, 포맷 변경, 정렬, 링크 생성, 이미지 삽입, 드래그를 통한 이미지 크기 조정이 있습니다. 해당 부분을 구현할 때도, 상태를 최소한으로 생성하려고 노력했습니다.

## 📅 기간

25 Aug 2024 ~ 15 Nov 2024

## 📄 라이센스

MIT License - Copyright (c) 2024 kakao-tech-campus-2nd-step3

## 🧑‍🤝‍🧑 팀원 소개

<div align="center">
 <table>
   <tr>
     <td align="center" width="25%">
       <img src="https://avatars.githubusercontent.com/u/121755257?s=64&v=4" width="100" height="100" alt="진서현 프로필"><br>
       <a href="https://github.com/jinseohyun1228" target="_blank">진서현</a><br>
     </td>
     <td align="center" width="25%">
       <img src="https://avatars.githubusercontent.com/u/150018566?s=64&v=4" width="100" height="100" alt="문성민 프로필"><br>
       <a href="https://github.com/Dalsungmin" target="_blank">문성민</a><br>
     </td>
     <td align="center" width="25%">
       <img src="https://avatars.githubusercontent.com/u/65036351?s=64&v=4" width="100" height="100" alt="정재빈 프로필"><br>
       <a href="https://github.com/JaeBin2019" target="_blank">정재빈</a><br>
     </td>
     <td align="center" width="25%">
       <img src="https://avatars.githubusercontent.com/u/55781137?v=4" width="100" height="100" alt="이상준 프로필"><br>
       <a href="https://github.com/J-1ac" target="_blank">이상준</a><br>
     </td>
   </tr>
 </table>
</div>
<div align="center">
 <table>
   <tr>
     <td align="center" width="25%">
       <img src="https://avatars.githubusercontent.com/u/65104605?s=64&v=4" width="100" height="100" alt="진서현 프로필"><br>
       <a href="https://github.com/JaeanHan" target="_blank">한재안</a><br>
     </td>
     <td align="center" width="25%">
       <img src="https://avatars.githubusercontent.com/u/114674380?s=64&v=4" width="100" height="100" alt="최윤성 프로필"><br>
       <a href="https://github.com/yunseong0404" target="_blank">최윤성</a><br>
     </td>
     <td align="center" width="25%">
       <img src="https://avatars.githubusercontent.com/u/108441979?s=64&v=4" width="100" height="100" alt="한성익 프로필"><br>
       <a href="https://github.com/seongikx" target="_blank">한성익</a><br>
     </td>
   </tr>
 </table>
</div>
