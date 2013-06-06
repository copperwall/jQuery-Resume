$(function() {
   var focus = null;

   $('#north').mouseenter(function() {
      $('#north').animate({
         width: "+=20px",
         height: "+=20px",
         top: "-=10px",
         left: "-=10px"
      }, 200);
   });

   $('#north').mouseleave(function() {
      $('#north').animate({
         width: "-=20px",
         height: "-=20px",
         top: "+=10px",
         left: "+=10px"
      }, 200);
   });

   /*$('.sphere').mouseenter(function() {
      $(this).animate({
         width: "+=20px",
         height: "+=20px"
      }, 200);

      if ($(this) === $('#north'))
         $(this).animate({
            top: "-=20px",
            left: "-=20px"
         }, 200);
   });

   $('.sphere').mouseleave(function() {
      $(this).animate({
         width: "-=20px",
         height: "-=20px"
      }, 200);
   });*/

   $('#north').click(function() {
      $('#north').css("z-index", "100");
      $('#north').animate({top: "40%"}, 2000);
      $('#north').animate({
         width: "600px",
         height: "600px",
         top: "20px",
         left: "32%",
      }, 2000);
      
   })
});
