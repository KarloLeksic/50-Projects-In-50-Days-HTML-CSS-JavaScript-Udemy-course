const sounds = document.querySelectorAll('audio');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound.id;

  // Pusta se ono sta je u src-u od audio taga
  btn.addEventListener('click', () => {
    stopSongs();

    document.querySelector(`#${sound.id}`).play();
  });

  document.querySelector('#buttons').appendChild(btn);
});

// Zaustavljamo pjesmu koja prethodno svira da se moze pustiti nova
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.querySelector(`#${sound.id}`);

    // Nema stop, nego ju zaustavimo i podesimo vrijeme na 0 tako da kad se opet pusti da se pusti ispocetka
    song.pause();
    song.currentTime = 0;
  });
}
