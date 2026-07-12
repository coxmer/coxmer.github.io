const envelopeWrap = document.getElementById('envelopeWrap');
const letterBox = document.getElementById('letterBox');

// ===== 点击信封，进入阅读 =====
envelopeWrap.addEventListener('click', () => {
    envelopeWrap.style.display = 'none';
    letterBox.style.display = 'block';

    // 初始化所有页面的观察器
    initPageObservers();

    // 后备：如果 observer 没有立即触发第一页，500ms 后强制触发
    setTimeout(() => {
        const firstPage = document.querySelector('.page1');
        if (firstPage && !firstPage.dataset.animated) {
            triggerPage1Animation(firstPage);
        }
    }, 500);
});

// ===== 使用 Intersection Observer 监听每个页面 =====
function initPageObservers() {
    const pages = document.querySelectorAll('.page');
    const pageAnimations = {
        page1: triggerPage1Animation,
        page2: triggerPage2Animation,
        page3: triggerPage3Animation,
        page4: triggerPage4Animation,
        page5: triggerPage5Animation
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const page = entry.target;
                // 获取页面标识
                let id = '';
                for (const cls of page.classList) {
                    if (cls.startsWith('page') && cls !== 'page') {
                        id = cls;
                        break;
                    }
                }
                if (id && pageAnimations[id]) {
                    pageAnimations[id](page);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });

    pages.forEach(page => observer.observe(page));
}

// ===== 第一页动画 =====
function triggerPage1Animation(page) {
    if (!page) page = document.querySelector('.page1');
    if (page && page.dataset.animated) return;
    if (page) page.dataset.animated = 'true';

    const lines = document.querySelectorAll('.page1-text .line');
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.transition = 'all 0.7s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, index * 600);
    });
}

// ===== 第二页动画 =====
function triggerPage2Animation(page) {
    if (page.dataset.animated) return;
    page.dataset.animated = 'true';

    const img = page.querySelector('.img-area img');
    const text = page.querySelector('.text-area');

    if (img) {
        setTimeout(() => { img.style.opacity = '1'; }, 200);
    }
    if (text) {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateX(0)';
        }, 300);
    }
}

// ===== 第三页动画 =====
function triggerPage3Animation(page) {
    if (page.dataset.animated) return;
    page.dataset.animated = 'true';

    const text = page.querySelector('.text-area');
    const imgs = page.querySelectorAll('.slide-track img');
    imgs. forEach(img => {
        setTimeout(() => {
            img.style.opacity = '1';
        }, 150);
    });
    if (text) {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateX(0)';
        }, 200);
    }
}

// ===== 第四页动画 =====
function triggerPage4Animation(page) {
    if (page.dataset.animated) return;
    page.dataset.animated = 'true';

    const card = page.querySelector('.glass-card');
    if (card) {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, 150);
    }
}

// ===== 第五页动画 =====
function triggerPage5Animation(page) {
    if (page.dataset.animated) return;
    page.dataset.animated = 'true';

    const cursiveText = document.getElementById('cursiveText');
    const textContent = cursiveText.innerText;

    cursiveText.innerHTML = '';
    const charArr = [];
    for (let i = 0; i < textContent.length; i++) {
        const span = document.createElement('span');
        span.innerText = textContent[i];
        span.style.opacity = '0';
        span.style.transform = 'translateX(-20px)';
        span.style.display = 'inline-block';
        cursiveText.appendChild(span);
        charArr.push(span);
    }

    charArr.forEach((char, idx) => {
        setTimeout(() => {
            char.style.transition = 'all 0.4s ease-out';
            char.style.opacity = '1';
            char.style.transform = 'translateX(0)';
        }, idx * 200);
    });
}