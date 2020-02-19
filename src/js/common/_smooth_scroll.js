import mgnSmoothScroll from 'mgn-smooth-scroll';

export default () => {

	// ----------------------------------------------------------
	// SmoothScroll
	// ----------------------------------------------------------

	let scroll = new mgnSmoothScroll(
		"a",
		{
			easing: "easeOutQuint",
			posFix: document.querySelector('.l-header').clientHeight,
		}
	);


}
