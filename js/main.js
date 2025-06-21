// Typed.js init
var typed = new Typed('#typed', {
  strings: [
    "Semoga hari ini seindah senyum kamu 💖",
    "God Bless U Sayang",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  showCursor: false
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
  "Thank you udah hadir di hidup aku 🥰",
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
      text: 'Happy birthday, sayang! 🎉🥳 Gak nyangka ya, kamu udah tambah tua lagi setahun, tapi tenang, kamu masih tetep ganteng kok di mataku, walaupun kadang nyebelin! 😜 Aku bersyukur banget punya kamu, yang selalu bikin hari-hariku penuh warna, penuh tawa, dan kadang bikin aku darah tinggi juga. Semoga di umur yang baru ini kamu makin sehat, makin sukses, dan makin sayang sama aku (ini penting! 😘). Aku bakal terus nemenin kamu sampe kamu nemu pertner seiman kamu yaa, aku bisa jadi partner in crime, temen curhat kamu juga. Pokoknya, aku sayang kamu banget. Terima kasih udah jadi orang yang paling spesial dalam hidup aku. Yuk, kita rayain ulang tahunmu dengan cara yang paling gokil dan berkesan! Love you to the moon and back! 💖🎂🎈',
      customClass: {
      popup: 'my-sweetalert'},
      imageUrl: 'assets/wowo.jpg',
      imageWidth: 280,
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
    body.classList.add('day');
    body.classList.remove('night');
  } else {
    body.classList.add('night');
    body.classList.remove('day');
  }
});

function updateCountdown() {
  const now = new Date();
  const nextBirthday = new Date(now.getFullYear(), 6, 23); // 23 Juli tahun ini
  // Kalau ultah-nya udah lewat tahun ini, set ke tahun depan
  if (now > nextBirthday) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
  }
  const diff = nextBirthday - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById('countdown').innerText = `🎂 ${days} hari lagi ke ultah kamu!`;
}
setInterval(updateCountdown, 1000);
