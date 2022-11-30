$(document).ready(function(){
    $('.nav-button:nth-child(1)').addClass('selected');
    $('.nav-button').on('click', function(){
        $('.nav-button').removeClass('selected');
        $(this).addClass('selected');
    });
  
});

$(document).ready(function(){

    
    $('#table-1').addClass('hide');
    $('#table-2').addClass('hide');

    $('.nav-button:nth-child(1)').on('click', function(){
        $('#table-1').removeClass('hide');
        $('#table-2').addClass('hide');
    });
    
    $('.nav-button:nth-child(2)').on('click', function(){
        $('#table-1').addClass('hide');
        $('#table-2').removeClass('hide');
    });

});