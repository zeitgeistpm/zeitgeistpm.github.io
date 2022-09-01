document.addEventListener('DOMContentLoaded', domCntLoaded, false);
document.addEventListener("click", eventDocClick, false);
window.addEventListener("orientationchange", function () { fnDelay(function () { WindowRotationEvent() }, 300) }, false);
window.addEventListener("resize", function () { fnDelay(function () { WindowResizeEvent() }, 300) }, false);

function WindowResizeEvent() {
	// body...
}
function WindowRotationEvent() {

}
function domCntLoaded() {

}
function eventDocClick(e) {
    var targ = e.target;
    var clickedEl = e.target;

    while (targ && targ != this) {
    	if (targ.classList.contains("headerMain__menu__bar")) {
    		targ.classList.toggle("active");
    		var menu;
    		if(targ.classList.contains("active")) {    			
	    		if(menu = document.querySelector(".headerMain__menu")) {
	    			menu.classList.add("active");
	    			document.body.classList.add("headerMainMenuActive")
	    		}
    		}
    		else {
    			if(menu = document.querySelector(".headerMain__menu")) {
	    			menu.classList.remove("active");
	    			document.body.classList.remove("headerMainMenuActive");
	    		}	
    		}
    		break;
    	}
        targ = targ.parentNode;
    }
}

var fnDelay = function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
}();

AOS.init({
	/*disable: function () {
		var maxWidth = 1024;
		return window.innerWidth < maxWidth;
	},*/
	offset: 100,
	duration: 3000,
	// easing: 'ease-in-sine',
	// delay: 100,
	// once: true
});

var rellax = new Rellax('.rellax', {
	center: true,
	zIndex:-1
});
/*var rellax = new Rellax('.rellax-index-1', {
	center: true,
	min: 0,
	max: 200,
	horizontal: false, vertical: true
});*/

function getMQ(query, size) {
    // query, size - опциональные аргументы (работают только в паре)

    var mq = "";

    if (query) {
        mq = false;
        if (query == "min-width") {
            if (size == "xs" && Modernizr.mq("(min-width: 320px)")) {
                mq = true;
            }
            else if (size == "sm" && Modernizr.mq("(min-width: 576px)")) {
                mq = true;
            }
            else if (size == "md" && Modernizr.mq("(min-width: 768px)")) {
                mq = true;
            }
            else if (size == "lg" && Modernizr.mq("(min-width: 992px)")) {
                mq = true;
            }
            else if (size == "xl" && Modernizr.mq("(min-width: 1200px)")) {
                mq = true;
            }
            else if (size == "xxl" && Modernizr.mq("(min-width: 1400px)")) {
                mq = true;
            }
            else if (size == "3xl" && Modernizr.mq("(min-width: 1600px)")) {
                mq = true;
            }
            else if (size == "4xl" && Modernizr.mq("(min-width: 1880px)")) {
                mq = true;
            }
        }
        else if (query == "max-width") {
            if (size == "sm" && Modernizr.mq("(max-width: 575px)")) {
                mq = true;
            }
            else if (size == "md" && Modernizr.mq("(max-width: 991px)")) {
                mq = true;
            }
            else if (size == "lg" && Modernizr.mq("(max-width: 1199px)")) {
                mq = true;
            }
            else if (size == "xl" && Modernizr.mq("(max-width: 1399px)")) {
                mq = true;
            }
            else if (size == "xxl" && Modernizr.mq("(max-width: 1599px)")) {
                mq = true;
            }
            else if (size == "3xl" && Modernizr.mq("(max-width: 1879px)")) {
                mq = true;
            }
        }
    }
    else {
        if (Modernizr.mq("(max-width: 575px)")) {
            mq = "xs";
        }
        else if (Modernizr.mq("(min-width: 576px) and (max-width: 767px)")) {
            mq = "sm";
        }
        else if (Modernizr.mq("(min-width: 768px) and (max-width: 991px)")) {
            mq = "md";
        }
        else if (Modernizr.mq("(min-width: 992px) and (max-width: 1199px)")) {
            mq = "lg";
        }
        else if (Modernizr.mq("(min-width: 1200px) and (max-width: 1399px)")) {
            mq = "xl";
        }
        else if (Modernizr.mq("(min-width: 1400px) and (max-width: 1599px)")) {
            mq = "xxl";
        }
        else if (Modernizr.mq("(min-width: 1600px) and (max-width: 1879px)")) {
            mq = "3xl";
        }
        else {
            mq = "4xl";
        }
    }

    return mq;
}