function calculateFormula(x) {
    if (x < 0) {
        return {
            error: true,
            message: 'Ошибка: x не может быть отрицательным (под корнем)',
            result: null
        };
    }
    
    var pi = Math.PI;
    var sinValue = Math.sin(x);
    var sqrtValue = Math.sqrt(x);
    var result = pi + sinValue + sqrtValue;
    
    return {
        error: false,
        x: x,
        pi: pi,
        sinValue: sinValue,
        sqrtValue: sqrtValue,
        result: result
    };
}

function showTask4() {
    var input = prompt('Введите значение x для расчета по формуле π + sin(x) + √x:', '2');
    
    if (input === null) {
        document.getElementById('task4-result').innerHTML = 'Расчет отменен пользователем';
        return;
    }
    
    var x = parseFloat(input);
    
    if (isNaN(x)) {
        document.getElementById('task4-result').innerHTML = 'Ошибка: введите корректное число!';
        return;
    }
    
    var data = calculateFormula(x);
    
    var output = '';
    if (data.error) {
        output = data.message;
    } else {
        output += 'Формула: π + sin(x) + √x<br>';
        output += 'x = ' + data.x + '<br>';
        output += 'π = ' + data.pi.toFixed(6) + '<br>';
        output += 'sin(' + data.x + ') = ' + data.sinValue.toFixed(6) + '<br>';
        output += '√' + data.x + ' = ' + data.sqrtValue.toFixed(6) + '<br>';
        output += 'Результат: ' + data.result.toFixed(6);
    }
    
    document.getElementById('task4-result').innerHTML = output;
}

console.log('Внешний JS-файл загружен');