// Аккордеон: при клике на карточку закрываем все остальные
function toggleCard(card) {
    const isActive = card.classList.contains('active');
    document.querySelectorAll('.feature-card').forEach(c => c.classList.remove('active'));
    if (!isActive) {
        card.classList.add('active');
    }
}

// Эффект свечения, следующего за курсором
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});
