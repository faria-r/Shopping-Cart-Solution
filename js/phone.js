function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if(isIncrease === true )
{
    newPhoneNumber= previousPhoneNumber + 1;
}  
else{
    newPhoneNumber= previousPhoneNumber - 1;
}   
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;
    return phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click',function()
{
    const phoneTotalNumber = updatePhoneNumber(true) ;
    updatePhoneTotalPrice(phoneTotalNumber);
    calculateSubTotal();
}
)

document.getElementById('btn-phone-minus').addEventListener('click',function()
{
    const phoneTotalNumber = updatePhoneNumber(false) ;
    updatePhoneTotalPrice(phoneTotalNumber);
    calculateSubTotal();
}
)

const phoneTotalElement = document.getElementById('phone-price');
