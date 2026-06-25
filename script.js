const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const music = document.getElementById("music");
const timer = document.getElementById("timer");
const btnUcapan = document.getElementById("btnUcapan");
const ucapan = document.getElementById("ucapan");
const blowBtn = document.getElementById("blowBtn");

/* Buka surprise */
startBtn.onclick = () => {
    startScreen.style.display = "none";

    music.play().catch(() => {
        console.log("Musik tidak dapat diputar otomatis.");
    });
};

/* Hitung umur (lahir 27 Juni 2006) */
function updateTimer() {
    const birthday = new Date("June 27, 2026 00:00:00").getTime();

    setInterval(function () {
        const now = new Date().getTime();
        const distance = birthday - now;

        if (distance <= 0) {
            timer.innerHTML = "🎂 Selamat Ulang Tahun ke-20 🎉";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        timer.innerHTML =
            `🎂 ${days} hari ${hours} jam lagi menuju ulang tahun ke-20 🎉`;

    }, 1000);
}

updateTimer();

/* Ucapan random */
const daftarUcapan = [
    "Selamat ulang tahun! 🎉",
    "Semoga sehat, bahagia, dan sukses selalu! 🎂",
    "Terima kasih sudah menjadi teman yang baik! 💖",
    "Semoga semua impianmu tercapai! ✨",
    "Panjang umur dan selalu diberi kebahagiaan! 🥳",
    "Semoga tahun ini menjadi tahun terbaikmu! 🎁",
    "Happy Birthday! Tetap jadi pribadi yang hebat! 🌟",
    "Semoga hari-harimu dipenuhi senyuman dan keberuntungan! 💕"
];

btnUcapan.onclick = () => {
    const random =
        daftarUcapan[
            Math.floor(Math.random() * daftarUcapan.length)
        ];

    ucapan.innerHTML = random;
};

/* Tiup lilin */
blowBtn.onclick = () => {
    document.querySelectorAll(".flame")
        .forEach(f => f.style.display = "none");

    ucapan.innerHTML = "🎉 Yeay! Lilinnya berhasil ditiup! 🎂";

    buatConfetti();
};

/* Confetti */
function buatConfetti() {
    for (let i = 0; i < 80; i++) {
        const c = document.createElement("div");

        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.background =
            `hsl(${Math.random() * 360},100%,50%)`;

        c.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(c);

        setTimeout(() => {
            c.remove();
        }, 5000);
    }
}

/* Membuat bintang */
for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay =
        Math.random() * 2 + "s";

    document.body.appendChild(star);
}

/* Membuat balon */
const warnaBalon = [
    "#ff4fa3",
    "#4fc3ff",
    "#ffe14f",
    "#7dff7d",
    "#b86cff"
];

for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");

    balloon.className = "balloon";
    balloon.style.left =
        Math.random() * 100 + "vw";

    balloon.style.background =
        warnaBalon[
            Math.floor(Math.random() * warnaBalon.length)
        ];

    balloon.style.animationDelay =
        Math.random() * 15 + "s";

    document.body.appendChild(balloon);
        }
