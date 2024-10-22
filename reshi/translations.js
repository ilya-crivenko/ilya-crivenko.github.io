// translations.js

const translations = {
    "ru": {
        "title": "Таблица yмножения",
        "subtitle": "Лyчший тренажер!",
        "choose_table": "Умножение на:",
        "all_table": "Вся таблица",
        "training_time": "Время тренировки",
        "answer_time": "Время на ответ",
        "correct_answers": "Правильных ответов:",
        "your_grade": "Твоя оценка:",
        "close_button": "Закрыть",
        "encouragement1": "Великолепно!",
        "encouragement2": "Молодец!",
        "encouragement3": "Хорошо!",
        "encouragement4": "Старайся!",
        "score_format": "из",
        "mesure_min": "мин",
        "mesure_sec": "сек"
    },
    "en": {
        "title": "Multiplication Table",
        "subtitle": "The Best Trainer!",
        "choose_table": "Multiply by:",
        "all_table": "All Tables",
        "training_time": "Training Time",
        "answer_time": "Answer Time",
        "correct_answers": "Correct Answers:",
        "your_grade": "Your Grade:",
        "close_button": "Close",
        "encouragement1": "Fabulous!",
        "encouragement2": "Well done!",
        "encouragement3": "Fine!",
        "encouragement4": "Keep Trying!",
        "score_format": "out of",
        "mesure_min": "min",
        "mesure_sec": "sec"
    }
};
let langData;
let userLang;

function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('en') ? 'en' : 'ru';  // Если язык английский, возвращаем 'en', иначе 'ru'
}

function translatePage() {
    userLang = getBrowserLanguage();
    langData = translations[userLang];  // Получаем нужные переводы

    // Применяем переводы к элементам страницы
    document.querySelector('.title').innerText = langData["title"];
    document.querySelector('.subtitle').innerText = langData["subtitle"];
    document.querySelector('.choose-table-title').innerText = langData["choose_table"];
    document.querySelector('.choose-all-btn').innerHTML = langData["all_table"];
    document.querySelector('.resultTitle').innerText = langData["encouragement1"];
    document.querySelector('.result-text').innerText = langData["correct_answers"];
    document.getElementById('your_mark').innerText = langData["your_grade"];
    document.querySelector('.close-btn span').innerText = langData["close_button"];
    document.getElementById('training_time_txt').innerText = langData["training_time"];
    document.getElementById('answer_time_txt').innerText = langData["answer_time"];
    document.getElementById('mesure_min').innerText = langData["mesure_min"];
    document.getElementById('mesure_sec').innerText = langData["mesure_sec"];

    // Если на странице есть элементы с оценкой или счетом
    const resultScore = document.getElementById('result-score').innerText;
    document.getElementById('result-score').innerText = resultScore.replace('из', langData['score_format']);
}

// Инициализация перевода при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    translatePage();
});

