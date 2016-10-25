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


    var content = [
      {
        'heading': 'The Counted',
        'summary': 'The Counted is a project by the Guardian – and you – working to ​find the true number of people killed by police and other law enforcement agencies in the U​S​​. ​The investigation told the stories of who ​these people were, and established the trends in how they died. The US government responded​ to the revelations',
        'link': 'https://www.theguardian.com/us-news/ng-interactive/2015/jun/01/the-counted-police-killings-us-database'
      }, {
        'heading': 'End FGM',
        'summary': 'The Guardian’s Global FGM campaign has helped to get laws passed in Africa banning FGM; it persuaded the British government to write to all schools on the subject and Barack Obama to order a national survey into FGM in the US; and it has raised $4.5m from foundations to fight FGM worldwide',
        'link': 'https://www.theguardian.com/end-fgm'
      }
    ]

    var projectsBlock = document.querySelector('.projects-block');
    appendContent(content, projectsBlock)

}

function appendContent(content, block) {
  var projectPrototype = block.querySelector('[data-please-clone-me]');
  content.forEach(function(c) {
    console.log('content');
    var thisProject = projectPrototype.cloneNode(true);
    [].forEach.call(thisProject.querySelectorAll('[data-replace-text]'), function(e) {
      var attr = e.getAttribute('data-replace-text');
      console.log(c, attr, c[attr]);
      e.textContent = c[attr];
    });
    thisProject.removeAttribute('data-please-clone-me');
    block.appendChild(thisProject);
  });
}
