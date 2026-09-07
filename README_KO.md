# Urban Earth Intelligence Lab 홈페이지

부산대학교 도시지구지능연구실 / Urban Earth Intelligence Lab

설치나 빌드 과정 없이 사용할 수 있는 정적 홈페이지입니다. 영문 본문에 한글 연구실명과 한국어 문의 안내를 함께 넣었습니다. 모든 스타일, 스크립트, 사진, 연구 이미지는 `assets/` 안에 포함되어 있습니다. 외부 폰트나 라이브러리를 다운로드하지 않아도 화면이 표시됩니다.

## 내 컴퓨터에서 먼저 보기

1. ZIP 파일을 **완전히 압축 해제**합니다.
2. 압축 해제한 폴더의 `index.html`을 Chrome, Edge, Safari 등의 브라우저로 엽니다.
3. 상단 메뉴를 눌러 다른 페이지를 확인합니다. `assets/` 폴더는 HTML 파일들과 같은 위치에 유지합니다.

Google Scholar·논문 DOI·데이터셋 같은 외부 링크를 열 때는 인터넷이 필요합니다.

## GitHub Pages에 올리기

1. GitHub에서 새 **Public repository**를 만듭니다. 예: `urban-earth-intelligence-lab`.
2. `Add file → Upload files`에서 **압축을 푼 폴더 안의 파일과 assets 폴더**를 업로드합니다. ZIP 자체를 올리지 않습니다. 저장소의 최상위에 `index.html`이 보여야 합니다.
3. `Commit changes`로 저장합니다.
4. 저장소의 `Settings → Pages`로 이동합니다.
5. `Build and deployment`의 `Source`를 **Deploy from a branch**로 선택합니다.
6. `Branch`를 **main**, 폴더를 **/(root)**로 선택한 뒤 `Save`를 누릅니다.
7. 배포가 끝나면 Pages 설정 화면의 `Visit site` 링크로 확인합니다.

프로젝트 저장소의 기본 주소는 `https://사용자명.github.io/저장소명/` 형태입니다. 개인 기본 홈페이지 주소를 원하면 저장소 이름을 `사용자명.github.io`로 만듭니다. 이 사이트는 상대경로를 사용하므로 두 방식 모두 적용할 수 있습니다.

`.nojekyll`은 Jekyll 처리를 생략하기 위한 빈 파일입니다. 운영체제 설정에 따라 숨겨져 보일 수 있습니다. 업로드 화면에서 빠졌으면 GitHub의 `Add file → Create new file`로 `.nojekyll`이라는 빈 파일을 추가할 수 있습니다.

공식 안내: [GitHub Pages 게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 메인 소개, 연구 분야, 대표 논문, 교수 소개 |
| `research.html` | 4개 연구 축과 관련 연구 이미지 |
| `people.html` | 유철희 교수 프로필·경력·학력·수상 |
| `publications.html` | CV에 수록된 학술지 논문 46편과 도서 챕터 4편 |
| `contact.html` | 연락처와 연구·진학 문의 안내 |
| `credits.html` | 사진·그림·콘텐츠 출처 |
| `404.html` | 잘못된 페이지 주소 안내 |
| `assets/style.css` | 색상, 글꼴, 레이아웃, 모바일 반응형 규칙 |
| `assets/main.js` | 모바일 메뉴 열기·닫기, Escape 키 지원 |
| `assets/favicon.svg` | 브라우저 탭의 UEI 아이콘 |
| `assets/publications.json` | 논문 목록의 구조화된 참고 데이터. 화면은 HTML에 직접 수록됨 |
| `assets/cheolhee-yoo.png` | 첨부한 증명사진 |
| `assets/`의 기타 이미지 | 첨부 세미나 PDF에서 추출한 위성영상·연구 그림 |
| `.nojekyll` | GitHub Pages의 정적 파일 게시 설정 |

## 자주 수정할 내용

- **소개 문구:** `index.html`, `research.html`의 본문을 수정합니다.
- **구성원 추가:** `people.html`의 `<main id="main">` 안에 구성원 소개를 추가합니다. 현재는 제공된 정보가 있는 PI만 수록했습니다.
- **논문 추가:** `publications.html`에서 해당 연도의 `<article class="publication">…</article>` 단위를 복사한 뒤 제목·저자·학술지·링크를 수정합니다. 새 연도를 추가하면 페이지 위쪽 연도 링크도 함께 추가합니다. `assets/publications.json`은 참고용이며 이를 수정해도 HTML이 자동으로 바뀌지는 않습니다.
- **색상:** `assets/style.css` 첫 부분의 `:root`에서 `--ink`, `--green`, `--accent`를 바꿉니다.
- **이메일:** HTML 파일 전체에서 `cheolhee.yoo@pusan.ac.kr`을 찾아 표시 주소와 `mailto:` 링크를 함께 수정합니다.
- **메뉴·푸터:** 각 HTML에 직접 포함되어 있으므로 페이지 전체에 같은 수정 내용을 반영합니다.
- **홈페이지의 부산 위성영상:** `assets/busan-satellite-hero.jpeg`를 교체하거나 `index.html`의 이미지 경로를 변경합니다.

HTML은 메모장이나 VS Code로 편집할 수 있습니다. 내용을 수정한 후에는 저장하고 브라우저를 새로고침합니다. GitHub 파일을 변경하고 Commit하면 Pages가 다시 배포됩니다.

## 내용의 기준

- 연구실 영문명: **Urban Earth Intelligence Lab**
- 연구실 한글명: **도시지구지능연구실**
- 경력과 논문 목록: 첨부된 `CV_유철희.pdf` 기준
- 연구 프레임과 그림: 첨부된 `Digitology_cheolheeyoo.pdf` 기준
- 최근·대표 논문 10편: 출판사 서지정보를 확인한 DOI 링크 사용
- 나머지 논문: 제목으로 Google Scholar를 검색하는 `Find paper` 링크 사용
- 실시간으로 변하는 인용 수나 h-index는 표시하지 않았습니다.
- 진행 중인 인도 도시 및 LA 수목 냉각 연구는 진행 중임을 표시했습니다. 그림은 제공된 세미나 버전입니다.
- 원본 CV PDF 전체나 개인 휴대전화 번호는 홈페이지에 포함하지 않았습니다.
- 확인되지 않은 학생 명단, 연구실 호실, 모집 인원, 장학금 조건 등은 넣지 않았습니다.

## 디자인 참고

다음 사이트의 여백, 타이포그래피, 연구 콘텐츠 구성을 참고했으며, 코드·로고·이미지를 복제하지 않았습니다.

- [MIT Earth Intelligence Lab](https://earthintelligence.mit.edu/)
- [Yonsei Decision Intelligence & Learning Lab](https://dil.yonsei.ac.kr/)
- [Yimeng Song’s Research Group](https://songyimeng.com/)

## 구현 확인

- 모든 HTML 페이지의 로컬 이미지·스타일·스크립트·링크와 내부 앵커 확인
- JavaScript 구문 검사 완료
- 모바일 너비에 따른 반응형 레이아웃 및 메뉴 규칙 포함
- 키보드 탐색, 본문 바로가기, 이미지 대체 텍스트, 동작 줄이기 설정 지원
- 자바스크립트를 끈 상태에서도 본문과 메뉴에 접근 가능한 구조

이 패키지는 파일과 코드 수준에서 검증했습니다. 실제 브라우저에서의 사이트 렌더링·모바일 화면 테스트는 수행하지 않았습니다. GitHub 계정 연결이나 실제 업로드·공개 배포는 수행하지 않았습니다.
