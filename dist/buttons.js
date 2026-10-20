!function () {
  var css =
    '@keyframes pi-arrow-loop{' +
      '0%{transform:translateX(0);opacity:1}' +
      '49%{transform:translateX(5px);opacity:0}' +
      '50%{transform:translateX(-5px);opacity:0}' +
      '100%{transform:translateX(0);opacity:1}' +
    '}' +
    '[data-pi-arrow]:hover [data-pi-arrow-icon] svg{' +
      'animation:pi-arrow-loop 1.1s ease-in-out infinite' +
    '}' +
    '@media (prefers-reduced-motion: reduce){' +
      '[data-pi-arrow]:hover [data-pi-arrow-icon] svg{animation:none}' +
    '}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}();
!function () {
  var css =
    '[data-pi-arrow-down-icon] svg{' +
      'transform-box:fill-box;transform-origin:center;' +
      'rotate:0deg;translate:0 0;' +
      'transition:rotate .25s ease,translate .25s ease' +
    '}' +
    '@keyframes pi-arrow-down-spin{' +
      'to{rotate:90deg}' +
    '}' +
    '@keyframes pi-arrow-down-bounce{' +
      '0%,100%{translate:0 0}' +
      '50%{translate:0 3px}' +
    '}' +
    '[data-pi-arrow-down]:hover [data-pi-arrow-down-icon] svg{' +
      'animation:' +
        'pi-arrow-down-spin .25s ease-out forwards,' +
        'pi-arrow-down-bounce .7s ease-in-out .25s infinite' +
    '}' +
    '@media (prefers-reduced-motion: reduce){' +
      '[data-pi-arrow-down-icon] svg{transition:none}' +
      '[data-pi-arrow-down]:hover [data-pi-arrow-down-icon] svg{' +
        'animation:none;rotate:90deg' +
      '}' +
    '}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}();
!function () {
  var css =
    '[data-pi-progress]{position:relative;z-index:0;overflow:hidden}' +
    '[data-pi-progress-fill]{' +
      'position:absolute;inset:0;z-index:-1;' +
      'background:currentColor;opacity:.15;' +
      'transform:scaleX(0);transform-origin:left;' +
      'pointer-events:none;' +
      'transition:transform .3s ease' +
    '}' +
    '[data-pi-progress]:hover [data-pi-progress-fill]{' +
      'transform:scaleX(1);' +
      'transition:transform 1.6s linear' +
    '}' +
    '@media (prefers-reduced-motion: reduce){' +
      '[data-pi-progress-fill]{transition:none}' +
      '[data-pi-progress]:hover [data-pi-progress-fill]{transition:none;transform:scaleX(1)}' +
    '}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}();
