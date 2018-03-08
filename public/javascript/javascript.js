$(document).ready(function(){
    //Open tap-target on page load
    $('.tap-target').tapTarget('open');

    //Close tap-target on widget add button hover
    $('.btn-floating').on('mouseover', function(){
        $('.tap-target').tapTarget('close');
    });

    //When weather button is clicked open card and prompt for zip code
    $('#weather').on('click', function(event){
        event.preventDefault();
        $('.weather-col').remove();
            let div = $('<div>');
            div.addClass('col s12 m5 weather-col');
            $('#content').append(div);
            div.append('<div class="weather-card card-panel">');
            $('.weather-card').append('<span class="white-text">');
            $('.weather-card').append('<div class="' + 'weather-input' +' input-field">');
            $('.weather-input').append('<form method="POST" role="form">');
            $('.weather-input').append('<label class="active" for="zipcode">Zipcode</label>');
            $('.weather-input').append('<input type="text" class="validate" id="zipcode">')
            $('.weather-input').append('<button class="btn waves-effect waves-light" id="submitWeather" type="submit" name="action">Submit<i class="material-icons right">send</i></button>');
    });

 
    //When zipcode is submited query weather underground from current conditions in zipcode
    $(document).on('click','#submitWeather', function(data){
        event.preventDefault();

        let zipcode = $('#zipcode').val().trim();
        localStorage.setItem('zipcode', zipcode);


        console.log('clicked submit');
        console.log(zipcode);

        $.get('/api/' + zipcode, function(data){
            console.log(data);
            let weather = $('.weather-card');
            let response = data.current_observation;
            let div = $('<div>');
            weather.empty();
            weather.append(`<span class="city">${data.current_observation.display_location.city}`);
            weather.append('<a class="menu" href="#"><i class="tiny material-icons">close</i></a>')
            weather.append(`<div class="sun"><img src="https://icons.wxug.com/i/c/j/${data.current_observation.icon}.gif"></div>`);
            weather.append(`<span class="temp">${response.temp_f}&#176;</span>`);
            weather.append('<br>');
            weather.append(`<span><ul class="variations"><li>${data.current_observation.weather}</li><li><span class"speed"><img src="https://i.imgur.com/luN0Jmq.png">${response.wind_mph}</span><span class="mph">mph</span></li></ul></span>`);
            weather.append('<div class="forecast clear">');
            $('.forecast').append(`<div class="day tue">${data.forecast.simpleforecast.forecastday[1].date.weekday_short}
            <br> <img src="https://icons.wxug.com/i/c/j/${data.forecast.simpleforecast.forecastday[1].icon}.gif"> <br> <span class="highTemp">${data.forecast.simpleforecast.forecastday[1].high.fahrenheit}&#176;</span> <br> <span class="lowTemp">${data.forecast.simpleforecast.forecastday[1].low.fahrenheit}&#176;</span>
          </div>
          <div class="day tue">${data.forecast.simpleforecast.forecastday[2].date.weekday_short}
              <br> <img src="https://icons.wxug.com/i/c/j/${data.forecast.simpleforecast.forecastday[2].icon}.gif"> <br> <span class="highTemp">${data.forecast.simpleforecast.forecastday[2].high.fahrenheit}&#176;</span> <br> <span class="lowTemp">${data.forecast.simpleforecast.forecastday[2].low.fahrenheit}&#176;</span>
            </div>
            <div class="day tue">${data.forecast.simpleforecast.forecastday[3].date.weekday_short}
              <br> <img src="https://icons.wxug.com/i/c/j/${data.forecast.simpleforecast.forecastday[3].icon}.gif"> <br> <span class="highTemp">${data.forecast.simpleforecast.forecastday[3].high.fahrenheit}&#176;</span> <br> <span class="lowTemp">${data.forecast.simpleforecast.forecastday[3].low.fahrenheit}&#176;</span>
            </div>
            <div class="day fri">${data.forecast.simpleforecast.forecastday[4].date.weekday_short}
              <br> <img src="https://icons.wxug.com/i/c/j/${data.forecast.simpleforecast.forecastday[4].icon}.gif"> <br> <span class="highTemp">${data.forecast.simpleforecast.forecastday[4].high.fahrenheit}&#176;</span> <br> <span class="lowTemp">${data.forecast.simpleforecast.forecastday[4].low.fahrenheit}&#176;</span>
            </div>`);
            
        });

    });

    $(document).on('click', '.menu', function(){
        $('.weather-card').remove();
    });



    function checkZip() {
        if(localStorage.getItem('zipcode') === undefined){
            console.log('new');
        } else {
            let div = $('<div>');
            div.addClass('col s12 m5 weather-col');
            $('#content').append(div);
            div.append('<div class="weather-card card-panel">');
            var zipcode = localStorage.getItem('zipcode');
            $.get('/api/' + zipcode, function(data){
                console.log(data);
                let weather = $('.weather-card');
                let response = data.current_observation;
                let div = $('<div>');
                weather.empty();
                weather.append(`<span class="city">${data.current_observation.display_location.city}`);
                weather.append('<a class="menu" href="#"><i class="tiny material-icons">close</i></a>')
                weather.append(`<div class="sun"><img src="https://icons.wxug.com/i/c/j/${data.current_observation.icon}.gif"></div>`);
                weather.append(`<span class="temp">${response.temp_f}&#176;</span>`);
                weather.append('<br>');
                weather.append(`<span><ul class="variations"><li>${data.current_observation.weather}</li><li><span class"speed"><img src="https://i.imgur.com/luN0Jmq.png">${response.wind_mph}</span><span class="mph">mph</span></li></ul></span>`);
                weather.append('<div class="forecast clear">');
                $('.forecast').append(`<div class="day tue">${data.forecast.simpleforecast.forecastday[1].date.weekday_short}
                <br> <img src="https://icons.wxug.com/i/c/j/${data.forecast.simpleforecast.forecastday[1].icon}.gif"> <br> <span class="highTemp">${data.forecast.simpleforecast.forecastday[1].high.fahrenheit}&#176;</span> <br> <span class="lowTemp">${data.forecast.simpleforecast.forecastday[1].low.fahrenheit}&#176;</span>
              </div>
              <div class="day tue">${data.forecast.simpleforecast.forecastday[2].date.weekday_short}
                  <br> <img src="https://icons.wxug.com/i/c/j/${data.forecast.simpleforecast.forecastday[2].icon}.gif"> <br> <span class="highTemp">${data.forecast.simpleforecast.forecastday[2].high.fahrenheit}&#176;</span> <br> <span class="lowTemp">${data.forecast.simpleforecast.forecastday[2].low.fahrenheit}&#176;</span>
                </div>
                <div class="day tue">${data.forecast.simpleforecast.forecastday[3].date.weekday_short}
                  <br> <img src="https://icons.wxug.com/i/c/j/${data.forecast.simpleforecast.forecastday[3].icon}.gif"> <br> <span class="highTemp">${data.forecast.simpleforecast.forecastday[3].high.fahrenheit}&#176;</span> <br> <span class="lowTemp">${data.forecast.simpleforecast.forecastday[3].low.fahrenheit}&#176;</span>
                </div>
                <div class="day fri">${data.forecast.simpleforecast.forecastday[4].date.weekday_short}
                  <br> <img src="https://icons.wxug.com/i/c/j/${data.forecast.simpleforecast.forecastday[4].icon}.gif"> <br> <span class="highTemp">${data.forecast.simpleforecast.forecastday[4].high.fahrenheit}&#176;</span> <br> <span class="lowTemp">${data.forecast.simpleforecast.forecastday[4].low.fahrenheit}&#176;</span>
                </div>`);
                
            });
        }
    };
     
    checkZip();  

   

});