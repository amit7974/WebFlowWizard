
  let track = document.getElementById('track');
  let index = 0;
  const slideWidth = 200; // width + margin

  function moveLeft() {
    index--;
    updateSlider();
  }

  function moveRight() {
    index++;
    updateSlider();
  }

  function updateSlider() {
    track.style.transform = `translateX(${-index * slideWidth}px)`;
  }
