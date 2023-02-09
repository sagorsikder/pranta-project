function t830_init(recid){var rec=document.getElementById('rec'+recid);var allRec=document.getElementById('allrecords');if(!allRec||!rec)return;var panel=rec.querySelector('.t830__panel');var overlay=rec.querySelector('.t830m__overlay');var menu=rec.querySelector('.t830m');var submenu=rec.querySelector('.t830m__submenu');var burger=rec.querySelector('.t830__side .t830__burger');var menuItemList=rec.querySelectorAll('.t830m__list-title a');var submenuItemList=rec.querySelectorAll('.t830m__submenu-item a');t830_initMenu(rec,menu,burger,overlay);t830_removePadding(rec,allRec);t830_calcCol(rec,menu,allRec,!1);t_onFuncLoad('t_menu__highlightActiveLinks',function(){t_menu__highlightActiveLinks('.t830m__list a')});t830_openSubmenu(rec);t830_hoverShowMenu(rec,menu,panel,overlay,burger);window.addEventListener('resize',function(){t830_calcCol(rec,menu,allRec,!0);t830_removePadding(rec,allRec);if(menu&&menu.classList.contains('t830m_close')&&window.innerWidth>1499){if(overlay)overlay.classList.remove('t830m__menu_show')}});if(submenu&&submenu.classList.contains('t830m__submenu_close')){t830_toggleMenu(rec)}
if(window.innerWidth>1199){t830_scrollSideMenu(rec)}
var isHashNotEmpty=window.location.hash.length!==0;Array.prototype.forEach.call(menuItemList,function(menuItem){menuItem.addEventListener('click',function(){if(isHashNotEmpty){Array.prototype.forEach.call(menuItemList,function(menuEl){menuEl.classList.remove('t-active')});menuItem.classList.add('t-active')}})});Array.prototype.forEach.call(submenuItemList,function(submenuItem){submenuItem.addEventListener('click',function(){if(isHashNotEmpty){Array.prototype.forEach.call(submenuItemList,function(submenuEl){submenuEl.classList.remove('t-active')});submenuItem.classList.add('t-active')}})});t_onFuncLoad('t_menu__findAnchorLinks',function(){t_menu__findAnchorLinks(recid,'.t830m__list a')})}
function t830_calcCol(rec,menu,allrecords,isResized){if(window.innerWidth<=1199||!menu||window.getComputedStyle(rec).display==='none')return;var label=document.querySelector('.t-tildalabel');if(menu.classList.contains('t830m_open')){if(allrecords)allrecords.classList.add('t830__allrecords_padd-small');if(label)label.classList.add('t830__t-tildalabel_padd-small')}else{if(allrecords)allrecords.classList.add('t830__allrecords_padd');if(label)label.classList.add('t830__t-tildalabel_padd')}
if(isResized)return;var event=document.createEvent('Event');event.initEvent('allRecPaddingInit',!0,!0);if(allrecords)allrecords.dispatchEvent(event)}
function t830_toggleMenu(rec){var titleList=rec.querySelectorAll('.t830m__list-title_toggle');Array.prototype.forEach.call(titleList,function(listTitle){listTitle.addEventListener('click',function(){var submenu=listTitle.nextElementSibling;var textTitle=listTitle.querySelector('.t830m__list-title-text');t830_slideToggle(submenu);if(textTitle)textTitle.classList.toggle('t830m__list-title-text_opacity');if(textTitle)textTitle.classList.toggle('t-menu__link-item')})})}
function t830_openSubmenu(rec){var activeLink=rec.querySelector('.t830m__submenu-item a.t-active');var submenu=activeLink?activeLink.closest('.t830m__submenu'):null;if(submenu)submenu.style.display='block'}
function t830_hoverShowMenu(rec,menu,panel,overlay,burger){if(window.innerWidth<=1199||!panel||!panel.classList.contains('t830__panel_hover'))return;panel.addEventListener('mouseenter',function(){if(menu)menu.classList.add('t830m__menu_show');if(burger)burger.classList.add('t830__burger_open');if(overlay)overlay.classList.add('t830m__overlay_hover')});if(menu){menu.addEventListener('mouseleave',function(){menu.classList.remove('t830m__menu_show');if(burger)burger.classList.remove('t830__burger_open')})}
if(overlay){overlay.addEventListener('mouseenter',function(){overlay.classList.remove('t830m__overlay_hover');if(burger)burger.classList.remove('t830__burger_open');if(menu)menu.classList.remove('t830m__menu_show')})}
var menuLinks=menu.querySelectorAll('a');Array.prototype.forEach.call(menuLinks,function(link){link.addEventListener('click',function(){menu.classList.remove('t830m__menu_show');if(burger)burger.classList.remove('t830__burger_open')})});if(burger){burger.addEventListener('click',function(){if(burger.classList.contains('t830__burger_open')){t830_closeMenu(rec,menu,overlay);burger.classList.remove('t830__burger_open')}else{burger.classList.add('t830__burger_open');if(menu)menu.classList.add('t830m__menu_show');if(overlay)overlay.classList.add('t830m__overlay_hover')}})}}
function t830_showMenu(rec,menu,burger,overlay){var panel=rec.querySelector('.t830__panel');document.body.classList.add('t830__body_menushowed');if(overlay)overlay.classList.add('t830m__menu_show');if(menu)menu.classList.add('t830m__menu_show');var closedMenuEls=rec.querySelectorAll('.t830m__overlay, .t830m__close, a[href*="#"]');closedMenuEls=Array.prototype.filter.call(closedMenuEls,function(el){return!(el.classList.contains('tooltipstered')||el.classList.contains('t794__tm-link')||el.classList.contains('t978__tm-link')||el.classList.contains('t966__tm-link'))});closedMenuEls.forEach(function(el){el.addEventListener('click',function(){t830_closeMenu(rec,menu,overlay);if(burger)burger.classList.remove('t830__burger_open')})});if(panel)panel.classList.add('t830__panel_close');var popupBg=document.querySelector('.t-site-search-popup__background');document.addEventListener('keydown',function(e){if(e.keyCode!==27||popupBg)return;document.body.classList.remove('t830__body_menushowed');if(menu)menu.classList.remove('t830m__menu_show');if(burger)burger.classList.remove('t830__burger_open');if(overlay)overlay.classList.remove('t830m__menu_show')})}
function t830_closeMenu(rec,menu,overlay){var panel=rec.querySelector('.t830__panel');if(menu&&menu.classList.contains('t830m_open')&&window.innerWidth<1500){if(panel)panel.classList.remove('t830__panel_close')}
document.body.classList.remove('t830__body_menushowed');if(menu)menu.classList.remove('t830m__menu_show');if(overlay)overlay.classList.remove('t830m__menu_show')}
function t830_initMenu(rec,menu,burger,overlay){if(!rec)return;var panel=rec.querySelector('.t830__panel');var menuContent=rec.querySelector('.t830__menu__content');if(typeof jQuery!=='undefined'){$('.t830').bind('clickedAnchorInTooltipMenu',function(){t830_closeMenu(rec,menu,overlay)})}else{var menuBlock=document.querySelector('.t830');if(menuBlock){menuBlock.addEventListener('clickedAnchorInTooltipMenu',function(){t830_closeMenu(rec,menu,overlay)})}}
if(!panel||!menuContent||!menu)return;if(panel.classList.contains('t830__panel_click')||(panel.classList.contains('t830__panel_hover')&&window.innerWidth<=1199)){menuContent.addEventListener('click',function(e){if(menu.classList.contains('t830m__menu_show')){if(burger)burger.classList.remove('t830__burger_open');t830_closeMenu(rec,menu,overlay)}else{if(burger)burger.classList.add('t830__burger_open');t830_showMenu(rec,menu,burger,overlay)}})}}
function t830_scrollSideMenu(rec){var container=rec?rec.querySelector('.t830m__container'):null;if(!container)return;var events=['scroll','wheel','DOMMouseScroll','mousewheel'];events.forEach(function(event){container.addEventListener(event,function(e){var searchResult=rec.querySelector('.t-site-search-dm');if(!searchResult){t830_stopScroll(container,e)}})})}
function t830_stopScroll(container,eventScroll){var scrollTop=container.scrollTop;var scrollHeight=container.scrollHeight;var height=container.offsetHeight;var delta=eventScroll.type==='DOMMouseScroll'?eventScroll.detail*-40:eventScroll.wheelDelta;var up=delta>0;var prevent=function(){eventScroll.stopPropagation();eventScroll.preventDefault();eventScroll.returnValue=!1;return!1};if(!up&&-delta>scrollHeight-height-scrollTop){container.scrollTo(0,scrollHeight);return prevent()}else if(up&&delta>scrollTop){container.scrollTo(0,0);return prevent()}}
function t830_removePadding(rec,allrecords){if(!allrecords||!rec||window.getComputedStyle(rec).display!=='none')return;allrecords.style.paddingLeft='0';var label=document.querySelector('.t-tildalabel');if(label)label.style.paddingLeft='0'}
function t830_slideToggle(target){if(!target)return;if(target.getAttribute('data-slide')==='y')return;if(window.getComputedStyle(target).display==='none'){return t830_slideDown(target)}else{return t830_slideUp(target)}}
function t830_slideUp(target){if(!target)return;var step=target.offsetHeight/30;var difference=target.offsetHeight;target.style.overflow='hidden';target.setAttribute('data-slide','y');var timerID=setInterval(function(){difference-=step;target.style.height=difference+'px';if(difference<=0){target.style.height='';target.style.overflow='';target.style.display='none';target.removeAttribute('data-slide');clearInterval(timerID)}},10)}
function t830_slideDown(target){if(!target)return;target.style.display='';var currentDisplayValue=window.getComputedStyle(target).display;target.style.display=currentDisplayValue==='none'?'block':currentDisplayValue;var targetHeight=target.offsetHeight;target.style.height='0';target.style.overflow='hidden';target.setAttribute('data-slide','y');var step=targetHeight/30;var difference=0;var timerID=setInterval(function(){target.style.height=difference+'px';difference+=step;if(difference>=targetHeight){target.style.height='';target.style.overflow='';target.removeAttribute('data-slide');clearInterval(timerID)}},10)}