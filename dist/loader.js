!function () {
  // document.currentScript is always null inside a type="module" script,
  // so we can't use it here. import.meta.url is reliable in modules and
  // gives us this script's own URL, which we use both to resolve sibling
  // bundle URLs and to find the matching <script> tag for its attributes.
  var scriptEl = Array.prototype.find.call(document.querySelectorAll('script[src]'), function (s) {
    return s.src === import.meta.url;
  });
  if (!scriptEl) return;

  var CATEGORIES = ['buttons', 'sliders', 'underlines'];

  CATEGORIES.forEach(function (category) {
    if (scriptEl.hasAttribute('ps-' + category)) {
      import(new URL('./' + category + '.js', import.meta.url).href);
    }
  });
}();
