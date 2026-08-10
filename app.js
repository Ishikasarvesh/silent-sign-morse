/**
 * SILENT — Neo-Brutalist Laboratory Instrument
 * Phase 4, 6 & 7 Controller: ASL Sign Language Lab, Practice Mode & Real Eye Blink Morse Engine
 * Stitch Screen ID: 0586a8cfaa1543629a7525d4f95efbb9
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------
    // 1. ASL Reference Database & Target Pose Specifications
    // ----------------------------------------------------------
    const aslAlphabet = {
        A: { title: "LETTER 'A' POSTURE", desc: "Fist closed with thumb upright resting flat against the side of index finger." },
        B: { title: "LETTER 'B' POSTURE", desc: "Open palm with four fingers extended upright together and thumb tucked across palm." },
        C: { title: "LETTER 'C' POSTURE", desc: "Hand curved gracefully into a half-circle 'C' shape with thumb and fingers separated." },
        D: { title: "LETTER 'D' POSTURE", desc: "Index finger extended straight up; middle, ring, pinky curled touching thumb tip." },
        E: { title: "LETTER 'E' POSTURE", desc: "Fingers bent inward resting on top of thumb, forming a tight closed hand shape." },
        F: { title: "LETTER 'F' POSTURE", desc: "Index finger tip touches thumb tip forming a circle; middle, ring, pinky extended UP." },
        G: { title: "LETTER 'G' POSTURE", desc: "Index finger and thumb pointing horizontally parallel to each other." },
        H: { title: "LETTER 'H' POSTURE", desc: "Index and middle fingers extended together horizontally; thumb folded down." },
        I: { title: "LETTER 'I' POSTURE", desc: "Fist closed with pinky finger extended straight UP." },
        J: { title: "LETTER 'J' POSTURE", desc: "Pinky extended straight UP, tracing a curved 'J' swoosh path in the air." },
        K: { title: "LETTER 'K' POSTURE", desc: "Index upright, middle finger forward, thumb resting between index and middle joints." },
        L: { title: "LETTER 'L' POSTURE", desc: "Index finger extended upright, thumb extended horizontally at 90 degrees forming an 'L'." },
        M: { title: "LETTER 'M' POSTURE", desc: "Thumb tucked under the first three curled fingers (index, middle, ring)." },
        N: { title: "LETTER 'N' POSTURE", desc: "Thumb tucked under the first two curled fingers (index and middle)." },
        O: { title: "LETTER 'O' POSTURE", desc: "All finger tips touch thumb tip creating an 'O' shaped circle." },
        P: { title: "LETTER 'P' POSTURE", desc: "Inverted 'K' posture pointing downward." },
        Q: { title: "LETTER 'Q' POSTURE", desc: "Inverted 'G' posture pointing downward." },
        R: { title: "LETTER 'R' POSTURE", desc: "Index and middle fingers crossed tightly together upright." },
        S: { title: "LETTER 'S' POSTURE", desc: "Tight fist with thumb folded across the front of fingers." },
        T: { title: "LETTER 'T' POSTURE", desc: "Thumb tucked under the curled index finger." },
        U: { title: "LETTER 'U' POSTURE", desc: "Index and middle fingers extended straight UP together." },
        V: { title: "LETTER 'V' POSTURE", desc: "Index and middle fingers extended UP separated in a 'V' peace shape." },
        W: { title: "LETTER 'W' POSTURE", desc: "Index, middle, and ring fingers extended UP spread in a 'W' shape." },
        X: { title: "LETTER 'X' POSTURE", desc: "Index finger bent into a hook shape; other fingers curled in fist." },
        Y: { title: "LETTER 'Y' POSTURE", desc: "Thumb and pinky extended out sideways; middle three fingers curled down." },
        Z: { title: "LETTER 'Z' POSTURE", desc: "Index finger extended, tracing a 'Z' path in the air." }
    };

    const aslTargetPoses = {
        A: { thumb: 'EXTENDED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        B: { thumb: 'CURLED', index: 'EXTENDED', middle: 'EXTENDED', ring: 'EXTENDED', pinky: 'EXTENDED' },
        C: { thumb: 'EXTENDED', index: 'EXTENDED', middle: 'EXTENDED', ring: 'EXTENDED', pinky: 'EXTENDED' },
        D: { thumb: 'CURLED', index: 'EXTENDED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        E: { thumb: 'CURLED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        F: { thumb: 'CURLED', index: 'CURLED', middle: 'EXTENDED', ring: 'EXTENDED', pinky: 'EXTENDED' },
        G: { thumb: 'EXTENDED', index: 'EXTENDED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        H: { thumb: 'CURLED', index: 'EXTENDED', middle: 'EXTENDED', ring: 'CURLED', pinky: 'CURLED' },
        I: { thumb: 'CURLED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'EXTENDED' },
        J: { thumb: 'CURLED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'EXTENDED' },
        K: { thumb: 'EXTENDED', index: 'EXTENDED', middle: 'EXTENDED', ring: 'CURLED', pinky: 'CURLED' },
        L: { thumb: 'EXTENDED', index: 'EXTENDED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        M: { thumb: 'CURLED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        N: { thumb: 'CURLED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        O: { thumb: 'CURLED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        P: { thumb: 'EXTENDED', index: 'EXTENDED', middle: 'EXTENDED', ring: 'CURLED', pinky: 'CURLED' },
        Q: { thumb: 'EXTENDED', index: 'EXTENDED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        R: { thumb: 'CURLED', index: 'EXTENDED', middle: 'EXTENDED', ring: 'CURLED', pinky: 'CURLED' },
        S: { thumb: 'CURLED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        T: { thumb: 'CURLED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        U: { thumb: 'CURLED', index: 'EXTENDED', middle: 'EXTENDED', ring: 'CURLED', pinky: 'CURLED' },
        V: { thumb: 'CURLED', index: 'EXTENDED', middle: 'EXTENDED', ring: 'CURLED', pinky: 'CURLED' },
        W: { thumb: 'CURLED', index: 'EXTENDED', middle: 'EXTENDED', ring: 'EXTENDED', pinky: 'CURLED' },
        X: { thumb: 'CURLED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' },
        Y: { thumb: 'EXTENDED', index: 'CURLED', middle: 'CURLED', ring: 'CURLED', pinky: 'EXTENDED' },
        Z: { thumb: 'CURLED', index: 'EXTENDED', middle: 'CURLED', ring: 'CURLED', pinky: 'CURLED' }
    };

    let selectedLetter = 'A';

    // Sign Practice State Tracking
    const practiceSequence = Object.keys(aslAlphabet);
    let practiceIndex = 0;
    const completedSigns = new Set();
    const bestScores = {};

    // ----------------------------------------------------------
    // 2. MORSE CODE LOOKUP DICTIONARY & TELEGRAPHY ENGINE
    // ----------------------------------------------------------
    const morseCodeMap = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
        '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
        '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
        '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
        '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9'
    };

    const morseSignalMap = {};
    Object.entries(morseCodeMap).forEach(([signal, char]) => {
        morseSignalMap[char] = signal;
    });

    let currentMorseBuffer = '';
    let currentDecodedMessage = '';
    let currentMorseTargetChar = 'R';

    // ----------------------------------------------------------
    // 3. PHASE 7: REAL BLINK DETECTION CALIBRATION CONFIG
    // ----------------------------------------------------------
    const blinkConfig = {
        dotMax: 350,       // ms: blinks < 350ms generate DOT
        dashMin: 350,      // ms: blinks >= 350ms generate DASH
        earThreshold: 0.21, // Eye Aspect Ratio threshold (< 0.21 = CLOSED)
        cooldownMs: 250     // Minimum cooldown between consecutive blinks
    };

    let isEyeBlinking = false;
    let blinkStartTime = 0;
    let lastBlinkEndTime = 0;
    let lastMeasuredBlinkDuration = 0;
    let lastGeneratedSignal = 'NONE';
    let currentAverageEAR = 0.30;
    let isFaceDetected = false;

    // ----------------------------------------------------------
    // 4. DOM References
    // ----------------------------------------------------------
    const viewHome = document.getElementById('view-home');
    const viewSignLab = document.getElementById('view-sign-lab');
    const viewSignPractice = document.getElementById('view-sign-practice');
    const viewMorseLab = document.getElementById('view-morse-lab');

    const navBtnHome = document.getElementById('nav-btn-home');
    const navBtnSignLab = document.getElementById('nav-btn-sign-lab');
    const navBtnPractice = document.getElementById('nav-btn-practice');
    const navBtnMorseLab = document.getElementById('nav-btn-morse-lab');
    const navBtnProgress = document.getElementById('nav-btn-progress');
    const logoHomeLink = document.getElementById('logo-home-link');
    const btnReturnHome = document.getElementById('btn-return-home');
    const btnMorseReturnHome = document.getElementById('btn-morse-return-home');

    const heroBtnExplore = document.getElementById('hero-btn-explore');
    const heroBtnPractice = document.getElementById('hero-btn-practice');
    const heroBtnMorse = document.getElementById('hero-btn-morse');
    const btnHomeStartSign = document.getElementById('btn-home-start-sign');
    const btnHomeStartMorse = document.getElementById('btn-home-start-morse');
    const cardSignLanguage = document.getElementById('card-sign-language');
    const cardMorseCode = document.getElementById('card-morse-code');
    const btnLaunchPracticeMode = document.getElementById('btn-launch-practice-mode');

    const headerSecIndicator = document.getElementById('header-sec-indicator');
    const cameraStatusText = document.getElementById('camera-status-text');

    // Sign Lab DOM References
    const alphabetGrid = document.getElementById('alphabet-selector-grid');
    const targetLetterBadge = document.getElementById('target-letter-badge');
    const refSignImage = document.getElementById('ref-sign-image');
    const refSignFallback = document.getElementById('ref-sign-fallback');
    const fallbackPathText = document.getElementById('fallback-path-text');
    const refSignTitle = document.getElementById('ref-sign-title');
    const refSignDesc = document.getElementById('ref-sign-desc');
    const btnPrevLetter = document.getElementById('btn-prev-letter');
    const btnNextLetter = document.getElementById('btn-next-letter');

    const videoElement = document.getElementById('webcam-video');
    const canvasElement = document.getElementById('landmark-canvas');

    const cameraLoadingPanel = document.getElementById('camera-loading-panel');
    const cameraErrorPanel = document.getElementById('camera-error-panel');
    const btnRetryCamera = document.getElementById('btn-retry-camera');
    const errorBadge = document.getElementById('error-badge');
    const errorTitle = document.getElementById('error-title');
    const errorDesc = document.getElementById('error-desc');

    const handStatusBadge = document.getElementById('hand-status-badge');
    const handsCountLabel = document.getElementById('hands-count-label');
    const trackingStateDot = document.getElementById('tracking-state-dot');
    const trackingStateText = document.getElementById('tracking-state-text');
    const cameraMatchScore = document.getElementById('camera-match-score');

    const valThumb = document.getElementById('val-thumb');
    const valIndex = document.getElementById('val-index');
    const valMiddle = document.getElementById('val-middle');
    const valRing = document.getElementById('val-ring');
    const valPinky = document.getElementById('val-pinky');

    // Practice View DOM References
    const btnExitPractice = document.getElementById('btn-exit-practice');
    const practiceStepIndicator = document.getElementById('practice-step-indicator');
    const practiceTargetLetter = document.getElementById('practice-target-letter');
    const practiceCompletedCount = document.getElementById('practice-completed-count');
    const practiceRefBadge = document.getElementById('practice-ref-badge');
    const practiceRefImage = document.getElementById('practice-ref-image');
    const practiceRefTitle = document.getElementById('practice-ref-title');
    const practiceRefDesc = document.getElementById('practice-ref-desc');
    const practiceMatchBadge = document.getElementById('practice-match-badge');
    const practiceScoreNumber = document.getElementById('practice-score-number');
    const practiceScoreBar = document.getElementById('practice-score-bar');
    const practiceAchievementBanner = document.getElementById('practice-achievement-banner');

    const practiceVideoElement = document.getElementById('practice-webcam-video');
    const practiceCanvasElement = document.getElementById('practice-landmark-canvas');

    const pracValThumb = document.getElementById('prac-val-thumb');
    const pracValIndex = document.getElementById('prac-val-index');
    const pracValMiddle = document.getElementById('prac-val-middle');
    const pracValRing = document.getElementById('prac-val-ring');
    const pracValPinky = document.getElementById('prac-val-pinky');

    const btnPracticePrev = document.getElementById('btn-practice-prev');
    const btnPracticeRetry = document.getElementById('btn-practice-retry');
    const btnPracticeSkip = document.getElementById('btn-practice-skip');
    const btnPracticeNext = document.getElementById('btn-practice-next');

    // Morse Lab & Eye Tracking DOM References
    const morseChartGrid = document.getElementById('morse-chart-grid');
    const morseSelChar = document.getElementById('morse-sel-char');
    const morseSelPattern = document.getElementById('morse-sel-pattern');

    const morseTargetChar = document.getElementById('morse-target-char');
    const morseTargetPattern = document.getElementById('morse-target-pattern');
    const btnMorseNewTarget = document.getElementById('btn-morse-new-target');

    const morseBufferDisplay = document.getElementById('morse-buffer-display');
    const morseBufferText = document.getElementById('morse-buffer-text');
    const morseDecodedBadge = document.getElementById('morse-decoded-badge');

    const btnMorseDot = document.getElementById('btn-morse-dot');
    const btnMorseDash = document.getElementById('btn-morse-dash');
    const btnMorseClear = document.getElementById('btn-morse-clear');
    const btnMorseSpace = document.getElementById('btn-morse-space');
    const btnMorseTransmit = document.getElementById('btn-morse-transmit');

    const morseTerminalLog = document.getElementById('morse-terminal-log');
    const btnMorseClearTerminal = document.getElementById('btn-morse-clear-terminal');

    // Phase 7 Eye Tracking Elements
    const morseVideoElement = document.getElementById('morse-webcam-video');
    const morseCanvasElement = document.getElementById('morse-eye-canvas');
    const morseCameraLoadingPanel = document.getElementById('morse-camera-loading-panel');
    const morseCameraErrorPanel = document.getElementById('morse-camera-error-panel');
    const btnRetryMorseCamera = document.getElementById('btn-retry-morse-camera');

    const eyeStateBadge = document.getElementById('eye-state-badge');
    const eyeTrackingHudBadge = document.getElementById('eye-tracking-hud-badge');
    const eyeDurationHudText = document.getElementById('eye-duration-hud-text');
    const morseStatusBadge = document.getElementById('morse-status-badge');

    // Calibration Sliders & Debug Panel DOM
    const inputDotMax = document.getElementById('input-dot-max');
    const valDotMax = document.getElementById('val-dot-max');
    const inputDashMin = document.getElementById('input-dash-min');
    const valDashMin = document.getElementById('val-dash-min');
    const inputEarThreshold = document.getElementById('input-ear-threshold');
    const valEarThreshold = document.getElementById('val-ear-threshold');
    const btnToggleDebug = document.getElementById('btn-toggle-debug');
    const developerDebugPanel = document.getElementById('developer-debug-panel');

    const dbgFaceDetected = document.getElementById('dbg-face-detected');
    const dbgEyeState = document.getElementById('dbg-eye-state');
    const dbgAvgEar = document.getElementById('dbg-avg-ear');
    const dbgBlinkDuration = document.getElementById('dbg-blink-duration');
    const dbgLastSignal = document.getElementById('dbg-last-signal');

    // Modals
    const placeholderModal = document.getElementById('placeholder-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalActionBtn = document.getElementById('modal-action-btn');

    // ----------------------------------------------------------
    // 5. View Switcher Engine
    // ----------------------------------------------------------
    function switchView(targetView) {
        if (viewHome) viewHome.classList.remove('active');
        if (viewSignLab) viewSignLab.classList.remove('active');
        if (viewSignPractice) viewSignPractice.classList.remove('active');
        if (viewMorseLab) viewMorseLab.classList.remove('active');

        if (navBtnHome) navBtnHome.classList.remove('active');
        if (navBtnSignLab) navBtnSignLab.classList.remove('active');
        if (navBtnPractice) navBtnPractice.classList.remove('active');
        if (navBtnMorseLab) navBtnMorseLab.classList.remove('active');

        if (targetView === 'sign-lab') {
            if (viewSignLab) viewSignLab.classList.add('active');
            if (navBtnSignLab) navBtnSignLab.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: SIGN LAB';
            if (cameraStatusText) cameraStatusText.textContent = 'VISION ENGINE ACTIVE';

            stopMorseEyeStream();
            initCameraAndMediaPipe();
        } else if (targetView === 'sign-practice') {
            if (viewSignPractice) viewSignPractice.classList.add('active');
            if (navBtnPractice) navBtnPractice.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: SIGN PRACTICE';
            if (cameraStatusText) cameraStatusText.textContent = 'PRACTICE MODE ACTIVE';

            stopMorseEyeStream();
            updatePracticeTarget(practiceSequence[practiceIndex]);
            initCameraAndMediaPipe();
        } else if (targetView === 'morse-lab') {
            if (viewMorseLab) viewMorseLab.classList.add('active');
            if (navBtnMorseLab) navBtnMorseLab.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: MORSE LAB';
            if (cameraStatusText) cameraStatusText.textContent = 'EYE TELEGRAPHY ACTIVE';

            stopWebcamStream(); // Stop ASL hand stream
            initMorseLabView();
            initMorseFaceMeshEngine();
        } else {
            if (viewHome) viewHome.classList.add('active');
            if (navBtnHome) navBtnHome.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: HOME';
            if (cameraStatusText) cameraStatusText.textContent = 'CAMERA-POWERED';

            stopWebcamStream();
            stopMorseEyeStream();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (navBtnHome) navBtnHome.addEventListener('click', () => switchView('home'));
    if (navBtnSignLab) navBtnSignLab.addEventListener('click', () => switchView('sign-lab'));
    if (navBtnPractice) navBtnPractice.addEventListener('click', () => switchView('sign-practice'));
    if (navBtnMorseLab) navBtnMorseLab.addEventListener('click', () => switchView('morse-lab'));

    if (logoHomeLink) logoHomeLink.addEventListener('click', (e) => { e.preventDefault(); switchView('home'); });
    if (btnReturnHome) btnReturnHome.addEventListener('click', () => switchView('home'));
    if (btnMorseReturnHome) btnMorseReturnHome.addEventListener('click', () => switchView('home'));
    if (btnExitPractice) btnExitPractice.addEventListener('click', () => switchView('sign-lab'));

    if (heroBtnExplore) heroBtnExplore.addEventListener('click', () => switchView('sign-lab'));
    if (heroBtnPractice) heroBtnPractice.addEventListener('click', () => switchView('sign-practice'));
    if (heroBtnMorse) heroBtnMorse.addEventListener('click', () => switchView('morse-lab'));

    if (btnHomeStartSign) btnHomeStartSign.addEventListener('click', () => switchView('sign-lab'));
    if (btnHomeStartMorse) btnHomeStartMorse.addEventListener('click', () => switchView('morse-lab'));
    if (cardSignLanguage) cardSignLanguage.addEventListener('click', () => switchView('sign-lab'));
    if (cardMorseCode) cardMorseCode.addEventListener('click', () => switchView('morse-lab'));
    if (btnLaunchPracticeMode) btnLaunchPracticeMode.addEventListener('click', () => switchView('sign-practice'));

    function openPlaceholderModal(title, icon, desc) {
        if (!placeholderModal) return;
        const modalTitle = document.getElementById('modal-title');
        const modalIcon = document.getElementById('modal-icon');
        const modalDesc = document.getElementById('modal-description');

        if (modalTitle) modalTitle.textContent = title;
        if (modalIcon) modalIcon.textContent = icon;
        if (modalDesc) modalDesc.textContent = desc;

        placeholderModal.classList.add('active');
        placeholderModal.setAttribute('aria-hidden', 'false');
    }

    function closePlaceholderModal() {
        if (!placeholderModal) return;
        placeholderModal.classList.remove('active');
        placeholderModal.setAttribute('aria-hidden', 'true');
    }

    if (navBtnProgress) navBtnProgress.addEventListener('click', () => openPlaceholderModal('Progress Dashboard', '📊', 'Progress Dashboard telemetry analytics will be active in future phases!'));
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePlaceholderModal);
    if (modalActionBtn) modalActionBtn.addEventListener('click', closePlaceholderModal);

    // ----------------------------------------------------------
    // 6. ASL Reference Card & Practice Controllers
    // ----------------------------------------------------------
    function renderAlphabetSelector() {
        if (!alphabetGrid) return;
        alphabetGrid.innerHTML = '';

        Object.keys(aslAlphabet).forEach(letter => {
            const btn = document.createElement('button');
            btn.className = `letter-btn ${letter === selectedLetter ? 'active' : ''}`;
            btn.textContent = letter;
            btn.type = 'button';
            btn.addEventListener('click', () => updateSelectedLetter(letter));
            alphabetGrid.appendChild(btn);
        });
    }

    function updateSelectedLetter(letter) {
        if (!aslAlphabet[letter]) return;
        selectedLetter = letter;

        const letterBtns = document.querySelectorAll('.letter-btn');
        letterBtns.forEach(btn => {
            if (btn.textContent === letter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (targetLetterBadge) targetLetterBadge.textContent = `TARGET: ${letter}`;

        const info = aslAlphabet[letter];
        if (refSignTitle) refSignTitle.textContent = info.title + ":";
        if (refSignDesc) refSignDesc.textContent = info.desc;

        if (refSignImage) {
            const imagePath = `assets/signs/${letter}.jpg`;
            refSignImage.src = imagePath;
            refSignImage.alt = `ASL Sign Language Reference for letter ${letter}`;

            refSignImage.onload = () => {
                refSignImage.classList.remove('hidden');
                if (refSignFallback) refSignFallback.classList.add('hidden');
            };

            refSignImage.onerror = () => {
                refSignImage.classList.add('hidden');
                if (refSignFallback) {
                    refSignFallback.classList.remove('hidden');
                    if (fallbackPathText) fallbackPathText.textContent = `PATH: ${imagePath}`;
                }
            };
        }
    }

    if (btnPrevLetter) {
        btnPrevLetter.addEventListener('click', () => {
            const charCode = selectedLetter.charCodeAt(0);
            const prevChar = String.fromCharCode(charCode === 65 ? 90 : charCode - 1);
            updateSelectedLetter(prevChar);
        });
    }

    if (btnNextLetter) {
        btnNextLetter.addEventListener('click', () => {
            const charCode = selectedLetter.charCodeAt(0);
            const nextChar = String.fromCharCode(charCode === 90 ? 65 : charCode + 1);
            updateSelectedLetter(nextChar);
        });
    }

    renderAlphabetSelector();
    updateSelectedLetter('A');

    function updatePracticeTarget(letter) {
        if (!aslAlphabet[letter]) return;
        selectedLetter = letter;
        practiceIndex = practiceSequence.indexOf(letter);

        if (practiceStepIndicator) practiceStepIndicator.textContent = `STEP ${practiceIndex + 1} OF ${practiceSequence.length}`;
        if (practiceTargetLetter) practiceTargetLetter.textContent = letter;
        if (practiceCompletedCount) practiceCompletedCount.textContent = `COMPLETED: ${completedSigns.size} / ${practiceSequence.length}`;
        if (practiceRefBadge) practiceRefBadge.textContent = `STANDARD: '${letter}'`;

        const info = aslAlphabet[letter];
        if (practiceRefTitle) practiceRefTitle.textContent = info.title + ":";
        if (practiceRefDesc) practiceRefDesc.textContent = info.desc;

        if (practiceRefImage) {
            practiceRefImage.src = `assets/signs/${letter}.jpg`;
            practiceRefImage.alt = `ASL Practice Reference for ${letter}`;
        }

        if (practiceAchievementBanner) practiceAchievementBanner.classList.add('hidden');
        if (practiceScoreNumber) practiceScoreNumber.textContent = '0%';
        if (practiceScoreBar) practiceScoreBar.textContent = '[░░░░░░░░░░]';
        if (practiceMatchBadge) practiceMatchBadge.textContent = 'TARGET MATCH: 0%';
    }

    if (btnPracticePrev) {
        btnPracticePrev.addEventListener('click', () => {
            const prevIndex = (practiceIndex - 1 + practiceSequence.length) % practiceSequence.length;
            updatePracticeTarget(practiceSequence[prevIndex]);
        });
    }

    if (btnPracticeNext) {
        btnPracticeNext.addEventListener('click', () => {
            const nextIndex = (practiceIndex + 1) % practiceSequence.length;
            updatePracticeTarget(practiceSequence[nextIndex]);
        });
    }

    if (btnPracticeRetry) {
        btnPracticeRetry.addEventListener('click', () => {
            updatePracticeTarget(practiceSequence[practiceIndex]);
        });
    }

    if (btnPracticeSkip) {
        btnPracticeSkip.addEventListener('click', () => {
            const nextIndex = (practiceIndex + 1) % practiceSequence.length;
            updatePracticeTarget(practiceSequence[nextIndex]);
        });
    }

    // ----------------------------------------------------------
    // 7. MORSE CODE LABORATORY CONTROLLER & MODULAR DECODER ENGINE
    // ----------------------------------------------------------
    function renderMorseReferenceChart() {
        if (!morseChartGrid) return;
        morseChartGrid.innerHTML = '';

        Object.entries(morseSignalMap).forEach(([char, signal]) => {
            const item = document.createElement('div');
            item.className = `morse-chart-item ${char === currentMorseTargetChar ? 'active' : ''}`;
            item.dataset.char = char;

            const displayPattern = signal.replace(/\./g, '• ').replace(/-/g, '— ');

            item.innerHTML = `
                <span class="morse-chart-char">${char}</span>
                <span class="morse-chart-pattern">${displayPattern}</span>
            `;

            item.addEventListener('click', () => {
                selectMorseChartCharacter(char);
            });

            morseChartGrid.appendChild(item);
        });
    }

    function selectMorseChartCharacter(char) {
        if (!morseSignalMap[char]) return;
        currentMorseTargetChar = char;

        const items = document.querySelectorAll('.morse-chart-item');
        items.forEach(el => {
            if (el.dataset.char === char) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });

        const pattern = morseSignalMap[char];
        const displayPattern = pattern.replace(/\./g, '• ').replace(/-/g, '— ');

        if (morseSelChar) morseSelChar.textContent = char;
        if (morseSelPattern) morseSelPattern.textContent = displayPattern;

        setMorseTarget(char);
    }

    function setMorseTarget(char) {
        if (!morseSignalMap[char]) return;
        currentMorseTargetChar = char;
        const pattern = morseSignalMap[char];
        const displayPattern = pattern.replace(/\./g, '• ').replace(/-/g, '— ');

        if (morseTargetChar) morseTargetChar.textContent = char;
        if (morseTargetPattern) morseTargetPattern.textContent = displayPattern;
    }

    function addMorseSignal(symbol) {
        if (symbol === '.' || symbol === '-') {
            currentMorseBuffer += symbol;
            updateMorseBufferUI();
        }
    }

    function decodeMorseSignal(buffer) {
        if (!buffer) return '--';
        return morseCodeMap[buffer] || '?';
    }

    function clearMorseBuffer() {
        currentMorseBuffer = '';
        updateMorseBufferUI();
    }

    function commitMorseCharacter() {
        if (!currentMorseBuffer) return;

        const decodedChar = decodeMorseSignal(currentMorseBuffer);
        if (decodedChar !== '?') {
            currentDecodedMessage += decodedChar;
            logMorseTerminalMessage(`> CHARACTER COMMITTED: ${decodedChar} ( [ ${currentMorseBuffer} ] )`);
        } else {
            logMorseTerminalMessage(`> UNKNOWN SIGNAL: [ ${currentMorseBuffer} ]`);
        }

        currentMorseBuffer = '';
        updateMorseBufferUI();
    }

    function transmitMorseMessage() {
        if (currentMorseBuffer) {
            commitMorseCharacter();
        }

        if (currentDecodedMessage) {
            logMorseTerminalMessage(`> TRANSMITTED MESSAGE: "${currentDecodedMessage}"`);

            if (currentDecodedMessage === currentMorseTargetChar) {
                logMorseTerminalMessage(`> [✓] TARGET CHARACTER '${currentMorseTargetChar}' ACHIEVED!`);
            }

            currentDecodedMessage = '';
        } else {
            logMorseTerminalMessage(`> TRANSMISSION BUFFER EMPTY.`);
        }
    }

    function updateMorseBufferUI() {
        const displayPattern = currentMorseBuffer.replace(/\./g, '• ').replace(/-/g, '— ');
        if (morseBufferText) morseBufferText.textContent = displayPattern || ' ';

        const decodedChar = decodeMorseSignal(currentMorseBuffer);
        if (morseDecodedBadge) morseDecodedBadge.textContent = `DECODED: ${decodedChar}`;
    }

    function logMorseTerminalMessage(messageText) {
        if (!morseTerminalLog) return;
        const now = new Date();
        const timeStr = `[${now.toTimeString().split(' ')[0]}]`;

        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `
            <span class="log-time">${timeStr}</span>
            <span class="log-prompt">&gt;</span>
            <span class="log-text">${messageText}</span>
        `;

        morseTerminalLog.appendChild(entry);
        morseTerminalLog.scrollTop = morseTerminalLog.scrollHeight;
    }

    function initMorseLabView() {
        renderMorseReferenceChart();
        setMorseTarget('R');
        updateMorseBufferUI();
    }

    if (btnMorseDot) btnMorseDot.addEventListener('click', () => addMorseSignal('.'));
    if (btnMorseDash) btnMorseDash.addEventListener('click', () => addMorseSignal('-'));
    if (btnMorseClear) btnMorseClear.addEventListener('click', clearMorseBuffer);
    if (btnMorseSpace) btnMorseSpace.addEventListener('click', commitMorseCharacter);
    if (btnMorseTransmit) btnMorseTransmit.addEventListener('click', transmitMorseMessage);

    if (btnMorseNewTarget) {
        btnMorseNewTarget.addEventListener('click', () => {
            const allChars = Object.keys(morseSignalMap);
            const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
            selectMorseChartCharacter(randomChar);
        });
    }

    if (btnMorseClearTerminal) {
        btnMorseClearTerminal.addEventListener('click', () => {
            if (morseTerminalLog) morseTerminalLog.innerHTML = '';
            logMorseTerminalMessage('Terminal log cleared.');
        });
    }

    // Bind Calibration Controls
    if (inputDotMax && valDotMax) {
        inputDotMax.addEventListener('input', (e) => {
            blinkConfig.dotMax = parseInt(e.target.value, 10);
            valDotMax.textContent = `${blinkConfig.dotMax} ms`;
        });
    }

    if (inputDashMin && valDashMin) {
        inputDashMin.addEventListener('input', (e) => {
            blinkConfig.dashMin = parseInt(e.target.value, 10);
            valDashMin.textContent = `${blinkConfig.dashMin} ms`;
        });
    }

    if (inputEarThreshold && valEarThreshold) {
        inputEarThreshold.addEventListener('input', (e) => {
            blinkConfig.earThreshold = parseFloat(e.target.value);
            valEarThreshold.textContent = `${blinkConfig.earThreshold.toFixed(2)}`;
        });
    }

    if (btnToggleDebug && developerDebugPanel) {
        btnToggleDebug.addEventListener('click', () => {
            developerDebugPanel.classList.toggle('hidden');
        });
    }

    // Expose Modular Functions globally for Phase 7 Eye Tracking Engine
    window.addMorseSignal = addMorseSignal;
    window.decodeMorseSignal = decodeMorseSignal;
    window.clearMorseBuffer = clearMorseBuffer;
    window.commitMorseCharacter = commitMorseCharacter;
    window.transmitMorseMessage = transmitMorseMessage;
    window.setMorseTarget = setMorseTarget;

    // ----------------------------------------------------------
    // 8. PHASE 7: REAL MEDIAPIPE FACE MESH & BLINK TELEGRAPHY ENGINE
    // ----------------------------------------------------------
    let morseWebcamStream = null;
    let faceMeshEngine = null;
    let morseAnimFrameId = null;
    let isSendingMorseFrame = false;
    let morseEngineInitialized = false;

    async function initMorseFaceMeshEngine() {
        if (morseCameraLoadingPanel) morseCameraLoadingPanel.classList.remove('hidden');
        if (morseCameraErrorPanel) morseCameraErrorPanel.classList.add('hidden');

        try {
            if (!morseWebcamStream) {
                morseWebcamStream = await navigator.mediaDevices.getUserMedia({
                    video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" },
                    audio: false
                });

                if (morseVideoElement) {
                    morseVideoElement.srcObject = morseWebcamStream;
                    await morseVideoElement.play();
                }
            }

            if (!window.FaceMesh) {
                showMorseCameraError('FaceMesh library not found in window scope.');
                return;
            }

            if (!faceMeshEngine) {
                faceMeshEngine = new window.FaceMesh({
                    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
                });

                faceMeshEngine.setOptions({
                    maxNumFaces: 1,
                    refineLandmarks: true,
                    minDetectionConfidence: 0.5,
                    minTrackingConfidence: 0.5
                });

                faceMeshEngine.onResults(onFaceMeshResults);

                if (faceMeshEngine.initialize) {
                    await faceMeshEngine.initialize();
                }
            }

            morseEngineInitialized = true;
            if (morseCameraLoadingPanel) morseCameraLoadingPanel.classList.add('hidden');
            startMorseDetectionLoop();

        } catch (err) {
            console.error('FaceMesh Initialization Error:', err);
            showMorseCameraError(err.message || 'FaceMesh WASM model failed to initialize.');
        }
    }

    function showMorseCameraError(msg) {
        if (morseCameraLoadingPanel) morseCameraLoadingPanel.classList.add('hidden');
        if (morseCameraErrorPanel) morseCameraErrorPanel.classList.remove('hidden');
        if (eyeStateBadge) eyeStateBadge.textContent = 'NO FACE';
    }

    if (btnRetryMorseCamera) {
        btnRetryMorseCamera.addEventListener('click', () => initMorseFaceMeshEngine());
    }

    function stopMorseEyeStream() {
        if (morseAnimFrameId) {
            cancelAnimationFrame(morseAnimFrameId);
            morseAnimFrameId = null;
        }

        if (morseWebcamStream) {
            morseWebcamStream.getTracks().forEach(track => track.stop());
            morseWebcamStream = null;
        }

        if (morseVideoElement) {
            morseVideoElement.srcObject = null;
        }

        isSendingMorseFrame = false;
        morseEngineInitialized = false;

        if (morseCameraLoadingPanel) morseCameraLoadingPanel.classList.add('hidden');
    }

    function startMorseDetectionLoop() {
        if (morseAnimFrameId) cancelAnimationFrame(morseAnimFrameId);

        async function processFrame() {
            if (morseVideoElement && !morseVideoElement.paused && !morseVideoElement.ended && morseVideoElement.readyState >= 2) {
                if (!isSendingMorseFrame && faceMeshEngine && morseEngineInitialized) {
                    isSendingMorseFrame = true;
                    try {
                        await faceMeshEngine.send({ image: morseVideoElement });
                    } catch (e) {
                        console.warn('FaceMesh Frame Error:', e);
                    } finally {
                        isSendingMorseFrame = false;
                    }
                }
            }

            if (morseWebcamStream && viewMorseLab && viewMorseLab.classList.contains('active')) {
                morseAnimFrameId = requestAnimationFrame(processFrame);
            }
        }

        morseAnimFrameId = requestAnimationFrame(processFrame);
    }

    // ----------------------------------------------------------
    // 9. EYE ASPECT RATIO (EAR) CALCULATOR & BLINK CLASSIFIER
    // ----------------------------------------------------------
    // Eye Landmark Indices (MediaPipe Face Mesh)
    const LEFT_EYE_INDICES = { outer: 33, inner: 133, top1: 160, top2: 158, bot1: 144, bot2: 153 };
    const RIGHT_EYE_INDICES = { outer: 263, inner: 362, top1: 385, top2: 387, bot1: 380, bot2: 373 };

    function calculateSingleEyeEAR(landmarks, eye) {
        const pOuter = landmarks[eye.outer];
        const pInner = landmarks[eye.inner];
        const pTop1 = landmarks[eye.top1];
        const pBot1 = landmarks[eye.bot1];
        const pTop2 = landmarks[eye.top2];
        const pBot2 = landmarks[eye.bot2];

        if (!pOuter || !pInner || !pTop1 || !pBot1 || !pTop2 || !pBot2) return 0.30;

        const distHoriz = Math.hypot(pOuter.x - pInner.x, pOuter.y - pInner.y);
        const distVert1 = Math.hypot(pTop1.x - pBot1.x, pTop1.y - pBot1.y);
        const distVert2 = Math.hypot(pTop2.x - pBot2.x, pTop2.y - pBot2.y);

        return (distVert1 + distVert2) / (2.0 * (distHoriz || 0.001));
    }

    function onFaceMeshResults(results) {
        if (!morseCanvasElement) return;

        morseCanvasElement.width = morseCanvasElement.clientWidth || 640;
        morseCanvasElement.height = morseCanvasElement.clientHeight || 480;

        const ctx = morseCanvasElement.getContext('2d');
        const width = morseCanvasElement.width;
        const height = morseCanvasElement.height;

        ctx.clearRect(0, 0, width, height);

        const multiFaceLandmarks = results.multiFaceLandmarks;

        if (multiFaceLandmarks && multiFaceLandmarks.length > 0) {
            isFaceDetected = true;
            const landmarks = multiFaceLandmarks[0];

            // 1. Draw Eye Contours
            drawEyeContoursOnCtx(ctx, landmarks, width, height);

            // 2. Compute Left & Right EAR
            const earLeft = calculateSingleEyeEAR(landmarks, LEFT_EYE_INDICES);
            const earRight = calculateSingleEyeEAR(landmarks, RIGHT_EYE_INDICES);
            currentAverageEAR = (earLeft + earRight) / 2.0;

            const now = performance.now();

            // 3. Eye Blink State Machine
            if (currentAverageEAR < blinkConfig.earThreshold) {
                // Eye is CLOSED
                if (!isEyeBlinking && (now - lastBlinkEndTime > blinkConfig.cooldownMs)) {
                    isEyeBlinking = true;
                    blinkStartTime = now;

                    if (eyeStateBadge) eyeStateBadge.textContent = 'BLINK DETECTED';
                    if (eyeTrackingHudBadge) eyeTrackingHudBadge.textContent = '[ BLINKING ]';
                }
            } else {
                // Eye is OPEN
                if (isEyeBlinking) {
                    isEyeBlinking = false;
                    lastBlinkEndTime = now;

                    const duration = Math.round(now - blinkStartTime);
                    lastMeasuredBlinkDuration = duration;

                    // Filter noise < 80ms
                    if (duration >= 80) {
                        if (duration < blinkConfig.dotMax) {
                            lastGeneratedSignal = 'DOT ( . )';
                            addMorseSignal('.');
                            logMorseTerminalMessage(`> BLINK TELEGRAPHY: SHORT BLINK ( ${duration} ms ) -> DOT ( . )`);
                            if (eyeStateBadge) eyeStateBadge.textContent = 'DOT DETECTED';
                        } else {
                            lastGeneratedSignal = 'DASH ( - )';
                            addMorseSignal('-');
                            logMorseTerminalMessage(`> BLINK TELEGRAPHY: LONG BLINK ( ${duration} ms ) -> DASH ( — )`);
                            if (eyeStateBadge) eyeStateBadge.textContent = 'DASH DETECTED';
                        }
                    }
                } else {
                    if (eyeStateBadge) eyeStateBadge.textContent = 'EYES OPEN';
                    if (eyeTrackingHudBadge) eyeTrackingHudBadge.textContent = '[ TRACKING ]';
                }
            }

            // Update Real-Time HUD & Debug Readouts
            if (eyeDurationHudText) eyeDurationHudText.textContent = `BLINK: ${lastMeasuredBlinkDuration} ms`;
            if (morseStatusBadge) morseStatusBadge.textContent = 'EYE ENGINE ACTIVE';

            if (dbgFaceDetected) dbgFaceDetected.textContent = 'YES';
            if (dbgEyeState) dbgEyeState.textContent = isEyeBlinking ? 'CLOSED' : 'OPEN';
            if (dbgAvgEar) dbgAvgEar.textContent = currentAverageEAR.toFixed(3);
            if (dbgBlinkDuration) dbgBlinkDuration.textContent = `${lastMeasuredBlinkDuration} ms`;
            if (dbgLastSignal) dbgLastSignal.textContent = lastGeneratedSignal;

        } else {
            isFaceDetected = false;
            if (eyeStateBadge) eyeStateBadge.textContent = 'NO FACE';
            if (eyeTrackingHudBadge) eyeTrackingHudBadge.textContent = '[ NO FACE ]';
            if (morseStatusBadge) morseStatusBadge.textContent = 'EYE TRACKING SEARCHING';

            if (dbgFaceDetected) dbgFaceDetected.textContent = 'NO';
            if (dbgEyeState) dbgEyeState.textContent = 'NO FACE';
            if (dbgAvgEar) dbgAvgEar.textContent = '0.000';
        }
    }

    function drawEyeContoursOnCtx(ctx, landmarks, width, height) {
        ctx.strokeStyle = '#ea4a51';
        ctx.lineWidth = 2;

        const leftPts = [33, 160, 158, 133, 153, 144];
        const rightPts = [362, 385, 387, 263, 373, 380];

        // Draw Left Eye
        ctx.beginPath();
        leftPts.forEach((idx, i) => {
            const pt = landmarks[idx];
            if (i === 0) ctx.moveTo(pt.x * width, pt.y * height);
            else ctx.lineTo(pt.x * width, pt.y * height);
        });
        ctx.closePath();
        ctx.stroke();

        // Draw Right Eye
        ctx.beginPath();
        rightPts.forEach((idx, i) => {
            const pt = landmarks[idx];
            if (i === 0) ctx.moveTo(pt.x * width, pt.y * height);
            else ctx.lineTo(pt.x * width, pt.y * height);
        });
        ctx.closePath();
        ctx.stroke();

        // Draw Iris / Pupil Center Dots
        const leftIris = landmarks[468] || landmarks[33];
        const rightIris = landmarks[473] || landmarks[263];

        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(leftIris.x * width, leftIris.y * height, 4, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(rightIris.x * width, rightIris.y * height, 4, 0, 2 * Math.PI);
        ctx.fill();
    }

    // ----------------------------------------------------------
    // 10. MEDIA PIPE HAND TRACKING PIPELINE (ASL LAB & PRACTICE)
    // ----------------------------------------------------------
    let webcamStream = null;
    let handsEngine = null;
    let animFrameId = null;
    let isSendingFrame = false;
    let engineInitialized = false;

    async function initCameraAndMediaPipe() {
        if (cameraLoadingPanel) cameraLoadingPanel.classList.remove('hidden');
        if (cameraErrorPanel) cameraErrorPanel.classList.add('hidden');

        try {
            if (!webcamStream) {
                webcamStream = await navigator.mediaDevices.getUserMedia({
                    video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" },
                    audio: false
                });

                if (videoElement) {
                    videoElement.srcObject = webcamStream;
                    await videoElement.play();
                }
                if (practiceVideoElement) {
                    practiceVideoElement.srcObject = webcamStream;
                    await practiceVideoElement.play();
                }
            }

            if (!window.Hands) {
                showVisionEngineError('LIBRARY_MISSING', 'MediaPipe Hands JS library (hands.js) was not found in window scope.');
                return;
            }

            if (!handsEngine) {
                handsEngine = new window.Hands({
                    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
                });

                handsEngine.setOptions({
                    maxNumHands: 2,
                    modelComplexity: 1,
                    minDetectionConfidence: 0.5,
                    minTrackingConfidence: 0.5
                });

                handsEngine.onResults(onHandResults);

                if (handsEngine.initialize) {
                    await handsEngine.initialize();
                }
            }

            engineInitialized = true;

            if (cameraLoadingPanel) cameraLoadingPanel.classList.add('hidden');
            startDetectionLoop();

        } catch (err) {
            console.error('Camera/MediaPipe Initialization Error:', err);
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                showVisionEngineError('CAMERA_PERMISSION_DENIED', 'Camera access was denied by browser. Please grant webcam permission and retry.');
            } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
                showVisionEngineError('CAMERA_NOT_FOUND', 'No webcam device found on system.');
            } else {
                showVisionEngineError('VISION_ENGINE_ERROR', err.message || 'MediaPipe WASM model assets failed to initialize.');
            }
        }
    }

    function showVisionEngineError(type, message) {
        if (cameraLoadingPanel) cameraLoadingPanel.classList.add('hidden');
        if (cameraErrorPanel) cameraErrorPanel.classList.remove('hidden');

        if (errorBadge) errorBadge.textContent = 'VISION ENGINE ERROR';
        if (errorTitle) errorTitle.textContent = type;
        if (errorDesc) errorDesc.textContent = message;

        updateHandDetectionState(false, 0);
    }

    if (btnRetryCamera) {
        btnRetryCamera.addEventListener('click', () => initCameraAndMediaPipe());
    }

    function stopWebcamStream() {
        if (animFrameId) {
            cancelAnimationFrame(animFrameId);
            animFrameId = null;
        }

        if (webcamStream) {
            webcamStream.getTracks().forEach(track => track.stop());
            webcamStream = null;
        }

        if (videoElement) videoElement.srcObject = null;
        if (practiceVideoElement) practiceVideoElement.srcObject = null;

        isSendingFrame = false;
        engineInitialized = false;

        if (cameraLoadingPanel) cameraLoadingPanel.classList.add('hidden');
        updateHandDetectionState(false, 0);
    }

    function startDetectionLoop() {
        if (animFrameId) cancelAnimationFrame(animFrameId);

        async function processFrame() {
            const activeVideo = viewSignPractice.classList.contains('active') ? practiceVideoElement : videoElement;

            if (activeVideo && !activeVideo.paused && !activeVideo.ended && activeVideo.readyState >= 2) {
                if (!isSendingFrame && handsEngine && engineInitialized) {
                    isSendingFrame = true;
                    try {
                        await handsEngine.send({ image: activeVideo });
                    } catch (e) {
                        console.warn('Frame processing exception:', e);
                    } finally {
                        isSendingFrame = false;
                    }
                }
            }

            if (webcamStream && (viewSignLab.classList.contains('active') || viewSignPractice.classList.contains('active'))) {
                animFrameId = requestAnimationFrame(processFrame);
            }
        }

        animFrameId = requestAnimationFrame(processFrame);
    }

    const HAND_CONNECTIONS = [
        [0, 1], [1, 2], [2, 3], [3, 4],        // Thumb
        [0, 5], [5, 6], [6, 7], [7, 8],        // Index
        [5, 9], [9, 10], [10, 11], [11, 12],   // Middle
        [9, 13], [13, 14], [14, 15], [15, 16], // Ring
        [13, 17], [17, 18], [18, 19], [19, 20], // Pinky
        [0, 17]                                // Palm Base
    ];

    function onHandResults(results) {
        const isPracticeMode = viewSignPractice.classList.contains('active');
        const activeCanvas = isPracticeMode ? practiceCanvasElement : canvasElement;
        const ctx = activeCanvas ? activeCanvas.getContext('2d') : null;

        if (!activeCanvas || !ctx) return;

        activeCanvas.width = activeCanvas.clientWidth || 640;
        activeCanvas.height = activeCanvas.clientHeight || 480;

        const width = activeCanvas.width;
        const height = activeCanvas.height;

        ctx.clearRect(0, 0, width, height);

        const multiHandLandmarks = results.multiHandLandmarks;

        if (multiHandLandmarks && multiHandLandmarks.length > 0) {
            const count = multiHandLandmarks.length;
            updateHandDetectionState(true, count);

            multiHandLandmarks.forEach(landmarks => {
                drawBrutalistHandSkeletonOnCtx(ctx, landmarks, width, height);
                analyzeFingerLandmarksNormalized(landmarks);
            });
        } else {
            updateHandDetectionState(false, 0);
        }
    }

    function drawBrutalistHandSkeletonOnCtx(ctx, landmarks, width, height) {
        ctx.strokeStyle = '#ea4a51';
        ctx.lineWidth = 3;

        HAND_CONNECTIONS.forEach(([i, j]) => {
            const pt1 = landmarks[i];
            const pt2 = landmarks[j];

            ctx.beginPath();
            ctx.moveTo(pt1.x * width, pt1.y * height);
            ctx.lineTo(pt2.x * width, pt2.y * height);
            ctx.stroke();
        });

        landmarks.forEach((pt, index) => {
            const x = pt.x * width;
            const y = pt.y * height;

            const isTip = [4, 8, 12, 16, 20].includes(index);

            ctx.fillStyle = isTip ? '#facc15' : '#ffffff';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.arc(x, y, isTip ? 6 : 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        });
    }

    function analyzeFingerLandmarksNormalized(landmarks) {
        const wrist = landmarks[0];
        const middleMCP = landmarks[9];

        const handScale = Math.hypot(
            middleMCP.x - wrist.x,
            middleMCP.y - wrist.y,
            (middleMCP.z || 0) - (wrist.z || 0)
        ) || 0.1;

        const getExtensionRatio = (tipIdx, pipIdx) => {
            const tipDist = Math.hypot(landmarks[tipIdx].x - wrist.x, landmarks[tipIdx].y - wrist.y, (landmarks[tipIdx].z || 0) - (wrist.z || 0));
            const pipDist = Math.hypot(landmarks[pipIdx].x - wrist.x, landmarks[pipIdx].y - wrist.y, (landmarks[pipIdx].z || 0) - (wrist.z || 0));
            return tipDist / (pipDist || 0.001);
        };

        const indexExtended = getExtensionRatio(8, 6) > 1.12;
        const middleExtended = getExtensionRatio(12, 10) > 1.12;
        const ringExtended = getExtensionRatio(16, 14) > 1.12;
        const pinkyExtended = getExtensionRatio(20, 18) > 1.12;

        const thumbTip = landmarks[4];
        const indexMCP = landmarks[5];
        const pinkyMCP = landmarks[17];

        const thumbDistIndex = Math.hypot(thumbTip.x - indexMCP.x, thumbTip.y - indexMCP.y);
        const thumbDistPinky = Math.hypot(thumbTip.x - pinkyMCP.x, thumbTip.y - pinkyMCP.y);
        const thumbExtended = (thumbDistIndex / handScale) > 0.82 && (thumbDistPinky / handScale) > 0.95;

        const currentFingers = {
            thumb: thumbExtended ? 'EXTENDED' : 'CURLED',
            index: indexExtended ? 'EXTENDED' : 'CURLED',
            middle: middleExtended ? 'EXTENDED' : 'CURLED',
            ring: ringExtended ? 'EXTENDED' : 'CURLED',
            pinky: pinkyExtended ? 'EXTENDED' : 'CURLED'
        };

        const targetPose = aslTargetPoses[selectedLetter] || aslTargetPoses['A'];

        let matchedFingersCount = 0;
        const matches = {
            thumb: currentFingers.thumb === targetPose.thumb,
            index: currentFingers.index === targetPose.index,
            middle: currentFingers.middle === targetPose.middle,
            ring: currentFingers.ring === targetPose.ring,
            pinky: currentFingers.pinky === targetPose.pinky
        };

        Object.values(matches).forEach(isMatch => {
            if (isMatch) matchedFingersCount++;
        });

        updateFingerPill(valThumb, currentFingers.thumb, matches.thumb);
        updateFingerPill(valIndex, currentFingers.index, matches.index);
        updateFingerPill(valMiddle, currentFingers.middle, matches.middle);
        updateFingerPill(valRing, currentFingers.ring, matches.ring);
        updateFingerPill(valPinky, currentFingers.pinky, matches.pinky);

        updateFingerPill(pracValThumb, currentFingers.thumb, matches.thumb);
        updateFingerPill(pracValIndex, currentFingers.index, matches.index);
        updateFingerPill(pracValMiddle, currentFingers.middle, matches.middle);
        updateFingerPill(pracValRing, currentFingers.ring, matches.ring);
        updateFingerPill(pracValPinky, currentFingers.pinky, matches.pinky);

        const baseMatchScore = matchedFingersCount * 18;
        let alignmentBonus = 0;

        if (matchedFingersCount === 5) {
            alignmentBonus = 6 + Math.floor(Math.random() * 3);
        } else if (matchedFingersCount === 4) {
            alignmentBonus = 4;
        } else {
            alignmentBonus = 0;
        }

        const finalScore = Math.min(baseMatchScore + alignmentBonus, 98);

        if (cameraMatchScore) cameraMatchScore.textContent = `MATCH: ${finalScore}%`;

        if (practiceMatchBadge) practiceMatchBadge.textContent = `TARGET MATCH: ${finalScore}%`;
        if (practiceScoreNumber) practiceScoreNumber.textContent = `${finalScore}%`;

        if (practiceScoreBar) {
            const filledBlocks = Math.floor(finalScore / 10);
            const emptyBlocks = 10 - filledBlocks;
            practiceScoreBar.textContent = `[${'█'.repeat(filledBlocks)}${'░'.repeat(emptyBlocks)}]`;
        }

        if (finalScore >= 90) {
            completedSigns.add(selectedLetter);
            bestScores[selectedLetter] = Math.max(bestScores[selectedLetter] || 0, finalScore);

            if (practiceCompletedCount) practiceCompletedCount.textContent = `COMPLETED: ${completedSigns.size} / ${practiceSequence.length}`;
            if (practiceAchievementBanner) practiceAchievementBanner.classList.remove('hidden');
        }
    }

    function updateFingerPill(element, state, isTargetMatched = false) {
        if (!element) return;
        
        const matchLabel = isTargetMatched ? ' [✓]' : '';
        element.textContent = `${state}${matchLabel}`;
        element.className = 'finger-state-pill';

        if (state === 'EXTENDED') {
            element.classList.add('is-extended');
        } else if (state === 'CURLED') {
            element.classList.add('is-curled');
        } else {
            element.classList.add('is-unknown');
        }

        if (isTargetMatched) {
            element.style.borderColor = '#ea4a51';
        } else {
            element.style.borderColor = '#000000';
        }
    }

    function updateHandDetectionState(isDetected, count) {
        if (handStatusBadge) {
            handStatusBadge.textContent = isDetected ? 'HAND DETECTED' : 'NO HAND';
            handStatusBadge.className = `sticker-badge ${isDetected ? 'badge-yellow' : 'badge-coral'}`;
        }

        if (handsCountLabel) {
            handsCountLabel.textContent = `HANDS: ${count}`;
        }

        if (trackingStateDot && trackingStateText) {
            if (isDetected) {
                trackingStateDot.className = 'status-dot dot-live';
                trackingStateText.textContent = 'TRACKING';
            } else {
                trackingStateDot.className = 'status-dot dot-offline';
                trackingStateText.textContent = 'NO HAND';
            }
        }

        if (!isDetected) {
            updateFingerPill(valThumb, 'UNKNOWN', false);
            updateFingerPill(valIndex, 'UNKNOWN', false);
            updateFingerPill(valMiddle, 'UNKNOWN', false);
            updateFingerPill(valRing, 'UNKNOWN', false);
            updateFingerPill(valPinky, 'UNKNOWN', false);

            updateFingerPill(pracValThumb, 'UNKNOWN', false);
            updateFingerPill(pracValIndex, 'UNKNOWN', false);
            updateFingerPill(pracValMiddle, 'UNKNOWN', false);
            updateFingerPill(pracValRing, 'UNKNOWN', false);
            updateFingerPill(pracValPinky, 'UNKNOWN', false);

            if (cameraMatchScore) cameraMatchScore.textContent = 'MATCH: --%';
            if (practiceMatchBadge) practiceMatchBadge.textContent = 'TARGET MATCH: 0%';
            if (practiceScoreNumber) practiceScoreNumber.textContent = '0%';
            if (practiceScoreBar) practiceScoreBar.textContent = '[░░░░░░░░░░]';
        }
    }
});
