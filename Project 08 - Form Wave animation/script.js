const labels = document.querySelectorAll('.form-control label');

// Svako slovo iz labela moramo obuci u span
labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('') // Razdvojimo svako slovo posebno
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms;">${letter}</span>`) // Svako slovo obucemo u span
    .join(''); // Spojimo ih sve nazad
});