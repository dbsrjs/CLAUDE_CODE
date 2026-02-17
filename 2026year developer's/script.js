/* ========================================
   2026 Developer's Report - Enhanced Script
   Interactive Effects + Visual Candy
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // =====================
    // 1. Matrix Rain (Canvas)
    // =====================
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF{}[]<>/=;:.';
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = new Array(columns).fill(1);

    window.addEventListener('resize', () => {
        columns = Math.floor(canvas.width / fontSize);
        drops = new Array(columns).fill(1);
    });

    function drawMatrix() {
        ctx.fillStyle = 'rgba(6, 6, 14, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            // Random color between cyan, purple, and dimmed
            const rand = Math.random();
            if (rand > 0.97) {
                ctx.fillStyle = `rgba(0, 240, 255, ${Math.random() * 0.3 + 0.1})`;
            } else if (rand > 0.94) {
                ctx.fillStyle = `rgba(168, 85, 247, ${Math.random() * 0.2 + 0.05})`;
            } else {
                ctx.fillStyle = `rgba(0, 240, 255, ${Math.random() * 0.08 + 0.02})`;
            }
            ctx.fillText(char, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        requestAnimationFrame(drawMatrix);
    }
    drawMatrix();


    // =====================
    // 2. Cursor Glow
    // =====================
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorGlow.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.classList.remove('active');
    });

    function animateGlow() {
        // Smooth follow
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        requestAnimationFrame(animateGlow);
    }
    animateGlow();


    // =====================
    // 3. Scroll Progress Bar
    // =====================
    const scrollProgress = document.getElementById('scrollProgress');

    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = progress + '%';
    }
    window.addEventListener('scroll', updateProgress);


    // =====================
    // 4. Navigation
    // =====================
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
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
    // 5. Smooth Scroll
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


    // =====================
    // 6. Scroll Reveal (Intersection Observer) with Stagger
    // =====================
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay || 0);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));


    // =====================
    // 7. Count-Up Animation
    // =====================
    const counterNums = document.querySelectorAll('.counter-num');

    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.target);
                animateCount(el, target);
                countObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counterNums.forEach(el => countObserver.observe(el));

    function animateCount(el, target) {
        const duration = 2200;
        const start = performance.now();
        const isFloat = target % 1 !== 0;

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(2, -10 * progress);
            const current = eased * target;

            if (isFloat) {
                el.textContent = current.toFixed(1);
            } else {
                el.textContent = Math.floor(current).toLocaleString();
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = isFloat ? target.toFixed(1) : target.toLocaleString();
            }
        }
        requestAnimationFrame(update);
    }


    // =====================
    // 8. Bar Chart + Meter Fill Animation
    // =====================
    const barFills = document.querySelectorAll('.bar-fill');
    const meterFills = document.querySelectorAll('.meter-fill');
    const allFills = [...barFills, ...meterFills];

    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                setTimeout(() => {
                    entry.target.style.width = width + '%';
                }, 200);
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    allFills.forEach(el => barObserver.observe(el));


    // =====================
    // 9. Donut Chart Animation
    // =====================
    const circumference = 2 * Math.PI * 60;

    const donutSegments = document.querySelectorAll('.donut-segment');
    donutSegments.forEach(seg => {
        seg.style.strokeDasharray = circumference;
        seg.style.strokeDashoffset = circumference;
    });

    const donutEl = document.querySelector('.donut');
    if (donutEl) {
        const donutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateDonut();
                    donutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        donutObserver.observe(donutEl);
    }

    function animateDonut() {
        let cumulativeOffset = 0;
        const segments = document.querySelectorAll('.donut-segment');

        segments.forEach((seg, i) => {
            const percent = parseInt(seg.dataset.percent);
            const segLength = (percent / 100) * circumference;
            const gap = 8;

            const finalDasharray = `${segLength - gap} ${circumference - segLength + gap}`;
            seg.style.strokeDasharray = `0 ${circumference}`;
            seg.style.strokeDashoffset = -cumulativeOffset;

            setTimeout(() => {
                seg.style.transition = `stroke-dasharray 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                seg.style.strokeDasharray = finalDasharray;
            }, 100 + i * 200);

            cumulativeOffset += segLength;
        });
    }


    // =====================
    // 10. Active Nav Highlight
    // =====================
    const sections = document.querySelectorAll('.section, .hero');
    const navAnchors = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navAnchors.forEach(a => {
                    a.style.color = '';
                    a.style.textShadow = '';
                    if (a.getAttribute('href') === '#' + id) {
                        a.style.color = 'var(--cyan)';
                        a.style.textShadow = '0 0 8px rgba(0, 240, 255, 0.4)';
                    }
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(sec => sectionObserver.observe(sec));


    // =====================
    // 11. Card Tilt Effect on Hover
    // =====================
    const tiltCards = document.querySelectorAll('.crisis-card, .trend-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });


    // =====================
    // 12. Parallax Orbs on Scroll
    // =====================
    const orbs = document.querySelectorAll('.orb');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        orbs.forEach((orb, i) => {
            const speed = (i + 1) * 0.15;
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });


    // =====================
    // 13. Scramble Text Effect on Section Titles
    // =====================
    const scrambleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrambleText(entry.target);
                scrambleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-title').forEach(el => {
        scrambleObserver.observe(el);
    });

    function scrambleText(el) {
        const original = el.textContent;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
        let iteration = 0;
        const maxIterations = 12;

        const interval = setInterval(() => {
            el.textContent = original
                .split('')
                .map((char, index) => {
                    if (char === ' ') return ' ';
                    if (index < iteration) return original[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            iteration += 1 / 2;

            if (iteration >= original.length) {
                el.textContent = original;
                clearInterval(interval);
            }
        }, 40);
    }

});
