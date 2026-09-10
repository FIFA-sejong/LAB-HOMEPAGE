/*
============================================================
FIFA LAB v3 — EDIT THIS FILE FIRST
============================================================

홈페이지의 대부분의 텍스트/구성원/논문/뉴스는 여기서 수정합니다.

사진 파일을 넣을 때:
  assets/images/professor.jpg
  assets/images/member-name.jpg
  assets/images/gallery-01.jpg

그리고 아래 image: "" 값을 해당 경로로 변경하세요.

※ 협동로봇 과제의 '정식 과제명'은 확인 후 currentProjects의
   title을 공식 명칭으로 교체하는 것을 권장합니다.
*/

const FIFA_DATA = {
  lab: {
    shortName: "FIFA LAB",
    fullName: "FinTech Innovation & Forecasting Analytics Lab",
    tagline: "AI for Finance, Forecasting, and Intelligent Systems",
    department: "Department of Artificial Intelligence & Data Science",
    college: "College of AI Convergence",
    university: "Sejong University",
    labRoom: "Daeyang AI Center, Room 812",
    address: "209 Neungdong-ro, Gwangjin-gu, Seoul, Republic of Korea",
    email: "yylee93@sejong.ac.kr",
    phone: "+82-2-3408-3196",
    github: "https://github.com/fifa-sejong",
    scholar: "https://scholar.google.com/citations?user=UVNoNGwAAAAJ&hl=en",
    oldWebsite: "https://sites.google.com/view/fifa-lab/"
  },

  heroSlides: [
    {
      eyebrow: "Research 01",
      title: "Financial AI for Intelligent Decisions",
      text: "금융시장 예측, 이상거래 탐지, 개인화 포트폴리오 및 리스크 분석을 위한 데이터 기반 AI 의사결정 기술을 연구합니다.",
      visual: "finance",
      link: "research/",
      linkText: "Explore Financial AI"
    },
    {
      eyebrow: "Research 02",
      title: "Forecasting Analytics for Dynamic Systems",
      text: "시계열 예측, 이상탐지 및 시공간 분석을 통해 복잡한 동적 시스템의 변화와 불확실성을 모델링합니다.",
      visual: "forecast",
      link: "research/",
      linkText: "Explore Forecasting"
    },
    {
      eyebrow: "Research 03",
      title: "Intelligent Physical Systems",
      text: "온디바이스 AI, 협동로봇, 멀티모달 인지 및 의사결정을 통해 지능형 물리 시스템으로 연구영역을 확장하고 있습니다.",
      visual: "robot",
      link: "projects/",
      linkText: "View Collaborative AI Project"
    }
  ],

  about: {
    lead:
      "FIFA Lab studies artificial intelligence for better decisions under uncertainty.",
    body:
      "Our core research lies at the intersection of FinTech, forecasting analytics, and data-driven decision intelligence. We develop machine learning methods for financial and temporal data, and extend these capabilities to emerging intelligent systems where perception, prediction, and decisions must operate together."
  },

  researchAreas: [
    {
      number: "01",
      title: "Financial AI & FinTech",
      shortTitle: "Financial AI",
      description:
        "Artificial intelligence for financial markets, portfolio construction, risk analysis, and data-driven financial decision making.",
      topics: ["LLM for Finance", "Portfolio Intelligence", "Risk Analytics", "Financial Markets"],
      status: "CORE"
    },
    {
      number: "02",
      title: "Forecasting Analytics",
      shortTitle: "Forecasting",
      description:
        "Forecasting, anomaly detection, temporal representation learning, and spatio-temporal modeling for complex dynamic systems.",
      topics: ["Time Series Forecasting", "Anomaly Detection", "Spatio-temporal AI", "Demand Forecasting"],
      status: "CORE"
    },
    {
      number: "03",
      title: "Blockchain & Digital Assets",
      shortTitle: "Blockchain",
      description:
        "Economic and data-driven analysis of decentralized finance, blockchain markets, digital assets, and market microstructure.",
      topics: ["DeFi", "MEV", "Digital Assets", "Blockchain Economics"],
      status: "CORE"
    },
    {
      number: "04",
      title: "Physical AI & Intelligent Systems",
      shortTitle: "Physical AI",
      description:
        "An emerging research direction connecting multimodal perception, decision making, and efficient on-device intelligence for collaborative robots and physical systems.",
      topics: ["Collaborative Robotics", "On-device AI", "VLM / VLA", "Task Planning"],
      status: "EMERGING"
    }
  ],

  professor: {
    name: "Yunyoung Lee",
    koreanName: "이윤영",
    title: "Assistant Professor",
    role: "Principal Investigator",
    affiliation: "Department of Artificial Intelligence & Data Science, Sejong University",
    office: "Daeyang AI Center, Room 807",
    lab: "Daeyang AI Center, Room 812",
    email: "yylee93@sejong.ac.kr",
    phone: "+82-2-3408-3196",
    image: "assets/images/professor.jpeg",
    bio:
      "My research focuses on artificial intelligence for decision making, with applications in time-series forecasting, financial AI, FinTech, blockchain economics, and emerging intelligent physical systems.",
    interests: [
      "Financial AI & FinTech",
      "Time Series Forecasting & Anomaly Detection",
      "Blockchain Economics & Digital Assets",
      "Decision Intelligence",
      "Physical AI & On-device Intelligence"
    ],
    positions: [
      {
        period: "2023.09 – Present",
        position: "Assistant Professor",
        institution: "Department of Artificial Intelligence & Data Science, Sejong University"
      },
      {
        period: "2023.03 – 2023.08",
        position: "Postdoctoral Researcher",
        institution: "Industrial & Mathematical Data Analytics Research Center (IMDARC), Seoul National University"
      }
    ],
    education: [
      { year: "2023", degree: "Ph.D. in Industrial Engineering", school: "Seoul National University" },
      { year: "2020", degree: "M.S. in Industrial Engineering", school: "Seoul National University" },
      { year: "2018", degree: "B.S. in Industrial Engineering", school: "Seoul National University" }
    ],
    teaching: [
      "Machine Learning",
      "Time Series Analysis and Forecasting",
      "Data Problem Solving and Practice",
      "Artificial Intelligence & Data Science Courses"
    ]
  },

  members: [
    {
      name: "Inyoung Won",
      role: "M.S. Student",
      since: "2025.03 –",
      education: "B.S. in Data Science, Sejong University",
      research: ["FinTech", "Machine Learning"],
      email: "uiio1999@naver.com",
      image: ""
    },
    {
      name: "Jiwoo Park",
      role: "M.S. Student",
      since: "2025.09 –",
      education: "B.S. in Data Science, Sejong University",
      research: ["FinTech", "Machine Learning"],
      email: "parkju0920@gmail.com",
      image: ""
    },
    {
      name: "Yeojin Kim",
      role: "M.S. Student",
      since: "2025.09 –",
      education: "B.S. in Data Science, Sejong University",
      research: ["FinTech", "Machine Learning"],
      email: "22011870@sju.ac.kr",
      image: ""
    }
  ],

  alumni: [
    // 예:
    // { name: "Name", degree: "M.S. 2026", next: "Company / Ph.D. Program" }
  ],

  currentProjects: [
    {
      category: "PHYSICAL AI · ON-DEVICE AI",
      title: "On-device AI for Intelligent Collaborative Robots",
      period: "2026 –",
      partner: "Industry collaboration with Doosan Robotics",
      description:
        "A new research direction for FIFA Lab exploring AI technologies for collaborative robots, including multimodal task understanding, decision making, efficient on-device deployment, and intelligent task planning.",
      topics: ["Collaborative Robots", "On-device AI", "Multimodal Intelligence", "Task Planning"],
      featured: true,
      note: "Replace this title with the official project title if desired."
    },
    {
      category: "FINANCIAL AI",
      title: "AI for Financial Decision Making",
      period: "Ongoing",
      partner: "",
      description:
        "Research on forecasting, investment intelligence, portfolio construction, and AI-assisted financial decision making.",
      topics: ["Financial AI", "LLM", "Portfolio", "Risk"],
      featured: false
    },
    {
      category: "FORECASTING",
      title: "Forecasting Analytics for Complex Systems",
      period: "Ongoing",
      partner: "",
      description:
        "Machine learning for demand forecasting, temporal dynamics, anomalies, and spatio-temporal dependencies across real-world operational data.",
      topics: ["Forecasting", "Time Series", "Spatio-temporal AI"],
      featured: false
    },
    {
      category: "BLOCKCHAIN",
      title: "Blockchain Market Intelligence",
      period: "Ongoing",
      partner: "",
      description:
        "Empirical and model-based analysis of decentralized exchanges, digital assets, blockchain market behavior, and economic mechanisms.",
      topics: ["Blockchain", "DeFi", "Market Microstructure"],
      featured: false
    }
  ],

  publications: [
    {
      year: "2025",
      title: "Undetectable Adversarial Attack on Time Series Classification",
      authors: "Hoki Kim+, Yunyoung Lee+, Woojin Lee, Jaewook Lee*",
      venue: "Information Sciences",
      type: "Time Series",
      url: ""
    },
    {
      year: "2025",
      title: "A Statistical Analysis of the Relationship between Meme Stocks and Social Media",
      authors: "Seungju Lee+, Yunyoung Lee+, Jaewook Lee, Hoki Kim*",
      venue: "IEEE Access",
      type: "Financial AI",
      url: ""
    },
    {
      year: "2025",
      title: "A two-stage game model of probabilistic price manipulation in decentralized exchanges",
      authors: "Bumho Son+, Yunyoung Lee+, Huisu Jang+*",
      venue: "Economic Modelling, 147, 107055",
      type: "Blockchain",
      url: ""
    },
    {
      year: "2024",
      title: "Unraveling the MEV enigma: ABI-free detection model using Graph Neural Networks",
      authors: "Seongwan Park, Woojin Jeong, Yunyoung Lee, Bumho Son, Huisu Jang, Jaewook Lee*",
      venue: "Future Generation Computer Systems, 153, 70–83",
      type: "Blockchain",
      url: ""
    },
    {
      year: "2023",
      title: "Dissecting the Terra-LUNA crash: Evidence from the spillover effect and information flow",
      authors: "Seungju Lee, Jaewook Lee, Yunyoung Lee*",
      venue: "Finance Research Letters, 53, 103590",
      type: "Blockchain",
      url: ""
    },
    {
      year: "2023",
      title: "Price co-movements in decentralized financial markets",
      authors: "Seongwan Park, Seungju Lee, Yunyoung Lee, Hyungjin Ko, Bumho Son, Jaewook Lee*",
      venue: "Applied Economics Letters, 30(21)",
      type: "Blockchain",
      url: ""
    },
    {
      year: "2023",
      title: "Forecasting global stock market volatility: The impact of volatility spillover index in spatial-temporal graph-based model",
      authors: "Bumho Son, Yunyoung Lee, Seongwan Park, Jaewook Lee*",
      venue: "Journal of Forecasting, 42(7), 1539–1559",
      type: "Forecasting",
      url: ""
    },
    {
      year: "2022",
      title: "The economic value of NFT: Evidence from a portfolio analysis using mean–variance framework",
      authors: "Hyungjin Ko, Bumho Son, Yunyoung Lee, Huisu Jang, Jaewook Lee*",
      venue: "Finance Research Letters, 47, 102784",
      type: "Blockchain",
      url: ""
    },
    {
      year: "2021",
      title: "Atomic cross-chain settlement model for central banks digital currency",
      authors: "Yunyoung Lee, Bumho Son, Huisu Jang, Junyoung Byun, Taeho Yoon, Jaewook Lee*",
      venue: "Information Sciences, 580, 838–856",
      type: "Blockchain",
      url: ""
    },
    {
      year: "2021",
      title: "A Survey on Security and Privacy in Blockchain-based Central Bank Digital Currencies",
      authors: "Yunyoung Lee, Bumho Son, Seongwan Park, Jaewook Lee, Huisu Jang*",
      venue: "Journal of Internet Services and Information Security, 11(3), 16–29",
      type: "Blockchain",
      url: ""
    }
  ],

  workingPapers: [
    {
      title: "Can Large Language Models Personalize Portfolio Construction?",
      status: "Working Paper",
      topic: "Financial AI"
    },
    {
      title: "Price-Adjusted Forecasting for Multi-Property Hotel Demand",
      status: "Working Paper",
      topic: "Forecasting"
    }
  ],

  news: [
    {
      date: "2026",
      category: "CONFERENCE",
      title: "FinNLP @ EMNLP 2026 paper accepted",
      text: "FIFA Lab research has been accepted to the FinNLP workshop at EMNLP 2026."
    },
    {
      date: "2026",
      category: "PROJECT",
      title: "New collaborative-robot on-device AI project",
      text: "FIFA Lab is expanding into Physical AI through a new on-device AI research project involving collaborative robots and industry collaboration with Doosan Robotics."
    },
    {
      date: "2025",
      category: "LAB",
      title: "New graduate students joined FIFA Lab",
      text: "FIFA Lab welcomed new M.S. students and continued weekly research supervision and seminars."
    }
  ],

  gallery: [
    // 사진 파일을 넣으면 아래 예시처럼 추가:
    // {
    //   image: "../assets/images/gallery-01.jpg",
    //   title: "Lab Seminar",
    //   date: "2026",
    //   caption: "Weekly FIFA Lab research seminar."
    // }
  ],

  join: {
    lead: "We are looking for curious and self-motivated students.",
    text:
      "FIFA Lab welcomes undergraduate researchers and graduate students interested in FinTech, forecasting, blockchain, decision intelligence, and emerging Physical AI research.",
    notes: [
      "Please send a short introduction, CV, transcript, and research interests by email.",
      "Undergraduate researchers considering graduate study in FIFA Lab are especially welcome.",
      "Research topics are discussed individually based on the student's interests and current lab projects."
    ]
  }
};
