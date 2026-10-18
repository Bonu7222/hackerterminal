const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

const hackBtn = document.getElementById('hack-btn');
const typedText = document.getElementById('typed-text');
const terminalBody = document.getElementById('terminal-body');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|;:<>?/';
const fontSize = 16;


const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

let isRaining = false;
let rainInterval;

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}


function startRain() {
    if (isRaining) return;
    isRaining = true;
    rainInterval = setInterval(drawMatrix, 35);
}

const hackSequence = [
    "Initializing exploit framework...",
    "Bypassing firewall [Layer 1]...",
    "Bypassing firewall [Layer 2]...",
    "Injecting payload...",
    "Decrypting secure files...",
    "Accessing main database...",
    "Downloading data (500TB)...",
    "Covering tracks...",
    "ACCESS GRANTED. WELCOME TO THE MAINFRAME."
];

let currentLine = 0;
let currentChar = 0;

function typeHackerText() {
    if (currentLine < hackSequence.length) {
        if (currentChar < hackSequence[currentLine].length) {
            typedText.innerHTML += hackSequence[currentLine].charAt(currentChar);
            currentChar++;
            setTimeout(typeHackerText, Math.random() * 50 + 20);
        } else {
            typedText.innerHTML += "<br><br><span class='prompt'>root@hack:~#</span> ";
            currentLine++;
            currentChar = 0;
            setTimeout(typeHackerText, 500);
        }
    } else {
        const newLine = document.createElement('p');
        newLine.className = 'line highlight';
        newLine.innerHTML = "SYSTEM OVERRIDDEN. YOU ARE IN.";
        terminalBody.appendChild(newLine);
        hackBtn.textContent = "SYSTEM HACKED";
        hackBtn.disabled = true;
        hackBtn.style.borderColor = "#fff";
        hackBtn.style.color = "#fff";
    }
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

hackBtn.addEventListener('click', () => {
    hackBtn.style.display = 'none';
    startRain();

    typedText.innerHTML = "";
    currentLine = 0;
    currentChar = 0;

    typeHackerText();
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});