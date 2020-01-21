import { AddClass, RemoveClass, GetParents } from 'mgn-utility';
import mgnMenu from 'mgn-menu';


export default () => {


	// ----------------------------------------------------------
	// Menu
	// ----------------------------------------------------------

	if( document.querySelector('.j-menu') ){

		let bodyYOffset = 0,
		openMenuFlag = false;

		let menu = new mgnMenu(
			".j-menu",
			{
				globalNav: ".j-menu",
				activeName: "is-open",
				closePoint: 768,
				noScroll: false
			}
		);


		const setOpenFunc = () => {

			bodyYOffset = window.pageYOffset; // スクロール位置を保存

			AddClass( document.getElementsByTagName('html')[0], 'is-gnav_open' );

			setTimeout( () => {
				AddClass( document.getElementsByTagName('html')[0], 'is-gnav_fix' ); //FIXED設定用
				window.scrollTo( 0, 0 );
			},200 )

		}

		const setCloseFunc = () => {

			RemoveClass( document.getElementsByTagName('html')[0], 'is-gnav_fix' );
			window.scrollTo( 0, bodyYOffset );

			setTimeout( () => {
				RemoveClass( document.getElementsByTagName('html')[0], 'is-gnav_open' );
			},100 )
		}

		menu.OpenStart = () => {
			setOpenFunc();
		}
		menu.CloseStart = () => {
			setCloseFunc();
		}

		// リンクをクリックしたらMENU閉じる（同ページ内アンカーリンク対策）
		let headerLink = document.querySelectorAll('.l-header__page a');
		for (var i = 0; i < headerLink.length; i++) {
			headerLink[i].addEventListener('click', () => {
				menu.Close();
			})
		}

	}
}
