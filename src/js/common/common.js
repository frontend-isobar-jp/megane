import { AddClass, RemoveClass, GetParents } from 'mgn-utility';
import mgnUa from 'mgn-ua';

import Scrolldown from './_scrolldown';
import SetTransition from './_set_transition';
import HeaderMenu from './_header_menu';
import HorizontalScroll from './_horizontal_scroll';
import AccordionMenu from './_menu_accordion';
import HoverTouch from './_hover_touch';

////

const Init = () => {

    // ----------------------------------------------------------
    // Scrolldown ( 一定量スクロールした時に<html>にclass追加 )
    // ----------------------------------------------------------

    Scrolldown();


    // ----------------------------------------------------------
    // HoverTouch ( タッチもしくはホバー時に対象要素にclass追加 )
    // ----------------------------------------------------------

    HoverTouch();


    // ----------------------------------------------------------
    // SetTransition ( ウインドウサイズを判別して<html>にtransition用のclass追加 )
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
