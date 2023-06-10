const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
<<<<<<< HEAD
  count.textContent = text.value.length;
  
  // 100文字を超えるなら
=======
  // キー入力された時の処理
  count.textContent = text.value.length;
  
>>>>>>> main
  if (text.value.length > 100) {
    // alert クラスを加える
    count.classList.add('alert');
    // そうでないなら（100文字以下なら）
  } else {
<<<<<<< HEAD
    // alert クラスをはずす
    count.classList.remove('alert');
  }
});
=======
    // alert クラスを外す
    count.classList.remove('alert');
  }
});
>>>>>>> main
