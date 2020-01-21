import { AddClass, RemoveClass, GetParents } from 'mgn-utility';
import mgnUa from 'mgn-ua';

import ShowPagetop from './_show_pagetop';
import SetTransition from './_set_transition';
import HeaderMenu from './_header_menu';
import HorizontalScroll from './_horizontal_scroll';
import Accordion from './_accordion';
import HoverTouch from './_hover_touch';

////

const Init = () => {

    // ----------------------------------------------------------
    // HoverTouch ( タッチもしくはホバー時にclassを追加 )
    // ----------------------------------------------------------

    HoverTouch();


    // ----------------------------------------------------------
    // HorizontalScroll ( ウインドウ狭い場合固定ヘッダーの横スクロール )
    // ----------------------------------------------------------

    HorizontalScroll();


    // ----------------------------------------------------------
    // HeaderMenu（SP）
    // ----------------------------------------------------------

    HeaderMenu();


    // ----------------------------------------------------------
    // SetTransition
    // ----------------------------------------------------------

    SetTransition();


    // ----------------------------------------------------------
    // Accordion
    // ----------------------------------------------------------

    Accordion();


}

export default Init;
