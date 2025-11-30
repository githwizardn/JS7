const form = document.getElementById('user-regisrtation-form');

const userName = document.getElementById('username'),
  userAge = document.getElementById('userage');

const popupModal = document.getElementById('popup-modal'),
  closeModalBtn = document.getElementById('close-modal-btn');

const dialogPopup = document.getElementById('dialog-popup'),
  closeDialogBtn = document.getElementById('close-dialog-btn');


function showErrors(inputElement, message){
  inputElement.closest('.form-group').classList.remove('no-error');
  inputElement.closest('.form-group').classList.add('has-error');
  inputElement.closest('.form-group').querySelector('.message').innerText = message;
}
function hideErrors(inputElement, message){
  inputElement.closest('.form-group').classList.remove('has-error');
  inputElement.closest('.form-group').classList.add('no-error');
  inputElement.closest('.form-group').querySelector('.message').innerText = message;
}
function isNameValid(){
  
  const nameValue = userName.value.trim(), userAgeValue = userAge.value.trim();
  
  const userNameRegex = /^[ა-ჰ\s]+$/;
  
  if(userName.validity.valueMissing){
    // userName.closest('.form-group').classList.remove('no-error');
    // userName.closest('.form-group').classList.add('has-error');
    // userName.closest('.form-group').querySelector('.message').innerText = 'Name is required';
    
    showErrors(userName, 'Name is required');
  }else if(userName.validity.tooShort){
    // userName.closest('.form-group').classList.remove('no-error');
    // userName.closest('.form-group').classList.add('has-error');
    // userName.closest('.form-group').querySelector('.message').innerText = 'Name must be at least 5 characters';
    showErrors(userName, 'Name must be at least 5 characters');
  }else if(!userNameRegex.test(nameValue)){
    // userName.closest('.form-group').classList.remove('no-error');
    // userName.closest('.form-group').classList.add('has-error');
    // userName.closest('.form-group').querySelector('.message').innerText = 'Name must contain only Georgian letters and spaces';
    showErrors(userName, 'Name must contain only Georgian letters and spaces');
  }else{
    // userName.closest('.form-group').classList.remove('has-error');
    // userName.closest('.form-group').classList.add('no-error');
    // userName.closest('.form-group').querySelector('.message').innerText = 'everything is good';
    
    hideErrors(userName, 'everything is good');
    
    return true;
  }
}


function isAgeValid(){
  const userAgeValue = userAge.value.trim();
  
  if(userAgeValue.length === 0){
    // userAge.closest('.form-group').classList.remove('no-error');
    // userAge.closest('.form-group').classList.add('has-error');
    // userAge.closest('.form-group').querySelector('.message').innerText = 'Age is required';
    showErrors(userAge, 'Age is required');
  }else if(userAgeValue < 18 || userAgeValue > 100){
    // userAge.closest('.form-group').classList.remove('no-error');
    // userAge.closest('.form-group').classList.add('has-error');
    // userAge.closest('.form-group').querySelector('.message').innerText = 'Age must be between 18 and 100';
    showErrors(userAge, 'Age must be between 18 and 100');
  }else{
    // userAge.closest('.form-group').classList.remove('has-error');
    // userAge.closest('.form-group').classList.add('no-error');
    // userAge.closest('.form-group').querySelector('.message').innerText = 'everything is good';
    hideErrors(userAge, 'everything is good');
    return true
  }
}


closeModalBtn.addEventListener('click', ()=>{
  popupModal.classList.remove('active');
  // form.reset();
})

closeDialogBtn.addEventListener('click', ()=>{
  dialogPopup.close();
})

userName.addEventListener('input', isNameValid);
userAge.addEventListener('input', isAgeValid);

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const isUserNameValid =  isNameValid();
  const isUserAgeValid = isAgeValid();
  
    if(isUserNameValid && isUserAgeValid){
      // form.submit();
      console.log('submit the form');
      // popupModal.classList.add('active');
      
      dialogPopup.showModal();
    }
  
  
})