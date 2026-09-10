# FIFA LAB v3

Deep-navy multi-page GitHub Pages website for:

**FIFA LAB — FinTech Innovation & Forecasting Analytics Lab**  
Department of Artificial Intelligence & Data Science  
College of AI Convergence, Sejong University

## Pages

```text
/
├── index.html                 Home
├── research/index.html        Research
├── professor/index.html       Professor
├── members/index.html         Members
├── projects/index.html        Projects
├── publications/index.html    Publications
├── news/index.html            News
├── gallery/index.html         Gallery
├── contact/index.html         Contact
└── assets/
    ├── css/style.css
    ├── js/data.js
    ├── js/main.js
    └── images/
```

## 1. 가장 먼저 수정할 파일

거의 모든 내용은:

```text
assets/js/data.js
```

에서 수정할 수 있습니다.

- 연구실 이름 / 문구
- 교수 정보
- 학생
- Research Areas
- 프로젝트
- 논문
- 뉴스
- Gallery
- Contact / Join Us

## 2. 협동로봇 과제

현재 홈페이지에는 공식 과제명을 임의로 확정하지 않고:

```text
On-device AI for Intelligent Collaborative Robots
```

라는 설명용 제목을 사용했습니다.

공식 과제명을 홈페이지에 표시하려면 `assets/js/data.js`의
`currentProjects` 첫 항목 `title`을 정식 과제명으로 교체하세요.

Physical AI는 `EMERGING` 표시를 사용하여 FIFA Lab의 기존
FinTech / Forecasting 정체성보다 앞에 나오지 않게 구성했습니다.

## 3. 교수 사진 추가

사진을:

```text
assets/images/professor.jpg
```

에 넣은 후 `data.js`에서:

```javascript
image: "assets/images/professor.jpg",
```

로 변경하세요.

학생 사진도 같은 방식입니다.

## 4. GitHub에 올리기

`fifa-sejong.github.io` repository 최상단에 **이 압축파일 내부의 파일/폴더를 그대로** 올립니다.

repository 첫 화면이 다음처럼 보여야 합니다:

```text
assets/
contact/
gallery/
members/
news/
professor/
projects/
publications/
research/
index.html
README.md
```

GitHub Pages:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ /(root)
```

## 5. 색상 변경

`assets/css/style.css` 최상단:

```css
--navy-950: #061321;
--navy-900: #0b1f3a;
--blue: #3f7cff;
```

만 바꾸면 전체 색감이 크게 바뀝니다.

## 6. Hero Slider

Home에는 별도 사진 없이도 작동하는 3개의 abstract hero visuals가 포함되어 있습니다.

1. Financial AI
2. Forecasting Analytics
3. Physical AI / Collaborative Robotics

나중에 실제 연구 이미지가 생기면 Hero 영역을 사진 기반으로 교체할 수 있습니다.
