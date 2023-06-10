const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  
  // クリックされた時の処理
  document.body.classList.toggle('dark-theme');
  
  // もしボタンのテキストが「ダークモードにする」になっているなら
  if(btn.textContent === 'ダークモードにする') {
    // クリックされた時に「ライトモードにする」に変更
    btn.textContent = 'ライトモードにする';
  } 
  // そうでないなら
  else {
    // クリックされた時に「ダークモードにする」に戻す
    btn.textContent = 'ダークモードにする';
  }
});