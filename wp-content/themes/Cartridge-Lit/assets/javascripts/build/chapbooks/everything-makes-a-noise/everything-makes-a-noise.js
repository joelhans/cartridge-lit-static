(function() {
  $(function() {
    var canvas, ctx, ctx2, ctxHeight, ctxLast, ctxWidth, density, hideFill, hideOnMove, mDown, overlay, r1, r2, resizeTimer;
    canvas = $('canvas');
    ctx = canvas[0].getContext('2d');
    ctx2 = canvas[1].getContext('2d');
    ctxLast = canvas[1];
    mDown = false;
    r1 = 150;
    r2 = 400;
    density = .7;
    hideOnMove = true;
    hideFill = 'rgba( 0, 0, 0, .92 )';
    overlay = 'rgba( 0, 0, 0, 1 )';
    ctxWidth = window.innerWidth;
    ctxHeight = window.screen.availHeight;
    canvas[0].width = ctxWidth;
    canvas[0].height = ctxHeight;
    canvas[1].width = ctxWidth;
    canvas[1].height = ctxHeight;
    ctx.fillStyle = overlay;
    ctx.fillRect(0, 0, ctxWidth, ctxHeight);
    ctx.globalCompositeOperation = 'destination-out';
    $('canvas, 1').on('mousemove touchmove', function(ev, ev2) {
      var pX, pY, radGrd;
      ev2 && (ev = ev2);
      pX = ev.clientX;
      pY = ev.clientY;
      if (ev.type === 'touchmove') {
        pX = ev.originalEvent.touches[0].clientX;
        pY = ev.originalEvent.touches[0].clientY;
      }
      radGrd = ctx.createRadialGradient(pX, pY, r1, pX, pY, r2);
      radGrd.addColorStop(0, 'rgba( 0, 0, 0,  1 )');
      radGrd.addColorStop(density, 'rgba( 0, 0, 0, .1 )');
      radGrd.addColorStop(1, 'rgba( 0, 0, 0,  0 )');
      ctx.fillStyle = radGrd;
      ctx.fillRect(pX - r2, pY - r2, r2 * 2, r2 * 2);
      ctx2.globalCompositeOperation = 'source-over';
      ctx2.clearRect(0, 0, ctxWidth, ctxHeight);
      ctx2.fillStyle = hideFill;
      ctx2.fillRect(0, 0, ctxWidth, ctxHeight);
      radGrd = ctx.createRadialGradient(pX, pY, r1, pX, pY, r2);
      radGrd.addColorStop(0, 'rgba( 0, 0, 0,  1 )');
      radGrd.addColorStop(.8, 'rgba( 0, 0, 0, .1 )');
      radGrd.addColorStop(1, 'rgba( 0, 0, 0,  0 )');
      ctx2.globalCompositeOperation = 'destination-out';
      ctx2.fillStyle = radGrd;
      ctx2.fillRect(pX - r2, pY - r2, r2 * 2, r2 * 2);
    }).trigger('mousemove', {
      clientX: 150,
      clientY: 150
    });
    resizeTimer = null;
    $(window).on('resize', function(e) {
      clearTimeout(resizeTimer);
      return resizeTimer = setTimeout(function() {
        canvas[0].width = ctxWidth;
        canvas[0].height = ctxHeight;
        canvas[1].width = ctxWidth;
        canvas[1].height = ctxHeight;
        ctx.fillStyle = overlay;
        ctx.fillRect(0, 0, ctxWidth, ctxHeight);
        return ctx.globalCompositeOperation = 'destination-out';
      }, 250);
    });
  });

}).call(this);
