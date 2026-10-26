$(function() {
  // 変数navPosに、nav要素の初期位置を代入
  let navPos = $("nav").offset().top;

  // ウィンドウがスクロールされたら
  $(window).scroll(function() {
    // スクロール量とnav要素の初期位置を比較
    if ($(window).scrollTop() > navPos) {
      // 条件を満たした場合: nav要素をブラウザ上部に固定
      $("nav").css("position", "fixed");
    } else {
      // 条件を満たさない場合: nav要素を元の位置に戻す
      $("nav").css("position", "static");
    };
  });
});