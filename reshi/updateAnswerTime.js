// Возможные значения времени для ответа
const answerTimeValues = [4, 8, 15, 20, 30];
let currentAnswerTime = 8; // Начальное значение (4 секунды)

// Функция для обновления значения времени ответа
function updateAnswerTimeValue(increment) {
    const timeValueElement = document.getElementById("answer_time");
    const currentIndex = answerTimeValues.indexOf(currentAnswerTime);

    // Увеличение или уменьшение значения в зависимости от аргумента increment
    if (increment && currentIndex < answerTimeValues.length - 1) {
        currentAnswerTime = answerTimeValues[currentIndex + 1];
    } else if (!increment && currentIndex > 0) {
        currentAnswerTime = answerTimeValues[currentIndex - 1];
    }

    // Обновляем значение в элементе
    timeValueElement.firstChild.textContent = `${currentAnswerTime} `;
}

// Функция для получения текущего значения времени ответа
function getCurrentAnswerTime() {
    return currentAnswerTime * 1000; // Возвращаем значение в миллисекундах
}
