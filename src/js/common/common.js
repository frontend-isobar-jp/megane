import { AddClass, RemoveClass, GetParents } from 'mgn-utility';
import mgnUa from 'mgn-ua';

import ShowPagetop from './_show_pagetop';
import SetTransition from './_set_transition';
import HeaderMenu from './_header_menu';
import HorizontalScroll from './_horizontal_scroll';
import AccordionMenu from './_menu_accordion';
import HoverTouch from './_hover_touch';

////

const Init = () => {

    // ----------------------------------------------------------
    // HoverTouch ( タッチもしくはホバー時にclass )
    // ----------------------------------------------------------

    HoverTouch();


    // ----------------------------------------------------------
    // SetTransition ( デバイス毎のtransition専用class )
    // ----------------------------------------------------------

    SetTransition();


    // ----------------------------------------------------------
    // Header - HorizontalScroll ( 固定ヘッダーの横スクロール )
    // ----------------------------------------------------------

    HorizontalScroll();


    // ----------------------------------------------------------
    // Header - Menu（SP）
    // ----------------------------------------------------------

    HeaderMenu();


    // ----------------------------------------------------------
    // Header & Footer - Accordion
    // ----------------------------------------------------------

    AccordionMenu();


}

export default Init;
