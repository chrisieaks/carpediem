// New York Times API
$(document).ready(function () {
    console.log('lpage');

    $(document).on('click', '#most-popular', function (event) {
            event.preventDefault();
            let div = $('<div>');
            div.addClass('col s12 m5');
            var card = $("<div class='card horizontal'><div class='card-image'><img src='https://lorempixel.com/100/190/nature/6'></div><div class='card-stacked'><div class='card-content'><p>I am a very simple card. I am good at containing small bits of information.</p></div><div class='card-action'><a href='#'>This is a link</a></div></div></div>");
            div.append(card);
            $('#nytWidget').append(div);
        }


    )
});




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