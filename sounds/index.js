window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector('.visual');
  const colors = [
      "#2193b0",
      "#6dd5ed",
      "#833ab4",
      "#fd1d1d",
      "#fcb045",
      "#FF0099"
       ];

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0; //resets the sound on each click even
      sounds[index].play();

      createBubbles(index);
    });
  });

  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
  }
});

