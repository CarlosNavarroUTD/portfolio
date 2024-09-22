document.addEventListener('DOMContentLoaded', (event) => {
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const statItems = entry.target.querySelectorAll('.stat-item span');
                statItems.forEach((item) => {
                    const finalValue = parseInt(item.getAttribute('data-value'));
                    animateValue(item, 0, finalValue, 2000);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('#sobre-mi .stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});