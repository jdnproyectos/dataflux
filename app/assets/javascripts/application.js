//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  
  // HEADER SEARCH FORM
  $("#searchsubmit").hover(
    function(){
      $("#searchbutton").css("opacity", 1);
    },
    function(){
      $("#searchbutton").css("opacity", 0);
    }
  );
  
  // SLIDEDOWN MENUS WHEN HOVERED
  $(".tabmenuheader").hover(
    function(){
      $(this).children("ul").stop(true, true).slideDown();
    },
    function(){
      $(this).children("ul").slideUp();
    }
  );
  
  // HEADER TAB MENU WHOLE LI CLICKABLE
  
  
});
