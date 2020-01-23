import mgnAccordion from 'mgn-accordion';
import { AddClass, RemoveClass, GetParents } from 'mgn-utility';

export default () => {
	// ----------------------------------------------------------
    // Accordion
    // ----------------------------------------------------------


    let accordionFooter = new mgnAccordion(
        ".j-accordion_menu",
        {
            toggleSpeed: 200,
            btnElm: ".parents",
            detailElm: ".child"
        }
    );
}
