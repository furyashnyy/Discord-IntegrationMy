const { exec } = require('child_process');

// Путь к файлу bot.exe
const filePath = './bot.exe';

// Запуск файла
exec(filePath, (error, stdout, stderr) => {
    if (error) {
        console.error(`Ошибка при запуске файла: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Ошибка выполнения: ${stderr}`);
        return;
    }
    console.log(`Вывод программы: ${stdout}`);
});