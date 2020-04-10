const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code
const nextButton = document.querySelector('.nav__next');
const prevButton = document.querySelector('.nav__previous');
const steps = document.querySelectorAll('.steps__text');
const image = document.querySelector('.main__image');
const text = document.querySelector('.main__text');

let numOfSteps = 10;
const texts = {
  1: "Wet hands with water.",
  2: "Apply enough soap to cover all hand surfaces.",
  3: "Lather thoroughly.",
  4: "Rub hands palm to palm.",
  5: "Rub hands palm to palm with fingers interlaced.",
  6: "Rub back of hand using the palm of the other with fingers interlaced.",
  7: "In a circular motion rub the tips of fingers in the palm of the opposite hand.",
  8: "Clean thumb by holding it in the other hand and rotating.",
  9: "Rub wrist with the opposite hand.",
  10: "Interlock fingers and rub back of fingers on opposite palms.",
  11: "Rinse hands with water.",
  12: "Dry hands with clean paper towel and use paper towel to turn off tap."
}

nextButton.addEventListener('click', nextStep);
prevButton.addEventListener('click', prevStep);

function nextStep() {
  prevButton.removeAttribute('disabled');
  prevButton.classList.remove('nav__previous--disabled');
  steps[numOfSteps].classList.add('steps__text--highlight')
  image.setAttribute('src', `images/${steps[numOfSteps].innerText}.png`)
  text.innerHTML = texts[steps[numOfSteps].innerText];
  numOfSteps--;
  if (numOfSteps < 0) {
    nextButton.setAttribute('disabled',true);
    nextButton.classList.add('nav__next--disabled');
  }
}

function prevStep(){
  nextButton.removeAttribute('disabled');
  nextButton.classList.remove('nav__next--disabled');
  numOfSteps+=1;
  steps[numOfSteps].classList.remove('steps__text--highlight')
  image.setAttribute('src', `images/${steps[numOfSteps+1].innerText}.png`)
  text.innerHTML = texts[steps[numOfSteps+1].innerText];
  if (numOfSteps >= 10) {
    prevButton.setAttribute('disabled',true);
    prevButton.classList.add('nav__previous--disabled');
  }
}
