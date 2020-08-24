var input;
var taxField;
var spending;
var tax;
var taxRate = 0.19;
var newInput;
var counter = 1;
var spendings = [];




function addSpending(){
  var newInput = document.createElement('input');
  newInput.setAttribute("type", "number");
    
 if (newInput) {
  var obj = {
      
      id:counter++
    }
  
 }
     
 newInput.setAttribute("id",obj.id);
  
  document.getElementById('spendingForm').append(newInput);
     spendings.push(obj.id);
    console.log(spendings);

}
function calculate(){
    spendings.push(spendings.length+1);
    var totalSpendings = 0;
    console.log(typeof totalSpendings);
    var income = document.getElementById('incomeField').value;
    var spending = document.getElementById('spendingField1').value;
    var taxField = document.getElementById('taxToPay');
    for (i=1; i< spendings.length; i++){
        
       totalSpendings+=parseInt(document.getElementById(i).value); 
console.log(totalSpendings);
       
        }

    var tax = (income - spending - totalSpendings)*taxRate;
    taxField.innerHTML = tax;
}
