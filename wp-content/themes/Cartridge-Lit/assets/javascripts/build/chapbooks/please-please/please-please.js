(function() {
  $(document).ready(function() {
    $('.svg--poem').waypoint(function(dir) {
      if (dir === 'down') {
        return $(this.element).attr("class", "svg--poem animated");
      }
    }, {
      offset: 'bottom-in-view'
    });
    return $('.svg--title').waypoint(function(dir) {
      if (dir === 'down') {
        return $(this.element).attr("class", "svg--title animated");
      }
    }, {
      offset: 'bottom-in-view'
    });
  });

}).call(this);
