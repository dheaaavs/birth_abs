// Typed.js init
var typed = new Typed('#typed', {
  strings: [
    "Aku punya kejutan buat kamu 😊",
    "Semoga hari ini seindah senyum kamu 💖",
    "Aku sayang kamu lebih dari kata-kata 😘"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Confetti function
function startConfetti() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}

// Pesan SweetAlert2
const messages = [
  "Selamat ulang tahun my captain ❤️",
  "Semoga semua impian kamu tercapai ✨",
  "Tetap jadi kamu yang manis & baik 😘",
  "Terima kasih udah hadir di hidup aku 🥰",
  "I love you more everyday 💖"
];
let index = 0;

// Tampilkan surprise dan modal peluk
function showSurprise() {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  }
  startConfetti();

  if (index < messages.length) {
    Swal.fire({
      title: '💌 Pesan Buat Kamu',
      text: messages[index],
      icon: 'success',
      confirmButtonText: 'Next ❤️'
    });
    index++;
  } else {
    Swal.fire({
      title: '🎉🎉🎉',
      text: 'Peluk aku sekarang dong 🤭❤️',
      icon: 'info',
      confirmButtonText: 'Siap Sayang 😘'
    }).then(() => {
      localStorage.setItem("songTime", audio.currentTime);
      showPelukModal();
    });
  }
}

// Tampilkan modal peluk
function showPelukModal() {
  const modal = document.getElementById('pelukModal');
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
}

// Tutup modal peluk
function closePeluk() {
  const modal = document.getElementById('pelukModal');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

// Love Rain animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 2) + 's';
  heart.textContent = '💖';
  document.getElementById('love-rain').appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Swiper init
document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// Virtual Gift Click Event
document.addEventListener('DOMContentLoaded', () => {
  const giftBox = document.getElementById('gift-box');
  giftBox.addEventListener('click', () => {
    startConfetti();
    Swal.fire({
      title: 'Surprise!',
      text: 'Hadiah spesial untuk kamu sayang 💝',
      imageUrl: 'assets/images.png',
      imageWidth: 200,
      imageHeight: 200,
      confirmButtonText: 'Makasih sayang!'
    });
  });
});

// Background Music autoplay fix
document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("bg-music");
  audio.play().catch(() => {
    console.log("Autoplay ditolak browser, akan diputar saat klik tombol.");
  });
});

// Ganti background sesuai waktu
document.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  const body = document.body;

  if (hour >= 6 && hour < 18) {
    body.style.background = "linear-gradient(to bottom, #a1c4fd, #c2e9fb)";
  } else {
    body.style.background = "linear-gradient(to bottom, #2c3e50, #4ca1af)";
  }
});
