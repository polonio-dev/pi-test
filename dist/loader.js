!function () {
  var script = document.currentScript;
  if (!script) return;

  var CATEGORIES = ['buttons', 'sliders', 'underlines'];

  CATEGORIES.forEach(function (category) {
    if (script.hasAttribute('ps-' + category)) {
      import(new URL('./' + category + '.js', script.src).href);
    }
  });
}();
