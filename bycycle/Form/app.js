const form = document.querySelector('#create-account-form');
const nameInput = document.querySelector('#name');
const cycleInput = document.querySelector('#cycle');
const EmailInput = document.querySelector('#Email');


form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
     
    //NAME
    if(nameInput.value.trim()==''){
        setError(nameInput, 'Name can not be empty');
    }else if(nameInput.value.trim().length <5 || nameInput.value.trim().length > 15){
        setError(nameInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(nameInput);
    }
    //CYCLE NAME
    if(cycleInput.value.trim()==''){
        setError(cycleInput, 'Cycle Name can not be empty');
    }else if(cycleInput.value.trim().length <5 || cycleInput.value.trim().length > 15){
        setError(cycleInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(cycleInput);
    }

    //EMAIL
    if(EmailInput.value.trim()==''){
        setError(EmailInput, 'Provide email address');
    }else if(isEmailValid(EmailInput.value)){
        setSuccess(EmailInput);
    }else{
        setError(EmailInput, 'Provide valid email address');
    }

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}



