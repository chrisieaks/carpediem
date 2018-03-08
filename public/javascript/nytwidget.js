// New York Times API
$(document).ready(function () {

    $(document).one('click', '#most-popular', function (event) {
        event.preventDefault();
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
            for (var i = 0; i < 5; i++) {
                console.log(i);
                let div = $('<div>');
                div.addClass('col s12 m5');
                var card = $(`
               <a href="${result.results["0"].url}"><h3>${result.results[i].title}</h3></a>
                <img src="${result.results[i].media[0]["media-metadata"][0].url}"><a id="newsBtn" class="btn-floating right btn-small waves-effect waves-light yellow" style="
                margin-right: 15px;"><i class="material-icons">add</i></a>
                `);


                div.append(card);
                $('#articles').append(div)
                $("#articles").css({
                    "background-color": "teal",
                    "height": "300px",
                    "overflow": "scroll",
                });
                $("#articles:hover").css({
                    "animation-play-state": "paused"
                });
                $("keyframes articles").css({
                    "animation-play-state": "paused"
                });

            }

        }).fail(function (err) {
            throw err;

        });

    });
    $(document).one('click','#newsBtn', function(event){
        $('#articles').remove();
    })



});