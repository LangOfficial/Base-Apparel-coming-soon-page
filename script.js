const emailButton = document.querySelector('.email-enter-button');
const emailInput = document.querySelector('.email-input');
const errorText = document.querySelector('.error-text');
const errorExclam = document.querySelector('.error-exclamation');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const softRed = 'hsl(0, 93%, 68%)';
const dsRed = 'hsl(0, 36%, 70%)';

// Checks window size when you open the website up
changeHero();
console.log(document.body.clientWidth);

function changeHero() {
  if (document.body.clientWidth >= 1440) {
    document.querySelector('.hero-icon').src = "images/hero-desktop.jpg";
  }
  else if (document.body.clientWidth < 1440) {
    document.querySelector('.hero-icon').src = "images/hero-mobile.jpg";
  }
}

function emailValidate() {
  if (emailInput.value) {
    if (!emailRegex.test(emailInput.value)) {
      emailInput.style.borderColor =  softRed;
      errorText.innerText = "Please provide a valid email"; 
      errorExclam.style.display = 'block';
    }
    else {
      emailInput.style.borderColor = dsRed;
      errorText.innerText = ""; 
      errorExclam.style.display = 'none';
    }
  }
}

window.addEventListener('resize', changeHero);

emailButton.addEventListener('click', emailValidate);
emailInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    emailValidate();
  }
})
