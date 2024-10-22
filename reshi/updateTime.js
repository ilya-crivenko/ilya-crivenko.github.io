// Возможные значения времени
const timeValues = [1, 2, 3, 5, 10, 15];
let currentValue = 1; // Начальное значение

// Функция для обновления значения времени
function updateTimeControl() {
    const timeValueElement = document.getElementById("training_time");

    // Функция для обновления текстового значения в элементе
    function updateTimeValue(newValue) {
        // Обновляем только число внутри time-value
        timeValueElement.firstChild.textContent = `${newValue} `;
    }

    // Кнопка увеличения
    document.getElementById("training_btn_inc").addEventListener("click", function () {
        const currentIndex = timeValues.indexOf(currentValue);
        if (currentIndex < timeValues.length - 1) {
            currentValue = timeValues[currentIndex + 1];
            updateTimeValue(currentValue);
        }
    });

    // Кнопка уменьшения
    document.getElementById("training_btn_dec").addEventListener("click", function () {
        const currentIndex = timeValues.indexOf(currentValue);
        if (currentIndex > 0) {
            currentValue = timeValues[currentIndex - 1];
            updateTimeValue(currentValue);
        }
    });
}

// Функция для получения текущего значения времени
function getCurrentTrainingTime() {
    return currentValue;
}

// Инициализация функций при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    updateTimeControl(); // Инициализация кнопок управления временем
});
