document.addEventListener("click", eventDocClick, false)
window.addEventListener("load", WindowLoad, false)

function WindowLoad() {
  if (window.innerWidth >= 1200) {
    var r
    if ((r = document.querySelector(".headerPage__wrapImg .rellax"))) {
      var itr = 0
      var interval = setInterval(function () {
        itr++
        if (r.clientHeight) {
          clearInterval(interval)
          loadJS("https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js", callRellax, document.body)
          r.classList.add("active")
        }
        if (itr >= 10) {
          clearInterval(interval)
          r.classList.add("active")
        }
      }, 300)
    }
  }
}
function eventDocClick(e) {
  var targ = e.target
  var clickedEl = e.target
  if (clickedEl.className === "headerMain__menu__link") {
    var menuBtn = document.querySelector(".headerMain__menu__bar")
    menuBtn.classList.remove("active")
    var menu = document.querySelector(".headerMain__menu")
    menu.classList.remove("active")
    document.body.classList.remove("headerMainMenuActive")
  }

  while (targ && targ != this) {
    if (targ.classList.contains("headerMain__menu__bar")) {
      targ.classList.toggle("active")
      var menu
      if (targ.classList.contains("active")) {
        if ((menu = document.querySelector(".headerMain__menu"))) {
          menu.classList.add("active")
          document.body.classList.add("headerMainMenuActive")
        }
      } else {
        if ((menu = document.querySelector(".headerMain__menu"))) {
          console.log(targ.className)
          menu.classList.remove("active")
          document.body.classList.remove("headerMainMenuActive")
        }
      }
      break
    }
    targ = targ.parentNode
  }
}

var fnDelay = (function () {
  var timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()
var loadJS = function (url, callback, locToInsert) {
  var scriptTag = document.createElement("script")
  scriptTag.src = url

  scriptTag.onload = callback
  scriptTag.onreadystatechange = callback

  locToInsert.appendChild(scriptTag)
}
var callRellax = function () {
  var rellax = new Rellax(".rellax", {
    center: true,
    zIndex: -1
  })
}
AOS.init({
  /*disable: function () {
		var maxWidth = 1024;
		return window.innerWidth < maxWidth;
	},*/
  offset: 100,
  duration: 3000
  // easing: 'ease-in-sine',
  // delay: 100,
  // once: true
})
