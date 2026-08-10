# ⚡ SILENT — Sign Language Lab & Morse Code Laboratory

> **Silent Communication Training Instrument & Ocular Telegraphy Engine**  
> A web application built with a Neo-Brutalist design language, real-time MediaPipe hand gesture recognition, eye aspect ratio (EAR) blink telegraphy, unified hands-free message composition, interactive evaluation quizzes, and persistent progress analytics.

---

## 📖 Overview & What SILENT Does

**SILENT** is an interactive, browser-based web application designed to enable non-verbal communication training and accessibility testing through computer vision. It allows users to:

1. **Learn & Practice American Sign Language (ASL)**: Perform A–Z hand signs in front of a webcam with real-time 21-landmark skeletal overlay and normalized target matching.
2. **Master Morse Code via Eye Blinking**: Send Morse dots (`.`) and dashes (`-`) using physical eye blinks tracked via webcam Eye Aspect Ratio (EAR) auto-calibration.
3. **Compose Hands-Free Messages (SILENT MODE)**: Combine hand signs and eye blinks into real-time text strings with an anti-duplicate stabilization lock, command buffers (`SPACE`, `BACKSPACE`, `UNDO`, `CLEAR`), and terminal transmission logging.
4. **Evaluate Knowledge**: Test ASL and Morse skills with a 10-question evaluation engine featuring 4 unique choices and instant feedback.
5. **Track Progress**: Monitor completion metrics across ASL signs, Morse characters, quiz scores, and unlocked achievements with persistent `localStorage`.

---

## ✨ Key Features

- **Real-Time ASL Recognition**: 21 3D hand landmarks via MediaPipe Hands, scoring target gestures against reference finger extension rules.
- **Ocular Telegraphy (Blink Morse)**: 468 3D facial landmarks via MediaPipe Face Mesh, calculating EAR across left/right eye contours. Includes 2-second auto-calibration, EAR smoothing filter, and multi-frame debouncing (guaranteeing 1 physical blink = 1 Morse signal).
- **Unified Silent Mode**: Dual-engine pipeline supporting **HYBRID** (Hand + Blink), **HAND SIGNS ONLY**, and **MORSE BLINKS ONLY** communication modes.
- **Interactive Evaluation Quiz**: 10-question quiz engine supporting Mixed, Sign Language, and Morse Code categories with random distractors and answer locking.
- **Persistent Analytics Dashboard**: Tracks ASL/Morse completion, quiz scores, Silent Mode telemetry, and 8 unlockable achievements with browser persistence and a two-step confirmation progress reset.
- **Neo-Brutalist UI/UX System**: Warm ivory background (`#FAF6EE`), black typography (`#000000`), bold accents (Coral `#ea4a51`, Yellow `#facc15`, Peach `#ffdad8`), 4px solid borders, 6px hard drop shadows, and 0px border radius.
- **Accessible & Responsive**: Keyboard navigation (`:focus-visible` ring indicators), screen reader support, and responsive layouts across Desktop (`1920x1080`), Laptop (`1366x768`), Tablet (`1024x768`), and Mobile (`390x844`).

---

## 🛠️ Technology Stack

- **Core Application**: HTML5 (Semantic Markup), Vanilla JavaScript (ES6+ App Architecture)
- **Styling**: Vanilla CSS3 (Custom Properties / Neo-Brutalist Design System)
- **Computer Vision & Tracking**:
  - [MediaPipe Hands](https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js) (21 3D Hand Landmarks)
  - [MediaPipe Face Mesh](https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js) (468 3D Facial Landmarks)
  - [MediaPipe Camera Utils](https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js) (Webcam Stream Acquisition)
- **Typography**: Google Fonts (*Bricolage Grotesque*, *Work Sans*, *Space Mono*)
- **Storage**: Browser `localStorage` API

---

## 📁 Project Structure

```text
SILENT/
├── index.html          # Main HTML structure, 8 view routes, header, footer & modals
├── style.css           # Neo-Brutalist design tokens, utility classes & responsive rules
├── app.js              # Core application logic, routers, camera engine & tracking loops
├── assets/
│   └── signs/          # 26 reference images (A.jpg through Z.jpg) for ASL signs
├── .gitignore          # Git exclusion rules
├── content.md          # Phase 13 completion report & release documentation
└── README.md           # Project documentation and setup guide
```

---

## 🚀 How to Run Locally

Because SILENT relies on native browser APIs (`getUserMedia` webcam feed and MediaPipe WebAssembly CDN modules), no build step or node package installation is required!

### Option 1: Direct File / Static Server
1. Clone or download this repository.
2. Open `index.html` directly in a modern web browser (Google Chrome, Microsoft Edge, or Firefox).

### Option 2: Local HTTP Server (Recommended for Camera Permissions)
Using Node.js static server or Python:
```bash
# Using npx serve
npx serve .

# Or using Python 3
python -m http.server 8000
```
Open `http://localhost:8000` or `http://localhost:3000` in your browser.

---

## 📹 Camera & MediaPipe Tracking Mechanics

### 1. ASL Hand Tracking Engine
- **Model**: MediaPipe Hands (`maxNumHands: 1`, `minDetectionConfidence: 0.7`, `minTrackingConfidence: 0.7`).
- **Landmarks**: Extracts 21 3D points per hand. Evaluates relative y-coordinates between fingertips (IDs 4, 8, 12, 16, 20) and knuckle joints (MCP/PIP) to determine `EXTENDED` vs `CURLED` states for each finger.
- **Scoring**: Compares real-time finger states against predefined A–Z target pose vectors. Matching 5 fingers grants base score (90%) plus alignment bonus up to 98%. Reaching ≥90% records sign completion.

### 2. Ocular Telegraphy (Morse Eye Tracking Engine)
- **Model**: MediaPipe Face Mesh (`maxNumFaces: 1`, `refineLandmarks: true`).
- **EAR Calculation**: Measures Eye Aspect Ratio (EAR) across left eye (indices 33, 133, 160, 158, 144, 153) and right eye (indices 263, 362, 385, 387, 380, 373):
  $$\text{EAR} = \frac{\|p_{top1} - p_{bot1}\| + \|p_{top2} - p_{bot2}\|}{2 \cdot \|p_{outer} - p_{inner}\|}$$
- **Auto-Calibration**: Collects baseline EAR samples over 2 seconds upon view entry and sets threshold: `earThreshold = baseline * 0.70`.
- **Blink Debouncing**: Requires eyes to stay closed for $\ge 2$ consecutive frames and open for $\ge 2$ consecutive frames with a 250ms cooldown.
  - Duration < 400ms $\rightarrow$ **DOT** (`.`)
  - Duration $\ge$ 400ms $\rightarrow$ **DASH** (`-`)

### 3. SILENT MODE Pipeline
- Runs dual MediaPipe tracking on a shared webcam stream.
- Emits detected hand gestures or Morse blink sequences to a character buffer.
- Features an anti-duplicate stabilization lock requiring 10 sustained frames before committing a gesture character.

---

## 📋 Completed Project Phases

- [x] **Phase 1**: Core Architecture & Neo-Brutalist Layout Foundation
- [x] **Phase 2**: Terminal Header, Brand Logo & Main View Switcher Routing
- [x] **Phase 3**: Neo-Brutalist Landing Page & Instrument Hub
- [x] **Phase 4**: ASL Sign Lab View & Reference Cards
- [x] **Phase 5**: Real-Time MediaPipe Hand Skeleton Overlay & Finger Tracking
- [x] **Phase 6**: ASL Practice Mode, Target Scoring & Finger Checklist
- [x] **Phase 7**: Morse Code Laboratory & Telecommunication Keypad
- [x] **Phase 8**: MediaPipe Face Mesh Integration & Auto-Calibrated EAR Engine
- [x] **Phase 9**: Blink Telegraphy & Real-Time Eye Morse Classifier
- [x] **Phase 10**: SILENT MODE — Unified Hands-Free Communication Engine
- [x] **Phase 11**: Dynamic Quiz Generator & Evaluation Engine
- [x] **Phase 12**: Progress Dashboard, Telemetry Analytics & LocalStorage Persistence
- [x] **Phase 13**: Final Full Testing, Polish, Cleanup & Git Release (v1.0)

---

## 🔒 Permissions & Security Requirements

- **Camera Permission (`getUserMedia`)**: Required for webcam-based hand tracking and eye aspect ratio analysis in Sign Lab, Sign Practice, Morse Lab, Morse Practice, and Silent Mode.
- All computer vision inferencing occurs **100% locally** in the browser via WebAssembly. No video feed or personal data is transmitted to external servers.

---

## 🔮 Future Improvements

- Support for 2-handed ASL gestures (J, Z movement tracking).
- Expanded dictionary for whole-word ASL signs and common phrases.
- Custom EAR threshold presets for low-light environments.
- Audio synthesis (Text-to-Speech) for transmitted SILENT MODE messages.

---

## 🙏 Credits & Acknowledgments

- **Google MediaPipe**: Real-time Machine Learning solutions for mobile and web.
- **Google Fonts**: *Bricolage Grotesque*, *Work Sans*, and *Space Mono*.
