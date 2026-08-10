/**
 * SILENT — Neo-Brutalist Laboratory Instrument
 * Phase 4, 6, 7, 8, 9 & 10 Controller: ASL Sign Language Lab, Practice Mode & SILENT MODE Unified Hands-Free Engine
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

    // Phase 9 Morse Practice State Tracking (36 Characters)
    const morsePracticeSequence = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        '0','1','2','3','4','5','6','7','8','9'
    ];
    let morsePracticeIndex = 0;
    const completedMorseChars = new Set();
    let mpUserBuffer = '';

    // Phase 10 SILENT MODE State Tracking
    let silentModeType = 'HYBRID'; // 'HYBRID', 'HAND', 'MORSE'
    let smMessageBuffer = '';
    let smHistoryStack = [];
    let smMorseBuffer = '';
    let smCurrentFrameHandLetter = 'NONE';
    let smHandFrameCount = 0;
    let smLastCommittedLetter = '';
    let smSharedWebcamStream = null;
    let smDualAnimFrameId = null;

    // ----------------------------------------------------------
    // 3. PHASE 8 & 10: AUTO-CALIBRATED EYE BLINK CONFIG
    // ----------------------------------------------------------
    const blinkConfig = {
        dotMax: 350,        // ms: blinks < 350ms generate DOT
        dashMin: 350,       // ms: blinks >= 350ms generate DASH
        earThreshold: 0.21,  // Dynamic threshold (auto-calculated as baseline * 0.70)
        cooldownMs: 250      // Cooldown timer between consecutive blinks
    };

    let isEyeBlinking = false;
    let blinkStartTime = 0;
    let lastBlinkEndTime = 0;
    let lastMeasuredBlinkDuration = 0;
    let lastGeneratedSignal = 'NONE';
    let rawEAR = 0.29;
    let smoothEAR = 0.29;
    let closedFrameCount = 0;
    let openFrameCount = 0;
    let isFaceDetected = false;

    let isCalibrating = false;
    let calibrationStartTime = 0;
    let calibrationSamples = [];
    let calibratedEarBaseline = 0.29;

    // ----------------------------------------------------------
    // 4. DOM References
    // ----------------------------------------------------------
    const viewHome = document.getElementById('view-home');
    const viewSignLab = document.getElementById('view-sign-lab');
    const viewSignPractice = document.getElementById('view-sign-practice');
    const viewMorseLab = document.getElementById('view-morse-lab');
    const viewMorsePractice = document.getElementById('view-morse-practice');
    const viewSilentMode = document.getElementById('view-silent-mode');

    const navBtnHome = document.getElementById('nav-btn-home');
    const navBtnSignLab = document.getElementById('nav-btn-sign-lab');
    const navBtnPractice = document.getElementById('nav-btn-practice');
    const navBtnMorseLab = document.getElementById('nav-btn-morse-lab');
    const navBtnSilentMode = document.getElementById('nav-btn-silent-mode');
    const navBtnProgress = document.getElementById('nav-btn-progress');

    const logoHomeLink = document.getElementById('logo-home-link');
    const btnReturnHome = document.getElementById('btn-return-home');
    const btnMorseReturnHome = document.getElementById('btn-morse-return-home');

    const heroBtnExplore = document.getElementById('hero-btn-explore');
    const heroBtnPractice = document.getElementById('hero-btn-practice');
    const heroBtnMorse = document.getElementById('hero-btn-morse');
    const heroBtnSilentMode = document.getElementById('hero-btn-silent-mode');

    const btnHomeStartSign = document.getElementById('btn-home-start-sign');
    const btnHomeStartMorse = document.getElementById('btn-home-start-morse');
    const cardSignLanguage = document.getElementById('card-sign-language');
    const cardMorseCode = document.getElementById('card-morse-code');
    const btnLaunchPracticeMode = document.getElementById('btn-launch-practice-mode');
    const btnLaunchMorsePractice = document.getElementById('btn-launch-morse-practice');

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

    // Morse Lab DOM References
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

    // Phase 7 & 8 Eye Tracking Elements
    const morseVideoElement = document.getElementById('morse-webcam-video');
    const morseCanvasElement = document.getElementById('morse-eye-canvas');
    const morseCameraLoadingPanel = document.getElementById('morse-camera-loading-panel');
    const morseCameraErrorPanel = document.getElementById('morse-camera-error-panel');
    const btnRetryMorseCamera = document.getElementById('btn-retry-morse-camera');

    const eyeStateBadge = document.getElementById('eye-state-badge');
    const eyeTrackingHudBadge = document.getElementById('eye-tracking-hud-badge');
    const eyeDurationHudText = document.getElementById('eye-duration-hud-text');
    const lastSignalBadge = document.getElementById('last-signal-badge');
    const morseStatusBadge = document.getElementById('morse-status-badge');

    const btnTriggerCalibration = document.getElementById('btn-trigger-calibration');
    const morseCalibrationOverlay = document.getElementById('morse-calibration-overlay');
    const calibrationProgressFill = document.getElementById('calibration-progress-fill');
    const calibrationTimeText = document.getElementById('calibration-time-text');
    const calibrationStatusBadge = document.getElementById('calibration-status-badge');

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
    const dbgRawEar = document.getElementById('dbg-raw-ear');
    const dbgSmoothEar = document.getElementById('dbg-smooth-ear');
    const dbgCalibratedThreshold = document.getElementById('dbg-calibrated-threshold');
    const dbgBlinkDuration = document.getElementById('dbg-blink-duration');
    const dbgLastSignal = document.getElementById('dbg-last-signal');

    // Phase 9 Morse Practice View DOM References
    const btnExitMorsePractice = document.getElementById('btn-exit-morse-practice');
    const mpStepIndicator = document.getElementById('mp-step-indicator');
    const mpTargetCharBanner = document.getElementById('mp-target-char-banner');
    const mpTargetPatternBanner = document.getElementById('mp-target-pattern-banner');
    const mpCompletedCount = document.getElementById('mp-completed-count');
    const mpProgressBarText = document.getElementById('mp-progress-bar-text');

    const mpStandardBadge = document.getElementById('mp-standard-badge');
    const mpCardChar = document.getElementById('mp-card-char');
    const mpCardPattern = document.getElementById('mp-card-pattern');
    const mpHumanBreakdown = document.getElementById('mp-human-breakdown');

    const mpMatchBadge = document.getElementById('mp-match-badge');
    const morsePracticeVideoElement = document.getElementById('morse-practice-webcam-video');
    const morsePracticeCanvasElement = document.getElementById('morse-practice-eye-canvas');
    const mpEyeTrackingBadge = document.getElementById('mp-eye-tracking-badge');
    const mpEyeDurationText = document.getElementById('mp-eye-duration-text');
    const mpLastSignalBadge = document.getElementById('mp-last-signal-badge');

    const mpSeqComparisonTarget = document.getElementById('mp-seq-comparison-target');
    const mpSeqComparisonUser = document.getElementById('mp-seq-comparison-user');
    const mpScoreNumber = document.getElementById('mp-score-number');
    const mpAchievementBanner = document.getElementById('mp-achievement-banner');

    const mpFeedbackBadge = document.getElementById('mp-feedback-badge');
    const mpUserBufferText = document.getElementById('mp-user-buffer-text');

    const btnMpPrev = document.getElementById('btn-mp-prev');
    const btnMpRetry = document.getElementById('btn-mp-retry');
    const btnMpSkip = document.getElementById('btn-mp-skip');
    const btnMpNext = document.getElementById('btn-mp-next');

    // Phase 10 SILENT MODE DOM References
    const btnExitSilentMode = document.getElementById('btn-exit-silent-mode');
    const btnSmModeHybrid = document.getElementById('btn-sm-mode-hybrid');
    const btnSmModeHand = document.getElementById('btn-sm-mode-hand');
    const btnSmModeMorse = document.getElementById('btn-sm-mode-morse');

    const smFeedbackStatusBadge = document.getElementById('sm-feedback-status-badge');
    const smCurrentMessageText = document.getElementById('sm-current-message-text');

    const smTelemetryLastInput = document.getElementById('sm-telemetry-last-input');
    const smTelemetryMorseBuffer = document.getElementById('sm-telemetry-morse-buffer');
    const smTelemetryDecoded = document.getElementById('sm-telemetry-decoded');

    const btnSmSpace = document.getElementById('btn-sm-space');
    const btnSmBackspace = document.getElementById('btn-sm-backspace');
    const btnSmUndo = document.getElementById('btn-sm-undo');
    const btnSmClear = document.getElementById('btn-sm-clear');
    const btnSmTransmit = document.getElementById('btn-sm-transmit');

    const smHandVideo = document.getElementById('sm-hand-webcam-video');
    const smHandCanvas = document.getElementById('sm-hand-landmark-canvas');
    const smHandStatusBadge = document.getElementById('sm-hand-status-badge');
    const smHandDetectedLetter = document.getElementById('sm-hand-detected-letter');
    const smHandMatchScore = document.getElementById('sm-hand-match-score');
    const smHandHoldFill = document.getElementById('sm-hand-hold-fill');

    const smEyeVideo = document.getElementById('sm-eye-webcam-video');
    const smEyeCanvas = document.getElementById('sm-eye-landmark-canvas');
    const smEyeStatusBadge = document.getElementById('sm-eye-status-badge');
    const smEyeHudBadge = document.getElementById('sm-eye-hud-badge');
    const smEyeDurationText = document.getElementById('sm-eye-duration-text');
    const smEyeLastSignalBadge = document.getElementById('sm-eye-last-signal-badge');
    const smEyeBufferDisplay = document.getElementById('sm-eye-buffer-display');

    const smTerminalLog = document.getElementById('sm-terminal-log');
    const btnSmClearLog = document.getElementById('btn-sm-clear-log');

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
        if (viewMorsePractice) viewMorsePractice.classList.remove('active');
        if (viewSilentMode) viewSilentMode.classList.remove('active');

        if (navBtnHome) navBtnHome.classList.remove('active');
        if (navBtnSignLab) navBtnSignLab.classList.remove('active');
        if (navBtnPractice) navBtnPractice.classList.remove('active');
        if (navBtnMorseLab) navBtnMorseLab.classList.remove('active');
        if (navBtnSilentMode) navBtnSilentMode.classList.remove('active');

        if (targetView === 'sign-lab') {
            if (viewSignLab) viewSignLab.classList.add('active');
            if (navBtnSignLab) navBtnSignLab.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: SIGN LAB';
            if (cameraStatusText) cameraStatusText.textContent = 'VISION ENGINE ACTIVE';

            stopMorseEyeStream();
            stopSilentModeStreams();
            initCameraAndMediaPipe();
        } else if (targetView === 'sign-practice') {
            if (viewSignPractice) viewSignPractice.classList.add('active');
            if (navBtnPractice) navBtnPractice.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: SIGN PRACTICE';
            if (cameraStatusText) cameraStatusText.textContent = 'PRACTICE MODE ACTIVE';

            stopMorseEyeStream();
            stopSilentModeStreams();
            updatePracticeTarget(practiceSequence[practiceIndex]);
            initCameraAndMediaPipe();
        } else if (targetView === 'morse-lab') {
            if (viewMorseLab) viewMorseLab.classList.add('active');
            if (navBtnMorseLab) navBtnMorseLab.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: MORSE LAB';
            if (cameraStatusText) cameraStatusText.textContent = 'EYE TELEGRAPHY ACTIVE';

            stopWebcamStream();
            stopSilentModeStreams();
            initMorseLabView();
            initMorseFaceMeshEngine();
        } else if (targetView === 'morse-practice') {
            if (viewMorsePractice) viewMorsePractice.classList.add('active');
            if (navBtnMorseLab) navBtnMorseLab.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: MORSE PRACTICE';
            if (cameraStatusText) cameraStatusText.textContent = 'MORSE PRACTICE ACTIVE';

            stopWebcamStream();
            stopSilentModeStreams();
            updateMorsePracticeTarget(morsePracticeSequence[morsePracticeIndex]);
            initMorseFaceMeshEngine();
        } else if (targetView === 'silent-mode') {
            if (viewSilentMode) viewSilentMode.classList.add('active');
            if (navBtnSilentMode) navBtnSilentMode.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: SILENT MODE';
            if (cameraStatusText) cameraStatusText.textContent = 'DUAL ENGINE ACTIVE';

            stopWebcamStream();
            stopMorseEyeStream();
            initSilentModeDualEngine();
        } else {
            if (viewHome) viewHome.classList.add('active');
            if (navBtnHome) navBtnHome.classList.add('active');
            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: HOME';
            if (cameraStatusText) cameraStatusText.textContent = 'CAMERA-POWERED';

            stopWebcamStream();
            stopMorseEyeStream();
            stopSilentModeStreams();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (navBtnHome) navBtnHome.addEventListener('click', () => switchView('home'));
    if (navBtnSignLab) navBtnSignLab.addEventListener('click', () => switchView('sign-lab'));
    if (navBtnPractice) navBtnPractice.addEventListener('click', () => switchView('sign-practice'));
    if (navBtnMorseLab) navBtnMorseLab.addEventListener('click', () => switchView('morse-lab'));
    if (navBtnSilentMode) navBtnSilentMode.addEventListener('click', () => switchView('silent-mode'));

    if (logoHomeLink) logoHomeLink.addEventListener('click', (e) => { e.preventDefault(); switchView('home'); });
    if (btnReturnHome) btnReturnHome.addEventListener('click', () => switchView('home'));
    if (btnMorseReturnHome) btnMorseReturnHome.addEventListener('click', () => switchView('home'));
    if (btnExitPractice) btnExitPractice.addEventListener('click', () => switchView('sign-lab'));
    if (btnExitMorsePractice) btnExitMorsePractice.addEventListener('click', () => switchView('morse-lab'));
    if (btnExitSilentMode) btnExitSilentMode.addEventListener('click', () => switchView('home'));

    if (heroBtnExplore) heroBtnExplore.addEventListener('click', () => switchView('sign-lab'));
    if (heroBtnPractice) heroBtnPractice.addEventListener('click', () => switchView('sign-practice'));
    if (heroBtnMorse) heroBtnMorse.addEventListener('click', () => switchView('morse-lab'));
    if (heroBtnSilentMode) heroBtnSilentMode.addEventListener('click', () => switchView('silent-mode'));

    if (btnHomeStartSign) btnHomeStartSign.addEventListener('click', () => switchView('sign-lab'));
    if (btnHomeStartMorse) btnHomeStartMorse.addEventListener('click', () => switchView('morse-lab'));
    if (cardSignLanguage) cardSignLanguage.addEventListener('click', () => switchView('sign-lab'));
    if (cardMorseCode) cardMorseCode.addEventListener('click', () => switchView('morse-lab'));
    if (btnLaunchPracticeMode) btnLaunchPracticeMode.addEventListener('click', () => switchView('sign-practice'));
    if (btnLaunchMorsePractice) btnLaunchMorsePractice.addEventListener('click', () => switchView('morse-practice'));

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
            if (viewMorsePractice && viewMorsePractice.classList.contains('active')) {
                mpUserBuffer += symbol;
                evaluateMorsePracticeAttempt(symbol);
            } else if (viewSilentMode && viewSilentMode.classList.contains('active')) {
                smMorseBuffer += symbol;
                const displayPattern = smMorseBuffer.replace(/\./g, '• ').replace(/-/g, '— ');
                if (smEyeBufferDisplay) smEyeBufferDisplay.textContent = displayPattern;
                if (smTelemetryMorseBuffer) smTelemetryMorseBuffer.textContent = `MORSE BUFFER: ${displayPattern}`;

                const decodedChar = decodeMorseSignal(smMorseBuffer);
                if (smTelemetryDecoded) smTelemetryDecoded.textContent = `DECODED: ${decodedChar}`;

                if (decodedChar !== '--' && decodedChar !== '?') {
                    if (silentModeType === 'HYBRID' || silentModeType === 'MORSE') {
                        commitSilentModeCharacter(decodedChar, 'MORSE');
                    }
                    smMorseBuffer = '';
                    if (smEyeBufferDisplay) smEyeBufferDisplay.textContent = '--';
                }
            } else {
                currentMorseBuffer += symbol;
                updateMorseBufferUI();
            }
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

    if (btnMorseDot) btnMorseDot.addEventListener('click', () => {
        lastGeneratedSignal = 'DOT ( . )';
        if (lastSignalBadge) {
            lastSignalBadge.textContent = 'LAST: DOT ( • )';
            lastSignalBadge.className = 'sticker-badge badge-yellow';
            lastSignalBadge.classList.remove('hidden');
        }
        addMorseSignal('.');
    });

    if (btnMorseDash) btnMorseDash.addEventListener('click', () => {
        lastGeneratedSignal = 'DASH ( - )';
        if (lastSignalBadge) {
            lastSignalBadge.textContent = 'LAST: DASH ( — )';
            lastSignalBadge.className = 'sticker-badge badge-coral';
            lastSignalBadge.classList.remove('hidden');
        }
        addMorseSignal('-');
    });

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
            if (dbgCalibratedThreshold) dbgCalibratedThreshold.textContent = blinkConfig.earThreshold.toFixed(3);
        });
    }

    if (btnToggleDebug && developerDebugPanel) {
        btnToggleDebug.addEventListener('click', () => {
            developerDebugPanel.classList.toggle('hidden');
        });
    }

    if (btnTriggerCalibration) {
        btnTriggerCalibration.addEventListener('click', () => {
            startEyeCalibration();
        });
    }

    // ----------------------------------------------------------
    // 8. PHASE 9: DEDICATED MORSE PRACTICE ENGINE & MATCH SCORER
    // ----------------------------------------------------------
    function getHumanReadableMorseBreakdown(signal) {
        if (!signal) return '';
        const items = [];
        for (let i = 0; i < signal.length; i++) {
            if (signal[i] === '.') {
                items.push('<div class="finger-state-pill is-extended">SHORT BLINK ( &lt; 350ms )</div>');
            } else if (signal[i] === '-') {
                items.push('<div class="finger-state-pill is-curled">LONG BLINK ( &ge; 350ms )</div>');
            }
        }
        return items.join('');
    }

    function updateMorsePracticeTarget(char) {
        if (!morseSignalMap[char]) return;
        const targetPattern = morseSignalMap[char];
        const displayPattern = targetPattern.replace(/\./g, '• ').replace(/-/g, '— ');
        morsePracticeIndex = morsePracticeSequence.indexOf(char);

        if (mpStepIndicator) mpStepIndicator.textContent = `STEP ${morsePracticeIndex + 1} OF ${morsePracticeSequence.length}`;
        if (mpTargetCharBanner) mpTargetCharBanner.textContent = char;
        if (mpTargetPatternBanner) mpTargetPatternBanner.textContent = `PATTERN: ${displayPattern}`;
        if (mpCompletedCount) mpCompletedCount.textContent = `COMPLETED: ${completedMorseChars.size} / ${morsePracticeSequence.length}`;
        if (mpStandardBadge) mpStandardBadge.textContent = `STANDARD: ${char}`;

        const filledBlocks = Math.floor((completedMorseChars.size / morsePracticeSequence.length) * 30);
        const emptyBlocks = 30 - filledBlocks;
        if (mpProgressBarText) mpProgressBarText.textContent = `PROGRESS: [${'█'.repeat(filledBlocks)}${'░'.repeat(emptyBlocks)}] ${completedMorseChars.size} / ${morsePracticeSequence.length}`;

        if (mpCardChar) mpCardChar.textContent = char;
        if (mpCardPattern) mpCardPattern.textContent = displayPattern;
        if (mpHumanBreakdown) mpHumanBreakdown.innerHTML = getHumanReadableMorseBreakdown(targetPattern);

        // Reset User Attempt State
        mpUserBuffer = '';
        mpCurrentScore = 0;

        if (mpUserBufferText) mpUserBufferText.textContent = ' ';
        if (mpSeqComparisonTarget) mpSeqComparisonTarget.textContent = `TARGET: ${displayPattern}`;
        if (mpSeqComparisonUser) mpSeqComparisonUser.textContent = 'YOU: --';
        if (mpScoreNumber) mpScoreNumber.textContent = '0%';
        if (mpMatchBadge) mpMatchBadge.textContent = 'MATCH: 0%';

        if (mpAchievementBanner) mpAchievementBanner.classList.add('hidden');
        if (btnMpNext) btnMpNext.disabled = true;
        if (mpFeedbackBadge) mpFeedbackBadge.textContent = 'WAITING FOR SIGNAL';
    }

    function evaluateMorsePracticeAttempt(lastReceivedSymbol) {
        const currentChar = morsePracticeSequence[morsePracticeIndex];
        const targetPattern = morseSignalMap[currentChar];
        const targetDisplay = targetPattern.replace(/\./g, '• ').replace(/-/g, '— ');
        const userDisplay = mpUserBuffer.replace(/\./g, '• ').replace(/-/g, '— ');

        if (mpUserBufferText) mpUserBufferText.textContent = userDisplay;
        if (mpSeqComparisonUser) mpSeqComparisonUser.textContent = `YOU: ${userDisplay}`;

        const NT = targetPattern.length;
        const NU = mpUserBuffer.length;

        let matches = 0;
        const minLen = Math.min(NT, NU);
        for (let i = 0; i < minLen; i++) {
            if (mpUserBuffer[i] === targetPattern[i]) matches++;
        }

        let score = Math.round((matches / NT) * 100);

        if (NU > NT) {
            score = Math.max(0, score - (NU - NT) * 20);
        }

        mpCurrentScore = score;
        if (mpScoreNumber) mpScoreNumber.textContent = `${mpCurrentScore}%`;
        if (mpMatchBadge) mpMatchBadge.textContent = `MATCH: ${mpCurrentScore}%`;

        const symbolLabel = lastReceivedSymbol === '.' ? 'DOT RECEIVED' : 'DASH RECEIVED';

        if (mpUserBuffer === targetPattern) {
            mpCurrentScore = 100;
            if (mpScoreNumber) mpScoreNumber.textContent = '100%';
            if (mpMatchBadge) mpMatchBadge.textContent = 'MATCH: 100%';

            completedMorseChars.add(currentChar);
            if (mpCompletedCount) mpCompletedCount.textContent = `COMPLETED: ${completedMorseChars.size} / ${morsePracticeSequence.length}`;

            const filledBlocks = Math.floor((completedMorseChars.size / morsePracticeSequence.length) * 30);
            const emptyBlocks = 30 - filledBlocks;
            if (mpProgressBarText) mpProgressBarText.textContent = `PROGRESS: [${'█'.repeat(filledBlocks)}${'░'.repeat(emptyBlocks)}] ${completedMorseChars.size} / ${morsePracticeSequence.length}`;

            if (mpAchievementBanner) mpAchievementBanner.classList.remove('hidden');
            if (btnMpNext) btnMpNext.disabled = false;
            if (mpFeedbackBadge) mpFeedbackBadge.textContent = 'TARGET ACHIEVED';

            logMorseTerminalMessage(`> [✓] TARGET CHARACTER '${currentChar}' ACHIEVED VIA BLINK PRACTICE!`);
        } else if (targetPattern.startsWith(mpUserBuffer)) {
            if (mpFeedbackBadge) mpFeedbackBadge.textContent = `${symbolLabel} (SIGNAL CORRECT)`;
        } else {
            if (mpFeedbackBadge) mpFeedbackBadge.textContent = `${symbolLabel} (SIGNAL INCORRECT)`;
        }
    }

    if (btnMpPrev) {
        btnMpPrev.addEventListener('click', () => {
            const prevIdx = (morsePracticeIndex - 1 + morsePracticeSequence.length) % morsePracticeSequence.length;
            updateMorsePracticeTarget(morsePracticeSequence[prevIdx]);
        });
    }

    if (btnMpRetry) {
        btnMpRetry.addEventListener('click', () => {
            updateMorsePracticeTarget(morsePracticeSequence[morsePracticeIndex]);
        });
    }

    if (btnMpSkip) {
        btnMpSkip.addEventListener('click', () => {
            const nextIdx = (morsePracticeIndex + 1) % morsePracticeSequence.length;
            updateMorsePracticeTarget(morsePracticeSequence[nextIdx]);
        });
    }

    if (btnMpNext) {
        btnMpNext.addEventListener('click', () => {
            const nextIdx = (morsePracticeIndex + 1) % morsePracticeSequence.length;
            updateMorsePracticeTarget(morsePracticeSequence[nextIdx]);
        });
    }

    // ----------------------------------------------------------
    // 9. PHASE 10: SILENT MODE UNIFIED CONTROLLER & TELEMETRY
    // ----------------------------------------------------------
    function logSilentModeTerminalMessage(msgText) {
        if (!smTerminalLog) return;
        const now = new Date();
        const timeStr = `[${now.toTimeString().split(' ')[0]}]`;

        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `
            <span class="log-time">${timeStr}</span>
            <span class="log-prompt">&gt;</span>
            <span class="log-text">${msgText}</span>
        `;

        smTerminalLog.appendChild(entry);
        smTerminalLog.scrollTop = smTerminalLog.scrollHeight;
    }

    function commitSilentModeCharacter(char, source) {
        smHistoryStack.push(smMessageBuffer);
        smMessageBuffer += char;

        if (smCurrentMessageText) smCurrentMessageText.textContent = smMessageBuffer || ' ';
        if (smTelemetryLastInput) smTelemetryLastInput.textContent = `LAST INPUT: ${source} → ${char}`;
        if (smFeedbackStatusBadge) smFeedbackStatusBadge.textContent = `${source} INPUT ACTIVE`;

        logSilentModeTerminalMessage(`${source} → ${char}`);
    }

    function setSilentModeType(mode) {
        silentModeType = mode;
        const btns = [btnSmModeHybrid, btnSmModeHand, btnSmModeMorse];
        btns.forEach(b => {
            if (b) b.classList.remove('active');
        });

        if (mode === 'HYBRID' && btnSmModeHybrid) btnSmModeHybrid.classList.add('active');
        if (mode === 'HAND' && btnSmModeHand) btnSmModeHand.classList.add('active');
        if (mode === 'MORSE' && btnSmModeMorse) btnSmModeMorse.classList.add('active');

        logSilentModeTerminalMessage(`MODE SWITCHED TO: [ ${mode} ]`);
    }

    if (btnSmModeHybrid) btnSmModeHybrid.addEventListener('click', () => setSilentModeType('HYBRID'));
    if (btnSmModeHand) btnSmModeHand.addEventListener('click', () => setSilentModeType('HAND'));
    if (btnSmModeMorse) btnSmModeMorse.addEventListener('click', () => setSilentModeType('MORSE'));

    if (btnSmSpace) {
        btnSmSpace.addEventListener('click', () => {
            smHistoryStack.push(smMessageBuffer);
            smMessageBuffer += ' ';
            if (smCurrentMessageText) smCurrentMessageText.textContent = smMessageBuffer || ' ';
            logSilentModeTerminalMessage('SPACE ADDED');
        });
    }

    if (btnSmBackspace) {
        btnSmBackspace.addEventListener('click', () => {
            smHistoryStack.push(smMessageBuffer);
            smMessageBuffer = smMessageBuffer.slice(0, -1);
            if (smCurrentMessageText) smCurrentMessageText.textContent = smMessageBuffer || ' ';
            logSilentModeTerminalMessage('BACKSPACE APPLIED');
        });
    }

    if (btnSmUndo) {
        btnSmUndo.addEventListener('click', () => {
            if (smHistoryStack.length > 0) {
                smMessageBuffer = smHistoryStack.pop();
                if (smCurrentMessageText) smCurrentMessageText.textContent = smMessageBuffer || ' ';
                logSilentModeTerminalMessage('UNDO REVERTED LAST STEP');
            }
        });
    }

    if (btnSmClear) {
        btnSmClear.addEventListener('click', () => {
            smHistoryStack.push(smMessageBuffer);
            smMessageBuffer = '';
            if (smCurrentMessageText) smCurrentMessageText.textContent = ' ';
            if (smTelemetryLastInput) smTelemetryLastInput.textContent = 'LAST INPUT: NONE';
            if (smFeedbackStatusBadge) smFeedbackStatusBadge.textContent = 'READY TO COMMUNICATE';
            logSilentModeTerminalMessage('MESSAGE BUFFER CLEARED');
        });
    }

    if (btnSmTransmit) {
        btnSmTransmit.addEventListener('click', () => {
            if (smMessageBuffer.trim().length > 0) {
                if (smFeedbackStatusBadge) smFeedbackStatusBadge.textContent = 'TRANSMITTING...';
                const msg = smMessageBuffer;
                logSilentModeTerminalMessage(`MESSAGE TRANSMITTED: "${msg}"`);
                
                setTimeout(() => {
                    if (smFeedbackStatusBadge) smFeedbackStatusBadge.textContent = 'MESSAGE SENT';
                    smHistoryStack.push(smMessageBuffer);
                    smMessageBuffer = '';
                    if (smCurrentMessageText) smCurrentMessageText.textContent = ' ';
                }, 300);
            } else {
                logSilentModeTerminalMessage('TRANSMISSION FAILED: MESSAGE BUFFER EMPTY.');
            }
        });
    }

    if (btnSmClearLog) {
        btnSmClearLog.addEventListener('click', () => {
            if (smTerminalLog) smTerminalLog.innerHTML = '';
            logSilentModeTerminalMessage('Translation log cleared.');
        });
    }

    // Single Stream Lifecycle for Silent Mode Dual Engines
    async function initSilentModeDualEngine() {
        try {
            if (!smSharedWebcamStream) {
                smSharedWebcamStream = await navigator.mediaDevices.getUserMedia({
                    video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" },
                    audio: false
                });

                if (smHandVideo) {
                    smHandVideo.srcObject = smSharedWebcamStream;
                    await smHandVideo.play();
                }
                if (smEyeVideo) {
                    smEyeVideo.srcObject = smSharedWebcamStream;
                    await smEyeVideo.play();
                }
            }

            if (!handsEngine) {
                handsEngine = new window.Hands({
                    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
                });
                handsEngine.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
                handsEngine.onResults(onHandResults);
                if (handsEngine.initialize) await handsEngine.initialize();
            }

            if (!faceMeshEngine) {
                faceMeshEngine = new window.FaceMesh({
                    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
                });
                faceMeshEngine.setOptions({ maxNumFaces: 1, refineLandmarks: true, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
                faceMeshEngine.onResults(onFaceMeshResults);
                if (faceMeshEngine.initialize) await faceMeshEngine.initialize();
            }

            engineInitialized = true;
            morseEngineInitialized = true;
            startSilentModeDualLoop();

        } catch (err) {
            console.error('Silent Mode Dual Stream Error:', err);
            logSilentModeTerminalMessage(`CAMERA ERROR: ${err.message}`);
        }
    }

    function stopSilentModeStreams() {
        if (smDualAnimFrameId) {
            cancelAnimationFrame(smDualAnimFrameId);
            smDualAnimFrameId = null;
        }

        if (smSharedWebcamStream) {
            smSharedWebcamStream.getTracks().forEach(track => track.stop());
            smSharedWebcamStream = null;
        }

        if (smHandVideo) smHandVideo.srcObject = null;
        if (smEyeVideo) smEyeVideo.srcObject = null;

        smHandFrameCount = 0;
        smLastCommittedLetter = '';
    }

    function startSilentModeDualLoop() {
        if (smDualAnimFrameId) cancelAnimationFrame(smDualAnimFrameId);

        async function processDualFrame() {
            if (smHandVideo && !smHandVideo.paused && !smHandVideo.ended && smHandVideo.readyState >= 2) {
                if (handsEngine && engineInitialized) {
                    try { await handsEngine.send({ image: smHandVideo }); } catch (e) {}
                }
                if (faceMeshEngine && morseEngineInitialized) {
                    try { await faceMeshEngine.send({ image: smHandVideo }); } catch (e) {}
                }
            }

            if (smSharedWebcamStream && viewSilentMode && viewSilentMode.classList.contains('active')) {
                smDualAnimFrameId = requestAnimationFrame(processDualFrame);
            }
        }

        smDualAnimFrameId = requestAnimationFrame(processDualFrame);
    }

    // ----------------------------------------------------------
    // 10. REAL MEDIAPIPE FACE MESH & AUTO-CALIBRATED BLINK ENGINE
    // ----------------------------------------------------------
    function startEyeCalibration() {
        if (!isFaceDetected) {
            logMorseTerminalMessage('> CALIBRATION FAILED: NO FACE DETECTED IN CAMERA VIEW.');
            return;
        }

        isCalibrating = true;
        calibrationStartTime = performance.now();
        calibrationSamples = [];

        if (morseCalibrationOverlay) morseCalibrationOverlay.classList.remove('hidden');
        if (calibrationProgressFill) calibrationProgressFill.style.width = '0%';
        if (calibrationTimeText) calibrationTimeText.textContent = 'SAMPLING: 0.0s / 2.0s';
        logMorseTerminalMessage('> EYE CALIBRATION STARTED: KEEP EYES OPEN NATURALLY FOR 2 SECONDS...');
    }

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
                if (morsePracticeVideoElement) {
                    morsePracticeVideoElement.srcObject = morseWebcamStream;
                    await morsePracticeVideoElement.play();
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

            setTimeout(() => {
                if (viewMorseLab.classList.contains('active') && !isCalibrating) {
                    startEyeCalibration();
                }
            }, 1000);

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

        if (morseVideoElement) morseVideoElement.srcObject = null;
        if (morsePracticeVideoElement) morsePracticeVideoElement.srcObject = null;

        isSendingMorseFrame = false;
        morseEngineInitialized = false;

        isEyeBlinking = false;
        closedFrameCount = 0;
        openFrameCount = 0;

        if (morseCameraLoadingPanel) morseCameraLoadingPanel.classList.add('hidden');
        if (morseCalibrationOverlay) morseCalibrationOverlay.classList.add('hidden');
    }

    function startMorseDetectionLoop() {
        if (morseAnimFrameId) cancelAnimationFrame(morseAnimFrameId);

        async function processFrame() {
            const activeMorseVideo = viewMorsePractice.classList.contains('active') ? morsePracticeVideoElement : morseVideoElement;

            if (activeMorseVideo && !activeMorseVideo.paused && !activeMorseVideo.ended && activeMorseVideo.readyState >= 2) {
                if (!isSendingMorseFrame && faceMeshEngine && morseEngineInitialized) {
                    isSendingMorseFrame = true;
                    try {
                        await faceMeshEngine.send({ image: activeMorseVideo });
                    } catch (e) {
                        console.warn('FaceMesh Frame Error:', e);
                    }
                    isSendingMorseFrame = false;
                }
            }

            if (morseWebcamStream && (viewMorseLab.classList.contains('active') || viewMorsePractice.classList.contains('active'))) {
                morseAnimFrameId = requestAnimationFrame(processFrame);
            }
        }

        morseAnimFrameId = requestAnimationFrame(processFrame);
    }

    // ----------------------------------------------------------
    // 11. REFINED EAR CALCULATOR & MULTI-FRAME BLINK CLASSIFIER
    // ----------------------------------------------------------
    const LEFT_EYE_INDICES = { outer: 33, inner: 133, top1: 160, top2: 158, bot1: 144, bot2: 153 };
    const RIGHT_EYE_INDICES = { outer: 263, inner: 362, top1: 385, top2: 387, bot1: 380, bot2: 373 };

    function calculateSingleEyeEAR(landmarks, eye) {
        const pOuter = landmarks[eye.outer];
        const pInner = landmarks[eye.inner];
        const pTop1 = landmarks[eye.top1];
        const pBot1 = landmarks[eye.bot1];
        const pTop2 = landmarks[eye.top2];
        const pBot2 = landmarks[eye.bot2];

        if (!pOuter || !pInner || !pTop1 || !pBot1 || !pTop2 || !pBot2) return 0.29;

        const distHoriz = Math.hypot(pOuter.x - pInner.x, pOuter.y - pInner.y);
        const distVert1 = Math.hypot(pTop1.x - pBot1.x, pTop1.y - pBot1.y);
        const distVert2 = Math.hypot(pTop2.x - pBot2.x, pTop2.y - pBot2.y);

        return (distVert1 + distVert2) / (2.0 * (distHoriz || 0.001));
    }

    function onFaceMeshResults(results) {
        const isMorsePractice = viewMorsePractice.classList.contains('active');
        const isSilentMode = viewSilentMode.classList.contains('active');

        let activeCanvas = morseCanvasElement;
        if (isMorsePractice) activeCanvas = morsePracticeCanvasElement;
        if (isSilentMode) activeCanvas = smEyeCanvas;

        if (!activeCanvas) return;

        activeCanvas.width = activeCanvas.clientWidth || 640;
        activeCanvas.height = activeCanvas.clientHeight || 480;

        const ctx = activeCanvas.getContext('2d');
        const width = activeCanvas.width;
        const height = activeCanvas.height;

        ctx.clearRect(0, 0, width, height);

        const multiFaceLandmarks = results.multiFaceLandmarks;

        if (multiFaceLandmarks && multiFaceLandmarks.length > 0) {
            isFaceDetected = true;
            const landmarks = multiFaceLandmarks[0];

            const earLeft = calculateSingleEyeEAR(landmarks, LEFT_EYE_INDICES);
            const earRight = calculateSingleEyeEAR(landmarks, RIGHT_EYE_INDICES);
            rawEAR = (earLeft + earRight) / 2.0;

            smoothEAR = (smoothEAR === 0) ? rawEAR : (smoothEAR * 0.7 + rawEAR * 0.3);

            const now = performance.now();

            if (isCalibrating) {
                const elapsed = now - calibrationStartTime;
                calibrationSamples.push(rawEAR);

                const progressPct = Math.min((elapsed / 2000) * 100, 100);
                if (calibrationProgressFill) calibrationProgressFill.style.width = `${progressPct}%`;
                if (calibrationTimeText) calibrationTimeText.textContent = `SAMPLING: ${(elapsed / 1000).toFixed(1)}s / 2.0s`;

                if (elapsed >= 2000) {
                    isCalibrating = false;
                    const sum = calibrationSamples.reduce((a, b) => a + b, 0);
                    calibratedEarBaseline = sum / (calibrationSamples.length || 1);

                    blinkConfig.earThreshold = parseFloat((calibratedEarBaseline * 0.70).toFixed(2));

                    if (inputEarThreshold) inputEarThreshold.value = blinkConfig.earThreshold;
                    if (valEarThreshold) valEarThreshold.textContent = `${blinkConfig.earThreshold.toFixed(2)}`;
                    if (morseCalibrationOverlay) morseCalibrationOverlay.classList.add('hidden');
                    if (calibrationStatusBadge) calibrationStatusBadge.textContent = 'AUTO-CALIBRATED';

                    logMorseTerminalMessage(`> EYE CALIBRATION COMPLETE: Baseline EAR ${calibratedEarBaseline.toFixed(3)} -> Threshold ${blinkConfig.earThreshold}`);
                }
            }

            const isFrameClosed = smoothEAR < blinkConfig.earThreshold;

            if (isFrameClosed) {
                closedFrameCount++;
                openFrameCount = 0;

                if (closedFrameCount >= 2 && !isEyeBlinking && (now - lastBlinkEndTime > blinkConfig.cooldownMs)) {
                    isEyeBlinking = true;
                    blinkStartTime = now;

                    if (eyeStateBadge) eyeStateBadge.textContent = 'BLINK DETECTED';
                    if (eyeTrackingHudBadge) eyeTrackingHudBadge.textContent = '[ BLINKING ]';
                    if (mpEyeTrackingBadge) mpEyeTrackingBadge.textContent = '[ BLINKING ]';
                    if (smEyeStatusBadge) smEyeStatusBadge.textContent = 'BLINK DETECTED';
                    if (smEyeHudBadge) smEyeHudBadge.textContent = '[ BLINKING ]';
                }
            } else {
                openFrameCount++;
                closedFrameCount = 0;

                if (openFrameCount >= 2) {
                    if (isEyeBlinking) {
                        isEyeBlinking = false;
                        lastBlinkEndTime = now;

                        const duration = Math.round(now - blinkStartTime);
                        lastMeasuredBlinkDuration = duration;

                        if (duration >= 80) {
                            if (duration < blinkConfig.dotMax) {
                                lastGeneratedSignal = 'DOT ( . )';
                                if (lastSignalBadge) {
                                    lastSignalBadge.textContent = 'LAST: DOT ( • )';
                                    lastSignalBadge.className = 'sticker-badge badge-yellow';
                                    lastSignalBadge.classList.remove('hidden');
                                }
                                if (mpLastSignalBadge) {
                                    mpLastSignalBadge.textContent = 'LAST: DOT ( • )';
                                    mpLastSignalBadge.className = 'sticker-badge badge-yellow';
                                    mpLastSignalBadge.classList.remove('hidden');
                                }
                                if (smEyeLastSignalBadge) {
                                    smEyeLastSignalBadge.textContent = 'LAST: DOT ( • )';
                                    smEyeLastSignalBadge.className = 'sticker-badge badge-yellow';
                                    smEyeLastSignalBadge.classList.remove('hidden');
                                }
                                addMorseSignal('.');
                                logMorseTerminalMessage(`> BLINK TELEGRAPHY: SHORT BLINK ( ${duration} ms ) -> DOT ( . )`);
                                if (eyeStateBadge) eyeStateBadge.textContent = 'DOT DETECTED';
                            } else {
                                lastGeneratedSignal = 'DASH ( - )';
                                if (lastSignalBadge) {
                                    lastSignalBadge.textContent = 'LAST: DASH ( — )';
                                    lastSignalBadge.className = 'sticker-badge badge-coral';
                                    lastSignalBadge.classList.remove('hidden');
                                }
                                if (mpLastSignalBadge) {
                                    mpLastSignalBadge.textContent = 'LAST: DASH ( — )';
                                    mpLastSignalBadge.className = 'sticker-badge badge-coral';
                                    mpLastSignalBadge.classList.remove('hidden');
                                }
                                if (smEyeLastSignalBadge) {
                                    smEyeLastSignalBadge.textContent = 'LAST: DASH ( — )';
                                    smEyeLastSignalBadge.className = 'sticker-badge badge-coral';
                                    smEyeLastSignalBadge.classList.remove('hidden');
                                }
                                addMorseSignal('-');
                                logMorseTerminalMessage(`> BLINK TELEGRAPHY: LONG BLINK ( ${duration} ms ) -> DASH ( — )`);
                                if (eyeStateBadge) eyeStateBadge.textContent = 'DASH DETECTED';
                            }
                        }
                    } else {
                        if (eyeStateBadge) eyeStateBadge.textContent = 'EYES OPEN';
                        if (eyeTrackingHudBadge) eyeTrackingHudBadge.textContent = '[ TRACKING ]';
                        if (mpEyeTrackingBadge) mpEyeTrackingBadge.textContent = '[ TRACKING ]';
                        if (smEyeStatusBadge) smEyeStatusBadge.textContent = 'EYES OPEN';
                        if (smEyeHudBadge) smEyeHudBadge.textContent = '[ TRACKING ]';
                    }
                }
            }

            drawRefinedEyeOverlayOnCtx(ctx, landmarks, width, height, isFrameClosed);

            if (eyeDurationHudText) eyeDurationHudText.textContent = `BLINK: ${lastMeasuredBlinkDuration} ms`;
            if (mpEyeDurationText) mpEyeDurationText.textContent = `BLINK: ${lastMeasuredBlinkDuration} ms`;
            if (smEyeDurationText) smEyeDurationText.textContent = `BLINK: ${lastMeasuredBlinkDuration} ms`;
            if (morseStatusBadge) morseStatusBadge.textContent = 'EYE ENGINE ACTIVE';

            if (dbgFaceDetected) dbgFaceDetected.textContent = 'YES';
            if (dbgEyeState) dbgEyeState.textContent = isEyeBlinking ? 'CLOSED' : 'OPEN';
            if (dbgRawEar) dbgRawEar.textContent = rawEAR.toFixed(3);
            if (dbgSmoothEar) dbgSmoothEar.textContent = smoothEAR.toFixed(3);
            if (dbgCalibratedThreshold) dbgCalibratedThreshold.textContent = blinkConfig.earThreshold.toFixed(3);
            if (dbgBlinkDuration) dbgBlinkDuration.textContent = `${lastMeasuredBlinkDuration} ms`;
            if (dbgLastSignal) dbgLastSignal.textContent = lastGeneratedSignal;

        } else {
            isFaceDetected = false;
            isEyeBlinking = false;
            closedFrameCount = 0;
            openFrameCount = 0;

            if (eyeStateBadge) eyeStateBadge.textContent = 'NO FACE';
            if (eyeTrackingHudBadge) eyeTrackingHudBadge.textContent = '[ NO FACE ]';
            if (mpEyeTrackingBadge) mpEyeTrackingBadge.textContent = '[ NO FACE ]';
            if (smEyeStatusBadge) smEyeStatusBadge.textContent = 'NO FACE';
            if (smEyeHudBadge) smEyeHudBadge.textContent = '[ NO FACE ]';
            if (morseStatusBadge) morseStatusBadge.textContent = 'EYE SEARCHING';

            if (dbgFaceDetected) dbgFaceDetected.textContent = 'NO';
            if (dbgEyeState) dbgEyeState.textContent = 'NO FACE';
            if (dbgRawEar) dbgRawEar.textContent = '0.000';
            if (dbgSmoothEar) dbgSmoothEar.textContent = '0.000';
        }
    }

    function drawRefinedEyeOverlayOnCtx(ctx, landmarks, width, height, isClosed) {
        ctx.strokeStyle = isClosed ? '#ea4a51' : '#facc15';
        ctx.lineWidth = 2;

        const leftPts = [33, 160, 158, 133, 153, 144];
        const rightPts = [362, 385, 387, 263, 373, 380];

        ctx.beginPath();
        leftPts.forEach((idx, i) => {
            const pt = landmarks[idx];
            if (i === 0) ctx.moveTo(pt.x * width, pt.y * height);
            else ctx.lineTo(pt.x * width, pt.y * height);
        });
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        rightPts.forEach((idx, i) => {
            const pt = landmarks[idx];
            if (i === 0) ctx.moveTo(pt.x * width, pt.y * height);
            else ctx.lineTo(pt.x * width, pt.y * height);
        });
        ctx.closePath();
        ctx.stroke();

        const leftIris = landmarks[468] || landmarks[33];
        const rightIris = landmarks[473] || landmarks[263];

        ctx.fillStyle = isClosed ? '#ea4a51' : '#ffffff';
        ctx.beginPath();
        ctx.arc(leftIris.x * width, leftIris.y * height, 4, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(rightIris.x * width, rightIris.y * height, 4, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Expose Modular Functions globally
    window.addMorseSignal = addMorseSignal;
    window.decodeMorseSignal = decodeMorseSignal;
    window.clearMorseBuffer = clearMorseBuffer;
    window.commitMorseCharacter = commitMorseCharacter;
    window.transmitMorseMessage = transmitMorseMessage;
    window.setMorseTarget = setMorseTarget;
    window.startEyeCalibration = startEyeCalibration;

    // ----------------------------------------------------------
    // 12. MEDIA PIPE HAND TRACKING PIPELINE (ASL LAB & SILENT MODE)
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
        const isSilentMode = viewSilentMode.classList.contains('active');

        let activeCanvas = canvasElement;
        if (isPracticeMode) activeCanvas = practiceCanvasElement;
        if (isSilentMode) activeCanvas = smHandCanvas;

        if (!activeCanvas) return;

        activeCanvas.width = activeCanvas.clientWidth || 640;
        activeCanvas.height = activeCanvas.clientHeight || 480;

        const ctx = activeCanvas.getContext('2d');
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

        const isSilentMode = viewSilentMode.classList.contains('active');

        // Silent Mode Multi-Letter Best-Match Recognition
        if (isSilentMode) {
            let bestLetter = 'A';
            let maxMatchesCount = -1;

            Object.entries(aslTargetPoses).forEach(([letter, pose]) => {
                let mCount = 0;
                if (currentFingers.thumb === pose.thumb) mCount++;
                if (currentFingers.index === pose.index) mCount++;
                if (currentFingers.middle === pose.middle) mCount++;
                if (currentFingers.ring === pose.ring) mCount++;
                if (currentFingers.pinky === pose.pinky) mCount++;

                if (mCount > maxMatchesCount) {
                    maxMatchesCount = mCount;
                    bestLetter = letter;
                }
            });

            const smScore = Math.min(maxMatchesCount * 18 + 8, 98);

            if (smHandDetectedLetter) smHandDetectedLetter.textContent = bestLetter;
            if (smHandMatchScore) smHandMatchScore.textContent = `MATCH: ${smScore}%`;
            if (smHandStatusBadge) smHandStatusBadge.textContent = 'SIGN DETECTED';

            if (smScore >= 80) {
                if (bestLetter === smCurrentFrameHandLetter) {
                    smHandFrameCount++;
                } else {
                    smCurrentFrameHandLetter = bestLetter;
                    smHandFrameCount = 1;
                }

                const holdPct = Math.min((smHandFrameCount / 10) * 100, 100);
                if (smHandHoldFill) smHandHoldFill.style.width = `${holdPct}%`;

                // Anti-Duplicate Stabilization Lock (Requires 10 held frames & pose change)
                if (smHandFrameCount >= 10 && bestLetter !== smLastCommittedLetter) {
                    smLastCommittedLetter = bestLetter;
                    if (silentModeType === 'HYBRID' || silentModeType === 'HAND') {
                        commitSilentModeCharacter(bestLetter, 'HAND');
                    }
                }
            }
            return;
        }

        // Standard Sign Lab & Practice Single Target Pose Comparison
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

        if (smHandStatusBadge) {
            smHandStatusBadge.textContent = isDetected ? 'HAND READY' : 'NO HAND';
            smHandStatusBadge.className = `sticker-badge ${isDetected ? 'badge-yellow' : 'badge-coral'}`;
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
            smHandFrameCount = 0;
            smLastCommittedLetter = '';
            if (smHandHoldFill) smHandHoldFill.style.width = '0%';
            if (smHandDetectedLetter) smHandDetectedLetter.textContent = '--';
            if (smHandMatchScore) smHandMatchScore.textContent = 'MATCH: 0%';

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
