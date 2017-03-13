$(document).ready(function() {
  $('#footerHideButton').hide();
  $('.siteButton').hover(function(){
    $('html').css({'background': '#232930 url(inc/' + this.id + 'Ext.jpg) no-repeat center center fixed','background-size':'cover','-webkit-background-size' : 'cover','-moz-background-size' : 'cover','-o-background-size' : 'cover'}).delay(400).fadeIn(400);
  });

  $('#footerButton').click(function(){
    $('#footerButton').hide();
    $('footer').css({'height' : '100vh'});
    $('#footerHideButton').show();
  });
  $('#footerHideButton').click(function(){
    $('#footerHideButton').hide();
    $('footer').css({'height' : '40px'});
    $('#footerButton').show();
    $( "#footerContent" ).show().delay( 300 ).fadeIn( 400 );
  });
});
