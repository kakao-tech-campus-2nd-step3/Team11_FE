부메랑 프론트엔드

### Prerequisites
    npm: >= 9.8.1
    node: >= 18.18.0

### How to Start
```agsl
cd my_folder
git clone https://github.com/kakao-tech-campus-2nd-step3/Team11_FE.git
```

### Installation
```agsl
npm install
npm run start
```


## 5주차 질문
안녕하세요 멘토님! 이번주차 리뷰도 잘부탁 드립니다!

### 이미지 사용 관련
    피그마에서 사진을 export 해와서 사용중인데, png나 jpg로 가져온면
    화질이 깨지는 것같아 svg를 사용중입니다. 그래서 모든 사진을 svg로 가져오는 중인데 
    svg만 사용해도 문제가 없을지 여쭤보고 싶습니다.

### 폰트 적용 관련
    현재 vite-plugin-html을 사용해 폰트를 적용 시켰는데, 혹시 개선 방안이 있다면 말씀해 주셨으면 합니다! 

### react-router 사용 여부
    <Navigate> 컴포넌트, createBrowserRouter 함수등 자주쓰는 로직이 
    react-router-dom에도 존재하는 것을 확인해서 추가하지 않았습니다. 
    그럼에도 react-router가 필요하다고 
    생각되는 부분이 있으시다면 말씀해 주시면 감사하겠습니다!

### 레이아웃 컴포넌트
    컴포넌트에서 페이지의 레이아웃과 스타일을 분리하고 싶었고,
    단순히 페이지의 구조를 나타내는 것 보단, 
    컴포넌트만 보도고 페이지의 레이아웃이 보였으면 해서 아래와 같은 형식으로 컴포넌트를 만들었습니다.
    
    export const Home: React.FC = () => {
        return (
            <BasicLayout maxW={1024}>
                <VStack spacing={10} align="stretch">
                    <HeroSection h={300} />
                    <MainSection h={492} />
                    <ConsultationSection h={470} />
                    <CommunitySection h={700} />
                    <Spacer />
                </VStack>
            </BasicLayout>
        );
    };

    height는 페이지 레이아웃과 구체화에 중요하다고 생각해서
    PropH 라는 인터페이스를 정의해 height를 부모 컴포넌트로 부터 받아오게 했습니다.
    반면 width는 페이지 레이아웃에 크게 영향을 주지 않는다고 생각해 위의 인터페이스에 추가하지 않았습니다.
    혹시 위의 Home 컴포넌트만 보고도 Home 컴포넌트가 렌더링하는 페이지의 구조가 직관적으로 보이는지 여쭤보고 싶습니다!
