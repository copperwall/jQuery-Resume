$(function() {
   var focus = null;

   $('.sphere').mouseenter(function() {
      $(this).animate({
         width: "+=20px",
         height: "+=20px"
      }, 200);
   });

   $('.sphere').mouseleave(function() {
      $(this).animate({
         width: "-=20px",
         height: "-=20px"
      }, 200);
   });

   $('#north').click(function() {
      $('#north').animate({top: "40%"}, 2000);
      $('#north').animate({
         width: "80%",
         height: "100%",
         top: 0,
         left: 0
      }, 2000);
   })
});
