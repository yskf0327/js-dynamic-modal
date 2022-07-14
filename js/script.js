$(() => {
	let item = $('.grid-item'); //各写真をjQueryオブジェクトとして取得
	let modal = document.querySelector('.modal'); //dialogタグ要素を取得
	let content = $('.modal-content'); //モーダルの内容を表示する箇所をjQueryオブジェクトとして取得

	//↓↓写真がクリックされたときの処理↓↓
	item.on('click', function () {
		let imgId = $(this).attr('id').slice(4); //クリックされた写真のidを取得して5文字目以降を取得
		let caption = $(this).find('figcaption').text();//クリックされた写真内のキャプションを取得
		scrollTop = $(window).scrollTop(); //現在のスクロール位置を取得(グローバル変数)
		content.html(`<img src="img/image${imgId}.jpg"><p>${caption}</p>`); //モーダルの内容に写真とキャプションを挿入
		$('body').css({
			'position': 'fixed',
			'top': `-${scrollTop}px`
		}); //モーダルの背面がスクロールされないようにする & クリックイベント発生時のスクロール位置まで移動させる
		modal.showModal(); //モーダルを表示させる(dialogタグ用のメソッド)
		return false;
	});

	// ↓↓ モーダルを閉じる処理 ↓↓
	$(document).on('click', function (e) {
		if ($(e.target).attr('class') === 'modal') { //クリックされた要素のクラスがmodalだったとき
			$('body').css({ 'position': '', 'top': '' }); //bodyをスクロールできるようにする
			$(window).scrollTop(scrollTop); //写真がクリックされた時のスクロール位置まで移動
			modal.close(); //モーダルを非表示にする(dialogタグ用のメソッド)
		}
		return false;
	});
});