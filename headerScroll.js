function setupHeaderScroll() {
    const findHeader = () => document.querySelector('.header, header');
    const header = findHeader();

    if (!header) {
        const observer = new MutationObserver(() => {
            const readyHeader = findHeader();
            if (readyHeader) {
                observer.disconnect();
                setupHeaderScroll();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
        return;
    }

    if (header.dataset.scrollBound === 'true') {
        header.classList.toggle('scrolled', window.scrollY > 20);
        return;
    }

    const updateHeaderState = () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
    };

    header.dataset.scrollBound = 'true';
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
}

function setupMobileMenu() {
    const header = document.querySelector('.header');
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!header || !toggle || !navLinks) return;

    if (toggle.dataset.bound === 'true') return;
    toggle.dataset.bound = 'true';

    toggle.addEventListener('click', () => {
        const isOpen = header.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

