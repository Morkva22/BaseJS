function print(text) {
    document.getElementById('output').innerHTML += text + '<br>';
}


function clearAndStart(taskName) {
    document.getElementById('output').innerHTML = ''; // очищаем
    print('=== ' + taskName + ' ===');
}


function isPrime() {
    clearAndStart('Завдання 1');
    let n = prompt('Введіть будь яке число на провірку на простоту:');
    n = Number(n);

    if (isNaN(n)) {
        print('Введіть коректне число!');
        return;
    }

    if (n <= 1) {
        print(`${n} - не є простим числом`);
        return false;
    }



    if (n <= 3) {
        print(`${n} - просте число`);
        return true;
    }

    if (n % 2 === 0 || n % 3 === 0) {
        print(`${n} - не є простим числом `);
        return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            print(`${n} - не є простим числом`);
            return false;
        }
    }

    print(`${n} - просте число`);
    return true;
}

function reverseString() {
    clearAndStart('Завдання 2');

    let str = prompt('Введіть текст для перевороту:');

    if (!str) {
        print('Введіть текст!');
        return;
    }

    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    print(`Оригінал: ${str}`);
    print(`Перевернуто: ${reversed}`);

    return reversed;
}

function getFactorial() {
    clearAndStart('Завдання 3');

    let n = prompt('Введіть число для обчислення факторіалу:');
    n = Number(n);

    if (isNaN(n)) {
        print('Введіть коректне число!');
        return;
    }

    if (n < 0) {
        print('Факторіал від,ємного числа не існує');
        return null;
    }

    if (n === 0 || n === 1) {
        print(`${n}! = 1`);
        return 1;
    }

    let result = 1;
    let steps = `${n}! = `;

    for (let i = n; i >= 1; i--) {
        result *= i;
        steps += i;
        if (i > 1) steps += ' × ';
    }

    steps += ` = ${result}`;
    print(steps);

    return result;
}