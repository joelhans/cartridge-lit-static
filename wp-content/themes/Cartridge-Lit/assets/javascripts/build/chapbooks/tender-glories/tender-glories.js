(function() {
  jQuery(function($) {
    return $('.clickable').click(function(ev) {
      var centY, clickY, diffY, scrollY, winY;
      winY = $(window).height();
      clickY = ev.pageY;
      scrollY = $(window).scrollTop();
      centY = (winY / 2) + scrollY;
      diffY = clickY - centY;
      if (clickY > centY) {
        diffY = diffY + 200;
      } else {
        diffY = diffY - 200;
      }
      return $('html, body').animate({
        scrollTop: scrollY + diffY
      });
    });
  });

}).call(this);
