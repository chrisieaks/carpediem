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

    $('#breaking-news').on('click', function(){
        var nytKey = '26f30e7b925b498680e5359d7c5627a5';
        var queryURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + nytKey

        var div = $('<div>');
        div.addClass('col s12 m5');
        
        $('#content').append(div);
        

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