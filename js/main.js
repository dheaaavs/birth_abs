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

// Tampilkan surprise dan modal peluk
let index = 0;

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
      confirmButtonText: 'Next ❤️',
      customClass: {
        popup: 'my-sweetalert'
      }
    }).then(() => {
      index++;
      showSurprise(); // panggil lagi sampai selesai semua pesan
    });
  } else {
    askForHug(); // Panggil askForHug langsung TANPA else tambahan yang error
  }
}

function askForHug() {
  Swal.fire({
    title: '🎉🎉🎉',
    text: 'hug me noww 🤭❤️',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Siap Sayang 😘',
    cancelButtonText: 'Gamau 😜',
    customClass: {
      popup: 'my-sweetalert',
      confirmButton: 'btn-gemes',
      cancelButton: 'btn-gemes-cancel'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const audio = document.getElementById("bg-music");
      localStorage.setItem("songTime", audio.currentTime);
      showPelukModal();
    } else {
      Swal.fire({
        title: '😢',
        text: 'Kamu ga sayang aku? Kenapa gamau?',
        icon: 'question',
        confirmButtonText: 'Yaudah deh peluk 🥺',
        customClass: {
          confirmButton: 'btn-gemes'
        }
      }).then(() => {
        askForHug(); // Loop lagi sampai klik peluk
      });
    }
  });
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

document.addEventListener('DOMContentLoaded', () => {
  const giftBox = document.getElementById('gift-box');
  giftBox.addEventListener('click', () => {
    startConfetti();
    Swal.fire({
      title: 'Surprise!',
      html: `
        <p>Hepi betdeyyy cayankkuu! 🎉🥳 Hihihi gak kerasa yaaa, kamu udah tambah tua setahuun, tapi tenang ajaa, di mataku kamu tetep ganteng kok, walaupun kadang suka ngeselin bangett! 😜</p>
        <p>Akuu tuh bersyukuur bangeeet punyaa kamu, yang selalu bikin hari-hari aku jadi warna-warni, ketawa-tawaa, kadang bikin akuu emosi jugaa sih, tapi gemesh! 🤭</p>
        <p>Semogaa di umurr yang baruu ini kamu makin sehat, makin sukses, makin sayaaang sama akuu yaaa (ini pentiiing! 😘),</p>
        <p>Aku janji mau terus nemenin kamu sampe kamu nemu partner seimann, akuu bisa jadi partner in crime kamu jugaa, temen curhat jugaa, pokoknya aku setiaaa hihihi 🥰</p>
        <p>Akuu sayaaang kamu bangett, makasii yaa udah jadi orang yang paling spesialldi hidup akuu. Love u my haholongan! 💖🎂🎈</p>
        <br>
        <p style="text-align:right; font-style:italic;">Ur Beloved</p>
        <p style="text-align:right; font-style:italic;">Dhea</p>
      `,
      customClass: {
        popup: 'my-sweetalert'
      },
      imageUrl: 'assets/dhea.png',
      imageWidth: 280,
      imageHeight: 200,
      confirmButtonText: 'done!'
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


// Loader selesai setelah delay
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 2000);
});

// Play sound saat klik tombol atau gift
function playClickSound() {
  const clickSound = document.getElementById("click-sound");
  clickSound && clickSound.play();
}

// Tampilkan modal peluk + animasi
function showPelukModal() {
  const modal = document.getElementById('pelukModal');
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('hug-gif').style.display = 'block';
}

// Tambahan Easter Egg: tekan tombol H
document.addEventListener('keydown', function(e) {
  if (e.key.toLowerCase() === 'h') {
    Swal.fire("Ketauan yaa, kamu pencet tombol rahasia! 😘");
  }
});
