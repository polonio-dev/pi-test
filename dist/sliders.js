!function () {
  var css =
    '@keyframes pi-slide-next{' +
      '0%{transform:translateX(0);opacity:1}' +
      '49%{transform:translateX(8px);opacity:0}' +
      '50%{transform:translateX(-8px);opacity:0}' +
      '100%{transform:translateX(0);opacity:1}' +
    '}' +
    '@keyframes pi-slide-prev{' +
      '0%{transform:translateX(0);opacity:1}' +
      '49%{transform:translateX(-8px);opacity:0}' +
      '50%{transform:translateX(8px);opacity:0}' +
      '100%{transform:translateX(0);opacity:1}' +
    '}' +
    '[data-pi-slide-arrow="next"].is-pi-animating [data-pi-slide-arrow-icon] svg{' +
      'animation:pi-slide-next .35s ease' +
    '}' +
    '[data-pi-slide-arrow="prev"].is-pi-animating [data-pi-slide-arrow-icon] svg{' +
      'animation:pi-slide-prev .35s ease' +
    '}' +
    '@media (prefers-reduced-motion: reduce){' +
      '[data-pi-slide-arrow].is-pi-animating [data-pi-slide-arrow-icon] svg{animation:none}' +
    '}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // delegated on document: works for buttons added to the page after this script runs too
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-pi-slide-arrow]');
    if (!btn) return;
    btn.classList.remove('is-pi-animating');
    void btn.offsetWidth; // force reflow so rapid clicks restart the animation
    btn.classList.add('is-pi-animating');
  });

  document.addEventListener('animationend', function (e) {
    var btn = e.target.closest('[data-pi-slide-arrow]');
    if (btn) btn.classList.remove('is-pi-animating');
  });
}();
!function () {
  var css =
    '[data-pi-orbit-arrow]{position:relative}' +
    '[data-pi-orbit-arrow] .pi-orbit-ring{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}' +
    '[data-pi-orbit-arrow] .pi-orbit-ring__track{fill:none;stroke:currentColor;stroke-opacity:.25;stroke-width:1.5}' +
    '[data-pi-orbit-arrow] .pi-orbit-ring__sweep{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:0 100;opacity:0}' +
    '[data-pi-orbit-arrow="prev"] .pi-orbit-ring{transform:rotate(180deg)}' +
    '[data-pi-orbit-arrow] [data-pi-orbit-arrow-icon] svg{transform-box:fill-box}' +
    '[data-pi-orbit-arrow="prev"] [data-pi-orbit-arrow-icon] svg{transform-origin:left center}' +
    '[data-pi-orbit-arrow="next"] [data-pi-orbit-arrow-icon] svg{transform-origin:right center}' +
    '[data-pi-orbit-arrow].is-pi-animating .pi-orbit-ring__sweep{' +
      'animation:pi-orbit-sweep 1s ease' +
    '}' +
    '[data-pi-orbit-arrow="prev"].is-pi-animating [data-pi-orbit-arrow-icon] svg{' +
      'animation:pi-orbit-pinch-prev 1s ease' +
    '}' +
    '[data-pi-orbit-arrow="next"].is-pi-animating [data-pi-orbit-arrow-icon] svg{' +
      'animation:pi-orbit-pinch-next 1s ease' +
    '}' +
    '@keyframes pi-orbit-sweep{' +
      '0%{stroke-dasharray:1 99;stroke-dashoffset:0;opacity:1}' +
      '50%{stroke-dasharray:90 10;stroke-dashoffset:-45;opacity:1}' +
      '99%{opacity:1}' +
      '100%{stroke-dasharray:1 99;stroke-dashoffset:-100;opacity:0}' +
    '}' +
    // disappear: pinch toward the tip (0-15%), same as the video.
    // reappear: fast slide + fade (89-96%), same style as the Slide Arrow effect —
    // "next" slides in from the left, "prev" slides in from the right.
    '@keyframes pi-orbit-pinch-next{' +
      '0%{transform:scaleX(1) translateX(0);opacity:1}' +
      '15%{transform:scaleX(0) translateX(0);opacity:0}' +
      '88%{transform:scaleX(0) translateX(0);opacity:0}' +
      '89%{transform:scaleX(1) translateX(-8px);opacity:0}' +
      '96%{transform:scaleX(1) translateX(0);opacity:1}' +
      '100%{transform:scaleX(1) translateX(0);opacity:1}' +
    '}' +
    '@keyframes pi-orbit-pinch-prev{' +
      '0%{transform:scaleX(1) translateX(0);opacity:1}' +
      '15%{transform:scaleX(0) translateX(0);opacity:0}' +
      '88%{transform:scaleX(0) translateX(0);opacity:0}' +
      '89%{transform:scaleX(1) translateX(8px);opacity:0}' +
      '96%{transform:scaleX(1) translateX(0);opacity:1}' +
      '100%{transform:scaleX(1) translateX(0);opacity:1}' +
    '}' +
    '@media (prefers-reduced-motion: reduce){' +
      '[data-pi-orbit-arrow].is-pi-animating .pi-orbit-ring__sweep,' +
      '[data-pi-orbit-arrow].is-pi-animating [data-pi-orbit-arrow-icon] svg{animation:none}' +
    '}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // delegated on document: works for buttons added to the page after this script runs too
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-pi-orbit-arrow]');
    if (!btn) return;
    btn.classList.remove('is-pi-animating');
    void btn.offsetWidth; // force reflow so rapid clicks restart the animation
    btn.classList.add('is-pi-animating');
  });

  document.addEventListener('animationend', function (e) {
    var btn = e.target.closest('[data-pi-orbit-arrow]');
    if (btn) btn.classList.remove('is-pi-animating');
  });
}();
