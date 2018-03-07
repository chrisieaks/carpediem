
//    Header clock
$(document).ready(function(){
    function displayTime() {
        var element = document.getElementById("clock");
        var now = new Date();
        element.innerHTML = now.toLocaleTimeString();
        setTimeout(displayTime, 1000);
    }
    
    function dislplayAlert(){
        $('.modal').modal();
        $('#modal1').modal('open');
    }
    displayTime();
    dislplayAlert();
    
    
    // Exploding "Hi"
    function onMouseMove(event) {
        // Do nothing, based on scroll
    }
    $('.hover-block').hover(
        function () {
            explodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
        },
        function () {
            implodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
        }
    );

$(document).ready(function(){

    //Open tap-target on page load
    // $('.tap-target').tapTarget('open');

    //Close tap-target on widget add button hover
    $('.btn-floating').on('mouseover', function(){
        $('.tap-target').tapTarget('close');
    });

    $('#weather').on('click', function(){
        let div = $('<div>');
        div.addClass('col s12 m5');
        $('#content').append(div);
        div.append('<div class="card-panel grey">');
        $('.card-panel').append('<span class="white-text">');
    });

    
    

});


