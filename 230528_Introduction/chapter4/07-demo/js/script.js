const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
  // キー入力された時の処理
  count.textContent = text.value.length;
  
  if (text.value.length > 100) {
    // alert クラスを加える
    count.classList.add('alert');
    // そうでないなら（100文字以下なら）
  } else {
    // alert クラスを外す
    count.classList.remove('alert');
  }
});
