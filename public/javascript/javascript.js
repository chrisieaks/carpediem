$(document).ready(function(){

    $('.tap-target').tapTarget('open');

    $('#weather').on('click', function(){
        var zipcode = prompt('Whats your zip?');
        $.post('/', zipcode)
        .then(function(data){
            console.log(`User specified Zipcode${data}`);
        });
    });
    
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