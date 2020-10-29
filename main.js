$(document).ready(function () {

    var principalBox = $("#principalBox")

    $('#switchMode').change(function (e) { 
      
      if ($(principalBox).hasClass('dark')) {
        
        
        $(principalBox).removeClass('dark').addClass('light');
        $('h2').removeClass('card-dark-mode-h2').addClass('card-light-mode-h2');
        $('h3').removeClass('overview').addClass('overview-light-color');
        $('header h4').removeClass('light-color').addClass('dark-color');
        $('section h4').removeClass('light-color').addClass('dark-mode-h4');
        $('p').removeClass('text-color-dark-mode').addClass('text-color-light-mode');
        $('p span').removeClass('text-color-dark-mode').addClass('text-color-light-mode');
        $('.card').removeClass('card-dark-mode').addClass('card-light-mode');
        $('small').removeClass('small-dark-mode').addClass('small-light-mode');
        $('label').removeClass('dark-mode').addClass('light-mode');
        $('#bgTop').addClass('background-top');
        $('#separator').removeClass('dark-separator').addClass('light-separator');
        $('#attribution span').removeClass('text-white');
      } else {
        $(principalBox).removeClass('light').addClass('dark');
        $('h2').removeClass('card-light-mode-h2').addClass('card-dark-mode-h2');
        $('h3').removeClass('overview-light-color').addClass('overview');
        $('header h4').removeClass('dark-color').addClass('light-color');
        $('section h4').removeClass('dark-mode-h4').addClass('light-color');
        $('p').removeClass('text-color-light-mode').addClass('text-color-dark-mode');
        $('p span').removeClass('text-color-light-mode').addClass('text-color-dark-mode');
        $('.card').removeClass('card-light-mode').addClass('card-dark-mode');
        $('small').removeClass('small-light-mode').addClass('small-dark-mode');
        $('label').removeClass('light-mode').addClass('dark-mode');
        $('#bgTop').removeClass('background-top');
        $('#separator').addClass('dark-separator').removeClass('light-separator');
        $('#attribution span').addClass('text-white');
        
      }
       
    });
});