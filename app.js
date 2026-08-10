/**
 * SILENT — Neo-Brutalist Laboratory Instrument
 * Core Global Components Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------
    // 1. ModeSelectorTabs Component Controller
    // ----------------------------------------------------------
    const tabSign = document.getElementById('tab-sign');
    const tabMorse = document.getElementById('tab-morse');

    function setActiveModeTab(selectedTab, inactiveTab) {
        if (!selectedTab || !inactiveTab) return;

        selectedTab.classList.add('active');
        selectedTab.classList.remove('btn-secondary');
        selectedTab.setAttribute('aria-selected', 'true');

        inactiveTab.classList.remove('active');
        inactiveTab.classList.add('btn-secondary');
        inactiveTab.setAttribute('aria-selected', 'false');

        const modeName = selectedTab.id === 'tab-sign' ? 'HAND SIGN LANGUAGE' : 'EYES MORSE CODE';
        addConsoleLog(`Switched active laboratory mode to: ${modeName}`, 'yellow');
    }

    if (tabSign && tabMorse) {
        tabSign.addEventListener('click', () => setActiveModeTab(tabSign, tabMorse));
        tabMorse.addEventListener('click', () => setActiveModeTab(tabMorse, tabSign));
    }

    // ----------------------------------------------------------
    // 2. TerminalConsoleLog Helper Component
    // ----------------------------------------------------------
    const consoleLogContainer = document.getElementById('system-console-log');

    /**
     * Add timestamped entry to Terminal Console Log
     * @param {string} text - Message content
     * @param {string} [type='normal'] - Style variant ('yellow', 'coral', 'normal')
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

    // Demo Log Trigger Button
    const btnAddLogDemo = document.getElementById('btn-add-log-demo');
    if (btnAddLogDemo) {
        let signalCount = 1;
        btnAddLogDemo.addEventListener('click', () => {
            const types = ['normal', 'yellow', 'coral'];
            const sampleType = types[signalCount % types.length];
            addConsoleLog(`[TEST_SIGNAL_${signalCount.toString().padStart(2, '0')}] Pulse transmitted via laboratory stream.`, sampleType);
            signalCount++;
        });
    }

    // Expose global helper for future modules
    window.SILENT = window.SILENT || {};
    window.SILENT.addConsoleLog = addConsoleLog;

    // ----------------------------------------------------------
    // 3. Modal Overlay Component Controller
    // ----------------------------------------------------------
    const cardSign = document.getElementById('card-sign-language');
    const cardMorse = document.getElementById('card-morse-code');

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
            badge: 'HAND TRACKING MODULE',
            title: 'Sign Language Lab',
            description: 'The interactive hand tracking learning lab is under initialization. Real-time camera hand tracking and sign recognition will be active in the next phase!'
        },
        morse: {
            icon: '👁',
            badge: 'EYE TRACKING MODULE',
            title: 'Morse Code Lab',
            description: 'The interactive blink detection learning lab is under initialization. Real-time camera eye tracking and Morse code practice will be active in the next phase!'
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

        addConsoleLog(`Module modal opened: ${details.title}`, 'coral');

        if (modalActionBtn) modalActionBtn.focus();
    }

    function closeModal() {
        if (!modalOverlay) return;

        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
    }

    if (cardSign) {
        cardSign.addEventListener('click', () => openModal(moduleDetails.sign));
        cardSign.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(moduleDetails.sign);
            }
        });
    }

    if (cardMorse) {
        cardMorse.addEventListener('click', () => openModal(moduleDetails.morse));
        cardMorse.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(moduleDetails.morse);
            }
        });
    }

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
