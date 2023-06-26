function calculatorDisplay(display, value) {
    document.getElementById("display").value += value;
}

function calculatorClear(display, value) {
    document.getElementById("display").value = '';
}

function calculatorClearEntry(display, value) {
    var len = document.getElementById("display").value.length;
    document.getElementById("display").value = document.getElementById("display").value.substr(0, len-1);
}

function result(form) {
    var result;

    result = document.getElementById("display").value;

    document.getElementById("display").value = eval(result);   
}