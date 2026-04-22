async function loadPage(pageUrl, element) {
    const contentArea = document.getElementById('content');

    // UI Feedback: Update active link
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    if (element) element.classList.add('active');

    try {
        contentArea.style.opacity = '0'; // Smooth transition

        const response = await fetch(pageUrl);
        if (!response.ok) throw new Error('Page not found');

        const html = await response.text();

        // Set content and trigger animation
        contentArea.innerHTML = html;
        contentArea.classList.remove('fade-in');
        void contentArea.offsetWidth; // Trigger reflow
        contentArea.classList.add('fade-in');
        contentArea.style.opacity = '1';

        window.scrollTo(0, 0);
    } catch (error) {
        contentArea.innerHTML = `<h1>Error</h1><p>Could not load ${pageUrl}. Ensure the file exists in the same folder.</p>`;
        contentArea.style.opacity = '1';
    }
}

function toggleCategory(btn) {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const items = btn.nextElementSibling;
    if (expanded) {
        items.style.maxHeight = '0';
        items.style.opacity = '0';
    } else {
        items.style.maxHeight = items.scrollHeight + 'px';
        items.style.opacity = '1';
    }
}

const d = new Date();
const formatted = d.toISOString().slice(0, 10);
document.getElementById('last-sync').textContent = 'LAST SYNC: ' + formatted + ' UTC';

// Load default page on start
window.onload = () => loadPage('../docs/overview.html');