function openInvitation() {
    // 1. Ẩn phong thư
    document.getElementById('envelope-wrapper').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // 2. Chạy nhạc
    const audio = document.getElementById('bg-music');
    audio.volume = 0;
    audio.play();

    // 3. Hiệu ứng Fade in âm thanh 3 giây
    let vol = 0;
    const interval = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            audio.volume = Math.min(vol, 1);
        } else {
            clearInterval(interval);
        }
    }, 150); // Tăng dần trong khoảng ~3s

    // 4. Kích hoạt icon xoay & hoa rơi
    document.getElementById('music-container').classList.add('rotating');
    startSnow();
}

function toggleMusic() {
    const audio = document.getElementById('bg-music');
    const container = document.getElementById('music-container');
    if (audio.paused) {
        audio.play();
        container.classList.add('rotating');
    } else {
        audio.pause();
        container.classList.remove('rotating');
    }
}

// Hàm tạo hiệu ứng hoa rơi
function startSnow() {
    const petalCount = 20;
    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }
}

function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = '🌸'; // Hoặc dùng icon cánh hoa
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
    petal.style.opacity = Math.random();
    document.body.appendChild(petal);
}