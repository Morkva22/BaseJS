function print(text) {
    document.getElementById('output').innerHTML += text + '<br>';
}

function zavdanya1() {
    clearAndStart('ЗАВДАННЯ 1');

    let age = prompt("What's your age?");
    age = Number(age);

    if (isNaN(age) || age < 0) {
        print('Please enter a valid number!');
        return;
    }

    print("Your age is " + age);

    if (age < 18) {
        print("You r blocked little boi");
    } else if (age >= 18 && age < 61) {
        print("Okey");
    } else if (age > 60) {
        print('Recommended for vacation');
    } else {
        print('get out :x');
    }
}

function zavdanya2() {
    clearAndStart('ЗАВДАННЯ 2');
    let text1 = prompt("first number:");
    let text2 = prompt("second number :");
    let sign = prompt("your sign (+, -, *, /):");


    let n1 = Number(text1);
    let n2 = Number(text2);

    if (isNaN(n1) || isNaN(n2)) {
        print("invalid");
        return;
    }

    print(`Text: ${n1} ${sign} ${n2}`);

    let result;

    switch (sign) {
        case "+":
            result = n1 + n2;
            print(`result: ${result}`);
            break;
        case "-":
            result = n1 - n2;
            print(`result: ${result}`);
            break;
        case "*":
            result = n1 * n2;
            print(`result: ${result}`);
            break;
        case "/":
            if (n2 === 0) {
                print("invalid for u");
            } else {
                result = n1 / n2;
                print(`result: ${result}`);
            }
            break;
        default:
            print("invalid");
            print("use: +, -, *, /");
    }
}
