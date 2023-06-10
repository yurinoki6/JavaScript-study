const isAgreed = document.querySelector('#check');
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
});