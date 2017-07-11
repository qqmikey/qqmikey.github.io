var els = document.getElementsByClassName('service_block');

function equalHeight() {
    function getMax() {
      var max = 0,
        count = els.length;

      for (var i = 0;i < els.length; i++) {
          if (els[i].clientHeight > max) {
            max = els[i].clientHeight;
          }
      }
      return max;
    }

    for (var i = 0;i < els.length; i++) {
          els[i].style.height = getMax() + 'px';
      }
  }

$( document ).ready(function() {
  window.addEventListener("resize", function (e) {
      var count = els.length;
      $('.service_block').each(function () {
        var imgHeight = $(this).find('img').height(),
          pHeight = $(this).find('p').height();
        // $(this).height(imgHeight + pHeight + 10);
        this.style.height = imgHeight + pHeight + 10 + 'px';
        if (!--count) {
          equalHeight(els);
        }
      });
  });
});

$(window).on("load", function() {
  equalHeight(els);
});