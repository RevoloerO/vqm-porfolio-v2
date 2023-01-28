ans = 0;
// Clear screen
function clearScreen() {
    document.getElementById("result").value = "";
}

// Display value on screen
function display(value) {
    document.getElementById("result").value += value;
}

//
function displayAns() {
    document.getElementById("result").value += ans;
}
// Calcualtion and value return
function calculate() {
    var p = document.getElementById("result").value;
    document.getElementById("previous").value = (p+" =");
    var q = eval(p);
    document.getElementById("result").value = q;
    ans = q;
}
