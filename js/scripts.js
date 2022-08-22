/* 
1.add event listener
2.get the value inside case field(input)
3.convert the number to an integer
4.calculate the new case number
5.save the value to the casenumber field
*/
// function for updating case number 
function updateCaseNumber (isIncrease){
    const caseNumberField =  document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber +1;
    }
    else{
        newCaseNumber = previousCaseNumber -1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}
function updateTotalCasePrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber*59;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText= caseTotalPrice;
   return caseTotalPrice;
}
// add button 
document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNumber = updateCaseNumber(true);
   updateTotalCasePrice(newCaseNumber);
   calculateSubTotal();
   
})
// minus button 
document.getElementById('btn-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);
    updateTotalCasePrice(newCaseNumber);
    calculateSubTotal();
 })