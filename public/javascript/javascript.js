$(document).ready(function(){

    //Open tap-target on page load
    $('.tap-target').tapTarget('open');

    //Close tap-target on widget add button hover
    $('.btn-floating').on('mouseover', function(){
        $('.tap-target').tapTarget('close');
    });

    //When weather button is clicked open card and prompt for zip code
    $('#weather').on('click', function(){
        let div = $('<div>');
        div.addClass('col s12 m5');
        $('#content').append(div);
        div.append('<div class="weather-card card-panel grey">');
        $('.card-panel').append('<span class="white-text">');
        $('.card-panel').append('<div class="input-field">');
        $('.input-field').append('<form method="POST" role="form">');
        $('.input-field').append('<label class="active" for="zipcode">Zipcode</label>');
        $('.input-field').append('<input type="text" class="validate" id="zipcode">')
        $('.input-field').append('<button class="btn waves-effect waves-light" id="submitWeather" type="submit" name="action">Submit<i class="material-icons right">send</i></button>');
    });


    //When zipcode is submited query weather underground from current conditions in zipcode
    $(document).on('click','#submitWeather', function(data){
        event.preventDefault();

        let zipcode = $('#zipcode').val().trim();

        console.log('clicked submit');
        console.log(zipcode);

        $.get('/api/' + zipcode, function(data){
        console.log(data);
        let weather = $('.weather-card');
        let response = data.current_observation;
        weather.empty();
        weather.append('<span class="info white-text">');
        $('.info').append('<h5>' + response.display_location.full +'</h5>');
        $('.info').append('<p>' + response.weather + '</p>');
        $('.info').append();

    });

    });

    $('#top-stories').on('click', function(){
        // var nytKey = '26f30e7b925b498680e5359d7c5627a5';
        // var queryURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + nytKey

        var div = $('<div>');
        div.addClass('col s12 m5');
        
        $('#content').append(div);

        var card = $("<div class='card horizontal'><div class='card-image'><img src='https://lorempixel.com/100/190/nature/6'></div><div class='card-stacked'><div class='card-content'><p>I am a very simple card. I am good at containing small bits of information.</p></div><div class='card-action'><a href='#'>This is a link</a></div></div></div>");
        div.append(card);

 
     });
});

