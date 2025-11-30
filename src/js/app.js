const form = document.getElementById('user-regisrtation-form');

const userName = document.getElementById('username'),
  userAge = document.getElementById('userage');

// პირადი ნომერი, იმეილი და პაროლი
const personalNumber = document.getElementById('personal-number'),
  email = document.getElementById('email'),
  password = document.getElementById('password');

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

//იუზერნეიმის ვალიდაცია 
function isNameValid(){
  
  const nameValue = userName.value.trim();
  
  // Regex ქართული ასოებისთვის და ცარიელი ადგილისთვის
  const userNameRegex = /^[ა-ჰ\s]+$/; 
  
  if(userName.validity.valueMissing){
    showErrors(userName, 'Name is required');
    return false;
  }else if(userName.validity.tooShort){
    showErrors(userName, 'Name must be at least 5 characters');
    return false;
  }else if(!userNameRegex.test(nameValue)){
    showErrors(userName, 'Name must contain only Georgian letters and spaces');
    return false;
  }else{
    hideErrors(userName, 'everything is good');
    return true;
  }
}

// ასაკის ვალიდაცია
function isAgeValid(){
  const userAgeValue = userAge.value.trim();
  
  if(userAgeValue.length === 0){
    showErrors(userAge, 'Age is required');
    return false;
  }else if(userAgeValue < 18 || userAgeValue > 100){
    showErrors(userAge, 'Age must be between 18 and 100');
    return false;
  }else{
    hideErrors(userAge, 'everything is good');
    return true
  }
}

// 2. პირადი ნომრის ვალიდაცია 

function isPersonalNumberValid(){
  const pnValue = personalNumber.value.trim();
  const pnRegex = /^\d+$/; // მხოლოდ ციფრები
  
  if(pnValue.length === 0){
    showErrors(personalNumber, 'Personal number is required');
    return false;
  } else if (!pnRegex.test(pnValue)) {
    showErrors(personalNumber, 'Personal number must contain only digits');
    return false;
  } else if (pnValue.length !== 11) {
    showErrors(personalNumber, 'Personal number must be exactly 11 digits');
    return false;
  } else {
    hideErrors(personalNumber, 'everything is good');
    return true;
  }
}

// 3. იმეილის ვალიდაცია

function isEmailValid(){
  const emailValue = email.value.trim();
  
  if(emailValue.length === 0){
    showErrors(email, 'Email is required');
    return false;
  } else if (!emailValue.endsWith('@gmail.com')) {
    showErrors(email, 'Email must end with @gmail.com');
    return false;
  } else {
    hideErrors(email, 'everything is good');
    return true;
  }
}


// 4. პაროლის ვალიდაცია

function isPasswordValid(){
  const passwordValue = password.value.trim();
  
  if(passwordValue.length === 0){
    showErrors(password, 'Password is required');
    return false;
  } else if (passwordValue.length < 8) {
    showErrors(password, 'Password must be at least 8 characters long');
    return false;
  } else {
    hideErrors(password, 'everything is good');
    return true;
  }
}


// ივენთები

closeModalBtn.addEventListener('click', ()=>{
  popupModal.classList.remove('active');
  // form.reset();
})

closeDialogBtn.addEventListener('click', ()=>{
  dialogPopup.close();
})

userName.addEventListener('input', isNameValid);
userAge.addEventListener('input', isAgeValid);
personalNumber.addEventListener('input', isPersonalNumberValid); 
email.addEventListener('input', isEmailValid);                   
password.addEventListener('input', isPasswordValid);             


form.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  // ყველას ვალიდაცია
  const isUserNameValid = isNameValid();
  const isUserAgeValid = isAgeValid();
  const isPNValid = isPersonalNumberValid(); 
  const isEmail_Valid = isEmailValid();       
  const isPassword_Valid = isPasswordValid(); 
  
  // ვალიდაციების შემოწმება
  if(isUserNameValid && isUserAgeValid && isPNValid && isEmail_Valid && isPassword_Valid){
    console.log('Form submitted successfully!');
    
    dialogPopup.showModal();
    
    
  } else {
    console.log('Form validation failed. Check errors.');
  }
})