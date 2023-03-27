var mario = document.getElementById('mario');
var coin = document.getElementById('coin');

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowRight') {
    mario.style.left = parseInt(mario.style.left) + 5 + 'px';
  } else if (event.code === 'ArrowLeft') {
    mario.style.left = parseInt(mario.style.left) - 5 + 'px';
  } else if (event.code === 'ArrowUp') {
    mario.style.bottom = parseInt(mario.style.bottom) + 10 + 'px';
  }
  
  if (collision(mario, coin)) {
    coin.style.display = 'none';
  }
});

function collision(element1, element2) {
  var rect1 = element1.getBoundingClientRect();
  var rect2 = element2.getBoundingClientRect();
  
  return !(rect1.right < rect2.left ||
           rect1.left > rect2.right ||
           rect1.bottom < rect2.top ||
           rect1.top > rect2.bottom);
}