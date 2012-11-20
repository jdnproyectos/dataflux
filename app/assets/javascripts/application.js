//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  
  $("#searchsubmit").hover(
    function(){
      $("#searchbutton").css("opacity", 1);
    },
    function(){
      $("#searchbutton").css("opacity", 0);
    }
  );
  
});
