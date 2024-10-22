let currentNumber;
let correctAnswers = 0;
let wrongAnswers = 0;
let totalQuestions = 10;
let timer;
let timeLeft = 500;

function startGame(number) {
    currentNumber = number;
    correctAnswers = 0;
    wrongAnswers = 0;
    timeLeft = 500;
    document.getElementById("progressBar").value = 0;
    // document.getElementById("progressBar").style.background = ""; // Сброс цвета
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("feedback").innerText = '';
    nextQuestion();

    timer = setInterval(updateTimer, 1000);
}

function nextQuestion() {
    const multiplier = Math.floor(Math.random() * 10) + 1; // Случайное число от 1 до 10
    document.getElementById("question").innerText = 'Сколько будет ' + currentNumber + ' x ' + multiplier + '?';
}

function checkAnswer() {
    const answer = parseInt(document.getElementById("answer").value);
    const multiplier = parseInt(document.getElementById("question").innerText.split(' ')[4]);

    if (answer === currentNumber * multiplier) {
        document.getElementById("correctSound").play();
        correctAnswers++;
        document.getElementById("feedback").innerText = "Правильно!";

        // Заполняем прогресс-бар зеленым
        fillProgressBar(true);

    } else {
        document.getElementById("wrongSound").play();
        wrongAnswers++;
        document.getElementById("feedback").innerText = "Неправильно! Правильный ответ: " + (currentNumber * multiplier) + ". Попробуйте снова!";

        // Заполняем прогресс-бар красным
        fillProgressBar(false);
    }

    if (correctAnswers + wrongAnswers < totalQuestions) {
        nextQuestion();
    } else {
        endGame(true);
    }

    document.getElementById("answer").value = '';
}

function fillProgressBar(isCorrect) {
    const progressBar = document.getElementById("progressBar");

    // Устанавливаем цвет прогресс-бара в зависимости от ответа
    if (isCorrect) {
        progressBar.style.background = 'red'; // Зеленый для правильного ответа
    } else {
        progressBar.style.background = 'red'; // Красный для неправильного ответа
    }

    // Увеличиваем значение прогресс-бара
    progressBar.value = correctAnswers + wrongAnswers;
}

function updateTimer() {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;
    if (timeLeft <= 0) {
        endGame(false);
    }
}

function endGame(success) {
    clearInterval(timer);

    if (success) {
        alert('Игра окончена! Вы ответили правильно на ' + correctAnswers + ' вопросов.');
    } else {
        alert("Время вышло! Игра окончена.");
    }

    document.getElementById("game").classList.add("hidden");
}