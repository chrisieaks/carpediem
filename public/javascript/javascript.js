$(document).ready(function(){
    //Open tap-target on page load
    $('.tap-target').tapTarget('open');

    //Close tap-target on widget add button hover
    $('.btn-floating').on('mouseover', function(){
        $('.tap-target').tapTarget('close');
    });

    //When weather button is clicked open card and prompt for zip code
    $('#weather').one('click', function(event){
        event.preventDefault();
        let i = 0;
        if(i < 4) {
            let div = $('<div>');
            div.addClass('col s12 m5');
            $('#content').append(div);
            div.append('<div class="weather-card' + ' card-panel">');
            $('.weather-card').append('<span class="white-text">');
            $('.weather-card').append('<div class="' + 'weather-input' +' input-field">');
            $('.weather-input').append('<form method="POST" role="form">');
            $('.weather-input').append('<label class="active" for="zipcode">Zipcode</label>');
            $('.weather-input').append('<input type="text" class="validate" id="zipcode">')
            $('.weather-input').append('<button class="btn waves-effect waves-light" id="submitWeather" type="submit" name="action">Submit<i class="material-icons right">send</i></button>');
            i++;
        }
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
            let div = $('<div>');
            weather.empty();
            weather.append(`<span class="city">${response.display_location.city}`);
            weather.append(`<div class="sun"><img src="https://icons.wxug.com/i/c/j/${response.icon}.gif"></div>`);
            weather.append(`<span class="temp">${response.temp_f}&#176;</span>`);
            weather.append('<br>');
            weather.append(`<span><ul class="variations"><li>${response.weather}</li><li><span class"speed">${response.wind_mph}</span><span class="mph">mph</span></li></ul></span>`);
            // div.addClass('weather-overview');
            // $('.weather-overview').append('<p>' + response.weather);
            // $('.weather-overview').append('<p>' + response.temp_f);
            // $('.display-weather').append('<a class="close-btn btn waves-effect waves-light red"><i class="material-icons">close</i></a>');
        });

    });

    $(document).on('click', '.close-btn', function(){
        $('.weather-col').remove();
    });

    // $('#top-stories').on('click', function(){
    //     // var nytKey = '26f30e7b925b498680e5359d7c5627a5';
    //     // var queryURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + nytKey

    //     var div = $('<div>');
    //     div.addClass('col s12 m5');
        
    //     $('#content').append(div);
        

    //  });


});