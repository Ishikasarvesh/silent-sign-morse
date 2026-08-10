/**
 * SILENT — Neo-Brutalist Laboratory Instrument
 * Phase 4 Controller: SILENT Sign Language Lab & MediaPipe Vision Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------
    // 1. ASL Reference Sign Database & Target Pose Specifications
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

    // Normalized Target Finger Configurations for A-Z
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

    // ----------------------------------------------------------
    // 2. DOM References
    // ----------------------------------------------------------
    const viewHome = document.getElementById('view-home');
    const viewSignLab = document.getElementById('view-sign-lab');

    const navBtnHome = document.getElementById('nav-btn-home');
    const navBtnSignLab = document.getElementById('nav-btn-sign-lab');
    const navBtnMorseLab = document.getElementById('nav-btn-morse-lab');
    const navBtnProgress = document.getElementById('nav-btn-progress');
    const logoHomeLink = document.getElementById('logo-home-link');
    const btnReturnHome = document.getElementById('btn-return-home');

    const heroBtnExplore = document.getElementById('hero-btn-explore');
    const btnHomeStartSign = document.getElementById('btn-home-start-sign');
    const btnHomeStartMorse = document.getElementById('btn-home-start-morse');
    const cardSignLanguage = document.getElementById('card-sign-language');
    const cardMorseCode = document.getElementById('card-morse-code');

    const headerSecIndicator = document.getElementById('header-sec-indicator');
    const cameraStatusText = document.getElementById('camera-status-text');

    // A-Z Selector & Reference Card
    const alphabetGrid = document.getElementById('alphabet-selector-grid');
    const targetLetterBadge = document.getElementById('target-letter-badge');
    const refSignImage = document.getElementById('ref-sign-image');
    const refSignFallback = document.getElementById('ref-sign-fallback');
    const fallbackPathText = document.getElementById('fallback-path-text');
    const refSignTitle = document.getElementById('ref-sign-title');
    const refSignDesc = document.getElementById('ref-sign-desc');
    const btnPrevLetter = document.getElementById('btn-prev-letter');
    const btnNextLetter = document.getElementById('btn-next-letter');

    // Camera & MediaPipe Elements
    const videoElement = document.getElementById('webcam-video');
    const canvasElement = document.getElementById('landmark-canvas');
    const canvasCtx = canvasElement ? canvasElement.getContext('2d') : null;

    const cameraLoadingPanel = document.getElementById('camera-loading-panel');
    const cameraErrorPanel = document.getElementById('camera-error-panel');
    const btnRetryCamera = document.getElementById('btn-retry-camera');
    const errorBadge = document.getElementById('error-badge');
    const errorTitle = document.getElementById('error-title');
    const errorDesc = document.getElementById('error-desc');

    // Status Indicators
    const handStatusBadge = document.getElementById('hand-status-badge');
    const handsCountLabel = document.getElementById('hands-count-label');
    const trackingStateDot = document.getElementById('tracking-state-dot');
    const trackingStateText = document.getElementById('tracking-state-text');
    const cameraMatchScore = document.getElementById('camera-match-score');

    // Finger Analysis Readouts
    const valThumb = document.getElementById('val-thumb');
    const valIndex = document.getElementById('val-index');
    const valMiddle = document.getElementById('val-middle');
    const valRing = document.getElementById('val-ring');
    const valPinky = document.getElementById('val-pinky');

    // Modals
    const placeholderModal = document.getElementById('placeholder-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalActionBtn = document.getElementById('modal-action-btn');

    // ----------------------------------------------------------
    // 3. View Switcher Engine
    // ----------------------------------------------------------
    function switchView(targetView) {
        if (targetView === 'sign-lab') {
            if (viewHome) viewHome.classList.remove('active');
            if (viewSignLab) viewSignLab.classList.add('active');

            if (navBtnHome) navBtnHome.classList.remove('active');
            if (navBtnSignLab) navBtnSignLab.classList.add('active');

            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: SIGN LAB';
            if (cameraStatusText) cameraStatusText.textContent = 'VISION ENGINE ACTIVE';

            initCameraAndMediaPipe();
        } else {
            if (viewSignLab) viewSignLab.classList.remove('active');
            if (viewHome) viewHome.classList.add('active');

            if (navBtnSignLab) navBtnSignLab.classList.remove('active');
            if (navBtnHome) navBtnHome.classList.add('active');

            if (headerSecIndicator) headerSecIndicator.textContent = 'SEC: HOME';
            if (cameraStatusText) cameraStatusText.textContent = 'CAMERA-POWERED';

            stopWebcamStream();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (navBtnHome) navBtnHome.addEventListener('click', () => switchView('home'));
    if (navBtnSignLab) navBtnSignLab.addEventListener('click', () => switchView('sign-lab'));
    if (logoHomeLink) logoHomeLink.addEventListener('click', (e) => { e.preventDefault(); switchView('home'); });
    if (btnReturnHome) btnReturnHome.addEventListener('click', () => switchView('home'));

    if (heroBtnExplore) heroBtnExplore.addEventListener('click', () => switchView('sign-lab'));
    if (btnHomeStartSign) btnHomeStartSign.addEventListener('click', () => switchView('sign-lab'));
    if (cardSignLanguage) cardSignLanguage.addEventListener('click', () => switchView('sign-lab'));

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

    if (btnHomeStartMorse) btnHomeStartMorse.addEventListener('click', (e) => { e.stopPropagation(); openPlaceholderModal('Morse Code Lab', '👁', 'Morse Code Lab blink detection is scheduled for Phase 5. Sign Language Lab is live now!'); });
    if (cardMorseCode) cardMorseCode.addEventListener('click', () => openPlaceholderModal('Morse Code Lab', '👁', 'Morse Code Lab blink detection is scheduled for Phase 5. Sign Language Lab is live now!'));
    if (navBtnMorseLab) navBtnMorseLab.addEventListener('click', () => openPlaceholderModal('Morse Code Lab', '👁', 'Morse Code Lab blink detection is scheduled for Phase 5. Sign Language Lab is live now!'));
    if (navBtnProgress) navBtnProgress.addEventListener('click', () => openPlaceholderModal('Progress Dashboard', '📊', 'Progress Dashboard telemetry analytics will be active in future phases!'));

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePlaceholderModal);
    if (modalActionBtn) modalActionBtn.addEventListener('click', closePlaceholderModal);

    // ----------------------------------------------------------
    // 4. A-Z Letter Selector & Reference Card Controller
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

        // Update active letter button styles
        const letterBtns = document.querySelectorAll('.letter-btn');
        letterBtns.forEach(btn => {
            if (btn.textContent === letter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Target Badge & Text
        if (targetLetterBadge) targetLetterBadge.textContent = `TARGET: ${letter}`;

        const info = aslAlphabet[letter];
        if (refSignTitle) refSignTitle.textContent = info.title + ":";
        if (refSignDesc) refSignDesc.textContent = info.desc;

        // Update ASL Reference JPG Image
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

    // ----------------------------------------------------------
    // 5. MediaPipe Vision & Hand Tracking Engine Pipeline
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
            // 1. Request Webcam Stream
            if (!webcamStream) {
                webcamStream = await navigator.mediaDevices.getUserMedia({
                    video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" },
                    audio: false
                });

                if (videoElement) {
                    videoElement.srcObject = webcamStream;
                    await videoElement.play();
                }
            }

            // 2. Initialize MediaPipe Hands Library
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

            // 3. Hide loading panel and start detection frame pump
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

        if (videoElement) {
            videoElement.srcObject = null;
        }

        isSendingFrame = false;
        engineInitialized = false;

        if (cameraLoadingPanel) cameraLoadingPanel.classList.add('hidden');
        updateHandDetectionState(false, 0);
    }

    // Single requestAnimationFrame Detection Loop
    function startDetectionLoop() {
        if (animFrameId) cancelAnimationFrame(animFrameId);

        async function processFrame() {
            if (videoElement && !videoElement.paused && !videoElement.ended && videoElement.readyState >= 2) {
                if (!isSendingFrame && handsEngine && engineInitialized) {
                    isSendingFrame = true;
                    try {
                        await handsEngine.send({ image: videoElement });
                    } catch (e) {
                        console.warn('Frame processing exception:', e);
                    } finally {
                        isSendingFrame = false;
                    }
                }
            }

            if (webcamStream && viewSignLab && viewSignLab.classList.contains('active')) {
                animFrameId = requestAnimationFrame(processFrame);
            }
        }

        animFrameId = requestAnimationFrame(processFrame);
    }

    // MediaPipe Skeleton Connections Map
    const HAND_CONNECTIONS = [
        [0, 1], [1, 2], [2, 3], [3, 4],        // Thumb
        [0, 5], [5, 6], [6, 7], [7, 8],        // Index
        [5, 9], [9, 10], [10, 11], [11, 12],   // Middle
        [9, 13], [13, 14], [14, 15], [15, 16], // Ring
        [13, 17], [17, 18], [18, 19], [19, 20], // Pinky
        [0, 17]                                // Palm Base
    ];

    function onHandResults(results) {
        if (!canvasElement || !canvasCtx) return;

        // Ensure canvas dimensions match live video viewport
        canvasElement.width = canvasElement.clientWidth || 640;
        canvasElement.height = canvasElement.clientHeight || 480;

        const width = canvasElement.width;
        const height = canvasElement.height;

        canvasCtx.clearRect(0, 0, width, height);

        const multiHandLandmarks = results.multiHandLandmarks;

        if (multiHandLandmarks && multiHandLandmarks.length > 0) {
            const count = multiHandLandmarks.length;
            updateHandDetectionState(true, count);

            multiHandLandmarks.forEach(landmarks => {
                drawBrutalistHandSkeleton(landmarks, width, height);
                analyzeFingerLandmarksNormalized(landmarks);
            });
        } else {
            updateHandDetectionState(false, 0);
        }
    }

    // Neo-Brutalist Hand Skeleton Renderer
    function drawBrutalistHandSkeleton(landmarks, width, height) {
        // 1. Draw Skeleton Lines
        canvasCtx.strokeStyle = '#ea4a51';
        canvasCtx.lineWidth = 3;

        HAND_CONNECTIONS.forEach(([i, j]) => {
            const pt1 = landmarks[i];
            const pt2 = landmarks[j];

            canvasCtx.beginPath();
            canvasCtx.moveTo(pt1.x * width, pt1.y * height);
            canvasCtx.lineTo(pt2.x * width, pt2.y * height);
            canvasCtx.stroke();
        });

        // 2. Draw Landmark Joints
        landmarks.forEach((pt, index) => {
            const x = pt.x * width;
            const y = pt.y * height;

            const isTip = [4, 8, 12, 16, 20].includes(index);

            canvasCtx.fillStyle = isTip ? '#facc15' : '#ffffff';
            canvasCtx.strokeStyle = '#000000';
            canvasCtx.lineWidth = 2;

            canvasCtx.beginPath();
            canvasCtx.arc(x, y, isTip ? 6 : 4, 0, 2 * Math.PI);
            canvasCtx.fill();
            canvasCtx.stroke();
        });
    }

    // ----------------------------------------------------------
    // 6. Normalized 3D Gesture & Rotation-Invariant Scoring Engine
    // ----------------------------------------------------------
    function analyzeFingerLandmarksNormalized(landmarks) {
        // 1. Calculate Rotation & Scale Invariant 3D Joint Distances
        // Wrist = Landmark 0, Middle MCP = Landmark 9
        const wrist = landmarks[0];
        const middleMCP = landmarks[9];

        const handScale = Math.hypot(
            middleMCP.x - wrist.x,
            middleMCP.y - wrist.y,
            (middleMCP.z || 0) - (wrist.z || 0)
        ) || 0.1;

        // Distance from Wrist to Tip vs PIP joint (Rotation-Invariant)
        const getExtensionRatio = (tipIdx, pipIdx) => {
            const tipDist = Math.hypot(landmarks[tipIdx].x - wrist.x, landmarks[tipIdx].y - wrist.y, (landmarks[tipIdx].z || 0) - (wrist.z || 0));
            const pipDist = Math.hypot(landmarks[pipIdx].x - wrist.x, landmarks[pipIdx].y - wrist.y, (landmarks[pipIdx].z || 0) - (wrist.z || 0));
            return tipDist / (pipDist || 0.001);
        };

        const indexExtended = getExtensionRatio(8, 6) > 1.12;
        const middleExtended = getExtensionRatio(12, 10) > 1.12;
        const ringExtended = getExtensionRatio(16, 14) > 1.12;
        const pinkyExtended = getExtensionRatio(20, 18) > 1.12;

        // Thumb extension relative to palm width
        const thumbTip = landmarks[4];
        const indexMCP = landmarks[5];
        const pinkyMCP = landmarks[17];

        const thumbDistIndex = Math.hypot(thumbTip.x - indexMCP.x, thumbTip.y - indexMCP.y);
        const thumbDistPinky = Math.hypot(thumbTip.x - pinkyMCP.x, thumbTip.y - pinkyMCP.y);
        
        // Thumb is EXTENDED if away from both Index MCP and Pinky MCP
        const thumbExtended = (thumbDistIndex / handScale) > 0.82 && (thumbDistPinky / handScale) > 0.95;

        const currentFingers = {
            thumb: thumbExtended ? 'EXTENDED' : 'CURLED',
            index: indexExtended ? 'EXTENDED' : 'CURLED',
            middle: middleExtended ? 'EXTENDED' : 'CURLED',
            ring: ringExtended ? 'EXTENDED' : 'CURLED',
            pinky: pinkyExtended ? 'EXTENDED' : 'CURLED'
        };

        // 2. Fetch expected pose for current selected target letter
        const targetPose = aslTargetPoses[selectedLetter] || aslTargetPoses['A'];

        // 3. Compute Finger Match Count (Unified Detection Logic)
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

        // 4. Update UI Finger Readout Chips with Match Badges
        updateFingerPill(valThumb, currentFingers.thumb, matches.thumb);
        updateFingerPill(valIndex, currentFingers.index, matches.index);
        updateFingerPill(valMiddle, currentFingers.middle, matches.middle);
        updateFingerPill(valRing, currentFingers.ring, matches.ring);
        updateFingerPill(valPinky, currentFingers.pinky, matches.pinky);

        // 5. Calculate Normalized Match Score (90% - 98% when 5/5 fingers match)
        if (cameraMatchScore) {
            const baseMatchScore = matchedFingersCount * 18; // 5 * 18 = 90%
            let alignmentBonus = 0;

            if (matchedFingersCount === 5) {
                alignmentBonus = 6 + Math.floor(Math.random() * 3); // 96-98%
            } else if (matchedFingersCount === 4) {
                alignmentBonus = 4; // 76%
            } else {
                alignmentBonus = 0;
            }

            const finalScore = Math.min(baseMatchScore + alignmentBonus, 98);
            cameraMatchScore.textContent = `MATCH: ${finalScore}%`;
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
            if (cameraMatchScore) cameraMatchScore.textContent = 'MATCH: --%';
        }
    }
});
