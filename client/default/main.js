$(document).ready(function(){
  $('body').addClass("theme");
  $('.nav_item').each(function() {
    $(this).bind('click', function(e){
      var mainTitle = $('.pageTitle').text();
      e.preventDefault();
      var targetId = $(this).attr('href');
      var title = $(this).find('.item').find('h2').text();
      $('.pageTitle').text(title);
      $('.back_button').show().unbind().bind('click', function(){
        $(this).hide();
        $('.main_view').hide();
        $('.nav_item').show();
        $('.pageTitle').text(mainTitle);
      });
      $('.main_view, .nav_item').hide();
      $(targetId).show();
    })
  });
})

var backBtnCount = 0;
$fh.ready(function(){
  $fh.env(function(props){
    console.log("device properties: " + JSON.stringify(props));
  });
  $fh.handlers({type:'back'}, function(){
      if(backBtnCount < 1){
        alert("Backbutton Override!! Press again to exit!!");
        backBtnCount++;
        return false;
      } else {
    	return true;
      }
   }); 
})
