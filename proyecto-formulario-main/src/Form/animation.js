const inputs = document.querySelectorAll('.input-container input');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('active');
  });
  
  input.addEventListener('blur', () => {
    if (!input.value) {
      input.parentElement.classList.remove('active');
    }
  });
});
