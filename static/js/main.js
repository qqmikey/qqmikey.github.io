$( document ).ready(function() {
                            var elems = $('.service_block');

                            function equalHeight(elems) {
                              function getMax(cb) {
                                var max = 0,
                                  count = elems.length;

                                elems.each(function () {
                                  if ($(this).height() > max) {
                                    max = $(this).height();
                                  }
                                  if (!--count) {
                                    cb(max);
                                  }
                                });
                              }

                              getMax(function (height) {
                                elems.css('height', height)
                              }); 
                              
                            }

                            equalHeight(elems);

                            window.addEventListener("resize", function (e) {
                                var count = elems.length;
                                elems.each(function (el, i) {
                                  $(this).height($(this).find('img').height() + $(this).find('p').height() + 10);
                                  if (!--count) {
                                    equalHeight(elems);
                                  }
                                });
                            });
                          });