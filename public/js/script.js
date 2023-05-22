let hamburger = document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-links');
let links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
    hamburger.classList.toggle('line-rotate');
});

for(let i=0; i < links.length(); i++){
    links[i].addEventListener('click', () => {
        navLinks.classList.toggle('hide');
    });
}

function validateMobileNumber(input) {
    var mobileNumber = input.value;
    var isValid = mobileNumber.length == 10 && /^\d{10}$/.test(mobileNumber);
    return isValid;
  }
  