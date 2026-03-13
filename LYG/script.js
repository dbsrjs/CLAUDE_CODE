/* ========================================
   LYG Portfolio - Modern Minimal
   Vanilla JS, no external dependencies
   ======================================== */

// =====================
// 1. Project Data
// =====================
const projects = [
    {
        id: 1, title: "sales_inquiry",
        desc: "Python을 활용한 회사 정산서 자동화 프로그램. 반복 업무를 효율적으로 처리.",
        fullDesc: "Python으로 개발한 회사 정산서 자동화 프로그램입니다. 반복적인 정산 업무를 자동화하여 업무 효율을 향상시켰습니다.",
        type: "personal", techs: ["Python", "Excel"], period: "2025.05-2025.10",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["정산 업무 자동화", "데이터 처리 & 파싱", "엑셀 파일 자동 생성", "업무 효율 향상"]
    },
    {
        id: 2, title: "Is_It_Legal",
        desc: "Gemini API를 활용한 법률 판별 서비스. lawornot.com에서 서비스 중.",
        fullDesc: "Google Gemini API를 활용하여 법률 관련 질문에 답변하는 웹 서비스입니다. lawornot.com에서 서비스되고 있습니다.",
        type: "personal", techs: ["Gemini API", "React"], period: "2026.01-2026.02",
        role: "1인 개발", teamSize: "1명 (개인)", link: "https://www.lawornot.com/",
        highlights: ["Gemini API 연동", "법률 판별 AI 서비스", "실제 서비스 배포 (lawornot.com)", "사용자 친화적 UI/UX"]
    },
    {
        id: 3, title: "TopDown-Shooting",
        desc: "탑다운 시점의 슈팅 게임. 조작감과 타격감에 집중한 프로젝트.",
        fullDesc: "탑다운 시점에서 플레이하는 슈팅 게임입니다. 다양한 무기 시스템, 적 AI 등을 구현했습니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2024.09-2024.10",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["탑다운 카메라 & 에이밍", "다양한 무기 시스템", "적 AI & 스폰 시스템", "이펙트 & 타격감 연출"]
    },
    {
        id: 4, title: "Tetris",
        desc: "테트리스를 Unity로 구현한 개인 프로젝트 작품.",
        fullDesc: "클래식 테트리스를 Unity로 구현한 개인 프로젝트입니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2025.01-2025.04",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["테트로미노 회전 & 이동 시스템", "라인 클리어 & 점수 시스템", "고스트 피스 & 홀드 기능", "클래식 게임 재현"]
    },
    {
        id: 5, title: "Phencyclidine",
        desc: "경기도 x 퓨처랩 게임잼 출품작. Smilegate 오피스에서 진행.",
        fullDesc: "경기도와 퓨처랩이 주관하고 Smilegate 오피스에서 진행된 청소년 게임잼 참가작입니다.",
        type: "competition", techs: ["Unity", "C#"], period: "2024.10.31",
        role: "참가자", teamSize: "팀",
        highlights: ["Smilegate 오피스 현장", "경기도 x 퓨처랩 게임잼", "기획 → 개발 → 발표", "팀워크 & 빠른 프로토타이핑"]
    },
    {
        id: 6, title: "Bouncy_BALL",
        desc: "통통 튀는 공을 활용한 게임. 물리 엔진 기반 역동적인 플레이.",
        fullDesc: "물리 엔진을 활용한 공 튀기기 게임입니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2024.01-2024.04",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["물리 엔진 기반 게임플레이", "공 물리 시뮬레이션", "직관적 조작 시스템", "스테이지 설계"]
    },
    {
        id: 7, title: "Tower_Defanse",
        desc: "타워 디펜스 장르의 전략 게임.",
        fullDesc: "클래식 타워 디펜스 장르의 전략 게임입니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2024.12-2025.01",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["타워 배치 & 업그레이드 시스템", "적 경로 탐색 알고리즘", "웨이브 스폰 시스템", "전략적 밸런싱"]
    },
    {
        id: 8, title: "wmz_puzzle",
        desc: "SBS게임아카데미에서 팀으로 진행한 퍼즐 게임.",
        fullDesc: "SBS게임아카데미에서 팀 프로젝트로 진행한 퍼즐 게임입니다.",
        type: "team", techs: ["Unity", "C#"], period: "2024.01-2025.04",
        role: "게임 개발자", teamSize: "팀",
        highlights: ["퍼즐 메카닉 설계 및 구현", "레벨 디자인 참여", "팀 협업 & 버전 관리", "SBS게임아카데미 프로젝트"]
    },
    {
        id: 9, title: "3D Action Game",
        desc: "3인칭 3D 액션 게임. 캐릭터 컨트롤러, 전투 시스템, 적 AI를 구현.",
        fullDesc: "Unity 기반의 3인칭 3D 액션 게임입니다.",
        type: "personal", techs: ["Unity", "C#"], period: "2024.04-2024.06",
        role: "1인 개발", teamSize: "1명 (개인)",
        highlights: ["3인칭 캐릭터 컨트롤러", "콤보 기반 전투 시스템", "적 AI (FSM 패턴)", "애니메이션 상태 머신"]
    }
];

// =====================
// 2. Utilities
// =====================
const TYPE_LABELS = { team: 'Team', personal: 'Personal', competition: 'Competition' };

function createEl(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}

// =====================
// 3. Preloader
// =====================
const preloader = document.getElementById('preloader');
const preloaderText = document.getElementById('preloaderText');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function runPreloader(callback) {
    if (!sessionStorage.getItem('lyg_visited') && !reducedMotion) {
        const str = 'LYG_';
        let i = 0;
        const tick = () => {
            if (i <= str.length) {
                preloaderText.textContent = str.substring(0, i++);
                setTimeout(tick, 200);
            } else {
                setTimeout(() => {
                    preloader.classList.add('done');
                    setTimeout(() => { preloader.classList.add('hidden'); callback(); }, 1000);
                }, 500);
            }
        };
        tick();
        sessionStorage.setItem('lyg_visited', '1');
    } else {
        preloader.classList.add('hidden');
        callback();
    }
}

// =====================
// 4. Typing Animation
// =====================
const typingTexts = [
    "Unity & C# Developer",
    "YOUNG AND RICH",
    "WPF Desktop App Builder",
    "Problem Solver",
    "4년차 개발자",
    "Always Learning, Always Growing"
];
let textIdx = 0, charIdx = 0, isDel = false;

function typeEffect() {
    const el = document.getElementById('typingText');
    if (!el) return;
    const cur = typingTexts[textIdx];
    el.textContent = isDel ? cur.substring(0, --charIdx) : cur.substring(0, ++charIdx);
    let speed = isDel ? 40 : 80;
    if (!isDel && charIdx === cur.length) { speed = 2000; isDel = true; }
    else if (isDel && charIdx === 0) { isDel = false; textIdx = (textIdx + 1) % typingTexts.length; speed = 500; }
    setTimeout(typeEffect, speed);
}

// =====================
// 5. Developer's Life Counter
// =====================
const DEV_START = new Date(2022, 10, 10);
const GOAL_DAYS = 10000;

function flipUpdate(el, v) {
    if (el && el.textContent !== v) {
        el.classList.remove('flip');
        void el.offsetWidth;
        el.textContent = v;
        el.classList.add('flip');
    }
}

function updateDevLife() {
    const diff = Date.now() - DEV_START;
    const d = Math.floor(diff / 864e5);
    const h = Math.floor((diff % 864e5) / 36e5);
    const m = Math.floor((diff % 36e5) / 6e4);
    const s = Math.floor((diff % 6e4) / 1000);
    flipUpdate(document.getElementById('counterDays'), d.toLocaleString());
    flipUpdate(document.getElementById('counterHours'), String(h).padStart(2, '0'));
    flipUpdate(document.getElementById('counterMinutes'), String(m).padStart(2, '0'));
    flipUpdate(document.getElementById('counterSeconds'), String(s).padStart(2, '0'));
    const pct = Math.min((d / GOAL_DAYS) * 100, 100).toFixed(1);
    const bar = document.getElementById('devLifeBarFill');
    if (bar) bar.style.width = pct + '%';
    const pe = document.getElementById('devLifePercent');
    if (pe) pe.textContent = pct;
}

// =====================
// 6. Project Cards
// =====================
function renderProjects(filter) {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    const list = filter === 'all' ? projects : projects.filter(p => p.type === filter);
    while (grid.firstChild) grid.removeChild(grid.firstChild);

    list.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.cssText = 'opacity:0;transform:translateY(16px)';

        card.append(
            createEl('span', `project-card-tag ${p.type}`, TYPE_LABELS[p.type]),
            createEl('h3', 'project-card-title', p.title),
            createEl('p', 'project-card-desc', p.desc)
        );

        const techs = createEl('div', 'project-card-techs');
        p.techs.forEach(t => techs.appendChild(createEl('span', 'project-tech', t)));
        card.appendChild(techs);

        const footer = createEl('div', 'project-card-footer');
        footer.appendChild(createEl('span', 'project-card-period', p.period));
        footer.appendChild(createEl('span', 'project-card-arrow', '→'));
        card.appendChild(footer);

        card.addEventListener('click', () => openModal(p));
        grid.appendChild(card);
        setTimeout(() => {
            card.style.transition = 'opacity .4s ease, transform .4s ease';
            card.style.opacity = '1';
            card.style.transform = 'none';
        }, 40 + i * 60);
    });
}

// =====================
// 7. Project Modal
// =====================
const modalOverlay = document.getElementById('modalOverlay');
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function openModal(p) {
    document.getElementById('modalTag').textContent = TYPE_LABELS[p.type];
    document.getElementById('modalTag').className = `modal-tag project-card-tag ${p.type}`;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.fullDesc;
    document.getElementById('modalPeriod').textContent = p.period;
    document.getElementById('modalRole').textContent = p.role;
    document.getElementById('modalTeamSize').textContent = p.teamSize;

    const tc = document.getElementById('modalTechs');
    while (tc.firstChild) tc.removeChild(tc.firstChild);
    p.techs.forEach(t => tc.appendChild(createEl('span', 'modal-tech', t)));

    const dc = document.getElementById('modalDetails');
    while (dc.firstChild) dc.removeChild(dc.firstChild);
    dc.appendChild(createEl('h4', '', '주요 내용'));
    const ul = document.createElement('ul');
    p.highlights.forEach(h => ul.appendChild(createEl('li', '', h)));
    dc.appendChild(ul);

    const lw = document.getElementById('modalLinkWrap');
    const le = document.getElementById('modalLink');
    if (p.link) { lw.style.display = 'block'; le.href = p.link; }
    else { lw.style.display = 'none'; }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// =====================
// 8. Skill Orbit Canvas
// =====================
const skillNodes = [
    { name: 'Unity', color: '#0071e3', orbit: 1, angle: 0, speed: 0.008, size: 22 },
    { name: 'C#', color: '#a855f7', orbit: 1, angle: Math.PI * 0.4, speed: 0.008, size: 22 },
    { name: 'WPF', color: '#8b5cf6', orbit: 1, angle: Math.PI * 0.8, speed: 0.008, size: 20 },
    { name: 'Unreal', color: '#06b6d4', orbit: 1, angle: Math.PI * 1.2, speed: 0.008, size: 20 },
    { name: 'C++', color: '#ec4899', orbit: 1, angle: Math.PI * 1.6, speed: 0.008, size: 20 },
    { name: 'Python', color: '#eab308', orbit: 2, angle: 0, speed: 0.005, size: 18 },
    { name: 'Java', color: '#f97316', orbit: 2, angle: Math.PI * 0.5, speed: 0.005, size: 18 },
    { name: 'SQL', color: '#a78bfa', orbit: 2, angle: Math.PI, speed: 0.005, size: 16 },
    { name: 'Git', color: '#22c55e', orbit: 2, angle: Math.PI * 1.5, speed: 0.005, size: 16 },
    { name: 'HTML', color: '#ef4444', orbit: 3, angle: 0, speed: 0.003, size: 14 },
    { name: 'CSS', color: '#3b82f6', orbit: 3, angle: Math.PI * 0.5, speed: 0.003, size: 14 },
    { name: 'JS', color: '#eab308', orbit: 3, angle: Math.PI, speed: 0.003, size: 14 },
    { name: 'React', color: '#06b6d4', orbit: 3, angle: Math.PI * 1.5, speed: 0.003, size: 14 },
];

function initSkillOrbit() {
    const canvas = document.getElementById('skillOrbit');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        const wrap = canvas.parentElement;
        if (!wrap) return;
        const sz = Math.min(wrap.clientWidth, wrap.clientHeight) || 400;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = sz * dpr;
        canvas.height = sz * dpr;
        canvas.style.width = sz + 'px';
        canvas.style.height = sz + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
        if (document.hidden) { requestAnimationFrame(draw); return; }
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.width / dpr, h = canvas.height / dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        const cx = w / 2, cy = h / 2, maxR = Math.min(cx, cy) - 30;
        const radii = [maxR * 0.35, maxR * 0.6, maxR * 0.85];

        radii.forEach(r => {
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255,255,255,0.04)';
            ctx.lineWidth = 1;
            ctx.stroke();
        });

        skillNodes.forEach(n => {
            n.angle += n.speed;
            const r = radii[n.orbit - 1];
            const x = cx + Math.cos(n.angle) * r;
            const y = cy + Math.sin(n.angle) * r * 0.6;

            ctx.beginPath();
            ctx.arc(x, y, n.size, 0, Math.PI * 2);
            ctx.fillStyle = n.color + '15';
            ctx.fill();
            ctx.strokeStyle = n.color + '40';
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.fillStyle = n.color;
            ctx.font = `600 ${Math.max(n.size * 0.6, 9)}px 'Inter', sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(n.name, x, y);
        });
        requestAnimationFrame(draw);
    }

    resize();
    requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
}

// =====================
// 9. GitHub Heatmap
// =====================
const GH_USER = 'dbsrjs';

async function fetchGitHub() {
    try {
        const res = await fetch(`https://api.github.com/users/${GH_USER}`);
        if (res.ok) {
            const d = await res.json();
            const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
            const av = document.getElementById('githubAvatar');
            if (av) av.src = d.avatar_url;
            set('githubName', d.name || d.login);
            set('githubBio', d.bio || 'Software Developer');
            set('githubRepos', d.public_repos);
            set('githubFollowers', d.followers);
            set('githubFollowing', d.following);
        }
        const cr = await fetch(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`);
        if (cr.ok) {
            const cd = await cr.json();
            drawHeatmap(cd.contributions);
        } else {
            drawFallbackHeatmap();
        }
    } catch {
        drawFallbackHeatmap();
    }
}

function drawHeatmap(contribs) {
    const cv = document.getElementById('heatmapCanvas');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = cv.getBoundingClientRect();
    if (!rect.width) return;
    cv.width = rect.width * dpr;
    cv.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const w = rect.width, h = rect.height;
    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    const cs = Math.max(Math.floor((w - 40) / 53), 6);
    const gap = Math.max(Math.floor(cs * 0.2), 2);
    const tw = 53 * (cs + gap), th = 7 * (cs + gap);
    const ox = Math.max((w - tw) / 2, 4), oy = Math.max((h - th) / 2, 4);
    const map = {};
    if (Array.isArray(contribs)) contribs.forEach(c => { map[c.date] = c.count; });
    const today = new Date(), start = new Date(today);
    start.setDate(start.getDate() - 364);
    start.setDate(start.getDate() - start.getDay());
    const mx = Math.max(...Object.values(map), 1);
    for (let wk = 0; wk < 53; wk++) {
        for (let dy = 0; dy < 7; dy++) {
            const dt = new Date(start);
            dt.setDate(dt.getDate() + wk * 7 + dy);
            if (dt > today) continue;
            const cnt = map[dt.toISOString().split('T')[0]] || 0;
            let ci = 0;
            if (cnt > 0) {
                const r = cnt / mx;
                ci = r > 0.75 ? 4 : r > 0.5 ? 3 : r > 0.25 ? 2 : 1;
            }
            ctx.beginPath();
            ctx.roundRect(ox + wk * (cs + gap), oy + dy * (cs + gap), cs, cs, 2);
            ctx.fillStyle = colors[ci];
            ctx.fill();
        }
    }
}

function drawFallbackHeatmap() {
    const cv = document.getElementById('heatmapCanvas');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = cv.getBoundingClientRect();
    if (!rect.width) return;
    cv.width = rect.width * dpr;
    cv.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    for (let w = 0; w < 52; w++) {
        for (let d = 0; d < 7; d++) {
            ctx.beginPath();
            ctx.roundRect(8 + w * 12, 8 + d * 12, 9, 9, 2);
            ctx.fillStyle = colors[Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 5)];
            ctx.fill();
        }
    }
}

// =====================
// 10. Visitor Stats
// =====================
function initVisitorStats() {
    const v = parseInt(localStorage.getItem('lyg_visit_count') || '0') + 1;
    localStorage.setItem('lyg_visit_count', String(v));
    const te = document.getElementById('visitorTotal');
    if (te) te.textContent = v.toLocaleString();
    const t0 = Date.now();
    setInterval(() => {
        const el = Math.floor((Date.now() - t0) / 1000);
        const timeEl = document.getElementById('visitorTime');
        if (timeEl) timeEl.textContent = String(Math.floor(el / 60)).padStart(2, '0') + ':' + String(el % 60).padStart(2, '0');
    }, 1000);
}

// =====================
// 11. Konami Code
// =====================
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let kIdx = 0, yarOn = false;
document.addEventListener('keydown', e => {
    if (e.key === KONAMI[kIdx]) {
        kIdx++;
        if (kIdx === KONAMI.length) {
            if (!yarOn) activateYAR();
            kIdx = 0;
        }
    } else {
        kIdx = 0;
    }
});

function activateYAR() {
    yarOn = true;
    const o = document.getElementById('yarOverlay');
    o.classList.add('active');
    setTimeout(() => { o.classList.remove('active'); yarOn = false; }, 5000);
}

// =====================
// 12. Timeline Auto Active
// =====================
function initTimeline() {
    const today = new Date();
    const items = document.querySelectorAll('.timeline-item');
    let lastPast = -1;
    items.forEach((item, i) => {
        const dateEl = item.querySelector('.timeline-date');
        if (!dateEl) return;
        const dt = dateEl.textContent.trim().replace(/[()예정\s]/g, '');
        const p = dt.split('.');
        const y = parseInt(p[0]), m = p[1] ? parseInt(p[1]) : 1, d = p[2] ? parseInt(p[2]) : 1;
        if (!isNaN(y) && new Date(y, m - 1, d) <= today) lastPast = i;
    });
    items.forEach((item, i) => {
        const marker = item.querySelector('.timeline-marker');
        if (!marker) return;
        marker.classList.remove('active', 'future');
        if (i === lastPast) marker.classList.add('active');
        else if (i > lastPast && lastPast !== -1) marker.classList.add('future');
    });
}

// =====================
// 13. Navigation
// =====================
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinksEl.classList.toggle('open');
});

navLinks.forEach(l => l.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinksEl.classList.remove('open');
}));

// =====================
// 14. Filter Buttons
// =====================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// =====================
// 15. Scroll Handler
// =====================
function initScroll() {
    const nav = document.getElementById('nav');
    const spBar = document.getElementById('scrollProgress');
    const btt = document.getElementById('backToTop');
    const scrollHint = document.getElementById('scrollHint');
    const sections = document.querySelectorAll('main section[id]');
    let maxDepth = 0;
    const visited = new Set();

    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            const sy = window.scrollY;
            const dh = document.documentElement.scrollHeight - window.innerHeight;
            const prog = dh > 0 ? (sy / dh) * 100 : 0;

            if (spBar) spBar.style.width = prog + '%';
            maxDepth = Math.max(maxDepth, prog);

            const sd = document.getElementById('visitorScroll');
            if (sd) sd.textContent = Math.round(maxDepth) + '%';

            nav.classList.toggle('scrolled', sy > 50);
            if (scrollHint) scrollHint.style.opacity = sy > 200 ? '0' : '1';
            if (btt) btt.classList.toggle('visible', sy > 600);

            // Active nav
            let activeId = '';
            sections.forEach(sec => {
                const top = sec.offsetTop - 200;
                if (sy >= top) activeId = sec.id;
                if (sy + window.innerHeight >= sec.offsetTop + 50) visited.add(sec.id);
            });

            // Bottom check
            if (sy + window.innerHeight >= document.documentElement.scrollHeight - 10) {
                activeId = 'contact';
            }

            navLinks.forEach(l => {
                const href = l.getAttribute('href').replace('#', '');
                l.classList.toggle('active', href === activeId);
            });

            const sc = document.getElementById('visitorSections');
            if (sc) sc.textContent = visited.size + '/' + sections.length;
        });
    }, { passive: true });

    if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const href = a.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// =====================
// 16. Reveal Animations
// =====================
function initReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .fade-up').forEach(el => observer.observe(el));

    // Skill bars
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('.skill-fill').forEach(f => {
                    setTimeout(() => { f.style.width = f.dataset.level + '%'; }, 200);
                });
                skillObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));
}

// =====================
// MAIN
// =====================
runPreloader(() => {
    typeEffect();
    updateDevLife();
    setInterval(updateDevLife, 1000);
    initSkillOrbit();
    renderProjects('all');
    initTimeline();
    fetchGitHub();
    initVisitorStats();
    initScroll();
    initReveal();
});
