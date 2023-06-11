const items = document.querySelectorAll('.img-item');
<<<<<<< HEAD
//console.log(items);

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    opacity: [0, 1]
=======

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    opacity: [0,1],
    filter: ['blur(20px)','blur(0)'],
>>>>>>> main
  };
  const options = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };
  items[i].animate(keyframes, options);
<<<<<<< HEAD
}
=======
}
  
>>>>>>> main
