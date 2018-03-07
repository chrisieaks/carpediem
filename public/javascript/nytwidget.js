// New York Times API
$(document).ready(function () {
    console.log('lpage');

    $(document).on('click', '#most-popular', function (event) {
        event.preventDefault();
        let div = $('<div>');
        div.addClass('col s6 m5');
        var card = $("<div class='card horizontal'><div class='card-image'><img src='https://lorempixel.com/100/190/nature/6'></div><div class='card-stacked'><div class='card-content'><p>I am a very simple card. I am good at containing small bits of information.</p></div><div class='card-action'><a href='#'>This is a link</a></div></div></div>");
        div.append(card);
        $('#nytWidget').append(div);
    })
}); //document.ready function

var authKey = "26f30e7b925b498680e5359d7c5627a5";
var url = "https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.json";

url += '?' + $.param({
    'api-key': "26f30e7b925b498680e5359d7c5627a5"
});
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    $("").text(JSON.stringify(result));
    });

// var data = result

    //don't need this to be on server side because lacks user input
    $("#top-stories").on("click", function(){
        event.preventDefault();
        var queryURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=26f30e7b925b498680e5359d7c5627a5";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response.results[0].title);
            // var articles = response.results[i];
            //individual top stories widgets
            for (var i = 0; i < 5; i++) {
                let div = $('<div>');
                div.addClass('col s12 m6');
                //back tick
                var card = $(`<div class='card horizontal'><div class='card-image'><img src=${response.results[i].multimedia[4].url}></div><div class='card-stacked'><div class='card-content card-scroll'><h3>${response.results[i].title}</h3><p>${response.results[i].byline}</p></div><div class='card-action'><a href=${response.results[i].url} target=_blank>click to go to nyt</a></div></div></div>`);
                div.append(card);
                $('#nytWidget').append(div);
            };
            console.log(response.results[i].title);
        })//function response 
    }); //top stories widget function

    $("#stock").on("click", function(){
        event.preventDefault();
        var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=3ZC271HY8665NI15";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
        })
    }) //stock widget function


