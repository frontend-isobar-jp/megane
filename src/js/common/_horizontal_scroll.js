import { AddClass, RemoveClass, GetParents } from 'mgn-utility';
import mgnUa from 'mgn-ua';

const UA = new mgnUa();

export default () => {

	// ----------------------------------------------------------
	// header horizontal scroll
	// ----------------------------------------------------------

	const TARGET = document.querySelectorAll('.l-header__inner')[0];

	const HeaderHorizontalScroll = ( left ) => {

		TARGET.style.left = -left +'px';

	}


	if( TARGET ){

		document.addEventListener('scroll', () => {

			HeaderHorizontalScroll( document.documentElement.scrollLeft );

		})

	}

}
