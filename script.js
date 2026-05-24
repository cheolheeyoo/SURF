
document.documentElement.classList.add("js");

const SCHOLAR_LINKS = {
  en: "https://scholar.google.com/citations?user=P_pe0a8AAAAJ&hl=en",
  ko: "https://scholar.google.com/citations?user=P_pe0a8AAAAJ&hl=ko"
};

const PAGE_TITLES = {
  home: { en: "SURF Lab | Smart Urban Remote Sensing Futures", ko: "SURF Lab | 부산대학교 스마트시티 원격탐사 연구실" },
  professor: { en: "Professor | SURF Lab", ko: "교수 | SURF Lab" },
  research: { en: "Research | SURF Lab", ko: "연구 | SURF Lab" },
  publications: { en: "Publications | SURF Lab", ko: "논문 | SURF Lab" },
  members: { en: "Members | SURF Lab", ko: "구성원 | SURF Lab" },
  news: { en: "News | SURF Lab", ko: "소식 | SURF Lab" }
};

const LABELS = {
  copied: { en: "Copied!", ko: "복사됨!" },
  copyEmail: { en: "Copy email", ko: "이메일 복사" },
  noPublications: { en: "No publications match the current filters.", ko: "현재 필터와 일치하는 논문이 없습니다." },
  publicationCount: { en: (n) => `${n} publication${n === 1 ? "" : "s"} shown`, ko: (n) => `${n}건의 논문 표시` },
  newsCount: { en: (n) => `${n} news item${n === 1 ? "" : "s"} shown`, ko: (n) => `${n}건의 소식 표시` },
  noNews: { en: "No news items match this category.", ko: "이 카테고리에 해당하는 소식이 없습니다." },
  allYears: { en: "All years", ko: "전체 연도" },
  journal: { en: "Journal paper", ko: "저널 논문" },
  book: { en: "Book chapter", ko: "북 챕터" },
  lab: { en: "Lab", ko: "연구실" },
  publication: { en: "Publication", ko: "논문" },
  presentation: { en: "Presentation", ko: "발표" },
  award: { en: "Award & service", ko: "수상·학술활동" },
  readMore: { en: "Read more", ko: "자세히 보기" }
};

const PUBLICATIONS = [
  {
    year: 2026,
    type: "journal",
    title: { en: "Quantifying Multi-pollutant Co-exposure via Deep Learning-Based Simultaneous Prediction Using Geostationary Satellite Data", ko: "정지궤도 위성자료 기반 딥러닝 동시 예측을 통한 다중오염물질 동시 노출 정량화" },
    authors: "Kang, E., Jung, S., Im, J., Choi, H., Hwang, S., Yoo, C., and colleagues",
    venue: "Environmental Science & Technology",
    topics: { en: ["Air quality", "Geostationary satellite", "Deep learning"], ko: ["대기질", "정지궤도 위성", "딥러닝"] }
  },
  {
    year: 2026,
    type: "journal",
    title: { en: "From Heat Maps to Cooling Actions: AI-Driven Citywide Hourly Mapping of Thermal Stress, Drivers, and Targeted Cooling", ko: "열지도에서 냉각 액션으로: AI 기반 도시 전역 시간별 열스트레스·요인·맞춤형 냉각 지도화" },
    authors: "Jia, S., Yoo, C., Ou, Y., Chen, G., & Zhao, Q.",
    venue: "Sustainable Cities and Society, 107275",
    topics: { en: ["Urban heat", "Thermal stress", "Cooling actions"], ko: ["도시열", "열스트레스", "냉각 전략"] }
  },
  {
    year: 2025,
    type: "journal",
    title: { en: "Mapping 10-m Industrial Lands across 1000+ Global Large Cities, 2017–2023", ko: "2017–2023년 전 세계 1000개 이상 대도시의 10 m 산업용지 지도화" },
    authors: "Yoo, C., Zhou, Y., & Weng, Q.",
    venue: "Scientific Data 12, 1–13",
    topics: { en: ["Industrial land", "Global cities", "Urban carbon"], ko: ["산업용지", "전 세계 도시", "도시 탄소"] }
  },
  {
    year: 2025,
    type: "journal",
    title: { en: "Global investigation of pedestrian-level cooling and energy-saving potentials of green and cool roofs in 43 megacities", ko: "43개 메가시티의 보행자 수준 냉각 및 에너지 절감 잠재력 분석" },
    authors: "Jia, S., Weng, Q., Yoo, C., & Voogt, J. A.",
    venue: "Energy and Buildings, 115671",
    topics: { en: ["Cooling", "Green roofs", "Energy"], ko: ["냉각", "그린루프", "에너지"] }
  },
  {
    year: 2025,
    type: "journal",
    title: { en: "Irregular anisotropy in surface urban heat island footprint", ko: "지표 도시열섬 footprint의 불규칙 비등방성" },
    authors: "Yang, X., Song, Y., Yoo, C., Ren, K., & Wu, P.",
    venue: "Sustainable Cities and Society, 106779",
    topics: { en: ["Urban heat island", "Morphology", "Footprint"], ko: ["도시열섬", "도시 형태", "Footprint"] }
  },
  {
    year: 2025,
    type: "journal",
    title: { en: "Improved hourly all-sky land surface temperature estimation: Incorporating the temporal variability of cloud-radiation interactions", ko: "구름-복사 상호작용의 시간 변동성을 고려한 시간별 전천후 지표면온도 추정 개선" },
    authors: "Bae, D., Cho, D., Im, J., Yoo, C., Lee, Y., & Lee, S.",
    venue: "International Journal of Applied Earth Observation and Geoinformation 138, 104468",
    topics: { en: ["Land surface temperature", "Cloud effects", "Data fusion"], ko: ["지표면온도", "구름 영향", "데이터 융합"] }
  },
  {
    year: 2025,
    type: "journal",
    title: { en: "Nighttime satellite land surface temperature for urban applications: achievements, challenges, and future prospects", ko: "도시 응용을 위한 야간 위성 지표면온도: 성과, 도전과제, 전망" },
    authors: "Kim, Y., Yoo, C., & Im, J.",
    venue: "GIScience & Remote Sensing 62(1), 2527990",
    topics: { en: ["Nighttime LST", "Urban applications", "Remote sensing"], ko: ["야간 LST", "도시 응용", "원격탐사"] }
  },
  {
    year: 2025,
    type: "journal",
    title: { en: "A 3-dimension urban growth analysis using local climate zone mapping", ko: "지역기후대 지도화를 이용한 3차원 도시성장 분석" },
    authors: "Chen, H., Yoo, C., & Lo, J. T. Y.",
    venue: "GIScience & Remote Sensing 62(1), 2473158",
    topics: { en: ["Urban growth", "LCZ", "3D city"], ko: ["도시 성장", "지역기후대", "3차원 도시"] }
  },
  {
    year: 2024,
    type: "journal",
    title: { en: "Unequal impacts of urban industrial land expansion on economic growth and carbon dioxide emissions", ko: "도시 산업용지 확장이 경제성장과 이산화탄소 배출에 미치는 불균등한 영향" },
    authors: "Yoo, C., Xiao, H., Zhong, Q.-W., & Weng, Q.",
    venue: "Communications Earth & Environment 5, 203",
    topics: { en: ["Urban carbon", "Industrial land", "Economic growth"], ko: ["도시 탄소", "산업용지", "경제성장"] }
  },
  {
    year: 2024,
    type: "journal",
    title: { en: "An explainable AI framework for spatiotemporal risk factor analysis in public health: a case study of cardiovascular mortality in South Korea", ko: "공중보건 시공간 위험요인 분석을 위한 설명가능 AI 프레임워크: 한국 심혈관 사망 사례" },
    authors: "Kang, E., Cho, D., Lee, S., Im, J., Lee, D., & Yoo, C.",
    venue: "GIScience & Remote Sensing 61(1), 2436997",
    topics: { en: ["Explainable AI", "Public health", "Risk factors"], ko: ["설명가능 AI", "공중보건", "위험요인"] }
  },
  {
    year: 2024,
    type: "journal",
    title: { en: "Building energy savings by green roofs and cool roofs in current and future climates", ko: "현재 및 미래 기후에서 그린루프와 쿨루프의 건물 에너지 절감 효과" },
    authors: "Jia, S., Weng, Q., Yoo, C., Xiao, H., & Zhong, Q.",
    venue: "npj Urban Sustainability 4, 23",
    topics: { en: ["Green roofs", "Cool roofs", "Climate adaptation"], ko: ["그린루프", "쿨루프", "기후적응"] }
  },
  {
    year: 2024,
    type: "journal",
    title: { en: "Unveiling teleconnection drivers for heatwave prediction in South Korea using explainable artificial intelligence", ko: "설명가능 인공지능을 이용한 한국 폭염 예측의 원격상관 요인 규명" },
    authors: "Lee, Y., Cho, D., Im, J., Yoo, C., Lee, J., Ham, Y.-G., & Lee, M.-I.",
    venue: "npj Climate and Atmospheric Science 7, 176",
    topics: { en: ["Heatwaves", "Explainable AI", "Climate"], ko: ["폭염", "설명가능 AI", "기후"] }
  },
  {
    year: 2023,
    type: "journal",
    title: { en: "Diurnal urban heat risk assessment using extreme air temperatures and real-time population data in Seoul", ko: "서울의 극한기온과 실시간 인구자료를 이용한 주야간 도시 열위험 평가" },
    authors: "Yoo, C., Im, J., Weng, Q., Cho, D., Kang, E., & Shin, Y.",
    venue: "iScience 26(11), 108123",
    topics: { en: ["Urban heat risk", "Population exposure", "Seoul"], ko: ["도시 열위험", "인구 노출", "서울"] }
  },
  {
    year: 2020,
    type: "journal",
    title: { en: "Improving local climate zone classification using incomplete building data and Sentinel 2 images based on convolutional neural networks", ko: "불완전한 건물자료와 Sentinel-2 영상을 활용한 CNN 기반 지역기후대 분류 개선" },
    authors: "Yoo, C., Lee, Y., Cho, D., Im, J., & Han, D.",
    venue: "Remote Sensing 12(21), 3552",
    topics: { en: ["LCZ", "Sentinel-2", "CNN"], ko: ["지역기후대", "Sentinel-2", "CNN"] }
  },
  {
    year: 2019,
    type: "journal",
    title: { en: "Comparison between convolutional neural networks and random forest for local climate zone classification in mega urban areas using Landsat images", ko: "Landsat 영상을 이용한 대도시 지역기후대 분류에서 CNN과 Random Forest 비교" },
    authors: "Yoo, C., Han, D., Im, J., & Bechtel, B.",
    venue: "ISPRS Journal of Photogrammetry and Remote Sensing 157, 155–170",
    topics: { en: ["LCZ", "Landsat", "Deep learning"], ko: ["지역기후대", "Landsat", "딥러닝"] }
  },
  {
    year: 2018,
    type: "journal",
    title: { en: "Estimation of daily maximum and minimum air temperatures in urban landscapes using MODIS time series satellite data", ko: "MODIS 시계열 위성자료를 이용한 도시 지역 일 최고·최저기온 추정" },
    authors: "Yoo, C., Im, J., Park, S., & Quackenbush, L. J.",
    venue: "ISPRS Journal of Photogrammetry and Remote Sensing 137, 149–162",
    topics: { en: ["Air temperature", "MODIS", "Urban climate"], ko: ["기온", "MODIS", "도시기후"] }
  },
  {
    year: 2024,
    type: "book",
    title: { en: "GeoAI for High-Resolution Urban Air Temperature Estimation and Urban Heat Island Monitoring", ko: "고해상도 도시 기온 추정과 도시열섬 모니터링을 위한 GeoAI" },
    authors: "Yoo, C. & Weng, Q.",
    venue: "Handbook of Geospatial Approaches to Sustainable Cities, CRC Press",
    topics: { en: ["GeoAI", "Air temperature", "Urban heat island"], ko: ["GeoAI", "기온", "도시열섬"] }
  },
  {
    year: 2024,
    type: "book",
    title: { en: "Recent Improvements in Supervised Pixel-Based LCZ Classification", ko: "지도학습 기반 픽셀 단위 LCZ 분류의 최근 개선" },
    authors: "Chung, L. C. H. & Yoo, C.",
    venue: "Local Climate Zone Application in Sustainable Urban Development, Springer",
    topics: { en: ["LCZ", "Urban development", "Remote sensing"], ko: ["지역기후대", "도시개발", "원격탐사"] }
  }
];

const NEWS_ITEMS = [
  {
    date: "2026",
    category: "lab",
    title: { en: "SURF Lab opens at Pusan National University", ko: "부산대학교 SURF Lab 개소" },
    body: { en: "SURF Lab, Smart Urban Remote Sensing Futures, launches as 부산대학교 스마트시티 원격탐사 연구실 under the Smart City Convergence Major.", ko: "SURF Lab(Smart Urban Remote Sensing Futures)이 부산대학교 스마트시티 융합전공의 스마트시티 원격탐사 연구실로 출범했습니다." },
    link: "professor.html"
  },
  {
    date: "2026",
    category: "publication",
    title: { en: "New paper in Environmental Science & Technology", ko: "Environmental Science & Technology 논문 게재" },
    body: { en: "A deep learning-based framework quantifies multi-pollutant co-exposure using geostationary satellite data.", ko: "정지궤도 위성자료를 활용한 딥러닝 기반 다중오염물질 동시 노출 정량화 프레임워크 연구입니다." },
    link: "publications.html"
  },
  {
    date: "2026",
    category: "publication",
    title: { en: "AI-driven thermal stress mapping study published", ko: "AI 기반 열스트레스 지도화 연구 게재" },
    body: { en: "The study From Heat Maps to Cooling Actions presents citywide hourly thermal stress, drivers, and targeted cooling strategies.", ko: "From Heat Maps to Cooling Actions 연구는 도시 전역 시간별 열스트레스, 주요 요인, 맞춤형 냉각 전략을 제시합니다." },
    link: "publications.html"
  },
  {
    date: "2025",
    category: "publication",
    title: { en: "Global 10-m industrial land dataset published in Scientific Data", ko: "Scientific Data에 전 세계 10 m 산업용지 데이터셋 게재" },
    body: { en: "The study maps industrial lands across 1000+ global large cities from 2017 to 2023, supporting urban carbon and development studies.", ko: "2017–2023년 전 세계 1000개 이상 대도시의 산업용지를 지도화하여 도시 탄소와 개발 연구를 지원합니다." },
    link: "publications.html"
  },
  {
    date: "2025",
    category: "presentation",
    title: { en: "AGU 2025 oral presentation on urban heat across Indian cities", ko: "AGU 2025 인도 도시열 연구 구두 발표" },
    body: { en: "Cheolhee Yoo presented decadal trends in urban heat across Indian cities, linking local climate zones and urban growth to UHI intensification.", ko: "인도 도시의 장기 도시열 변화와 지역기후대·도시성장이 도시열섬 강화에 미치는 영향을 발표했습니다." },
    link: "news.html"
  },
  {
    date: "2024",
    category: "publication",
    title: { en: "Industrial land expansion, growth, and CO₂ paper published", ko: "산업용지 확장·경제성장·CO₂ 배출 논문 게재" },
    body: { en: "The Communications Earth & Environment paper examines unequal impacts of urban industrial land expansion on economic growth and carbon dioxide emissions.", ko: "Communications Earth & Environment 논문은 도시 산업용지 확장이 경제성장과 이산화탄소 배출에 미치는 불균등한 영향을 분석합니다." },
    link: "publications.html"
  },
  {
    date: "2024",
    category: "presentation",
    title: { en: "ISEE poster on diurnal urban heat risk assessment", ko: "ISEE 도시 열위험 평가 포스터 발표" },
    body: { en: "The presentation highlighted extreme air temperatures and real-time population data for urban heat risk assessment in Seoul, South Korea.", ko: "서울의 극한기온과 실시간 인구자료를 활용한 주야간 도시 열위험 평가 연구를 발표했습니다." },
    link: "news.html"
  },
  {
    date: "2023",
    category: "award",
    title: { en: "Highly Cited Paper Award from the Korean Society of Remote Sensing", ko: "대한원격탐사학회 Highly Cited Paper Award 수상" },
    body: { en: "Recognition for high-impact work in remote sensing and urban climate science.", ko: "원격탐사 및 도시기후 분야의 영향력 있는 연구 성과를 인정받았습니다." },
    link: "professor.html"
  },
  {
    date: "2021–2022",
    category: "award",
    title: { en: "Top reviewer recognition from ISPRS Journal of Photogrammetry and Remote Sensing", ko: "ISPRS Journal of Photogrammetry and Remote Sensing 우수 리뷰어 선정" },
    body: { en: "Recognized among top reviewers for the ISPRS Journal of Photogrammetry and Remote Sensing for both 2021 and 2022.", ko: "2021년과 2022년 모두 ISPRS Journal of Photogrammetry and Remote Sensing의 우수 리뷰어로 선정되었습니다." },
    link: "professor.html"
  }
];

const RESEARCH_THEMES = {
  "urban-heat": {
    title: { en: "Urban heat risk & thermal adaptation", ko: "도시열 위험과 열 적응" },
    body: { en: "We combine satellite thermal observations, air temperature modeling, population exposure, and urban morphology data to identify where heat risk emerges and how cooling interventions can be targeted.", ko: "위성 열 관측, 기온 모델링, 인구 노출, 도시 형태 자료를 결합하여 열위험이 발생하는 위치와 맞춤형 냉각 개입 전략을 분석합니다." },
    tags: { en: ["Air temperature", "LST", "Heat exposure", "Cooling actions"], ko: ["기온", "지표면온도", "폭염 노출", "냉각 전략"] }
  },
  geoai: {
    title: { en: "GeoAI & explainable urban intelligence", ko: "GeoAI와 설명가능 도시지능" },
    body: { en: "We build deep learning, ensemble learning, and explainable AI workflows that translate heterogeneous urban observations into interpretable geospatial intelligence.", ko: "딥러닝, 앙상블 학습, 설명가능 AI 워크플로우를 개발하여 다양한 도시 관측자료를 해석 가능한 지리공간 지능으로 전환합니다." },
    tags: { en: ["Deep learning", "Explainable AI", "Spatiotemporal models"], ko: ["딥러닝", "설명가능 AI", "시공간 모델"] }
  },
  lcz: {
    title: { en: "LCZ mapping & urban morphology", ko: "지역기후대와 도시 형태" },
    body: { en: "We map local climate zones and urban form using satellite images, building information, and machine learning to link land patterns with climate outcomes.", ko: "위성영상, 건물정보, 머신러닝을 활용하여 지역기후대와 도시 형태를 지도화하고 토지 패턴과 기후 결과를 연결합니다." },
    tags: { en: ["Local Climate Zones", "Urban form", "Landsat", "Sentinel"], ko: ["지역기후대", "도시 형태", "Landsat", "Sentinel"] }
  },
  carbon: {
    title: { en: "Urban carbon & industrial land dynamics", ko: "도시 탄소와 산업용지 변화" },
    body: { en: "We study how industrial land expansion and urban growth influence economic outcomes and carbon emissions across cities and development contexts.", ko: "산업용지 확장과 도시성장이 도시 및 발전 단계별 경제성과와 탄소배출에 미치는 영향을 연구합니다." },
    tags: { en: ["Industrial land", "Carbon emissions", "Global cities"], ko: ["산업용지", "탄소배출", "전 세계 도시"] }
  },
  fusion: {
    title: { en: "All-sky temperature & data fusion", ko: "전천후 온도와 데이터 융합" },
    body: { en: "We develop methods to reconstruct and downscale temperature fields by integrating optical, thermal, meteorological, and geospatial datasets under cloudy and all-sky conditions.", ko: "구름 및 전천후 조건에서 광학·열·기상·지리공간 자료를 통합하여 온도장을 복원하고 상세화하는 방법을 개발합니다." },
    tags: { en: ["Data fusion", "Cloud effects", "Downscaling", "MODIS"], ko: ["데이터 융합", "구름 영향", "상세화", "MODIS"] }
  },
  decision: {
    title: { en: "Smart city environmental decision support", ko: "스마트시티 환경 의사결정 지원" },
    body: { en: "We translate model outputs into maps, indicators, and evidence that can inform urban planning, climate adaptation, environmental management, and public health decisions.", ko: "모델 결과를 도시계획, 기후적응, 환경관리, 공중보건 의사결정에 활용 가능한 지도, 지표, 근거로 전환합니다." },
    tags: { en: ["Planning", "Policy", "Risk assessment", "Dashboards"], ko: ["도시계획", "정책", "위험평가", "대시보드"] }
  }
};

let currentLang = "en";

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("lang");
  if (["en", "ko"].includes(fromQuery)) return fromQuery;
  try {
    const stored = localStorage.getItem("surf-lang");
    if (["en", "ko"].includes(stored)) return stored;
  } catch (error) {
    // Local files or strict privacy settings can disable localStorage.
  }
  return "en";
}

function applyLanguage(lang) {
  currentLang = lang === "ko" ? "ko" : "en";
  document.documentElement.dataset.siteLang = currentLang;
  document.documentElement.lang = currentLang;
  try {
    localStorage.setItem("surf-lang", currentLang);
  } catch (error) {
    // Continue without persistence if storage is unavailable.
  }

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    const active = button.dataset.langButton === currentLang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-placeholder-en]").forEach((el) => {
    el.setAttribute("placeholder", el.dataset[currentLang === "ko" ? "placeholderKo" : "placeholderEn"] || "");
  });

  document.querySelectorAll("option[data-option-en]").forEach((option) => {
    option.textContent = option.dataset[currentLang === "ko" ? "optionKo" : "optionEn"] || option.textContent;
  });

  document.querySelectorAll("[data-scholar-link]").forEach((link) => {
    link.href = SCHOLAR_LINKS[currentLang];
  });

  const page = document.body.dataset.page || "home";
  if (PAGE_TITLES[page]) document.title = PAGE_TITLES[page][currentLang];

  renderPublications();
  renderNews();
}

function setupLanguageButtons() {
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
  });
}

function setupNav() {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const hrefFile = link.getAttribute("href").split("#")[0];
    link.classList.toggle("is-active", hrefFile === currentFile);
  });
}

function setupScrollEffects() {
  const header = document.querySelector("[data-header]");
  const progress = document.querySelector("[data-progress]");
  const onScroll = () => {
    const top = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("is-scrolled", top > 18);
    if (progress) {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const width = scrollHeight > 0 ? (top / scrollHeight) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, width))}%`;
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const revealItems = document.querySelectorAll("[data-reveal]");
  revealItems.forEach((el) => {
    if (el.dataset.delay) el.style.setProperty("--delay", `${el.dataset.delay}ms`);
  });
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((el) => observer.observe(el));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const animate = (el) => {
    const target = Number(el.dataset.count) || 0;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min(1, (timestamp - start) / 900);
      el.textContent = Math.round(target * progress).toString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach((counter) => observer.observe(counter));
}

function setupCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        }
        button.textContent = LABELS.copied[currentLang];
      } catch (error) {
        window.prompt("Copy email", text);
      }
      setTimeout(() => {
        button.innerHTML = `<span data-lang-en>${LABELS.copyEmail.en}</span><span data-lang-ko>${LABELS.copyEmail.ko}</span>`;
        applyLanguage(currentLang);
      }, 1400);
    });
  });
}

function setupPublicationsPage() {
  const list = document.querySelector("[data-publications-list]");
  if (!list) return;
  const years = Array.from(new Set(PUBLICATIONS.map((item) => item.year))).sort((a, b) => b - a);
  const yearFilter = document.querySelector("#yearFilter");
  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    yearFilter.appendChild(option);
  });
  ["#publicationSearch", "#yearFilter", "#typeFilter"].forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) element.addEventListener("input", renderPublications);
    if (element) element.addEventListener("change", renderPublications);
  });
}

function renderPublications() {
  const list = document.querySelector("[data-publications-list]");
  if (!list) return;
  const query = (document.querySelector("#publicationSearch")?.value || "").trim().toLowerCase();
  const year = document.querySelector("#yearFilter")?.value || "all";
  const type = document.querySelector("#typeFilter")?.value || "all";

  const filtered = PUBLICATIONS.filter((item) => {
    const haystack = [
      item.title.en, item.title.ko, item.authors, item.venue,
      ...(item.topics.en || []), ...(item.topics.ko || [])
    ].join(" ").toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesYear = year === "all" || String(item.year) === year;
    const matchesType = type === "all" || item.type === type;
    return matchesQuery && matchesYear && matchesType;
  });

  const count = document.querySelector("[data-publication-count]");
  if (count) count.textContent = LABELS.publicationCount[currentLang](filtered.length);

  if (!filtered.length) {
    list.innerHTML = `<article class="publication-card"><p>${LABELS.noPublications[currentLang]}</p></article>`;
    return;
  }

  list.innerHTML = filtered.map((item) => {
    const typeLabel = LABELS[item.type]?.[currentLang] || item.type;
    const topics = item.topics[currentLang].map((topic) => `<span>${escapeHtml(topic)}</span>`).join("");
    return `
      <article class="publication-card">
        <div class="publication-head">
          <div>
            <p class="eyebrow">${escapeHtml(typeLabel)}</p>
            <h3>${escapeHtml(item.title[currentLang])}</h3>
          </div>
          <span class="publication-year">${item.year}</span>
        </div>
        <p>${escapeHtml(item.authors)}</p>
        <p class="venue">${escapeHtml(item.venue)}</p>
        <div class="publication-topics">${topics}</div>
      </article>`;
  }).join("");
}

function setupNewsPage() {
  const list = document.querySelector("[data-news-list]");
  if (!list) return;
  document.querySelectorAll("[data-news-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-news-filter]").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderNews();
    });
  });
}

function renderNews() {
  const list = document.querySelector("[data-news-list]");
  if (!list) return;
  const active = document.querySelector("[data-news-filter].active")?.dataset.newsFilter || "all";
  const filtered = NEWS_ITEMS.filter((item) => active === "all" || item.category === active);
  const count = document.querySelector("[data-news-count]");
  if (count) count.textContent = LABELS.newsCount[currentLang](filtered.length);

  if (!filtered.length) {
    list.innerHTML = `<article class="news-card"><p>${LABELS.noNews[currentLang]}</p></article>`;
    return;
  }

  list.innerHTML = filtered.map((item) => {
    const category = LABELS[item.category]?.[currentLang] || item.category;
    return `
      <article class="news-card">
        <div class="news-meta"><span>${escapeHtml(category)}</span><span>${escapeHtml(item.date)}</span></div>
        <div>
          <h3>${escapeHtml(item.title[currentLang])}</h3>
          <p>${escapeHtml(item.body[currentLang])}</p>
          <a class="text-button" href="${escapeHtml(item.link)}">${LABELS.readMore[currentLang]} →</a>
        </div>
      </article>`;
  }).join("");
}

function setupResearchModal() {
  const modal = document.querySelector("[data-modal]");
  if (!modal) return;
  const heading = modal.querySelector("[data-modal-heading]");
  const body = modal.querySelector("[data-modal-body]");
  const tags = modal.querySelector("[data-modal-tags]");
  const openModal = (key) => {
    const theme = RESEARCH_THEMES[key];
    if (!theme) return;
    heading.textContent = theme.title[currentLang];
    body.textContent = theme.body[currentLang];
    tags.innerHTML = theme.tags[currentLang].map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  document.querySelectorAll("[data-open-research]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.openResearch));
  });
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageButtons();
  setupNav();
  setupScrollEffects();
  setupCounters();
  setupCopyButtons();
  setupPublicationsPage();
  setupNewsPage();
  setupResearchModal();
  applyLanguage(getInitialLanguage());
});
