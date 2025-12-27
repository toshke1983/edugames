import { gameData, uiStrings } from './data.js';

let currentLang = 'en';
let currentGameMode = 'europe';
let currentID = '';
let previousID = '';
let weights = {};
let score = 0;
let streak = 0;
let maxStreak = 0;

export function setLang(lang) {
    currentLang = lang;
    document.getElementById('map-select').style.display = 'block';
}

export function startGame(mode) {
    currentGameMode = mode;
    document.getElementById('setup-menu').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    
    // Reset game state
    score = 0;
    streak = 0;
    document.getElementById('score').innerText = '0';
    document.getElementById('streak').innerText = '0';
    
    // Initialize weights for this map
    weights = {};
    Object.keys(gameData[mode].items).forEach(id => weights[id] = 1.0);
    
    loadMap(gameData[mode].svg);
}

function loadMap(file) {
    fetch(file)
        .then(response => response.text())
        .then(svgData => {
            document.getElementById('map-placeholder').innerHTML = svgData;
            setupClickEvents();
            nextQuestion();
        })
        .catch(err => console.error("SVG Load Error:", err));
}

function setupClickEvents() {
    const paths = document.querySelectorAll('svg path');
    paths.forEach(path => {
        path.addEventListener('click', function() {
            const clickedID = this.id.trim().toUpperCase();
            if (clickedID === currentID) {
                handleSuccess(this);
            } else {
                handleFailure(clickedID);
            }
        });
    });
}

function nextQuestion() {
    previousID = currentID;
    const modeData = gameData[currentGameMode].items;
    const keys = Object.keys(modeData);
    
    let totalWeight = 0;
    keys.forEach(key => totalWeight += weights[key]);

    let selectedKey;
    do {
        let random = Math.random() * totalWeight;
        let sum = 0;
        for (let key of keys) {
            sum += weights[key];
            if (random <= sum) {
                selectedKey = key;
                break;
            }
        }
    } while (selectedKey === previousID && keys.length > 1);

    currentID = selectedKey;
    const info = modeData[currentID];
    const ui = uiStrings[currentLang];
    
    const isCapQuest = Math.random() > 0.5;
    const promptText = isCapQuest 
        ? `${ui.capital}: <b>${info.cap[currentLang]}</b>` 
        : `${ui.find}: <b>${info[currentLang]}</b>`;
    
    document.getElementById('target-display').innerHTML = `${info.flag} ${promptText}`;
    document.getElementById('label-score').innerText = ui.score;
    document.getElementById('label-streak').innerText = ui.streak;
    document.getElementById('skip-btn').innerText = ui.skip;
    document.getElementById('message').innerText = "";
}

function handleSuccess(element) {
    score++;
    streak++;
    weights[currentID] = 1.0; 
    
    if (streak > maxStreak) {
        maxStreak = streak;
        document.getElementById('best-streak').innerText = maxStreak;
    }

    document.getElementById('score').innerText = score;
    document.getElementById('streak').innerText = streak;
    successPopup();
    
    if (streak % 5 === 0) launchCelebration();

    element.style.fill = "#2ecc71"; 
    setTimeout(() => {
        overlay.style.display = 'none';
        element.style.fill = ""; 
        nextQuestion();
    }, 3000);
}

function successPopup() {
    // 1. Get the info for the popup
    const modeData = gameData[currentGameMode].items;
    const info = modeData[currentID];
    const ui = uiStrings[currentLang];

    // 2. Fill the popup with data
    document.getElementById('win-name').innerText = info[currentLang];
    
    // Create a nice meta string like "Capital: London" translated
    const capLabel = ui.capital.split(' ').pop(); // Extracts just the word for "Capital/Hauptort"
    document.getElementById('win-meta').innerText = `${capLabel}: ${info.cap[currentLang]}`;
    
    // 3. Show the popup and trigger celebration
    const overlay = document.getElementById('success-overlay');
    overlay.style.display = 'flex';
}

function handleFailure(clickedID) {
    streak = 0;
    document.getElementById('streak').innerText = streak;
    weights[currentID] *= 1.5; 

    document.getElementById('game-container').classList.add('shake');
    setTimeout(() => document.getElementById('game-container').classList.remove('shake'), 500);

    const modeData = gameData[currentGameMode].items;
    const wrongName = modeData[clickedID] ? modeData[clickedID][currentLang] : "???";
    document.getElementById('message').innerText = `❌ (${wrongName})`;
    document.getElementById('message').style.color = "#eb4d4b";
}

export function skipItem() {
    streak = 0;
    document.getElementById('streak').innerText = streak;
    weights[currentID] *= 1.25;
    nextQuestion();
}

function launchCelebration() {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

export function goHome() {
    // relauch everything
    window.location.reload();
}
