//header
window.dataLayer = window.dataLayer || [];


(function () {
if((/bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(navigator.userAgent))===false && typeof(sessionStorage)!='undefined' && sessionStorage.getItem('visited')!=='y' && document.visibilityState){
var style=document.createElement('style');
style.type='text/css';
style.innerHTML='@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}';
document.getElementsByTagName('head')[0].appendChild(style);
function t_setvisRecs(){
var alr=document.querySelectorAll('.t-records');
Array.prototype.forEach.call(alr, function(el) {
el.classList.add("t-records_animated");
});
setTimeout(function () {
Array.prototype.forEach.call(alr, function(el) {
el.classList.add("t-records_visible");
});
sessionStorage.setItem("visited", "y");
}, 400);
} 
document.addEventListener('DOMContentLoaded', t_setvisRecs);
}
})();

//footer 

t_onReady(function() {
t_onFuncLoad('t686_init', function () {
t686_init('326702167');
});
});



if (! window.mainTracker) { window.mainTracker = 'tilda'; }
setTimeout(function(){ (function (d, w, k, o, g) { var n=d.getElementsByTagName(o)[0],s=d.createElement(o),f=function(){n.parentNode.insertBefore(s,n);}; s.type = "text/javascript"; s.async = true; s.key = k; s.id = "tildastatscript"; s.src=g; if (w.opera=="[object Opera]") {d.addEventListener("DOMContentLoaded", f, false);} else { f(); } })(document, window, '1ff6db7403cd6b0bf10572a1db5a5011','script','static.tildacdn.com/js/tilda-stat-1.0.min.js');
}, 2000);

t_onReady(function () {
var tildaSearchJS = 'https://static.tildacdn.com/js/tilda-search-';
var s = document.createElement('script');
s.src = tildaSearchJS + '1.2.min.js';
s.async = true;
s.onerror = function () {
console.log('Error load Tilda Search in ME901');
}
if (document.querySelectorAll("script[src^='" + tildaSearchJS + "']").length === 0 && document.querySelectorAll("script[src^='" + tildaSearchJS + "']").length === 0) {
document.head.appendChild(s);
}
});


window.zero_window_width_hook='allrecords';
t_onReady(function () {
t_onFuncLoad('t830_init', function () {
t830_init('327156947');
});
});


t_onReady(function () {
t_onFuncLoad('t396_init', function () {
t396_init('326702161');
});
});

t_onReady(function () {
t_onFuncLoad('t396_init', function () {
t396_init('326702162');
});
});

t_onReady(function () {
t_onFuncLoad('t396_init', function () {
t396_init('326702163');
});
});

t_onReady(function () {
t_onFuncLoad('t396_init', function () {
t396_init('326702164');
});
});

t_onReady(function() {
t_onFuncLoad('t_sldsInit', function() {
t_sldsInit('326702165');
});
});

t_onReady(function () {
t_onFuncLoad('t923_init', function () {
t923_init('326702165');
});
});

t_onReady(function () {
t_onFuncLoad('t396_init', function () {
t396_init('326702166');
});
});



(function (d) {
if (!d.visibilityState) {
var s = d.createElement('script');
s.src = 'static.tildacdn.com/js/tilda-polyfill-1.0.min.js';
d.getElementsByTagName('head')[0].appendChild(s);
}
})(document);
function t_onReady(func) {
if (document.readyState != 'loading') {
func();
} else {
document.addEventListener('DOMContentLoaded', func);
}
}
function t_onFuncLoad(funcName, okFunc, time) {
if (typeof window[funcName] === 'function') {
okFunc();
} else {
setTimeout(function() {
t_onFuncLoad(funcName, okFunc, time);
},(time || 100));
}
}


// Refresh my scalp



t_onReady(function () {
var tildaSearchJS = 'https://static.tildacdn.com/js/tilda-search-';
var s = document.createElement('script');
s.src = tildaSearchJS + '1.2.min.js';
s.async = true;
s.onerror = function () {
console.log('Error load Tilda Search in ME901');
}
if (document.querySelectorAll("script[src^='" + tildaSearchJS + "']").length === 0 && document.querySelectorAll("script[src^='" + tildaSearchJS + "']").length === 0) {
document.head.appendChild(s);
}
});window.zero_window_width_hook='allrecords';
t_onReady(function () {
t_onFuncLoad('t830_init', function () {
t830_init('327163983');
});
});

t_onReady(function () {
t_onFuncLoad('t396_init', function () {
t396_init('326702494');
});
});

t_onReady(function () {
t_onFuncLoad('t396_init', function () {
t396_init('326702496');
});
});

t_onReady(function () {
    t_onFuncLoad('t754__showMore', function () {
    t754__showMore('326702497');
    });
    t_onFuncLoad('t754__init', function () {
    t754__init('326702497');
    });
    });

t_onReady(function () {
        t_onFuncLoad('t396_init', function () {
        t396_init('326702498');
        });
        });



       t_onReady(function() {
            t_onFuncLoad('t686_init', function () {
            t686_init('326702499');
            });
            });
            
            t_onReady(function () {
            var hash = window.location.hash;
            t_onFuncLoad('t270_scroll', function () {
            t270_scroll(hash, -3);
            });
            setTimeout(function() {
            var curPath = window.location.pathname;
            var curFullPath = window.location.origin + curPath;
            var recs = document.querySelectorAll('.r');
            Array.prototype.forEach.call(recs, function(rec) {
            var selects = 'a[href^="#"]:not([href="#"]):not(.carousel-control):not(.t-carousel__control):not([href^="#price"]):not([href^="#popup"]):not([href^="#prodpopup"]):not([href^="#order"]):not([href^="#!"]):not([target="_blank"]),' + 
            'a[href^="' + curPath + '#"]:not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"]):not([target="_blank"]),' +
            'a[href^="' + curFullPath + '#"]:not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"]):not([target="_blank"])';
            var elements = rec.querySelectorAll(selects);
            Array.prototype.forEach.call(elements, function(element) {
            element.addEventListener('click', function (event) {
            event.preventDefault();
            var hash = this.hash.trim();
            t_onFuncLoad('t270_scroll', function () {
            t270_scroll(hash, -3);
            });
            });
            });
            });
            if (document.querySelectorAll('.js-store').length > 0 || document.querySelectorAll('.js-feed').length > 0) {
            t_onFuncLoad('t270_scroll', function () {
            t270_scroll(hash, -3, 1);
            });
            }
            }, 500);
            setTimeout(function() {
            var hash = window.location.hash;
            if (hash && document.querySelectorAll('a[name="' + hash.slice(1) + '"]').length > 0) {
            if (window.isMobile) {
            t_onFuncLoad('t270_scroll', function () {
            t270_scroll(hash, 0);
            });
            } else {
            t_onFuncLoad('t270_scroll', function () {
            t270_scroll(hash, 0);
            });
            }
            }
            }, 1000);
            window.addEventListener('popstate', function() {
            var hash = window.location.hash;
            if (hash && document.querySelectorAll('a[name="' + hash.slice(1) + '"]').length > 0) {
            if (window.isMobile) {
            t_onFuncLoad('t270_scroll', function () {
            t270_scroll(hash, 0);
            });
            } else {
            t_onFuncLoad('t270_scroll', function () {
            t270_scroll(hash, 0);
            });
            }
            }
            });
            });

if (! window.mainTracker) { window.mainTracker = 'tilda'; }
setTimeout(function(){ (function (d, w, k, o, g) { var n=d.getElementsByTagName(o)[0],s=d.createElement(o),f=function(){n.parentNode.insertBefore(s,n);}; s.type = "text/javascript"; s.async = true; s.key = k; s.id = "tildastatscript"; s.src=g; if (w.opera=="[object Opera]") {d.addEventListener("DOMContentLoaded", f, false);} else { f(); } })(document, window, '1ff6db7403cd6b0bf10572a1db5a5011','script','../static.tildacdn.com/js/tilda-stat-1.0.min.js');
}, 2000); 

t_onReady(function () {
t_onFuncLoad('t396_init', function () {
t396_init('326702494');
});
});