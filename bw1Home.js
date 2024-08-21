document.addEventListener('DOMContentLoaded', function() {
  const proceedButton = document.querySelector('.proceed-button');
  const confirmCheckbox = document.getElementById('confirm');

  proceedButton.disabled = true; //disabilita bottone "proceed"
  confirmCheckbox.addEventListener('change', function() {
    proceedButton.disabled = !confirmCheckbox.checked;
  }); //abilita solo se c'è la spunta

  proceedButton.addEventListener('click', function() {
    if (confirmCheckbox.checked) {
    window.location.href = 'bw1Question.html'; 
    } // indirizza alla pagina delle domande
  });
});
