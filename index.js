const envelopeWrap = document.getElementById('envelopeWrap');
const letterBox = document.getElementById('letterBox');
const lineList = document.querySelectorAll('.page1-text .line');
const cursiveText = document.getElementById('cursiveText');

// 点击开启信件
envelopeWrap.addEventListener('click', () => {
    envelopeWrap.style.display = 'none';
    letterBox.style.display = 'block';

    // 第一页逐行文字动画
    lineList.forEach((line, index) => {
        setTimeout(() => {
            line.style.transition = 'all 0.7s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, index * 600);
    });

    // 第五页行书大字逐字动画
    const textContent = cursiveText.innerText;
    cursiveText.innerHTML = "";
    const charArr = [];
    for(let i = 0; i < textContent.length; i++) {
        const span = document.createElement('span');
        span.innerText = textContent[i];
        cursiveText.appendChild(span);
        charArr.push(span);
    }
    setTimeout(() => {
        charArr.forEach((char, idx) => {
            setTimeout(() => {
                char.style.transition = 'all 0.4s ease-out';
                char.style.opacity = '1';
                char.style.transform = 'translateX(0)';
            }, idx * 220);
        });
    }, 1200);
});