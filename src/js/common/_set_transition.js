import { AddClass, RemoveClass, GetParents } from 'mgn-utility';

export default () => {


	// ----------------------------------------------------------
	// Set Transition Class
	// ----------------------------------------------------------

	const BREAKPOINT = 640;
	const TARGET = document.getElementsByTagName('html')[0];

	const CLASSNAME_PC = 'is-transition_pc';
	const CLASSNAME_SP = 'is-transition_sp';

	let timer = null,
		delay = 150,
		spFlag;

	const JudgeWindowWidth = ()=> {

		clearTimeout( timer );

		timer = setTimeout( () => {

			///

			if ( window.innerWidth > BREAKPOINT ) {

				if( spFlag || spFlag == undefined ){

					//PC処理
					RemoveClass( TARGET, CLASSNAME_SP );
					AddClass( TARGET, CLASSNAME_PC );

					spFlag = false;

				}
			} else {

				if( !spFlag || spFlag == undefined ){

					//SP処理
					AddClass( TARGET, CLASSNAME_SP );
					RemoveClass( TARGET, CLASSNAME_PC );
				}

				spFlag = true;
			}

			///

		}, delay );
	}

	window.addEventListener( 'resize', () => {

		JudgeWindowWidth();

	} );

	window.addEventListener( 'load', () => {

		JudgeWindowWidth();

	} );


}
