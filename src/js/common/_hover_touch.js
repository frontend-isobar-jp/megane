import { AddClass, RemoveClass, GetParents } from 'mgn-utility';
import mgnUa from 'mgn-ua';

const UA = new mgnUa();

export default () => {

	// ----------------------------------------------------------
	// Hover class
	// ----------------------------------------------------------

	const TARGET = document.getElementsByTagName('a');
	const CLASS_NAME = 'is-hover';

	let HoverStart,
		HoverEnd;

	if( !UA.isSp && !UA.isTab ){
		HoverStart = 'mouseenter',
		HoverEnd = 'mouseleave'
	}else{
		HoverStart = 'touchstart',
		HoverEnd = 'touchend'
	}

	const HOVER_START_FNC = (e) => {
		AddClass( e.currentTarget , CLASS_NAME );
	}

	const HOVER_END_FNC = (e) => {
		RemoveClass( e.currentTarget, CLASS_NAME );
	}

	for (var i = 0; i < TARGET.length; i++) {

		TARGET[i].removeEventListener( 'transitionend', HOVER_START_FNC );

		TARGET[i].addEventListener( HoverStart, HOVER_START_FNC );

		TARGET[i].addEventListener( HoverEnd, HOVER_END_FNC );

	}

}
