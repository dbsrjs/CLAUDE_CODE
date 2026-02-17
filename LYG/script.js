/* ========================================
   LYG Portfolio - 이윤건 자기소개 페이지
   Interactive Script (Pure Vanilla JS)
   ======================================== */

// =====================
// 1. Project Data (프로젝트 데이터 - 여기서 추가/수정)
// =====================
const projects = [
    {
        id: 1,
        title: "wmg_puzzle (2D 팀 프로젝트)",
        desc: "SBS게임아카데미에서 팀으로 진행한 2D 퍼즐 게임. 기획부터 개발까지 협업 경험.",
        fullDesc: "SBS게임아카데미에서 팀 프로젝트로 진행한 2D 퍼즐 게임입니다. 기획, 레벨 디자인, 게임 메카닉 구현까지 전반적인 개발에 참여하며 팀 협업과 프로젝트 관리를 경험했습니다.",
        type: "team",
        techs: ["Unity", "C#"],
        period: "2024.01 ~ 2024.04",
        role: "게임 개발자",
        teamSize: "팀",
        highlights: [
            "퍼즐 메카닉 설계 및 구현",
            "레벨 디자인 참여",
            "팀 협업 & 버전 관리",
            "SBS게임아카데미 프로젝트"
        ]
    },
    {
        id: 2,
        title: "Vampire Survivors (2D)",
        desc: "뱀파이어 서바이버즈 스타일의 2D 서바이벌 게임을 Unity로 구현.",
        fullDesc: "인기 게임 Vampire Survivors를 모티브로 한 2D 서바이벌 게임입니다. 웨이브 시스템, 적 AI, 무기 시스템, 레벨업 메카닉 등 핵심 게임플레이 루프를 직접 설계하고 구현했습니다.",
        type: "personal",
        techs: ["Unity", "C#"],
        period: "2023.07 ~ 2023.08",
        role: "1인 개발",
        teamSize: "1명 (개인)",
        highlights: [
            "웨이브 기반 적 스폰 시스템",
            "다양한 무기 & 스킬 시스템",
            "레벨업 및 성장 메카닉",
            "오브젝트 풀링 최적화"
        ]
    },
    {
        id: 3,
        title: "3D Action Game",
        desc: "3인칭 3D 액션 게임. 캐릭터 컨트롤러, 전투 시스템, 적 AI를 구현.",
        fullDesc: "Unity 기반의 3인칭 3D 액션 게임으로, 캐릭터 이동 및 전투 시스템, 적 AI, 애니메이션 상태 머신 등을 직접 구현했습니다. 물리 엔진과 연동한 타격감 있는 전투를 목표로 개발했습니다.",
        type: "personal",
        techs: ["Unity", "C#"],
        period: "2024.04 ~ 2024.06",
        role: "1인 개발",
        teamSize: "1명 (개인)",
        highlights: [
            "3인칭 캐릭터 컨트롤러",
            "콤보 기반 전투 시스템",
            "적 AI (FSM 패턴)",
            "애니메이션 상태 머신"
        ]
    },
    {
        id: 4,
        title: "Christmas Carol (2D)",
        desc: "크리스마스 테마의 2D 게임. 학교와 집에서 약 2개월간 개발.",
        fullDesc: "크리스마스를 테마로 한 2D 게임 프로젝트입니다. 스토리 기반의 게임 진행과 다양한 스테이지를 직접 기획하고 구현했습니다.",
        type: "personal",
        techs: ["Unity", "C#"],
        period: "2023.09 ~ 2023.11",
        role: "1인 개발",
        teamSize: "1명 (개인)",
        highlights: [
            "스토리 기반 게임 진행",
            "다양한 스테이지 설계",
            "UI/UX 시스템 구현",
            "사운드 & 이펙트 연출"
        ]
    },
    {
        id: 5,
        title: "Tower Defense (2D)",
        desc: "타워 디펜스 장르의 2D 전략 게임. 타워 배치, 적 경로, 웨이브 시스템 구현.",
        fullDesc: "클래식 타워 디펜스 장르의 2D 전략 게임입니다. 다양한 종류의 타워 배치 시스템, 적 경로 탐색(Pathfinding), 웨이브 기반 스폰 시스템을 구현했습니다.",
        type: "personal",
        techs: ["Unity", "C#"],
        period: "2023.12",
        role: "1인 개발",
        teamSize: "1명 (개인)",
        highlights: [
            "타워 배치 & 업그레이드 시스템",
            "적 경로 탐색 알고리즘",
            "웨이브 스폰 시스템",
            "전략적 밸런싱"
        ]
    },
    {
        id: 6,
        title: "TopDown Shooting (3D)",
        desc: "탑다운 시점의 3D 슈팅 게임. 조작감과 타격감에 집중한 프로젝트.",
        fullDesc: "탑다운 시점에서 플레이하는 3D 슈팅 게임입니다. 마우스 에이밍, 다양한 무기 시스템, 적 AI 등을 구현하며 쾌적한 조작감과 타격감에 집중했습니다.",
        type: "personal",
        techs: ["Unity", "C#"],
        period: "2024.09",
        role: "1인 개발",
        teamSize: "1명 (개인)",
        highlights: [
            "탑다운 카메라 & 에이밍",
            "다양한 무기 시스템",
            "적 AI & 스폰 시스템",
            "이펙트 & 타격감 연출"
        ]
    },
    {
        id: 7,
        title: "지방기능경기대회 게임개발",
        desc: "2024 지방기능경기대회 게임개발 종목 참가. MeisterNet 주관.",
        fullDesc: "2024년 지방기능경기대회 게임개발 종목에 참가하여 제한된 시간 내에 주어진 과제를 Unity로 구현했습니다. 실전 압박 속에서 빠른 개발 능력과 문제 해결 역량을 발휘했습니다.",
        type: "competition",
        techs: ["Unity", "C#"],
        period: "2024.04.01 ~ 04.04",
        role: "참가자",
        teamSize: "개인",
        highlights: [
            "제한 시간 내 게임 구현",
            "과제 분석 & 빠른 설계",
            "실전 압박 속 개발",
            "MeisterNet 주관 대회"
        ]
    },
    {
        id: 8,
        title: "경기도x퓨처랩 청소년 게임잼",
        desc: "Smilegate 오피스에서 진행된 게임잼. 제한 시간 내 게임 개발 도전.",
        fullDesc: "경기도와 퓨처랩이 주관하고 Smilegate 오피스에서 진행된 청소년 게임잼에 참가했습니다. 짧은 시간 안에 기획부터 완성까지 팀워크를 발휘하며 게임을 개발했습니다.",
        type: "competition",
        techs: ["Unity", "C#"],
        period: "2024.10.31 ~ 11.01",
        role: "참가자",
        teamSize: "팀",
        highlights: [
            "Smilegate 오피스 현장",
            "24시간 내 게임 완성",
            "기획 → 개발 → 발표",
            "팀워크 & 빠른 프로토타이핑"
        ]
    },
    {
        id: 9,
        title: "Tetris (2D) - Remake",
        desc: "테트리스를 Unity로 리메이크. 2023년 첫 버전에 이어 2025년 개선 버전 개발.",
        fullDesc: "클래식 테트리스를 Unity로 구현한 프로젝트입니다. 2023년 SBS게임아카데미에서 첫 버전을 만들고, 2025년에 개선된 버전을 새로 개발하며 성장을 확인했습니다.",
        type: "personal",
        techs: ["Unity", "C#"],
        period: "2025.01",
        role: "1인 개발",
        teamSize: "1명 (개인)",
        highlights: [
            "테트로미노 회전 & 이동 시스템",
            "라인 클리어 & 점수 시스템",
            "고스트 피스 & 홀드 기능",
            "2023년 대비 코드 품질 향상"
        ]
    }
];

// =====================
// 2. Star Field (Canvas 배경)
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
    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);

    const cx = starCanvas.width / 2;
    const cy = starCanvas.height / 2;
    const mx = (mouseX - cx) * 0.02;
    const my = (mouseY - cy) * 0.02;

    stars.forEach(star => {
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

        if (x2d < -10 || x2d > starCanvas.width + 10 || y2d < -10 || y2d > starCanvas.height + 10) return;

        starCtx.beginPath();
        starCtx.arc(x2d, y2d, Math.min(r, 3), 0, Math.PI * 2);
        starCtx.fillStyle = `rgba(200, 220, 255, ${opacity})`;
        starCtx.fill();

        // 가까운 별은 글로우 효과
        if (star.z < 200) {
            starCtx.beginPath();
            starCtx.arc(x2d, y2d, r * 3, 0, Math.PI * 2);
            starCtx.fillStyle = `rgba(0, 229, 160, ${opacity * 0.15})`;
            starCtx.fill();
        }
    });

    // 별들 사이 연결선
    for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
            const s1 = stars[i], s2 = stars[j];
            const scale1 = 1000 / s1.z, scale2 = 1000 / s2.z;
            const x1 = (s1.x - cx) * scale1 + cx;
            const y1 = (s1.y - cy) * scale1 + cy;
            const x2 = (s2.x - cx) * scale2 + cx;
            const y2 = (s2.y - cy) * scale2 + cy;
            const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

            if (dist < 100 && s1.z < 500 && s2.z < 500) {
                const lineOpacity = (1 - dist / 100) * 0.1;
                starCtx.beginPath();
                starCtx.moveTo(x1, y1);
                starCtx.lineTo(x2, y2);
                starCtx.strokeStyle = `rgba(0, 229, 160, ${lineOpacity})`;
                starCtx.lineWidth = 0.5;
                starCtx.stroke();
            }
        }
    }

    requestAnimationFrame(animateStars);
}

resizeStarfield();
animateStars();
window.addEventListener('resize', resizeStarfield);

// =====================
// 3. Cursor Glow
// =====================
const cursorGlow = document.getElementById('cursorGlow');
let glowX = 0, glowY = 0, currentGlowX = 0, currentGlowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glowX = e.clientX;
    glowY = e.clientY;
});

function animateCursorGlow() {
    currentGlowX += (glowX - currentGlowX) * 0.08;
    currentGlowY += (glowY - currentGlowY) * 0.08;
    cursorGlow.style.left = currentGlowX + 'px';
    cursorGlow.style.top = currentGlowY + 'px';
    requestAnimationFrame(animateCursorGlow);
}
animateCursorGlow();

// =====================
// 4. Scroll Progress Bar
// =====================
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
});

// =====================
// 5. Navigation
// =====================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-link');

// Scroll - nav style
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Link click - close mobile menu
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// Active section highlight
const sections = document.querySelectorAll('section[id]');
function highlightNav() {
    const scrollY = window.scrollY + 150;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navLinkItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}
window.addEventListener('scroll', highlightNav);

// =====================
// 6. Typing Animation
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
// 7. Scroll Reveal (Intersection Observer)
// =====================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// =====================
// 8. Count-Up Animation
// =====================
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            animateCount(el, target);
            countObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stat-num').forEach(el => countObserver.observe(el));

function animateCount(el, target) {
    const duration = 1500;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// =====================
// 9. Skill Bar Animation
// =====================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill-fill');
            fills.forEach(fill => {
                const level = fill.dataset.level;
                setTimeout(() => {
                    fill.style.width = level + '%';
                }, 300);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

// =====================
// 10. Skill Orbit Canvas
// =====================
const orbitCanvas = document.getElementById('skillOrbit');
const orbitCtx = orbitCanvas.getContext('2d');

const skillNodes = [
    { name: 'Unity', color: '#00e5a0', orbit: 1, angle: 0, speed: 0.008, size: 22 },
    { name: 'C#', color: '#7c5cff', orbit: 1, angle: Math.PI * 0.5, speed: 0.008, size: 22 },
    { name: 'Unreal', color: '#00d4ff', orbit: 1, angle: Math.PI, speed: 0.008, size: 20 },
    { name: 'C++', color: '#ff6b9d', orbit: 1, angle: Math.PI * 1.5, speed: 0.008, size: 20 },
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
    orbitCanvas.width = size * (window.devicePixelRatio || 1);
    orbitCanvas.height = size * (window.devicePixelRatio || 1);
    orbitCanvas.style.width = size + 'px';
    orbitCanvas.style.height = size + 'px';
    orbitCtx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
}

function drawOrbit() {
    const w = orbitCanvas.width / (window.devicePixelRatio || 1);
    const h = orbitCanvas.height / (window.devicePixelRatio || 1);
    orbitCtx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
    orbitCtx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;
    const maxR = Math.min(cx, cy) - 30;
    const orbitRadii = [maxR * 0.35, maxR * 0.6, maxR * 0.85];

    // 궤도 링 그리기
    orbitRadii.forEach(r => {
        orbitCtx.beginPath();
        orbitCtx.arc(cx, cy, r, 0, Math.PI * 2);
        orbitCtx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        orbitCtx.lineWidth = 1;
        orbitCtx.stroke();
    });

    // 노드 그리기
    skillNodes.forEach(node => {
        node.angle += node.speed;
        const r = orbitRadii[node.orbit - 1];
        const x = cx + Math.cos(node.angle) * r;
        const y = cy + Math.sin(node.angle) * r * 0.6; // 타원 궤도

        // 글로우
        orbitCtx.beginPath();
        orbitCtx.arc(x, y, node.size + 8, 0, Math.PI * 2);
        orbitCtx.fillStyle = node.color.replace(')', ', 0.1)').replace('rgb', 'rgba').replace('#', '');
        const gradient = orbitCtx.createRadialGradient(x, y, 0, x, y, node.size + 12);
        gradient.addColorStop(0, node.color + '30');
        gradient.addColorStop(1, 'transparent');
        orbitCtx.fillStyle = gradient;
        orbitCtx.fill();

        // 노드 원
        orbitCtx.beginPath();
        orbitCtx.arc(x, y, node.size, 0, Math.PI * 2);
        orbitCtx.fillStyle = node.color + '20';
        orbitCtx.fill();
        orbitCtx.strokeStyle = node.color + '80';
        orbitCtx.lineWidth = 1.5;
        orbitCtx.stroke();

        // 텍스트
        orbitCtx.fillStyle = node.color;
        orbitCtx.font = `bold ${Math.max(node.size * 0.6, 9)}px 'Segoe UI', sans-serif`;
        orbitCtx.textAlign = 'center';
        orbitCtx.textBaseline = 'middle';
        orbitCtx.fillText(node.name, x, y);
    });

    requestAnimationFrame(drawOrbit);
}

resizeOrbitCanvas();
drawOrbit();
window.addEventListener('resize', resizeOrbitCanvas);

// =====================
// 11. Project Cards (동적 생성)
// =====================
const projectGrid = document.getElementById('projectGrid');

function renderProjects(filter = 'all') {
    const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);

    projectGrid.innerHTML = '';
    filtered.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal visible';
        card.style.setProperty('--delay', (i * 0.1) + 's');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        const typeLabel = { team: 'Team', personal: 'Personal', competition: 'Competition' };

        card.innerHTML = `
            <span class="project-card-tag ${project.type}">${typeLabel[project.type]}</span>
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-desc">${project.desc}</p>
            <div class="project-card-techs">
                ${project.techs.map(t => `<span class="project-tech">${t}</span>`).join('')}
            </div>
            <div class="project-card-footer">
                <span class="project-card-period">${project.period}</span>
                <div class="project-card-arrow">→</div>
            </div>
        `;

        card.addEventListener('click', () => openModal(project));
        projectGrid.appendChild(card);

        // 등장 애니메이션
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50 + i * 100);
    });
}

renderProjects();

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// =====================
// 12. Project Modal
// =====================
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(project) {
    const typeLabel = { team: 'Team', personal: 'Personal', competition: 'Competition' };

    document.getElementById('modalTag').textContent = typeLabel[project.type];
    document.getElementById('modalTag').className = `modal-tag project-card-tag ${project.type}`;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDesc').textContent = project.fullDesc;
    document.getElementById('modalPeriod').textContent = project.period;
    document.getElementById('modalRole').textContent = project.role;
    document.getElementById('modalTeamSize').textContent = project.teamSize;

    document.getElementById('modalTechs').innerHTML = project.techs
        .map(t => `<span class="modal-tech">${t}</span>`).join('');

    document.getElementById('modalDetails').innerHTML = `
        <h4>주요 내용</h4>
        <ul>${project.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// =====================
// 13. Magnetic Button Effect
// =====================
document.querySelectorAll('.btn, .project-card, .contact-card').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = '';
    });
});

// =====================
// 14. 3D Tilt Effect on Cards
// =====================
document.querySelectorAll('.skill-card, .detail-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (y - 0.5) * -10;
        const rotateY = (x - 0.5) * 10;
        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// =====================
// 15. Scroll Hint Hide
// =====================
const scrollHint = document.getElementById('scrollHint');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollHint.style.opacity = '0';
        scrollHint.style.transition = 'opacity 0.5s ease';
    } else {
        scrollHint.style.opacity = '1';
    }
});

// =====================
// 16. Smooth Scroll
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
