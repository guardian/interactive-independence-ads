import reqwest from 'reqwest'
import mainHTML from './text/main.html!text'
import share from './lib/share'
// import template from './text/template.html!text'
// import handlebars from 'handlebars'

var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');
var el;
var data;

export function init(dom, context, config, mediator) {
  el = dom;
  el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

  document.querySelector('#g-independence-10-16 .top').onclick = function() {
    scrollTo(document.querySelector('body'), this.clientHeight, 160);
  }

  var scrollToElements = document.querySelectorAll('[data-scroll-to]');
  for (var i = 0; i < scrollToElements.length; i++) {
    scrollToElements[i].onclick = function() {
      var targetElement = document.querySelector(this.getAttribute('data-scroll-to'));
      scrollTo(document.querySelector('body'), targetElement.offsetTop-72, 160);
    }
  }

}


function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
