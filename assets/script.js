$( ".more-info" ).click(function() {
    $(".layer-two").toggleClass("isOpen");
      if (  $(this ).css( "transform" ) == 'none' ){
          $(this).css("transform","rotate(45deg)");
      } else {
          $(this).css("transform","" );
      }
  });