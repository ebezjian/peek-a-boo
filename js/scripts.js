$(document).ready(function() {
    $(".clickable").click(function() {
      $("#walrus-showing").fadeToggle();
      $("#walrus-hidden").toggle();
     
    });
  });

$(document).ready(function() {
   $(".clickable2").click(function() {
      $("#sandcastle-showing").fadeToggle();
      $("#sandcastle-hidden").toggle(); 

    });
  });

$(document).ready(function() {
  $("button#light").click (function() {
      $("body").removeClass();
      $("body").addClass("cyan-background");

    });
  });
      
$(document).ready(function() {
  $("button#black").click (function() {
      $("body").removeClass();
      $("body").addClass("black-background");  
  
  });
});


