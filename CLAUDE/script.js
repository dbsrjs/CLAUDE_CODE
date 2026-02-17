/* ========================================
   Claude Introduction Page - Script
   Pure Vanilla JS, No Libraries
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // =====================
    // 1. Particle System (Canvas)
    // =====================
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Mouse interaction
            if (mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    this.x -= dx * force * 0.02;
                    this.y -= dy * force * 0.02;
                }
            }

            // Wrap around
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(232, 115, 74, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 200);
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }
    initParticles();
    window.addEventListener('resize', initParticles);

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    const opacity = (1 - dist / 130) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(232, 115, 74, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        requestAnimationFrame(animateParticles);
    }
    animateParticles();


    // =====================
    // 2. Typing Animation (Hero)
    // =====================
    const typedTextEl = document.getElementById('typed-text');
    const phrases = [
        'Anthropic이 만든 AI 어시스턴트입니다.',
        '코딩, 분석, 글쓰기를 도와드립니다.',
        '100개 이상의 프로그래밍 언어를 다룹니다.',
        '안전하고, 정직하며, 도움이 되는 AI입니다.',
        '여러분의 든든한 디지털 파트너입니다.'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const current = phrases[phraseIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typedTextEl.innerHTML = current.substring(0, charIndex) + '<span class="cursor"></span>';

        let speed = isDeleting ? 30 : 60;

        if (!isDeleting && charIndex === current.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }
    typeEffect();


    // =====================
    // 3. Navigation
    // =====================
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });


    // =====================
    // 4. Scroll Reveal (Intersection Observer)
    // =====================
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach((el, i) => {
        // Add staggered delay to grid items
        const parent = el.parentElement;
        if (parent && (parent.classList.contains('skills-grid') || parent.classList.contains('about-stats'))) {
            el.dataset.delay = i * 100;
        }
        revealObserver.observe(el);
    });


    // =====================
    // 5. Count-up Animation
    // =====================
    const statNumbers = document.querySelectorAll('.stat-number');
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

    statNumbers.forEach(el => countObserver.observe(el));

    function animateCount(el, target) {
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(update);
    }


    // =====================
    // 6. Skill Bar Animation
    // =====================
    const skillFills = document.querySelectorAll('.skill-fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                entry.target.style.width = width + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillFills.forEach(el => skillObserver.observe(el));


    // =====================
    // 7. 3D Tilt Effect (Skill Cards)
    // =====================
    const tiltCards = document.querySelectorAll('[data-tilt]');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });


    // =====================
    // 8. Code Typing Demo
    // =====================
    const codeOutput = document.getElementById('code-output');
    const codeLines = [
        { text: '# Claude AI - Demo\n', cls: 'comment' },
        { text: 'class ', cls: 'keyword' },
        { text: 'Claude', cls: 'class-name' },
        { text: ':\n', cls: '' },
        { text: '    def ', cls: 'keyword' },
        { text: '__init__', cls: 'function' },
        { text: '(self):\n', cls: '' },
        { text: '        self.name = ', cls: '' },
        { text: '"Claude"', cls: 'string' },
        { text: '\n        self.creator = ', cls: '' },
        { text: '"Anthropic"', cls: 'string' },
        { text: '\n        self.languages = ', cls: '' },
        { text: '100', cls: 'number' },
        { text: '\n        self.helpful = ', cls: '' },
        { text: 'True', cls: 'keyword' },
        { text: '\n\n    def ', cls: 'keyword' },
        { text: 'assist', cls: 'function' },
        { text: '(self, task):\n', cls: '' },
        { text: '        ', cls: '' },
        { text: '"""도움이 필요하시면 말씀해주세요!"""', cls: 'string' },
        { text: '\n        result = self.', cls: '' },
        { text: 'think', cls: 'function' },
        { text: '(task)\n', cls: '' },
        { text: '        ', cls: '' },
        { text: 'return ', cls: 'keyword' },
        { text: 'result\n\n', cls: '' },
        { text: '    def ', cls: 'keyword' },
        { text: 'think', cls: 'function' },
        { text: '(self, problem):\n', cls: '' },
        { text: '        ', cls: '' },
        { text: '# 단계별로 깊이 사고합니다\n', cls: 'comment' },
        { text: '        steps = self.', cls: '' },
        { text: 'analyze', cls: 'function' },
        { text: '(problem)\n', cls: '' },
        { text: '        solution = self.', cls: '' },
        { text: 'solve', cls: 'function' },
        { text: '(steps)\n', cls: '' },
        { text: '        ', cls: '' },
        { text: 'return ', cls: 'keyword' },
        { text: 'solution\n\n', cls: '' },
        { text: '# 인스턴스 생성\n', cls: 'comment' },
        { text: 'claude = ', cls: '' },
        { text: 'Claude', cls: 'class-name' },
        { text: '()\n', cls: '' },
        { text: 'print', cls: 'function' },
        { text: '(claude.', cls: '' },
        { text: 'assist', cls: 'function' },
        { text: '(', cls: '' },
        { text: '"당신의 문제"', cls: 'string' },
        { text: '))', cls: '' },
    ];

    let codeTyped = false;
    const codeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !codeTyped) {
                codeTyped = true;
                typeCode();
                codeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    codeObserver.observe(document.querySelector('.code-window'));

    function typeCode() {
        let lineIdx = 0;
        let charIdx = 0;

        function addChar() {
            if (lineIdx >= codeLines.length) {
                // Remove cursor when done
                const cursor = codeOutput.querySelector('.code-cursor');
                if (cursor) cursor.remove();
                return;
            }

            const line = codeLines[lineIdx];
            const char = line.text[charIdx];

            // Remove old cursor
            const oldCursor = codeOutput.querySelector('.code-cursor');
            if (oldCursor) oldCursor.remove();

            if (charIdx === 0) {
                // Start a new span for this segment
                const span = document.createElement('span');
                span.className = line.cls;
                span.dataset.lineIdx = lineIdx;
                codeOutput.appendChild(span);
            }

            const currentSpan = codeOutput.querySelector(`[data-line-idx="${lineIdx}"]`);
            currentSpan.textContent += char;

            // Add cursor
            const cursor = document.createElement('span');
            cursor.className = 'code-cursor';
            codeOutput.appendChild(cursor);

            charIdx++;

            if (charIdx >= line.text.length) {
                charIdx = 0;
                lineIdx++;
            }

            const speed = char === '\n' ? 80 : (Math.random() * 30 + 15);
            setTimeout(addChar, speed);
        }

        addChar();
    }


    // =====================
    // 9. Smooth Scroll for Anchor Links
    // =====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
