import { AddClass, RemoveClass, GetParents } from 'mgn-utility';
import mgnUa from 'mgn-ua';

const UA = new mgnUa();

export default () => {

	// ----------------------------------------------------------
	// Hover class
	// ----------------------------------------------------------

	const TARGET = document.querySelectorAll('.l-header__inner')[0];
	
	const HeaderHorizontalScroll = ( left ) => {

		TARGET.style.transform = 'translateX('+ -left +'px)';

	}


	if( TARGET ){

		document.addEventListener('scroll', () => {

			HeaderHorizontalScroll( document.documentElement.scrollLeft );

		})

	}

}
