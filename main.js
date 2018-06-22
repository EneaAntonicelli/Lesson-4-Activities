$(document).ready(function () {

    var number1 = 0;
    var number2 = 0;
    var operator = 0;
    var equals = 0;


function handleNumber (num) {
    if (number1 === "") {
        number1 = num;
    } else {
        number2 = num;
    }
}

function handleOperator(oper) {
    operator = oper;
}


    $(".btn").onClick(function (event) {
        number1 = $(this).text;
    });


    $(".operator").onClick(function (event) {
        operator = $(this).text;
    });

    $(".btn").onClick(function (event) {
        number2 = $(this).text;
    });

    var output = function result() {
    }

    $(".btn").onClick(function (equals) {
        var button = equals.this.text;
        if (button >= '0' && button <= '9') {
            handleNumber(button);
        } else {
            handleOperator(button);
        }
    });


});