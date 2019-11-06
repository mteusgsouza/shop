// var $grid = $('.grid').isotope({
    
// });

// $('.filter-list-group').on('click', 'a', function () {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
// })

$(window).on('load', function () {
    var portfolioIsotope = $('.product-container').isotope({
      itemSelector: '.product-item'
    });
    $('#product-filters li').on( 'click', function() {
      $("#product-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });