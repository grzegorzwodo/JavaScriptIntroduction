$(document).ready(function(){
   //dokument html załadowany do przeglądarki
   //możemy wykonywać na nim operacje JS
   //$(selector).action()
   $(".submenu1 span").click(function() {
        $("#submenu1").toggle(600);
   });

   $(".submenu2 span").click(function() {
        $("#submenu2").toggle(600);
   });

   $(".submenu3 span").click(function() {
        $("#submenu3").toggle(600);
   });
})