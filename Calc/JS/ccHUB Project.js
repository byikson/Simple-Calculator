function Solve() {
var firstValue = parseInt(document.getElementById("firstValue").value);
var secondValue = parseInt(document.getElementById("secondValue").value);
var operator = document.getElementById("operator").value;
var calc;

if (operator == "divOperator") { 
    calc = firstValue / secondValue;
} else if (operator == "mulOperator") { 
    calc = firstValue * secondValue;
} else if (operator == "addOperator") { 
    calc = firstValue + secondValue;
} else if (operator == "minOperator") { 
    calc = firstValue - secondValue;
}

document.getElementById("answer").innerHTML = calc;

}

// function displayAnswer() {
//     document.getElementById("operator").innerHTML = "x";
// }

// document.getElementById("addOperator").addEventListener("click", displayAnswer);

// function displayAnswer() {
//     document.getElementById("operator").innerHTML = "+";
// }

// document.getElementById("minOperator").addEventListener("click", displayAnswer);

// function displayAnswer() {
//     document.getElementById("operator").innerHTML = "-";
// }
