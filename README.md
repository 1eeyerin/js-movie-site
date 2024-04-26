# [js-movie-site](https://1eeyerin.github.io/js-movie-site/)
영화 정보 공유사이트 [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) 의 Open API를 바탕으로 만든 JS 웹 사이트 입니다.<br/><br/>
<br />

## 1. 사용한 라이브러리

``` javascript
swiper @11
lottie @latest
gsap @3.12.5
```

## 2. 대표기능

- [x] 급상승 트렌드 영화 탐색<br />
- [x] 상영중인 영화 탐색<br />
- [x] 영화 검색<br />
- [x] 영화 상세 페이지<br />

## 3. 상세기능

### 1. 커스텀 커서

> <img src="https://github.com/1eeyerin/js-movie-site/assets/40863185/52f42699-1df5-4d7f-a15c-a60bc7781b19" width="350"><br/>
> [🔗 코드 바로가기](https://github.com/1eeyerin/js-movie-site/blob/8a64a2a6e1070a88719a23315335313b9c8aadc0/js/customCursor.js)

- 급상승 영화를 노출합니다.
- 영화 이미지에 마우스를 hover하면, 현재 커서에서 가시성을 키우기 위해 scale이 되는 효과를 주었습니다.
- 첫 접속시 브라우저 너비가 1200이 되지 않는다면, customCursor 함수를 실행시키지 않습니다.
- swiper 사용으로 다양한 환경에서 동일하게 제공될 수 있도록 swipe 효과를 주었습니다.


### 2. 영화 데이터 랜덤 정렬

> <img src="https://github.com/1eeyerin/js-movie-site/assets/40863185/d29650d1-3f27-4c63-882f-ff5c89a15cc8" width="330"><br/>
> [🔗 코드 바로가기](https://github.com/1eeyerin/js-movie-site/blob/8a64a2a6e1070a88719a23315335313b9c8aadc0/js/movieList.js#L17)

- 다양한 영화를 탐색할 수 있도록, 영화 데이터를 랜덤으로 정렬될 수 있도록 구현하였습니다.

### 3. 상세페이지 애니메이션 적용

> <img src="https://github.com/1eeyerin/js-movie-site/assets/40863185/4d761b15-15d3-4409-a77a-ba433866e42e" width="330"><br/>
> [🔗 코드 바로가기](https://github.com/1eeyerin/js-movie-site/blob/8a64a2a6e1070a88719a23315335313b9c8aadc0/js/detail/setPageAnimate.js)

- 영화 컨텐츠에 몰입할 수 있도록 gsap.js animation 라이브러리를 사용하여 비주얼 애니메이션 요소를 추가하였습니다.
- 제공하는 메서드인 timeline()을 이용하여 가변적인 제목이라도, 제목 애니메이션이 끝날 때까지 summary text 애니메이션이 대기하도록 하였습니다.

### 4. 검색 결과가 없는 경우 UI 제공

> <img src="https://github.com/1eeyerin/js-movie-site/assets/40863185/deb93a2b-be7c-4cc8-9ac9-5301eb54eb19" width="330"><br/>
> [🔗 코드 바로가기](https://github.com/1eeyerin/js-movie-site/blob/8a64a2a6e1070a88719a23315335313b9c8aadc0/js/search/emptySearchResult.js)

- 검색 결과가 없음을 나타내는 UI를 추가하였습니다.

### 5. 상세페이지 fetch 에러시, not-found 에러페이지 제공

> <img src="https://github.com/1eeyerin/js-movie-site/assets/40863185/58d8ba1c-f24a-4417-8c86-38d2327fc6ae" width="330"><br/>
> [🔗 코드 바로가기](https://github.com/1eeyerin/js-movie-site/blob/8a64a2a6e1070a88719a23315335313b9c8aadc0/js/utils/includeHTML.js#L28)

- api 에러를 발생 했을 때의 화면을 제공할 수 있도록 하였습니다.
- lottie js 라이브러리를 사용하여, 애니메이션 화면을 제공하였습니다.
- fetch error를 catch 하는 경우, 현재 화면 element에 not-found.html을 append 하도록 구성하였습니다.
  

### 6. 상세페이지 loading page 적용

> <img src="https://github.com/1eeyerin/js-movie-site/assets/40863185/cd75172a-169b-4607-ba79-fa609bcf06ca" width="330"><br/>
> [🔗 코드 바로가기](https://github.com/1eeyerin/js-movie-site/blob/8a64a2a6e1070a88719a23315335313b9c8aadc0/js/hideLoadingOverlay.js)

- 데이터 fetch 중에도 부드러운 화면 전환 경험을 제공할 수 있도록, css animation을 이용하여 loading page를 적용하였습니다.
  
<br/>
<br/>
<br/>

## 💬 To-Do
- [x] 검색 상세페이지 구현
- [x] 메인 하단 구좌 추가
- [ ] grid 사용하기
- [x] list가 비었을 때 UI
- [x] 통신에 실패했을때 UI
- [x] 랜덤 정렬 기능 추가
- [x] UI 변경 모드 추가
- [x] 모바일 Hover UI 제거
- [x] 썸네일 이미지 사이즈 통일
- [x] includeHtml 리팩토링
- [x] customCursor 리팩토링
- [x] movie-detail에 gsap(js animate) 넣기
- [x] lottie 적용하기
- [x] DocumentFragment 적용
- [x] 상세페이지 로딩화면 추가

## 💬 Author
[yerin lee](https://github.com/1eeyerin)
