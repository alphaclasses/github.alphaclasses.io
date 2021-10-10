var submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  
  // Show thank you message element
  document.getElementById('thank_you').style.display = 'block';
});

var closeThanks = document.querySelector('#closeThanks');

closeThanks.addEventListener('click', function (e) {
  e.preventDefault();
  
  // Show thank you message element
  document.getElementById('closeThanks').style.display = 'none';
});