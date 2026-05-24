const SCHOLAR_URL = "https://scholar.google.com/citations?user=P_pe0a8AAAAJ&hl=ko";

const publications = [
  {
    year: 2026,
    type: "journal",
    title: "Quantifying Multi-pollutant Co-exposure via Deep Learning-Based Simultaneous Prediction Using Geostationary Satellite Data",
    authors: "Kang, E., Jung, S., Im, J., Choi, H., Hwang, S., Yoo, C., and colleagues",
    venue: "Environmental Science & Technology",
    topics: ["Air quality", "Geostationary satellite", "Deep learning"]
  },
  {
    year: 2026,
    type: "journal",
    title: "From Heat Maps to Cooling Actions: AI-Driven Citywide Hourly Mapping of Thermal Stress, Drivers, and Targeted Cooling",
    authors: "Jia, S., Yoo, C., Ou, Y., Chen, G., & Zhao, Q.",
    venue: "Sustainable Cities and Society, 107275",
    topics: ["Urban heat", "Thermal stress", "Cooling actions"]
  },
  {
    year: 2025,
    type: "journal",
    title: "Mapping 10-m Industrial Lands across 1000+ Global Large Cities, 2017–2023",
    authors: "Yoo, C., Zhou, Y., & Weng, Q.",
    venue: "Scientific Data 12, 1–13",
    topics: ["Industrial land", "Global cities", "Urban carbon"]
  },
  {
    year: 2025,
    type: "journal",
    title: "Global investigation of pedestrian-level cooling and energy-saving potentials of green and cool roofs in 43 megacities",
    authors: "Jia, S., Weng, Q., Yoo, C., & Voogt, J. A.",
    venue: "Energy and Buildings, 115671",
    topics: ["Cooling", "Green roofs", "Energy"]
  },
  {
    year: 2025,
    type: "journal",
    title: "Irregular anisotropy in surface urban heat island footprint",
    authors: "Yang, X., Song, Y., Yoo, C., Ren, K., & Wu, P.",
    venue: "Sustainable Cities and Society, 106779",
    topics: ["Urban heat island", "Morphology", "Footprint"]
  },
  {
    year: 2025,
    type: "journal",
    title: "Improved hourly all-sky land surface temperature estimation: Incorporating the temporal variability of cloud-radiation interactions",
    authors: "Bae, D., Cho, D., Im, J., Yoo, C., Lee, Y., & Lee, S.",
    venue: "International Journal of Applied Earth Observation and Geoinformation 138, 104468",
    topics: ["Land surface temperature", "Cloud effects", "Data fusion"]
  },
  {
    year: 2025,
    type: "journal",
    title: "Nighttime satellite land surface temperature for urban applications: achievements, challenges, and future prospects",
    authors: "Kim, Y., Yoo, C., & Im, J.",
    venue: "GIScience & Remote Sensing 62(1), 2527990",
    topics: ["Nighttime LST", "Urban applications", "Remote sensing"]
  },
  {
    year: 2025,
    type: "journal",
    title: "A 3-dimension urban growth analysis using local climate zone mapping",
    authors: "Chen, H., Yoo, C., & Lo, J. T. Y.",
    venue: "GIScience & Remote Sensing 62(1), 2473158",
    topics: ["Urban growth", "LCZ", "3D city"]
  },
  {
    year: 2024,
    type: "journal",
    title: "Unequal impacts of urban industrial land expansion on economic growth and carbon dioxide emissions",
    authors: "Yoo, C., Xiao, H., Zhong, Q.-W., & Weng, Q.",
    venue: "Communications Earth & Environment 5, 203",
    topics: ["Urban carbon", "Industrial land", "Economic growth"]
  },
  {
    year: 2024,
    type: "journal",
    title: "An explainable AI framework for spatiotemporal risk factor analysis in public health: a case study of cardiovascular mortality in South Korea",
    authors: "Kang, E., Cho, D., Lee, S., Im, J., Lee, D., & Yoo, C.",
    venue: "GIScience & Remote Sensing 61(1), 2436997",
    topics: ["Explainable AI", "Public health", "Risk factors"]
  },
  {
    year: 2024,
    type: "journal",
    title: "Building energy savings by green roofs and cool roofs in current and future climates",
    authors: "Jia, S., Weng, Q., Yoo, C., Xiao, H., & Zhong, Q.",
    venue: "npj Urban Sustainability 4, 23",
    topics: ["Green roofs", "Cool roofs", "Climate adaptation"]
  },
  {
    year: 2024,
    type: "journal",
    title: "Unveiling teleconnection drivers for heatwave prediction in South Korea using explainable artificial intelligence",
    authors: "Lee, Y., Cho, D., Im, J., Yoo, C., Lee, J., Ham, Y.-G., & Lee, M.-I.",
    venue: "npj Climate and Atmospheric Science 7, 176",
    topics: ["Heatwaves", "Explainable AI", "Climate"]
  },
  {
    year: 2023,
    type: "journal",
    title: "Diurnal urban heat risk assessment using extreme air temperatures and real-time population data in Seoul",
    authors: "Yoo, C., Im, J., Weng, Q., Cho, D., Kang, E., & Shin, Y.",
    venue: "iScience 26(11), 108123",
    topics: ["Urban heat risk", "Population exposure", "Seoul"]
  },
  {
    year: 2020,
    type: "journal",
    title: "Improving local climate zone classification using incomplete building data and Sentinel 2 images based on convolutional neural networks",
    authors: "Yoo, C., Lee, Y., Cho, D., Im, J., & Han, D.",
    venue: "Remote Sensing 12(21), 3552",
    topics: ["LCZ", "Sentinel-2", "CNN"]
  },
  {
    year: 2019,
    type: "journal",
    title: "Comparison between convolutional neural networks and random forest for local climate zone classification in mega urban areas using Landsat images",
    authors: "Yoo, C., Han, D., Im, J., & Bechtel, B.",
    venue: "ISPRS Journal of Photogrammetry and Remote Sensing 157, 155–170",
    topics: ["LCZ", "Landsat", "Deep learning"]
  },
  {
    year: 2018,
    type: "journal",
    title: "Estimation of daily maximum and minimum air temperatures in urban landscapes using MODIS time series satellite data",
    authors: "Yoo, C., Im, J., Park, S., & Quackenbush, L. J.",
    venue: "ISPRS Journal of Photogrammetry and Remote Sensing 137, 149–162",
    topics: ["Air temperature", "MODIS", "Urban climate"]
  },
  {
    year: 2024,
    type: "book",
    title: "GeoAI for High-Resolution Urban Air Temperature Estimation and Urban Heat Island Monitoring",
    authors: "Yoo, C. & Weng, Q.",
    venue: "Handbook of Geospatial Approaches to Sustainable Cities, CRC Press",
    topics: ["GeoAI", "Air temperature", "Urban heat island"]
  },
  {
    year: 2024,
    type: "book",
    title: "Recent Improvements in Supervised Pixel-Based LCZ Classification",
    authors: "Chung, L. C. H. & Yoo, C.",
    venue: "Local Climate Zone Application in Sustainable Urban Development, Springer",
    topics: ["LCZ", "Urban development", "Remote sensing"]
  }
];

const newsItems = [
  {
    date: "2026",
    category: "lab",
    title: "SURF Lab opens at Pusan National University",
    body: "SURF Lab, Smart Urban Remote Sensing Futures, launches as 부산대학교 스마트시티 원격탐사 연구실 under the Smart City Convergence Major.",
    link: "professor.html"
  },
  {
    date: "2026",
    category: "publication",
    title: "New paper in Environmental Science & Technology",
    body: "A deep learning-based framework quantifies multi-pollutant co-exposure using geostationary satellite data.",
    link: "publications.html"
  },
  {
    date: "2026",
    category: "publication",
    title: "AI-driven thermal stress mapping study published",
    body: "The study From Heat Maps to Cooling Actions presents citywide hourly thermal stress, drivers, and targeted cooling strategies.",
    link: "publications.html"
  },
  {
    date: "2025",
    category: "publication",
    title: "Global 10-m industrial land dataset published in Scientific Data",
    body: "The study maps industrial lands across 1000+ global large cities from 2017 to 2023, supporting urban carbon and development studies.",
    link: "publications.html"
  },
  {
    date: "2025",
    category: "presentation",
    title: "AGU 2025 oral presentation on urban heat across Indian cities",
    body: "Cheolhee Yoo presented decadal trends in urban heat across Indian cities, linking local climate zones and urban growth to UHI intensification.",
    link: "news.html"
  },
  {
    date: "2024",
    category: "publication",
    title: "Industrial land expansion, growth, and CO₂ paper published",
    body: "The Communications Earth & Environment paper examines unequal impacts of urban industrial land expansion on economic growth and carbon dioxide emissions.",
    link: "publications.html"
  },
  {
    date: "2024",
    category: "presentation",
    title: "ISEE poster on diurnal urban heat risk assessment",
    body: "The presentation highlighted extreme air temperatures and real-time population data for urban heat risk assessment in Seoul, South Korea.",
    link: "news.html"
  },
  {
    date: "2023",
    category: "award",
    title: "Highly Cited Paper Award from the Korean Society of Remote Sensing",
    body: "Recognition for high-impact work in remote sensing and urban climate science.",
    link: "professor.html"
  },
  {
    date: "2021–2022",
    category: "award",
    title: "Top reviewer recognition from ISPRS Journal of Photogrammetry and Remote Sensing",
    body: "Recognized among top reviewers for the ISPRS Journal of Photogrammetry and Remote Sensing for both 2021 and 2022.",
    link: "professor.html"
  }
];

(function init() {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("surf-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = storedTheme || (prefersDark ? "dark" : "light");

  setupHeader();
  setupThemeToggle();
  setupActiveNav();
  setupReveal();
  setupCopyButtons();
  setupModal();
  setupPublicationBrowser();
  setupNewsBrowser();
})();

function setupHeader() {
  const header = document.querySelector("[data-header]");
  const progress = document.querySelector("[data-progress]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");

  const update = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = `${percent}%`;
    }
  };
  update();
  window.addEventListener("scroll", update, { passive: true });

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function setupThemeToggle() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;
  const icon = button.querySelector(".theme-toggle__icon");
  const updateIcon = () => {
    icon.textContent = document.documentElement.dataset.theme === "dark" ? "☼" : "◐";
  };
  updateIcon();
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("surf-theme", next);
    updateIcon();
  });
}

function setupActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav] a").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === current) link.classList.add("active");
  });
}

function setupReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  items.forEach((item) => {
    const delay = item.getAttribute("data-delay");
    if (delay) item.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
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

  items.forEach((item) => observer.observe(item));
  animateCounters();
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count || 0);
      let start = 0;
      const duration = 900;
      const started = performance.now();
      const step = (now) => {
        const progress = Math.min((now - started) / duration, 1);
        start = Math.floor(progress * target);
        element.textContent = start.toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.unobserve(element);
    });
  }, { threshold: 0.45 });
  counters.forEach((counter) => observer.observe(counter));
}

function setupCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
        showToast("Email copied");
      } catch {
        showToast(text);
      }
    });
  });
}

function setupModal() {
  const dialog = document.querySelector("[data-modal]");
  if (!dialog) return;
  const title = dialog.querySelector("[data-modal-heading]");
  const content = dialog.querySelector("[data-modal-content]");
  const tags = dialog.querySelector("[data-modal-tags]");

  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-modal-title]");
      if (!card) return;
      title.textContent = card.dataset.modalTitle;
      content.textContent = card.dataset.modalBody;
      tags.innerHTML = (card.dataset.modalTags || "")
        .split(",")
        .filter(Boolean)
        .map((tag) => `<span>${escapeHtml(tag.trim())}</span>`)
        .join("");
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    });
  });

  dialog.querySelector("[data-close-modal]")?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });
}

function setupPublicationBrowser() {
  const list = document.querySelector("[data-publication-list]");
  if (!list) return;

  const search = document.querySelector("[data-publication-search]");
  const year = document.querySelector("[data-publication-year]");
  const type = document.querySelector("[data-publication-type]");
  const count = document.querySelector("[data-publication-count]");

  const years = [...new Set(publications.map((pub) => pub.year))].sort((a, b) => b - a);
  years.forEach((y) => {
    const option = document.createElement("option");
    option.value = String(y);
    option.textContent = String(y);
    year?.append(option);
  });

  const render = () => {
    const keyword = (search?.value || "").trim().toLowerCase();
    const selectedYear = year?.value || "all";
    const selectedType = type?.value || "all";

    const filtered = publications.filter((pub) => {
      const haystack = `${pub.title} ${pub.authors} ${pub.venue} ${pub.topics.join(" ")}`.toLowerCase();
      const matchesKeyword = !keyword || haystack.includes(keyword);
      const matchesYear = selectedYear === "all" || String(pub.year) === selectedYear;
      const matchesType = selectedType === "all" || pub.type === selectedType;
      return matchesKeyword && matchesYear && matchesType;
    });

    count.textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;
    list.innerHTML = filtered.map((pub) => `
      <article class="publication-item" data-reveal>
        <div class="publication-year">${pub.year}</div>
        <div>
          <h3>${escapeHtml(pub.title)}</h3>
          <p>${escapeHtml(pub.authors)}</p>
          <p><strong>${escapeHtml(pub.venue)}</strong></p>
          <div class="publication-meta">
            <span class="tag">${pub.type === "journal" ? "Journal" : "Book chapter"}</span>
            ${pub.topics.map((topic) => `<span class="tag">${escapeHtml(topic)}</span>`).join("")}
          </div>
        </div>
        <a class="publication-link" href="${SCHOLAR_URL}" target="_blank" rel="noopener">Scholar ↗</a>
      </article>
    `).join("");

    list.querySelectorAll("[data-reveal]").forEach((item) => requestAnimationFrame(() => item.classList.add("is-visible")));
  };

  [search, year, type].forEach((el) => el?.addEventListener("input", render));
  render();
}

function setupNewsBrowser() {
  const list = document.querySelector("[data-news-list]");
  if (!list) return;

  const tabs = document.querySelector("[data-news-tabs]");
  const search = document.querySelector("[data-news-search]");
  const count = document.querySelector("[data-news-count]");
  let active = "all";

  const render = () => {
    const keyword = (search?.value || "").trim().toLowerCase();
    const filtered = newsItems.filter((item) => {
      const haystack = `${item.date} ${item.category} ${item.title} ${item.body}`.toLowerCase();
      const matchesCategory = active === "all" || item.category === active;
      const matchesKeyword = !keyword || haystack.includes(keyword);
      return matchesCategory && matchesKeyword;
    });

    count.textContent = `${filtered.length} update${filtered.length === 1 ? "" : "s"}`;
    list.innerHTML = filtered.map((item) => `
      <article class="news-item" data-reveal>
        <div class="news-item__top">
          <span class="tag">${categoryLabel(item.category)}</span>
          <time>${escapeHtml(item.date)}</time>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
        <a class="publication-link" href="${escapeHtml(item.link)}">Read more</a>
      </article>
    `).join("");

    list.querySelectorAll("[data-reveal]").forEach((item) => requestAnimationFrame(() => item.classList.add("is-visible")));
  };

  tabs?.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      active = button.dataset.filter || "all";
      tabs.querySelectorAll("button").forEach((btn) => btn.classList.toggle("active", btn === button));
      render();
    });
  });
  search?.addEventListener("input", render);
  render();
}

function categoryLabel(category) {
  const labels = {
    publication: "Publication",
    presentation: "Presentation",
    lab: "Lab",
    award: "Award & service"
  };
  return labels[category] || category;
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
