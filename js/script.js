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
    var numbers = [3000, 3500, 5000, 4000];
    result = numbers;
    document.getElementById('pasteResultTwoTask').innerHTML = result;
}


function startThreeScriptA() {
    var numbers = ["Красный кошелек", "Синий кошелек", "Розовый кошелек", "Оранжевый кошелек"];
    result = numbers;
    document.getElementById('pasteResultThreeTaskA').innerHTML = result;
}

function startThreeScriptB() {
    var arr = [3000, 3500, 5000, 4000];
    function arraySum(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        result = (sum);
    }
    arraySum(arr);
    document.getElementById('pasteResultThreeTaskB').innerHTML = result;
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