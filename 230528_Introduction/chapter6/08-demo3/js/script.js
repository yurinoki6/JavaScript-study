const heading = document.querySelector('#heading');

<<<<<<< HEAD
const keyframes = {
  color: ['transparent', '#fff'],
  backgroundPosition: ['100% 0', '0 0'],
};
const options = {
  duration: 1000,
  easing: 'ease',
};

heading.animate(keyframes, options);
=======
const keyfreames = {
  borderRadius: [
    '20% 50% 50% 70%/50% 50% 70% 50%' ,
    '50% 20% 50% 50%/40% 40% 60% 60%' ,
    '50% 40% 20% 40%/40% 50% 50% 80%' ,
    '50% 50% 50% 20%/40% 40% 60% 60%' ,
  ]
};
const options = {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity,
};

heading.animate(keyfreames, options);
>>>>>>> main
