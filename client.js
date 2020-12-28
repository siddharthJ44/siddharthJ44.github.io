var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';
var BLACK_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg';

var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
};


window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      // we can either provide a button that has a callback function
      /*icon: {
        dark: WHITE_ICON,
        light: BLACK_ICON
      },
      text: 'ThoughtFlow MindMap',
      callback: onBtnClick,
      condition: 'edit'
    }, {*/
      // or we can also have a button that is just a simple url
      // clicking it will open a new tab at the provided url
      icon: {
        dark: WHITE_ICON,
        light: BLACK_ICON
      },
      text: 'ThoughtFlow Mindmap',
      condition: 'always',
      url: 'https://siddharthj44.github.io/indexnew.html',
      target: 'Inspiring Boards' // optional target for above url
    }];
  }
});