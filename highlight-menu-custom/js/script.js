$(function() {
  // ブラウザをスクロールした時
  $(window).scroll(function() {
    // 現在のスクロール位置に応じてメニューのハイライトを変更
    // 1〜4のセクションを順番にチェック
    for (let i = 1; i <= 6; i++) {
      // スクロール位置がセクションの位置を超えたら
      if ($("main section").eq(i - 1).offset().top < $(window).scrollTop() + 30) {
        // 現在のセクションに対応するメニュー項目をハイライト
        $("nav li").removeClass("current");  // 既存のハイライトを削除

        $("nav li").eq(i - 1).addClass("current"); // 新しいハイライトを追加
      }
    }
  });
});
