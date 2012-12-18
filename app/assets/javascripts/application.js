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
      $(this).children("ul").stop(true, true).slideDown("fast");
    },
    function(){
      $(this).children("ul").slideUp("fast");
    }
  );
  
  // HEADER TAB MENU WHOLE LI CLICKABLE
  $(".tabmenu li").on("click", function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });
  
  // SERVICIOS DETAILS WHEN HOVERED
  $("#servicios_list h3").hover(function() {
    $(this).toggleClass("hovered");
    $(this).next(".servicioslist ul").toggleClass("hovered");
  });
  $(".servicioslist ul").hover(function() {
    $(this).toggleClass("hovered");
    $(this).prev("#servicios_list h3").toggleClass("hovered");
  });
  
  
  // DEAL WITH PLACEHOLDERS IF BROWSER SUCKS AND DOES NOT FULLY SUPPORT HTML5
  // [ http://www.cssnewbie.com/cross-browser-support-for-html5-placeholder-text-in-forms/ ]
  jQuery(function() {
    jQuery.support.placeholder = false;
    test = document.createElement('input');
    if('placeholder' in test) jQuery.support.placeholder = true;
  });
  $(function() {
    if(!$.support.placeholder) { 
      var active = document.activeElement;
      $(':text, textarea').focus(function () {
        if ( $(this).attr('placeholder') != '' && $(this).attr('placeholder') != undefined && $(this).val()==$(this).attr('placeholder')) {
          $(this).val('').removeClass('hasPlaceholder');
        }
      }).blur(function () {
        if ( $(this).attr('placeholder') != '' && $(this).attr('placeholder') != undefined && ( $(this).val()=='' || $(this).val()==$(this).attr('placeholder')) ) {
          $(this).val($(this).attr('placeholder'));
          $(this).addClass('hasPlaceholder');
        }
      });
      $(':text, textarea').blur();
      $(active).focus();
    }
  });
  
  // CONTACT FORM VALIDATION
  $("#contactsubmit").click(function() {
    $(".formcontainer").removeClass("error"); // REMOVE ERROR CLASS IF PREVIOUS ERRORS
    $(this).parent().find('.hasPlaceholder').each(function() { $(this).val(''); }); // REMOVE HACKY PLACEHOLDERS
    // EMAIL NOT NULL
    if ( $.trim( $("#email").val() ) == "" ) {
      $("#formcontainer_email").addClass("error");
      $("#email").focus();
      return false;
    }
    // MSJ NOT NULL
    else if ( $.trim( $("#msj").val() ) == "" ) {
      $("#formcontainer_msj").addClass("error");
      $("#msj").focus();
      return false;
    }
    else {
      return true;
    }
  });
  
});
