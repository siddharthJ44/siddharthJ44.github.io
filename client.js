var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';
var BLACK_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg';

var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
};


window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: {
        dark: WHITE_ICON,
        light: BLACK_ICON
      },
      text: 'ThoughtFlow Mindmap',
      condition: 'always',
      //url: 'https://siddharthj44.github.io/indexnew.html',
	  target: 'Inspiring Boards', // optional target for above url
	  callback: (t) => t.modal({
		  url: 'https://siddharthj44.github.io/indexnew.html',
		  fullscreen: true,
	  }),
	  
    }];
  },
  'card-back-section': function(t, options){
    return {
      title: 'My Card Back Section',
      icon: GRAY_ICON, // Must be a gray icon, colored icons not allowed.
      content: {
        type: 'iframe',
        url: t.signUrl('./section.html'),
        height: 230, // Max height is 1500.
        action: {
          text: 'My Action',
          callback: (t) => t.popup(...),
        },
      }
    };
  }
});