window.onload = function () {

  const music = document.getElementById("music");
  const startBtn = document.getElementById("startBtn");
  const startScreen = document.getElementById("startScreen");
  const timer = document.getElementById("timer");

  if (!music || !startBtn || !startScreen || !timer) {
    console.log("Element HTML belum lengkap");
    return;
  }

  startBtn.addEventListener("click", function () {
    music.play();
    startScreen.style.display = "none";
    startCountdown();
  });

  function startCountdown() {
    let birthday = new Date("June 27, 2026 00:00:00").getTime();

    setInterval(function () {
      let now = new Date().getTime();
      let distance = birthday - now;

      if (distance < 0) {
        timer.innerHTML = "Happy Birthday 🎉";
        return;
      }

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));

      timer.innerHTML = days + " days left 🎂";

    }, 1000);
  }

const btnUcapan = document.getElementById("btnUcapan");
const ucapan = document.getElementById("ucapan");
const blowBtn = document.getElementById("blowBtn");
const flames = document.querySelectorAll(".flame");

const daftarUcapan = [
  "Selamat ulang tahun! 🎉",
  "Semoga sehat, bahagia, dan sukses selalu! 🎂",
  "Terima kasih sudah menjadi teman yang baik! 💖",
  "Semoga semua impianmu tercapai! ✨",
  "Panjang umur dan selalu diberi kebahagiaan! 🥳",
  "Semoga tahun ini menjadi tahun terbaikmu! 🎁"
];

if (btnUcapan && ucapan) {
  btnUcapan.addEventListener("click", function () {
    const random =
      daftarUcapan[Math.floor(Math.random() * daftarUcapan.length)];

    ucapan.innerHTML = random;
  });
}

if (blowBtn) {
  blowBtn.addEventListener("click", function () {
    flames.forEach(function (f) {
      f.style.display = "none";
    });

    ucapan.innerHTML = "🎉 Yeay! Lilinnya berhasil ditiup! 🎂";

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.background =
        `hsl(${Math.random() * 360},100%,50%)`;

      document.body.appendChild(confetti);

      setTimeout(function () {
        confetti.remove();
      }, 4000);
    }
  });
}
// Membuat bintang
for(let i = 0; i < 50; i++){
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(star);
}

// Membuat balon
const warna = [
    "#ff6b9d",
    "#7f7fff",
    "#ffd166",
    "#7bed9f",
    "#ff9ff3"
];

for(let i = 0; i < 6; i++){
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background =
        warna[Math.floor(Math.random() * warna.length)];

    balloon.style.animationDelay =
        Math.random() * 10 + "s";

    document.body.appendChild(balloon);
}
};

