//= require jquery
//= require jquery_ujs
//= require jquery.colorbox
//= require jquery.flexslider
//= require jquery.hoverIntent
//= require scrollingcarousel.2.0


$(window).load(function() {
  // FLEX MY SLIDER
  $(".flexslider").flexslider();
});

$(document).ready(function() {

  // MOBILE HEADERBOTTOMTABSMENU
  $("a.hbt").click(function() {
    if ( $(this).parent().hasClass("expanded") ) {
      $(this).parent().find(".dropmenu").slideUp();
      $(this).parent().removeClass("expanded");
    } else {
      if ( $(".hbtwrapper.expanded").size() > 0 ) {
        $(".hbtwrapper.expanded").find(".dropmenu").slideUp();
        $(".hbtwrapper.expanded").removeClass("expanded");
        $(this).parent().find(".dropmenu").delay("500").slideDown();
        $(this).parent().addClass("expanded");
      } else {
        $(this).parent().find(".dropmenu").slideDown();
        $(this).parent().addClass("expanded");
      }
    }
  });

  // FIX HEADERS WITH LEDs
  $("h2.withLEDs").wrapInner("<span></span>")

  // GLOWING
  $(".section_content h1 span, h2.withLEDs span").hover(function() {
    $(this).parent().toggleClass("hovered");
  });

  // UNFINISHED SECTION LINKS (EN CONSTRUCCION)
  $(".dropmenu.cloud a, .dropmenu.tic a, .enconstruccion a").click(function(e) {
    e.preventDefault();
  });
  var temp = "";
  $(".dropmenu.cloud a, .dropmenu.tic a").hover(function() {
    temp = $(this).html();
    $(this).css("background", "#707070").css("color", "#ccc");
    $(this).html("*En Construcción*");
  }, function() {
    $(this).css("background", "#404040").css("color", "white");
    $(this).html(temp);
  });
  $(".enconstruccion a").hover(function() {
    $(this).css("color", "#ccc");
    $(this).parent().append("<span id='enconst' style='text-decoration:none;color:gray;'>&nbsp;&nbsp;&nbsp;&nbsp; *En Construcción*</span>");
  }, function() {
    $(this).css("color", "#007be0");
    $("#enconst").remove();
  });

  // CONTACTO FORM
  $("#contactosubmit").click(function() {
    $(".contactoformcontainer").removeClass("error");
    if ( !isValidEmailAddress($("#email").val()) ) {
      $("#form_email").addClass("error");
      $("#email").focus();
      return false;
    }
    else if ( $.trim( $("#mensaje").val() ) == "" ) {
      $("#form_mensaje").addClass("error");
      $("#mensaje").focus();
      return false;
    }
    else {
      $("#contactoform").trigger("submit");
      $(this).addClass("pushed");
      return true;
    }
  });

  // SLIDEABLE CONTENT
  $(".slideableContent, .less").hide();
  $("span.more").click(function() {
    $(this).parent().find(".slideableContent").slideDown("slow");
    $(this).hide();
    $(this).parent().find("span.less").fadeIn();
    $(this).parent().addClass("expanded");
  });
  $("span.less").click(function() {
    $(this).parent().find(".slideableContent").slideUp("slow");
    $(this).hide();
    $(this).parent().find("span.more").fadeIn();
    $(this).parent().removeClass("expanded");
  });
  $(".slideableContentHeader").click(function() {
    if ( $(this).parent().hasClass("expanded") ) {
      $(this).parent().find("span.less").click();
    } else {
      $(this).parent().find("span.more").click();
    }
  });

  // BACK2TOP
  var elementPosition = $(".section_content").offset();
  $(window).scroll(function() {
    if($(window).scrollTop() > elementPosition.top){
      $("#back2top").addClass("on");
    } else {
      $("#back2top").removeClass("on");
    }
  });

  // SMOOTHSCROLLIN'
  var $root = $("html, body");
  $(".subsnav a, .back2top_inline, .footnote, .foot, .smooth").click(function() {
    $root.animate({
      scrollTop: $( $.attr(this, "href") ).offset().top - 30
    }, 500);
    return false;
  });

  // LOGO SCROLLERS
  $(".scroller").scrollingCarousel({
    autoScroll: true,
    autoScrollSpeed: 40000
  });

  // COLORBOX
  $(".colorbox").colorbox({
    inline: true
  });

});


function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(emailAddress);
};
