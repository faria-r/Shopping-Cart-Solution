// function calculateSubTotal(elementIdOne,ElementIdTwo,subField){
//     const elementIdOneField = document.getElementById(elementIdOne);
//     const elementIdOneString = elementIdOneField.innerText;
//     const elementIdValue = parseInt(elementIdOneString);
//     const elementIdTwoField= document.getElementById(ElementIdTwo);
//     const elementIdTwoString = elementIdTwoField.innerText;
//     const  elementIdTwoValue = parseInt(elementIdTwoString);
//     const totalValue = elementIdValue + elementIdTwoValue;
//     const subPreviousValue = document.getElementById(subField);
//    subPreviousValue.innerText = totalValue;
// } 


function getTextElementValueById(elementId){
    const Element = document.getElementById(elementId);
    const phoneTotalString = Element.innerText;
    const phoneTotal = parseInt(phoneTotalString); 
    return phoneTotal;
}
function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText= value;

}
function calculateSubTotal(){
//calculate phone price
const currrentTotalPrice = getTextElementValueById('phone-price');
const curentCaseTotal = getTextElementValueById('case-total');
const currentSubTotal = currrentTotalPrice + curentCaseTotal;
setTextElementValueById('sub-total',currentSubTotal);
//calculate tax
const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
const taxAmount = parseFloat(taxAmountString);
setTextElementValueById('tax-total',taxAmount);
const finalAmount = currentSubTotal + taxAmount;
setTextElementValueById('total',finalAmount)
}


