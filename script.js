const songs = [
  "Florin Salam feat. Florin Cercel - Bomba.mp3",
  "Tzanca Uraganu - Am dat jos ceasul iar.mp3",
  "BODO x SUSANU - Duduie duduia.mp3",
  "Zodier si Yuka - Cioburi.mp3",
  "ANDA ADAM - Dale Dale.mp3",
  "Iuly Neamtu - Terea turcoaz.mp3",
  "Dani Mocanu - Minora.mp3",
  "Alex Velea feat. Connect-R feat. Smiley - Combinatia.mp3",
  "Party Eurodance 1.mp3",
  "Dani Mocanu Florin Cercel - Perdoname.mp3",
  "ASU - Si Stii De Ce.mp3",
  "Play - Imbatranesc.mp3",
  "Adrian Tutu feat. Lidia - Omul te vinde.mp3",
  "Susanu si Culita Sterp - Ai tu ceva.mp3",
  "Tzanca Uraganu - Cupidoane.mp3",
  "Karmelita D - Tu nu stii.mp3",
  "Party Eurodance 2.mp3",
  "Nicolae Guta si Play AJ - Lasa muzica la maxim.mp3",
  "Tzanca Uraganu - Mananca gagica bio.mp3",
  "Play - Lasama badita.mp3",
  "IRAIDA - Lume Lume.mp3",
  "Party Eurodance 3.mp3",
  "Robert de la Turnu - Bruneta de Bucuresti.mp3",
  "Luci Diamantul feat. Elys feat. Susanu - Saruta-ma fara jena.mp3",
  "Karmelita D - Inimioara inimioara.mp3",
  "Adrian Tutu Aziza - La masa mea.mp3",
  "Pitbull ft Dua Lipa - NEON FIESTA.mp3",
  "BABASHA - E bună dar nebună.mp3",
  "Marsel x Franci x Klement - COCOMELO.mp3",
  "Florian Rus feat. Inna - 7 zile.mp3",
  "The Urs - Vantul.mp3",
  "Bogdan DLP - Aladam.mp3",
  "Ultra Manele x Costi Biju - Ciao Bella.mp3",
  "Play - La tine vin.mp3",
  "Lady Gaga feat. Bruno Mars - Die With A Smile.mp3",
  "Nicolae Guta si Susanu - Pe barosaneala.mp3",
  "Carmen Serban - Aș plati Karma-n monede.mp3",
  "F.Charm - Cat sunt tanar si mai pot.mp3",
  "Vunk - Scrisoare.mp3",
  "Denis Ramniceanu - Tagadam pas pas.mp3",
  "Tzanca Uraganu x Denis Ramniceanu - la de-aici macinici.mp3",
  "VESCAN x Andrei Banuta - Old Friend.mp3",
  "Irina Rimes - Sa nu uiti cat te-am iubit.mp3",
  "Tador x Alma - Hai Dui Dui Dui La Marginea Satului.mp3",
  "Whats UP x Miky ME - O iubire Nu Pleca.mp3",
  "GEO x ARYO - DALEDUM.mp3",
  "Vali Vijelie feat. Minodora - Un an trece.mp3"
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

