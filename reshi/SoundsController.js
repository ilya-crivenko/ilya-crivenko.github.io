// Определение всех звуков
const Sounds = {
    CLICK: 'CLICK',
    WRONG_ANSWER: 'WRONG_ANSWER',
    CORRECT_ANSWER: 'CORRECT_ANSWER',
    WINDOW_APPEAR: 'WINDOW_APPEAR',
    SUPER_GOOD: 'SUPER_GOOD',
    NORMAL_RESULT: 'NORMAL_RESULT',
    GOOD_RESULT: 'GOOD_RESULT',
    CLICK2: 'CLICK2',
    BAD_RESULT: 'BAD_RESULT'
};

// Словарь с путями к файлам для каждого звука, используя Howl из Howler.js
const soundFiles = {
    [Sounds.CLICK]: new Howl({ src: ['sounds/click.wav'], volume: 0.5 }),
    [Sounds.WRONG_ANSWER]: new Howl({ src: ['sounds/wrong_answer.mp3'], volume: 0.5 }),
    [Sounds.CORRECT_ANSWER]: new Howl({ src: ['sounds/correct_answer.wav'], volume: 0.5 }),
    [Sounds.WINDOW_APPEAR]: new Howl({ src: ['sounds/window_appear.mp3'], volume: 0.5 }),
    [Sounds.SUPER_GOOD]: new Howl({ src: ['sounds/super_good_result.mp3'], volume: 0.5 }),
    [Sounds.NORMAL_RESULT]: new Howl({ src: ['sounds/normal_result.mp3'], volume: 0.5 }),
    [Sounds.GOOD_RESULT]: new Howl({ src: ['sounds/good_result.mp3'], volume: 0.5 }),
    [Sounds.CLICK2]: new Howl({ src: ['sounds/click2.wav'], volume: 0.5 }),
    [Sounds.BAD_RESULT]: new Howl({ src: ['sounds/bad_result.mp3'], volume: 0.5 })
};

// Переменная для управления включением/выключением звуков
let play_sound = false;

// Глобальная громкость для всех звуков
let globalVolume = 0.5;

// Включение звуков после первого взаимодействия пользователя
document.addEventListener('click', () => {
    play_sound = true;
}, { once: true });

// Функция для воспроизведения звука
function playSound(soundType) {
    if (play_sound) {
        const sound = soundFiles[soundType];
        if (sound) {
            sound.volume(globalVolume);  // Применяем глобальную громкость
            sound.play();
        } else {
            console.warn(`Звук для типа ${soundType} не найден`);
        }
    }
}

// Функция для включения/выключения всех звуков
function toggleSound() {
    play_sound = !play_sound;
    playSound(Sounds.CLICK2);
    console.log(`Звуки ${play_sound ? 'включены' : 'выключены'}`);
}

// Функция для установки глобальной громкости
function setGlobalVolume(volume) {
    if (volume >= 0 && volume <= 1) {
        globalVolume = volume;
        Object.values(soundFiles).forEach(sound => sound.volume(globalVolume));
        console.log(`Громкость установлена на ${volume * 100}%`);
    } else {
        console.warn('Громкость должна быть в диапазоне от 0 до 1');
    }
}

// Функция для паузы всех звуков
function pauseAllSounds() {
    Object.values(soundFiles).forEach(sound => {
        sound.stop();
    });
}

// Функция для возобновления всех звуков
function resumeAllSounds() {
    if (play_sound) {
        Object.values(soundFiles).forEach(sound => {
            sound.play();
        });
    }
}

// Отслеживаем смену видимости страницы
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        setGlobalVolume(0);
        
        if(!document.getElementById('main_window').classList.contains('hidden')) {
            trainingEnd = true;
            openWindow('result-window');
            console.log("show result-window");
        }
        // Остановка всех звуков при сворачивании или смене вкладки
        pauseAllSounds();
    } else {
        setGlobalVolume(0.2);
        // Возобновление всех звуков при возврате на вкладку
        // resumeAllSounds();
    }
});

// Пример установки глобальной громкости на 20%
setGlobalVolume(0.2);
