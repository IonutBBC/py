const songs = [
  "BODO x SUSANU - Duduie duduia.mp3",
  "Dani Mocanu - Minora.mp3",
  "Florin Salam feat. Florin Cercel - Bomba.mp3",
  "Nicolae Guta si Play AJ - Lasa muzica la maxim.mp3"
];
const playlist = document.getElementById("playlist");
const audio = document.getElementById("audio");

let currentIndex = 0;

// Blocări basic
document.addEventListener("contextmenu", e => e.preventDefault());
audio.addEventListener("dragstart", e => e.preventDefault());

// Construire playlist
songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song
        .replace(".mp3", "")
        .replaceAll("_", " ")
        .replace(/^\d+-/, "");
    li.onclick = () => playSong(index);
    playlist.appendChild(li);
});

function playSong(index) {
    currentIndex = index;
    audio.src = `music/${songs[index]}`;
    audio.play();
    updateActive();
}

// Auto next
audio.addEventListener("ended", () => {
    currentIndex++;
    if (currentIndex >= songs.length) currentIndex = 0;
    playSong(currentIndex);
});

function updateActive() {
    document.querySelectorAll("li").forEach((li, i) => {
        li.classList.toggle("active", i === currentIndex);
    });
}
const startOverlay = document.getElementById('startOverlay');

startOverlay.addEventListener('click', () => {
    playSong();           // pornește prima melodie
    startOverlay.style.display = 'none'; // ascunde overlay-ul
});



// Start automat
playSong(0);

const lights = document.querySelector(".lights-bulbs");

function addBulb(x, y) {
    const b = document.createElement("div");
    b.className = "bulb";
    b.style.left = x;
    b.style.top = y;
    b.style.background = `hsl(${Math.random()*360},100%,60%)`;
    b.style.animationDuration = (Math.random()*1.5 + 0.5) + "s";
    lights.appendChild(b);
}

/* SUS – 15 */
for (let i = 0; i < 15; i++) {
    addBulb(`calc(${i * (100/15)}% + 6px)`, "4px");
}

/* JOS – 15 */
for (let i = 0; i < 15; i++) {
    addBulb(`calc(${i * (100/15)}% + 6px)`, "calc(100% - 12px)");
}

/* STÂNGA – 30 */
for (let i = 0; i < 30; i++) {
    addBulb("4px", `calc(${i * (100/30)}% + 6px)`);
}

/* DREAPTA – 30 */
for (let i = 0; i < 30; i++) {
    addBulb("calc(100% - 12px)", `calc(${i * (100/30)}% + 6px)`);
}

/* SCHIMBĂ CULORILE RANDOM */
setInterval(() => {
    document.querySelectorAll(".bulb").forEach(b => {
        b.style.background = `hsl(${Math.random()*360},100%,60%)`;
    });
}, 1200);






