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
})