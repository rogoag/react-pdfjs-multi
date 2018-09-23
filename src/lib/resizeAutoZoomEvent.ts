import 'custom-event-polyfill';

(function() {
  const throttle = function(type: string, name: string) {
    let running = false;
    const func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        window.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    window.addEventListener(type, func);
  };

  throttle('resize', 'resizeAutoZoom');
})();
