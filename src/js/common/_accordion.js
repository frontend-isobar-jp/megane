import mgnAccordion from 'mgn-accordion';
import { AddClass, RemoveClass, GetParents } from 'mgn-utility';

export default () => {
	// ----------------------------------------------------------
    // Accordion
    // ----------------------------------------------------------


    let accordionFooter = new mgnAccordion(
        ".j-accordion",
        {
            toggleSpeed: 200,
            btnElm: "dt",
            detailElm: "dd"
        }
    );
}
