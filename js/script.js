function startOneTask() {
    var i = 0,
        maxNumber = 100,
        j,
        simpleNumber,
        result = '<b>Ответ:</b> ';
    do {
        j = 1;
        while (j < i) {
            if (i % j == 0 && j != 1) {
                simpleNumber = false;
                break;
            } else {
                simpleNumber = true;
            }
            j++;
        };
        if (simpleNumber) {
            result += i + '; ';
        }
    } while (++i <= maxNumber);
    document.getElementById('pasteResultOneTask').innerHTML = result;
}

function startTwoScript() {
    var i = 0,
        maxNumber = 10,
        join = '',
        result = '';
    do {
        if (i == 0) {
            join = 'это ноль';
        } else if (i % 2 == 0) {
            join = 'четное число';
        } else {
            join = 'нечетное число';
        }
        result += '<br>' + i + ' - ' + join;
    } while (++i <= maxNumber);
    document.getElementById('pasteResultTwoTask').innerHTML = result;
}

function startThreeScript() {
    var i = 0,
        result = 'Результат: ';
    for (i = 0; i <= 9; result += i + '; ', i++) {
        // здесь пусто
    }
    document.getElementById('pasteResultThreeTask').innerHTML = result;
}

function startForScript() {
    var result = '';
    for (var i = 1; i <= 20; i++) {
        for (var j = 1; j <= i; j++) {
            result += "x";
        }
        result += '<br>';
    }
    document.getElementById('pasteResultForTask').innerHTML = result;
}