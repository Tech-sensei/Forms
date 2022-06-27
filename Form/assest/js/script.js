'use strict'
// Declaring all the the variables
const signUP = document.querySelector('.sign-up');
const signIn = document.querySelector('.sign-in');
const showLogin = document.querySelector('.login--in');
const showRegister = document.querySelector('.login--create');
const formImage = document.querySelector('.form--img');

// Removing the hidden class from register form and putting it into login form

const showRegisterForm = function(){
    showRegister.classList.remove('hidden');
    formImage.src = 'register.png';

    showLogin.classList.add('hidden')
}

const showLoginform = function(){
    showRegister.classList.add('hidden')
    formImage.src = 'login.png';
    showLogin.classList.remove('hidden')
}
signUP.addEventListener('click', showRegisterForm)

signIn.addEventListener('click', showLoginform)