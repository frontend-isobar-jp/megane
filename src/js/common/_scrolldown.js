import { AddClass, RemoveClass, GetParents } from 'mgn-utility';

export default () => {

	// ----------------------------------------------------------
	// Show Toggle Pagetop
	// ----------------------------------------------------------

	const TARGET = document.querySelector('html');

	let interval = 10,
		className = 'is-scroll',
		showFlag = false,
		fixFlag = false;


	const GetScrollTopFunc = () => {
		return window.pageYOffset;
	}


	const ShowToggleFunc = () => {

		if( GetScrollTopFunc() > interval ){

			if( !showFlag ){
				AddClass( TARGET, className );
			}

			showFlag = true;

		}else{

			if( showFlag ){
				RemoveClass( TARGET, className );
			}

			showFlag = false;
		}
	}


	if( TARGET ){

		document.addEventListener('scroll', () => {

			ShowToggleFunc();

		})

		document.addEventListener('load', () => {

			ShowToggleFunc();

		})

	}



}
