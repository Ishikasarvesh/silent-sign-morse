/**
 * SILENT — Neo-Brutalist Laboratory Instrument
 * Phase 3 Controller: SILENT Home / Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------
    // 1. Navigation & Active Link Handler
    // ----------------------------------------------------------
    const navLinks = document.querySelectorAll('.header-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ----------------------------------------------------------
    // 2. TerminalConsoleLog Logging Engine
    // ----------------------------------------------------------
    const consoleLogContainer = document.getElementById('system-console-log');

    /**
     * Add timestamped entry to Terminal Console Log
     * @param {string} text - Log text content
     * @param {string} [type='normal'] - Color variant ('yellow', 'coral', 'normal')
     */
    function addConsoleLog(text, type = 'normal') {
        if (!consoleLogContainer) return;

        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0]; // HH:MM:SS format

        const entry = document.createElement('div');
        entry.className = 'log-entry';

        const timeSpan = document.createElement('span');
        timeSpan.className = 'log-time';
        timeSpan.textContent = `[${timeStr}]`;

        const promptSpan = document.createElement('span');
        promptSpan.className = 'log-prompt';
        promptSpan.textContent = '>';

        const textSpan = document.createElement('span');
        textSpan.className = 'log-text';
        if (type === 'yellow') textSpan.classList.add('log-yellow');
        if (type === 'coral') textSpan.classList.add('log-coral');
        textSpan.textContent = text;

        entry.appendChild(timeSpan);
        entry.appendChild(promptSpan);
        entry.appendChild(textSpan);

        consoleLogContainer.appendChild(entry);
        consoleLogContainer.scrollTop = consoleLogContainer.scrollHeight;
    }

    // Ping Terminal Demo Button
    const btnAddLogDemo = document.getElementById('btn-add-log-demo');
    if (btnAddLogDemo) {
        let count = 1;
        btnAddLogDemo.addEventListener('click', () => {
            const colors = ['normal', 'yellow', 'coral'];
            const color = colors[count % colors.length];
            addConsoleLog(`[PING_${count.toString().padStart(2, '0')}] Interface standing by for module selection.`, color);
            count++;
        });
    }

    // Expose logger globally for future phases
    window.SILENT = window.SILENT || {};
    window.SILENT.addConsoleLog = addConsoleLog;

    // ----------------------------------------------------------
    // 3. Module Selection & Placeholder Route Modal
    // ----------------------------------------------------------
    const cardSign = document.getElementById('card-sign-language');
    const cardMorse = document.getElementById('card-morse-code');
    const btnStartSign = document.getElementById('btn-start-sign');
    const btnStartMorse = document.getElementById('btn-start-morse');

    const modalOverlay = document.getElementById('placeholder-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalActionBtn = document.getElementById('modal-action-btn');

    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalBadge = document.getElementById('modal-badge');

    const moduleDetails = {
        sign: {
            icon: '🤟',
            badge: 'ASL HAND TRACKING',
            title: 'Sign Language Lab',
            description: 'The interactive hand gesture learning lab is under initialization. Real-time camera tracking, landmark analysis, and sign practice will be active in the next phase!'
        },
        morse: {
            icon: '👁',
            badge: 'EYE BLINK DETECTOR',
            title: 'Morse Code Lab',
            description: 'The interactive blink detection learning lab is under initialization. Real-time camera eye tracking, Morse timing gauges, and telegraph practice will be active in the next phase!'
        }
    };

    function openModal(details) {
        if (!modalOverlay) return;

        if (modalIcon) modalIcon.textContent = details.icon;
        if (modalBadge) modalBadge.textContent = details.badge;
        if (modalTitle) modalTitle.textContent = details.title;
        if (modalDescription) modalDescription.textContent = details.description;

        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');

        addConsoleLog(`Module route selected: ${details.title}`, 'coral');

        if (modalActionBtn) modalActionBtn.focus();
    }

    function closeModal() {
        if (!modalOverlay) return;

        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
    }

    // Module 1: Sign Language Triggers
    if (cardSign) cardSign.addEventListener('click', () => openModal(moduleDetails.sign));
    if (btnStartSign) {
        btnStartSign.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(moduleDetails.sign);
        });
    }

    // Module 2: Morse Code Triggers
    if (cardMorse) cardMorse.addEventListener('click', () => openModal(moduleDetails.morse));
    if (btnStartMorse) {
        btnStartMorse.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(moduleDetails.morse);
        });
    }

    // Modal Dismiss Triggers
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalActionBtn) modalActionBtn.addEventListener('click', closeModal);

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});
