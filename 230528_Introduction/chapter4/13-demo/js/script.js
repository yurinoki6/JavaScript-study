const getScrollPercent = () => {
  // スクロール量
  const scrolled = window.scrollY;
<<<<<<< HEAD
  //console.log(`${scrolled} スクロールされました`);

=======
  console.log(`${scrolled} スクロールされました`);
  
>>>>>>> main
  // ページ全体の高さ
  const pageHeight = document.documentElement.scrollHeight;

  // 表示領域の高さ
  const viewHeight = document.documentElement.clientHeight;
<<<<<<< HEAD
  //console.log(`ページの高さ：${pageHeight}、表示領域の高さ：${viewHeight}`)

  // スクロールされた割合
  const percentage = scrolled / (pageHeight - viewHeight) * 100;
  //console.log(percentage);
  
  // プログレスバーに幅を指定
  document.querySelector('#bar').style.width = `${percentage}%`;
=======

  // スクロールされた割合
  const percentage = scrolled / (pageHeight - viewHeight) * 100;

  // プログレスバーに幅を指定
  document.querySelector('#bar').style.width =`${percentage}%`;
>>>>>>> main
}

window.addEventListener('scroll', getScrollPercent);