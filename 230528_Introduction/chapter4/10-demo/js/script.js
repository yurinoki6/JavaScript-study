const isAgreed = document.querySelector('#check');
<<<<<<< HEAD
const btn = document.querySelector('#btn');
	
isAgreed.addEventListener('change', () => {
  btn.disabled = !isAgreed.checked;
=======
const btn =document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
  // チェックボックスにチェックが入っているなら
  if (isAgreed.checked === true){
    // ボタンの無効化をなしにする
    btn.disabled = false;
  // そうじゃないなら（チェックが入っていないなら）
  } else {
    // ボタンを無効化する
    btn.disabled = true;
  }
>>>>>>> main
});