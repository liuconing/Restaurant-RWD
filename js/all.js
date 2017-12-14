$(document).ready(function() {
    $('.menu-bar a').click(function(event){
       $('.menu-hb').slideToggle(1000);
       $(".menu-bar i").toggleClass("active");
   });
   /*shopping 頁面 */
   $(".content-left a").click(function(event){
       $(this).parent().addClass("active");
       $(this).parent().siblings().removeClass("active");
       $(this).addClass("active").siblings().toggleClass("active");
   });
//    $(".content-left a").click(function(event){
//     $(this).addClass("active").siblings().toggleClass("active");
//    });
   $(".fa-size").click(function(event){
       $(this).toggleClass("fa-heart-o");
   });
 });
