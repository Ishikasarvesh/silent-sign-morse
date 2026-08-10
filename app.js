/**
 * SILENT — Interactive Communication Hub
 * Client Application Controller (Home Page Initial Version)
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Element References
    const cardSign = document.getElementById('card-sign-language');
    const cardMorse = document.getElementById('card-morse-code');

    const modalOverlay = document.getElementById('placeholder-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalActionBtn = document.getElementById('modal-action-btn');
    
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalBadge = document.getElementById('modal-badge');

    // Module Content Data for Coming Soon / Placeholder Modal
    const moduleDetails = {
        sign: {
            theme: 'sign',
            icon: '🤟',
            badge: 'HAND TRACKING MODULE',
            title: 'Sign Language Lab',
            description: 'The interactive hand tracking learning lab is under initialization. Real-time camera hand tracking and sign recognition will be active in the next phase!'
        },
        morse: {
            theme: 'morse',
            icon: '👁',
            badge: 'EYE TRACKING MODULE',
            title: 'Morse Code Lab',
            description: 'The interactive blink detection learning lab is under initialization. Real-time camera eye tracking and Morse code practice will be active in the next phase!'
        }
    };

    /**
     * Open Modal with custom module content
     * @param {Object} details 
     */
    function openModal(details) {
        if (!modalOverlay) return;

        modalOverlay.setAttribute('data-theme', details.theme);
        modalIcon.textContent = details.icon;
        modalBadge.textContent = details.badge;
        modalTitle.textContent = details.title;
        modalDescription.textContent = details.description;

        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');

        // Trap focus inside modal button
        modalActionBtn.focus();
    }

    /**
     * Close Modal
     */
    function closeModal() {
        if (!modalOverlay) return;

        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
    }

    // Card Event Listeners
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

    // Modal Dismiss Listeners
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalActionBtn) {
        modalActionBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});
