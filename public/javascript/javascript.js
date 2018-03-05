$(document).ready(function(){

    $('#weather').on('click', function(){
        // http://api.wunderground.com/api/####/forecast/q/ZIPCODE.json
        var zipcode = prompt('Whats your zip');
        var queryURL = 'https://api.wunderground.com/api/6ada133f06c8d75d/' + zipcode + '.json';
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(data){
            console.log(data);
        });
    });
    
});