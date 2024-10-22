// Скрипт для масштабирования 
function updateScale() {
    const container = document.querySelector('.container');

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Поддерживаем пропорции исходного изображения
    const containerWidth = 715;  // Исходная ширина
    const containerHeight = 896; // Исходная высота

    // Масштабируем контейнер пропорционально размеру окна
    const scaleWidth = windowWidth / containerWidth;
    const scaleHeight = windowHeight / containerHeight;
    const scale = Math.min(scaleWidth, scaleHeight); // Масштабирование по минимальному измерению
    document.documentElement.style.setProperty('--scale', scale);

    container.style.width = `${containerWidth * scale}px`;
    container.style.height = `${containerHeight * scale}px`;

    // Обновляем ширину шрифтов и элементов на основе ширины контейнера
    const fontSizeFactor = containerWidth * scale;
    document.documentElement.style.setProperty('--font-size-factor', fontSizeFactor + 'px');
}

window.addEventListener('resize', updateScale);
window.addEventListener('load', updateScale);