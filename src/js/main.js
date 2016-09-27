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

    // var url = "https://interactive.guim.co.uk/docsdata-test/1lZsRxsU6rF4sAruy7MEIBbOlz3x3egAF9PE1wnbQPVU.json"
    // reqwest({
    //     url: url,
    //     type: 'json',
    //     crossOrigin: true,
    //     success: function(resp){
    //         data = resp;
    //         templateInit(config)
    //     }
    // });
}

function templateInit(config){
    // console.log(data)
    // // Header
    // var introText = data.intro_quote.split(' ');
    // var introTextLength = introText.length;
    // var newIntroText = "";
    //
    // introText.forEach(function(word,i){
    //     newIntroText += word + " ";
    //     if(i === introTextLength - 10){
    //         newIntroText += '<img src="' + config.assetPath + '/assets/imgs/Ewen.png" class="img-ewen"/>'
    //     }
    // })
    //
    // el.querySelector('#header-standfirst span').innerHTML = newIntroText;
    //
    // removeHeaderContent();
    //
    // // Rest of page
    // var mainTemplate = Handlebars.compile(template);
    // var mainTemplateParsed = mainTemplate(data).replace(/%assetPath%/g,config.assetPath);
    //
    // el.querySelector('#interactive-content').innerHTML = mainTemplateParsed;
    //
    // var playContainers = document.querySelectorAll('.talking-head');
    //
    // for(var i =0;i <playContainers.length; i++){
    //     playContainers[i].addEventListener('click',function(e){
    //         var isActive = e.target.parentElement.className.indexOf('video-active') > -1 ? true : false;
    //         for(var j =0;j < playContainers.length; j++){
    //             playContainers[j].className = " talking-head";
    //             playContainers[j].querySelector('video').pause();
    //         }
    //         if(!isActive){
    //             e.target.parentElement.className += " video-active";
    //             e.target.parentElement.querySelector('video').play();
    //             e.target.parentElement.querySelector('video').autoplay = true;
    //         }
    //     })
    // }
    //
    // var placeHolder = document.querySelector('.video-placeholder');
    //
    // placeHolder.addEventListener('click',function(e){
    //     el.querySelector('.interactive-video-container iframe').src = data.section_video.video_url + "#autoplay"
    //     placeHolder.style.display = "none"
    // })
}
