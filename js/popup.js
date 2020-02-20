$(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    

        $('.tab-center').click( function(event){
          event.preventDefault();
          $('.overlay').fadeIn(297, function(){
            $('#popup1') 
            .css('display', 'block')
            .animate({opacity: 1}, 198);
          });
        });
        $('#popup1, .overlay').click( function(){
          $('#popup1').animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
            $('.hide-popup').fadeOut(297);
          });
        });
    });
