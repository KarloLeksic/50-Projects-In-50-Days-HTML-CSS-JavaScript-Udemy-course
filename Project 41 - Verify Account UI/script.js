const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if(e.key >= 0 && e.key <= 9) {
      // Malo pricekati da broj ne ode u sljedecu kocku
      setTimeout(() => {
        codes[idx + 1].focus();
      }, 10);
    } else if(e.key === 'Backspace') {
      codes[idx - 1].value = '';
      setTimeout(() => {
        codes[idx - 1].focus();
      }, 10);
    }
  });
});