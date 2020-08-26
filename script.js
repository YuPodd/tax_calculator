var input;
var taxField;
var spending;
var tax;
var taxRate = 0.19;
var newInput;
var counter = 1;
var spendings = [];




function addSpending() {
    var newInput = document.createElement('input');
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", 'spending' + counter);
    document.getElementById('spendingForm').append(newInput);
    spendings.push('spending' + counter);

    counter++;
}

function calculate() {
    spendings.push(spendings.length + 1);
    var totalSpendings = 0;
    var income = document.getElementById('incomeField').value;
    var spending = document.getElementById('spendingField1').value;
    var taxField = document.getElementById('taxToPay');

    for (i = 1; i < spendings.length; i++) {
        totalSpendings += parseInt(document.getElementById('spending' + i).value);
    }

    var tax = (income - spending - totalSpendings) * taxRate;
    taxField.innerHTML = tax;
}
