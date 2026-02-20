/* ========================================
   LYG Portfolio - 이윤건 자기소개 페이지
   Interactive Script (Pure Vanilla JS)
   Refactored: scroll 통합, 안전한 DOM, Page Visibility API
   ======================================== */

// =====================
// 1. Project Data (프로젝트 데이터)
// =====================
const projects = [
    {
        id: 1, title: "정산서 자동화",
        desc: "Python을 활용한 회사 정산서 자동화 프로그램. 반복 업무를 효율적으로 처리.",
        fullDesc: "Python으로 개발한 회사 정산서 자동화 프로그램입니다. 반복적인 정산 업무를 자동화하여 업무 효율을 향상시켰습니다. 데이터 처리, 엑셀 파일 자동 생성 등의 기능을 구현했습니다.",
        type: "personal", techs: ["Python", "Excel"], period: "2025.05-2025.10",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["정산 업무 자동화", "데이터 처리 & 파싱", "엑셀 파일 자동 생성", "업무 효율 향상"]
    },
    {
        id: 2, title: "Is_It_Legal",
        desc: "Gemini API를 활용한 법률 판별 서비스. lawornot.com에서 서비스 중.",
        fullDesc: "Google Gemini API를 활용하여 법률 관련 질문에 답변하는 웹 서비스입니다. 사용자의 행위가 합법인지 불법인지를 AI로 판별해주며, 실제로 lawornot.com에서 서비스되고 있습니다.",
        type: "personal", techs: ["Gemini API", "React"], period: "2026.01-2026.02",
        role: "1인 개발", teamSize: "1명 (개인)", link: "https://www.lawornot.com/",
        highlights: ["Gemini API 연동", "법률 판별 AI 서비스", "실제 서비스 배포 (lawornot.com)", "사용자 친화적 UI/UX"]
    },
    {
        id: 3, title: "TopDown-Shooting",
        desc: "탑다운 시점의 슈팅 게임. 조작감과 타격감에 집중한 프로젝트.",
        fullDesc: "탑다운 시점에서 플레이하는 슈팅 게임입니다. 난수 생성, 다양한 무기 시스템, 적 AI 등을 구현하며 쾌적한 조작감과 타격감에 집중했습니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2024.09-2024.10",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["탑다운 카메라 & 에이밍", "다양한 무기 시스템", "적 AI & 스폰 시스템", "이펙트 & 타격감 연출"]
    },
    {
        id: 4, title: "Tetris",
        desc: "테트리스를 Unity로 구현한 개인 프로젝트 작품.",
        fullDesc: "클래식 테트리스를 Unity로 구현한 개인 프로젝트입니다. 테트로미노 회전, 라인 클리어, 점수 시스템 등 핵심 메카닉을 직접 설계하고 구현했습니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2025.01-2025.04",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["테트로미노 회전 & 이동 시스템", "라인 클리어 & 점수 시스템", "고스트 피스 & 홀드 기능", "클래식 게임 재현"]
    },
    {
        id: 5, title: "Phencyclidine",
        desc: "경기도 x 퓨처랩 게임잼 출품작. Smilegate 오피스에서 진행.",
        fullDesc: "경기도와 퓨처랩이 주관하고 Smilegate 오피스에서 진행된 청소년 게임잼에 참가하여 제작한 작품입니다. 짧은 시간 안에 기획부터 완성까지 팀워크를 발휘하며 게임을 개발했습니다.",
        type: "competition", techs: ["Unity", "C#"], period: "2024.10.31",
        role: "참가자", teamSize: "팀",
        highlights: ["Smilegate 오피스 현장", "경기도 x 퓨처랩 게임잼", "기획 → 개발 → 발표", "팀워크 & 빠른 프로토타이핑"]
    },
    {
        id: 6, title: "Bouncy_BALL",
        desc: "통통 튀는 공을 활용한 게임. 물리 엔진 기반 역동적인 플레이.",
        fullDesc: "물리 엔진을 활용한 공 튀기기 게임입니다. 리얼한 물리 시뮬레이션과 재미있는 게임플레이를 결합하여, 직관적인 조작과 물리 기반 인터랙션을 구현했습니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2024.01-2024.04",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["물리 엔진 기반 게임플레이", "공 물리 시뮬레이션", "직관적 조작 시스템", "스테이지 설계"]
    },
    {
        id: 7, title: "Tower_Defanse",
        desc: "타워 디펜스 장르의 전략 게임. 타워 배치, 적 경로, 웨이브 시스템 구현.",
        fullDesc: "클래식 타워 디펜스 장르의 전략 게임입니다. 다양한 종류의 타워 배치 시스템, 적 경로 탐색(Pathfinding), 웨이브 기반 스폰 시스템을 구현했습니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2024.12-2025.01",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["타워 배치 & 업그레이드 시스템", "적 경로 탐색 알고리즘", "웨이브 스폰 시스템", "전략적 밸런싱"]
    },
    {
        id: 8, title: "wmz_puzzle",
        desc: "SBS게임아카데미에서 팀으로 진행한 퍼즐 게임. 기획부터 개발까지 협업.",
        fullDesc: "SBS게임아카데미에서 팀 프로젝트로 진행한 퍼즐 게임입니다. 기획, 레벨 디자인, 게임 메카닉 구현까지 전반적인 개발에 참여하며 팀 협업과 프로젝트 관리를 경험했습니다.",
        type: "team", techs: ["Unity", "C#"], period: "2024.01-2025.04",
        role: "게임 개발자", teamSize: "팀",
        highlights: ["퍼즐 메카닉 설계 및 구현", "레벨 디자인 참여", "팀 협업 & 버전 관리", "SBS게임아카데미 프로젝트"]
    },
    {
        id: 9, title: "3D Action Game",
        desc: "3인칭 3D 액션 게임. 캐릭터 컨트롤러, 전투 시스템, 적 AI를 구현.",
        fullDesc: "Unity 기반의 3인칭 3D 액션 게임으로, 캐릭터 이동 및 전투 시스템, 적 AI, 애니메이션 상태 머신 등을 직접 구현했습니다. 물리 엔진과 연동한 타격감 있는 전투를 목표로 개발했습니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2024.04-2024.06",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["3인칭 캐릭터 컨트롤러", "콤보 기반 전투 시스템", "적 AI (FSM 패턴)", "애니메이션 상태 머신"]
    }
];

// =====================
// 2. Utilities
// =====================
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// 텍스트 이스케이프 유틸 (XSS 방지)
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// =====================
// 3. Preloader (커튼 오픈 애니메이션)
// =====================
const preloader = document.getElementById('preloader');
const preloaderText = document.getElementById('preloaderText');

if (!sessionStorage.getItem('lyg_visited') && !reducedMotion) {
    const preloaderStr = 'LYG_';
    let pIdx = 0;
    const typePreloader = () => {
        if (pIdx <= preloaderStr.length) {
            preloaderText.textContent = preloaderStr.substring(0, pIdx);
            pIdx++;
            setTimeout(typePreloader, 200);
        } else {
            setTimeout(() => {
                preloader.classList.add('done');
                setTimeout(() => { preloader.classList.add('hidden'); }, 1100);
            }, 600);
        }
    };
    typePreloader();
    sessionStorage.setItem('lyg_visited', '1');
} else {
    preloader.classList.add('hidden');
}

// =====================
// 4. Star Field (Canvas 배경 — 공간 분할 최적화)
// =====================
const starCanvas = document.getElementById('starfield');
const starCtx = starCanvas.getContext('2d');
let stars = [];
let mouseX = 0, mouseY = 0;

function resizeStarfield() {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
    initStars();
}

function initStars() {
    const count = Math.min(Math.floor((starCanvas.width * starCanvas.height) / 5000), 300);
    stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * starCanvas.width,
            y: Math.random() * starCanvas.height,
            z: Math.random() * 1000,
            size: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.3 + 0.1,
            opacity: Math.random() * 0.5 + 0.3
        });
    }
}

function animateStars() {
    if (document.hidden) { starRAF = requestAnimationFrame(animateStars); return; }

    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    const cx = starCanvas.width / 2;
    const cy = starCanvas.height / 2;
    const mx = (mouseX - cx) * 0.02;
    const my = (mouseY - cy) * 0.02;

    // 공간 분할 그리드 (연결선 최적화)
    const GRID_SIZE = 100;
    const grid = {};
    const projected = [];

    stars.forEach((star, idx) => {
        star.z -= star.speed;
        if (star.z <= 0) {
            star.z = 1000;
            star.x = Math.random() * starCanvas.width;
            star.y = Math.random() * starCanvas.height;
        }

        const scale = 1000 / star.z;
        const x2d = (star.x - cx) * scale + cx + mx * scale * 0.5;
        const y2d = (star.y - cy) * scale + cy + my * scale * 0.5;
        const r = star.size * scale * 0.5;
        const opacity = star.opacity * (1 - star.z / 1000);

        projected[idx] = { x: x2d, y: y2d, r, opacity, z: star.z };

        if (x2d < -10 || x2d > starCanvas.width + 10 || y2d < -10 || y2d > starCanvas.height + 10) return;

        starCtx.beginPath();
        starCtx.arc(x2d, y2d, Math.min(r, 3), 0, Math.PI * 2);
        const starColor = star.yarMode
            ? (star.size > 1 ? `rgba(255, 215, 0, ${opacity})` : `rgba(255, 107, 157, ${opacity})`)
            : `rgba(200, 220, 255, ${opacity})`;
        starCtx.fillStyle = starColor;
        starCtx.fill();

        if (star.z < 200) {
            starCtx.beginPath();
            starCtx.arc(x2d, y2d, r * 3, 0, Math.PI * 2);
            const glowColor = star.yarMode
                ? `rgba(255, 215, 0, ${opacity * 0.2})`
                : `rgba(0, 229, 160, ${opacity * 0.15})`;
            starCtx.fillStyle = glowColor;
            starCtx.fill();
        }

        // 공간 그리드에 등록 (z < 500인 별만)
        if (star.z < 500) {
            const gx = Math.floor(x2d / GRID_SIZE);
            const gy = Math.floor(y2d / GRID_SIZE);
            const key = `${gx},${gy}`;
            if (!grid[key]) grid[key] = [];
            grid[key].push(idx);
        }
    });

    // 연결선 — 그리드 기반 O(n) 근사
    const drawnPairs = new Set();
    for (const key of Object.keys(grid)) {
        const [gx, gy] = key.split(',').map(Number);
        const neighbors = [];
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nKey = `${gx + dx},${gy + dy}`;
                if (grid[nKey]) neighbors.push(...grid[nKey]);
            }
        }
        for (const i of grid[key]) {
            for (const j of neighbors) {
                if (i >= j) continue;
                const pairKey = i * 1000 + j;
                if (drawnPairs.has(pairKey)) continue;
                drawnPairs.add(pairKey);

                const p1 = projected[i], p2 = projected[j];
                if (!p1 || !p2) continue;
                const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
                if (dist < 100) {
                    const lineOpacity = (1 - dist / 100) * 0.1;
                    starCtx.beginPath();
                    starCtx.moveTo(p1.x, p1.y);
                    starCtx.lineTo(p2.x, p2.y);
                    starCtx.strokeStyle = `rgba(0, 229, 160, ${lineOpacity})`;
                    starCtx.lineWidth = 0.5;
                    starCtx.stroke();
                }
            }
        }
    }

    starRAF = requestAnimationFrame(animateStars);
}

let starRAF;
resizeStarfield();
starRAF = requestAnimationFrame(animateStars);
window.addEventListener('resize', resizeStarfield);

// =====================
// 5. Cursor Glow (터치 기기 제외)
// =====================
const cursorGlow = document.getElementById('cursorGlow');
let glowX = 0, glowY = 0, currentGlowX = 0, currentGlowY = 0;
let cursorRAF;

if (!isTouchDevice) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glowX = e.clientX;
        glowY = e.clientY;
    });

    function animateCursorGlow() {
        if (!document.hidden) {
            currentGlowX += (glowX - currentGlowX) * 0.08;
            currentGlowY += (glowY - currentGlowY) * 0.08;
            cursorGlow.style.left = currentGlowX + 'px';
            cursorGlow.style.top = currentGlowY + 'px';
        }
        cursorRAF = requestAnimationFrame(animateCursorGlow);
    }
    cursorRAF = requestAnimationFrame(animateCursorGlow);
} else {
    cursorGlow.style.display = 'none';
}

// =====================
// 6. Unified Scroll Handler (rAF 쓰로틀)
// =====================
const scrollProgress = document.getElementById('scrollProgress');
const nav = document.getElementById('nav');
const scrollHint = document.getElementById('scrollHint');
const backToTop = document.getElementById('backToTop');
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-link');
const heroContent = document.querySelector('.hero-content');
const meshOrbs = document.querySelectorAll('.mesh-orb');

let maxScrollDepth = 0;
let visitedSections = new Set();

let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

            // Scroll progress bar
            scrollProgress.style.width = progress + '%';

            // Max scroll depth (방문자 통계용)
            maxScrollDepth = Math.max(maxScrollDepth, progress);
            const scrollDepthEl = document.getElementById('visitorScroll');
            if (scrollDepthEl) scrollDepthEl.textContent = Math.round(maxScrollDepth) + '%';

            // Nav scrolled
            nav.classList.toggle('scrolled', scrollY > 50);

            // Active section highlight + 방문 섹션 추적
            const scrollCheck = scrollY + 150;
            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                // 섹션 상단이 화면에 보이면 방문으로 기록
                if (scrollY + window.innerHeight >= top + 50) {
                    visitedSections.add(id);
                }

                // Nav 활성화는 현재 위치한 섹션만
                if (scrollCheck >= top && scrollCheck < top + height) {
                    navLinkItems.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
            // 페이지 하단 도달 시 마지막 nav 링크 활성화 (Contact)
            if (scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) {
                const lastNavId = sections[sections.length - 1]?.getAttribute('id');
                if (lastNavId) {
                    navLinkItems.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + lastNavId) {
                            link.classList.add('active');
                        }
                    });
                }
            }
            const sectionCountEl = document.getElementById('visitorSections');
            if (sectionCountEl) sectionCountEl.textContent = visitedSections.size + '/' + sections.length;

            // Scroll hint hide
            if (scrollHint) {
                scrollHint.style.opacity = scrollY > 200 ? '0' : '1';
                scrollHint.style.transition = 'opacity 0.5s ease';
            }

            // Back to top
            backToTop.classList.toggle('visible', scrollY > 600);

            // Parallax (Hero)
            if (!reducedMotion && heroContent && scrollY < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
                heroContent.style.opacity = 1 - scrollY / window.innerHeight;
                meshOrbs.forEach((orb, i) => {
                    orb.style.transform = `translateY(${scrollY * (0.08 + i * 0.04)}px)`;
                });
            }

            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

// =====================
// 7. Navigation (모바일 토글)
// =====================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// =====================
// 8. Typing Animation
// =====================
const typingTexts = [
    "Unity & C# Developer",
    "YOUNG AND RICH",
    "WPF Desktop App Builder",
    "Problem Solver",
    "4년차 개발자",
    "Always Learning, Always Growing"
];

let textIndex = 0, charIndex = 0, isDeleting = false;
const typingEl = document.getElementById('typingText');

function typeEffect() {
    const current = typingTexts[textIndex];
    if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}
typeEffect();

// =====================
// 9. Scroll Reveal (Intersection Observer — 다방향 지원)
// =====================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
});

// =====================
// 10. Developer's Life Counter
// =====================
const DEV_START = new Date(2022, 10, 10);
const GOAL_DAYS = 10000;

function flipUpdate(el, newValue) {
    if (el && el.textContent !== newValue) {
        el.classList.remove('flip');
        void el.offsetWidth;
        el.textContent = newValue;
        el.classList.add('flip');
    }
}

function updateDevLifeCounter() {
    const now = new Date();
    const diff = now - DEV_START;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('counterDays');
    if (daysEl) {
        flipUpdate(daysEl, totalDays.toLocaleString());
        flipUpdate(document.getElementById('counterHours'), String(hours).padStart(2, '0'));
        flipUpdate(document.getElementById('counterMinutes'), String(minutes).padStart(2, '0'));
        flipUpdate(document.getElementById('counterSeconds'), String(seconds).padStart(2, '0'));

        const percent = Math.min((totalDays / GOAL_DAYS) * 100, 100).toFixed(1);
        document.getElementById('devLifeBarFill').style.width = percent + '%';
        document.getElementById('devLifePercent').textContent = percent;
    }
}
updateDevLifeCounter();
setInterval(updateDevLifeCounter, 1000);

// =====================
// 11. Skill Bar Animation
// =====================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(fill => {
                setTimeout(() => { fill.style.width = fill.dataset.level + '%'; }, 300);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

// =====================
// 12. Skill Orbit Canvas
// =====================
const orbitCanvas = document.getElementById('skillOrbit');
const orbitCtx = orbitCanvas.getContext('2d');

const skillNodes = [
    { name: 'Unity', color: '#00e5a0', orbit: 1, angle: 0, speed: 0.008, size: 22 },
    { name: 'C#', color: '#7c5cff', orbit: 1, angle: Math.PI * 0.4, speed: 0.008, size: 22 },
    { name: 'WPF', color: '#68217a', orbit: 1, angle: Math.PI * 0.8, speed: 0.008, size: 20 },
    { name: 'Unreal', color: '#00d4ff', orbit: 1, angle: Math.PI * 1.2, speed: 0.008, size: 20 },
    { name: 'C++', color: '#ff6b9d', orbit: 1, angle: Math.PI * 1.6, speed: 0.008, size: 20 },
    { name: 'Python', color: '#ffd60a', orbit: 2, angle: 0, speed: 0.005, size: 18 },
    { name: 'Java', color: '#ff9a5c', orbit: 2, angle: Math.PI * 0.5, speed: 0.005, size: 18 },
    { name: 'SQL', color: '#a78bfa', orbit: 2, angle: Math.PI, speed: 0.005, size: 16 },
    { name: 'Git', color: '#5cffce', orbit: 2, angle: Math.PI * 1.5, speed: 0.005, size: 16 },
    { name: 'HTML', color: '#ff5c5c', orbit: 3, angle: 0, speed: 0.003, size: 14 },
    { name: 'CSS', color: '#5c9aff', orbit: 3, angle: Math.PI * 0.5, speed: 0.003, size: 14 },
    { name: 'JS', color: '#ffe55c', orbit: 3, angle: Math.PI, speed: 0.003, size: 14 },
    { name: 'React', color: '#61dafb', orbit: 3, angle: Math.PI * 1.5, speed: 0.003, size: 14 },
];

function resizeOrbitCanvas() {
    const wrap = orbitCanvas.parentElement;
    const size = Math.min(wrap.clientWidth, wrap.clientHeight);
    const dpr = window.devicePixelRatio || 1;
    orbitCanvas.width = size * dpr;
    orbitCanvas.height = size * dpr;
    orbitCanvas.style.width = size + 'px';
    orbitCanvas.style.height = size + 'px';
    // setTransform으로 scale 누적 방지
    orbitCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

let orbitRAF;
function drawOrbit() {
    if (document.hidden) { orbitRAF = requestAnimationFrame(drawOrbit); return; }

    const dpr = window.devicePixelRatio || 1;
    const w = orbitCanvas.width / dpr;
    const h = orbitCanvas.height / dpr;
    orbitCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    orbitCtx.clearRect(0, 0, w, h);

    const cx = w / 2, cy = h / 2;
    const maxR = Math.min(cx, cy) - 30;
    const orbitRadii = [maxR * 0.35, maxR * 0.6, maxR * 0.85];

    orbitRadii.forEach(r => {
        orbitCtx.beginPath();
        orbitCtx.arc(cx, cy, r, 0, Math.PI * 2);
        orbitCtx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        orbitCtx.lineWidth = 1;
        orbitCtx.stroke();
    });

    skillNodes.forEach(node => {
        node.angle += node.speed;
        const r = orbitRadii[node.orbit - 1];
        const x = cx + Math.cos(node.angle) * r;
        const y = cy + Math.sin(node.angle) * r * 0.6;

        const gradient = orbitCtx.createRadialGradient(x, y, 0, x, y, node.size + 12);
        gradient.addColorStop(0, node.color + '30');
        gradient.addColorStop(1, 'transparent');
        orbitCtx.beginPath();
        orbitCtx.arc(x, y, node.size + 8, 0, Math.PI * 2);
        orbitCtx.fillStyle = gradient;
        orbitCtx.fill();

        orbitCtx.beginPath();
        orbitCtx.arc(x, y, node.size, 0, Math.PI * 2);
        orbitCtx.fillStyle = node.color + '20';
        orbitCtx.fill();
        orbitCtx.strokeStyle = node.color + '80';
        orbitCtx.lineWidth = 1.5;
        orbitCtx.stroke();

        orbitCtx.fillStyle = node.color;
        orbitCtx.font = `bold ${Math.max(node.size * 0.6, 9)}px 'Segoe UI', sans-serif`;
        orbitCtx.textAlign = 'center';
        orbitCtx.textBaseline = 'middle';
        orbitCtx.fillText(node.name, x, y);
    });

    orbitRAF = requestAnimationFrame(drawOrbit);
}

resizeOrbitCanvas();
orbitRAF = requestAnimationFrame(drawOrbit);
window.addEventListener('resize', resizeOrbitCanvas);

// =====================
// 13. Project Cards (안전한 DOM 생성 — 플립 카드)
// =====================
const projectGrid = document.getElementById('projectGrid');
const TYPE_LABELS = { team: 'Team', personal: 'Personal', competition: 'Competition' };

function createTextEl(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = text;
    return el;
}

function renderProjects(filter = 'all') {
    const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);

    // 기존 자식 안전하게 제거
    while (projectGrid.firstChild) projectGrid.removeChild(projectGrid.firstChild);

    filtered.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal visible';
        card.style.setProperty('--delay', (i * 0.1) + 's');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        // Inner wrapper (플립 컨테이너)
        const inner = document.createElement('div');
        inner.className = 'project-card-inner';

        // === Front ===
        const front = document.createElement('div');
        front.className = 'project-card-front';

        const tag = createTextEl('span', `project-card-tag ${project.type}`, TYPE_LABELS[project.type]);
        const title = createTextEl('h3', 'project-card-title', project.title);
        const desc = createTextEl('p', 'project-card-desc', project.desc);

        const techsWrap = document.createElement('div');
        techsWrap.className = 'project-card-techs';
        project.techs.forEach(t => techsWrap.appendChild(createTextEl('span', 'project-tech', t)));

        const footer = document.createElement('div');
        footer.className = 'project-card-footer';
        footer.appendChild(createTextEl('span', 'project-card-period', project.period));
        const arrow = document.createElement('div');
        arrow.className = 'project-card-arrow';
        arrow.textContent = '→';
        footer.appendChild(arrow);

        front.append(tag, title, desc, techsWrap, footer);

        // === Back ===
        const back = document.createElement('div');
        back.className = 'project-card-back';

        back.appendChild(createTextEl('div', 'project-card-back-title', project.title));

        const highlightList = document.createElement('ul');
        highlightList.className = 'project-card-back-highlights';
        project.highlights.forEach(h => highlightList.appendChild(createTextEl('li', '', h)));
        back.appendChild(highlightList);

        back.appendChild(createTextEl('div', 'project-card-back-cta', 'Click to View Details'));

        inner.append(front, back);
        card.appendChild(inner);

        // Spotlight 마우스 트래킹
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
            card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
        });

        card.addEventListener('click', () => openModal(project));
        projectGrid.appendChild(card);

        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50 + i * 100);
    });
}

renderProjects();

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// =====================
// 14. Project Modal (안전한 DOM)
// =====================
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(project) {
    document.getElementById('modalTag').textContent = TYPE_LABELS[project.type];
    document.getElementById('modalTag').className = `modal-tag project-card-tag ${project.type}`;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDesc').textContent = project.fullDesc;
    document.getElementById('modalPeriod').textContent = project.period;
    document.getElementById('modalRole').textContent = project.role;
    document.getElementById('modalTeamSize').textContent = project.teamSize;

    // Techs — 안전한 DOM 생성
    const techsContainer = document.getElementById('modalTechs');
    while (techsContainer.firstChild) techsContainer.removeChild(techsContainer.firstChild);
    project.techs.forEach(t => techsContainer.appendChild(createTextEl('span', 'modal-tech', t)));

    // Details — 안전한 DOM 생성
    const detailsContainer = document.getElementById('modalDetails');
    while (detailsContainer.firstChild) detailsContainer.removeChild(detailsContainer.firstChild);
    detailsContainer.appendChild(createTextEl('h4', '', '주요 내용'));
    const ul = document.createElement('ul');
    project.highlights.forEach(h => ul.appendChild(createTextEl('li', '', h)));
    detailsContainer.appendChild(ul);

    // 링크
    const linkWrap = document.getElementById('modalLinkWrap');
    const linkEl = document.getElementById('modalLink');
    if (project.link) {
        linkWrap.style.display = 'block';
        linkEl.href = project.link;
    } else {
        linkWrap.style.display = 'none';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// =====================
// 15. Magnetic Button & 3D Tilt (터치 기기 제외)
// =====================
if (!isTouchDevice) {
    document.querySelectorAll('.btn, .contact-card').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });

    document.querySelectorAll('.detail-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
            card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            card.style.transform = `perspective(600px) rotateX(${(y - 0.5) * -10}deg) rotateY(${(x - 0.5) * 10}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
}

// =====================
// 16. Smooth Scroll
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// =====================
// 17. Konami Code Easter Egg
// =====================
const KONAMI_SEQ = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;
let yarActive = false;

document.addEventListener('keydown', (e) => {
    if (e.key === KONAMI_SEQ[konamiIdx]) {
        konamiIdx++;
        if (konamiIdx === KONAMI_SEQ.length) {
            if (!yarActive) activateYAR();
            konamiIdx = 0;
        }
    } else {
        konamiIdx = 0;
    }
});

function activateYAR() {
    yarActive = true;
    const overlay = document.getElementById('yarOverlay');
    overlay.classList.add('active');
    document.body.classList.add('yar-active');
    stars.forEach(s => { s.yarMode = true; });

    setTimeout(() => {
        overlay.classList.remove('active');
        document.body.classList.remove('yar-active');
        stars.forEach(s => { s.yarMode = false; });
        yarActive = false;
    }, 5000);
}

// =====================
// 18. Timeline Auto Active
// =====================
(() => {
    const today = new Date();
    const items = document.querySelectorAll('.timeline-item');
    let lastPastIdx = -1;

    items.forEach((item, idx) => {
        const dateText = item.querySelector('.timeline-date').textContent.trim();
        const cleaned = dateText.replace(/[()예정\s]/g, '');
        const parts = cleaned.split('.');
        const year = parseInt(parts[0]);
        const month = parts[1] ? parseInt(parts[1]) : 1;
        const day = parts[2] ? parseInt(parts[2]) : 1;

        if (!isNaN(year)) {
            const eventDate = new Date(year, month - 1, day);
            if (eventDate <= today) lastPastIdx = idx;
        }
    });

    items.forEach((item, idx) => {
        const dot = item.querySelector('.timeline-dot');
        dot.classList.remove('active', 'future');
        if (idx === lastPastIdx) dot.classList.add('active');
        else if (idx > lastPastIdx && lastPastIdx !== -1) dot.classList.add('future');
    });
})();

// =====================
// 19. Page Visibility API (탭 비활성 시 Canvas 중단)
// =====================
document.addEventListener('visibilitychange', () => {
    // rAF 루프 내에서 document.hidden 체크로 이미 처리됨
    // 추가적으로 비활성 시 setInterval 일시정지 가능
});

// =====================
// 20. GitHub Contribution Heatmap
// =====================
const GITHUB_USERNAME = 'dbsrjs';

async function fetchGitHubData() {
    try {
        // 프로필 데이터
        const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (profileRes.ok) {
            const profile = await profileRes.json();
            const avatarEl = document.getElementById('githubAvatar');
            const nameEl = document.getElementById('githubName');
            const bioEl = document.getElementById('githubBio');
            const reposEl = document.getElementById('githubRepos');
            const followersEl = document.getElementById('githubFollowers');
            const followingEl = document.getElementById('githubFollowing');

            if (avatarEl) avatarEl.src = profile.avatar_url;
            if (nameEl) nameEl.textContent = profile.name || profile.login;
            if (bioEl) bioEl.textContent = profile.bio || 'Software Developer';
            if (reposEl) reposEl.textContent = profile.public_repos;
            if (followersEl) followersEl.textContent = profile.followers;
            if (followingEl) followingEl.textContent = profile.following;
        }

        // 기여도 히트맵 데이터
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`);
        if (contribRes.ok) {
            const contribData = await contribRes.json();
            renderHeatmap(contribData.contributions);
        } else {
            renderFallbackHeatmap();
        }
    } catch (err) {
        renderFallbackHeatmap();
    }
}

function renderHeatmap(contributions) {
    const canvas = document.getElementById('heatmapCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const w = rect.width;
    const h = rect.height;

    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    const cellSize = Math.max(Math.floor((w - 40) / 53), 8);
    const gap = Math.max(Math.floor(cellSize * 0.2), 2);
    const totalWidth = 53 * (cellSize + gap);
    const totalHeight = 7 * (cellSize + gap);
    const offsetX = Math.max((w - totalWidth) / 2, 4);
    const offsetY = Math.max((h - totalHeight) / 2, 4);

    // 날짜별 기여도 맵 생성
    const contribMap = {};
    if (Array.isArray(contributions)) {
        contributions.forEach(c => { contribMap[c.date] = c.count; });
    }

    // 최근 1년간 날짜 생성
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364);
    // 시작 날짜를 일요일로 맞춤
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const maxCount = Math.max(...Object.values(contribMap), 1);

    for (let week = 0; week < 53; week++) {
        for (let day = 0; day < 7; day++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + week * 7 + day);
            if (date > today) continue;

            const dateStr = date.toISOString().split('T')[0];
            const count = contribMap[dateStr] || 0;

            let colorIdx = 0;
            if (count > 0) {
                const ratio = count / maxCount;
                if (ratio > 0.75) colorIdx = 4;
                else if (ratio > 0.5) colorIdx = 3;
                else if (ratio > 0.25) colorIdx = 2;
                else colorIdx = 1;
            }

            const x = offsetX + week * (cellSize + gap);
            const y = offsetY + day * (cellSize + gap);

            ctx.beginPath();
            ctx.roundRect(x, y, cellSize, cellSize, 2);
            ctx.fillStyle = colors[colorIdx];
            ctx.fill();
        }
    }
}

function renderFallbackHeatmap() {
    const canvas = document.getElementById('heatmapCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    const cellSize = 10;
    const gap = 3;
    const offsetX = 10;
    const offsetY = 10;

    for (let week = 0; week < 52; week++) {
        for (let day = 0; day < 7; day++) {
            const colorIdx = Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 5);
            ctx.beginPath();
            ctx.roundRect(offsetX + week * (cellSize + gap), offsetY + day * (cellSize + gap), cellSize, cellSize, 2);
            ctx.fillStyle = colors[colorIdx];
            ctx.fill();
        }
    }
}

fetchGitHubData();

// =====================
// 21. Visitor Stats
// =====================
(() => {
    // 방문 횟수 (localStorage)
    const visitKey = 'lyg_visit_count';
    const visits = parseInt(localStorage.getItem(visitKey) || '0') + 1;
    localStorage.setItem(visitKey, String(visits));

    const totalEl = document.getElementById('visitorTotal');
    if (totalEl) totalEl.textContent = visits.toLocaleString();

    // 세션 시간
    const sessionStart = Date.now();
    function updateSessionTime() {
        const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
        const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
        const sec = String(elapsed % 60).padStart(2, '0');
        const timeEl = document.getElementById('visitorTime');
        if (timeEl) timeEl.textContent = `${min}:${sec}`;
    }
    setInterval(updateSessionTime, 1000);
})();

// =====================
// 22. Heatmap Canvas Resize
// =====================
window.addEventListener('resize', () => {
    // GitHub 히트맵 리렌더
    const canvas = document.getElementById('heatmapCanvas');
    if (canvas && canvas._contribData) {
        renderHeatmap(canvas._contribData);
    }
});
