
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
});



// $('#weather').on('click', function(){
//     var zipcode = prompt('Whats your zip');
//     var queryURL = 'http://api.wunderground.com/api/6ada133f06c8d75d/conditions/q/' + zipcode + '.json';
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(data){
//         console.log(data);
//     });
// });

// $('#weather').on('click', function(){
//     var zipcode = prompt('Whats your zip?');
//     $.post('/', zipcode)
//     .then(function(data){
//         console.log(`User specified Zipcode: ${data}`);
//     });
// });

