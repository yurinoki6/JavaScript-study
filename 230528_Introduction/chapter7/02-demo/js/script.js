/*
ローディングから画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');

window.addEventListener('load',() => {
  // ローディング中（グレースクリーン）
  loadingAreaGrey.animate(動かす内容,動きの詳細);
});