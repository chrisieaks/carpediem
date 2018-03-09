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
                <div style="border-radius: 15px 50px", "border: 2px solid red";>
                    <a href="${result.results["0"].url}"><h4>${result.results[i].title}</h4>
                    </a>
                      <div class="imageCon" style="margin-left:40%" >
                        <img class="nytImg" style="border-radius: 50%;
                        border: solid;
                        border-color: greenyellow;
                        box-shadow: 3px 3px 3px 3px;" src="${result.results[i].media[0]["media-metadata"][0].url}">
                    </div>
                </div>
                </div>
                    <a id="newsBtn" class="btn-floating right btn-small waves-effect waves-light yellow" style="margin-right: 15px;">
                        <i class="material-icons">add
                        </i>
                    </a>
                
                `);
                div.append(card);
                $('#articles').append(div)
                $("#articles").css({
                    "background-color": "teal",
                    "height": "300px",
                    "width": "30%",
                    "overflow": "scroll",
                    "border":"2px solid red",
                    "border-radius": "15px 50px",
                    "box-shadow": "5px 10px",
                    
                });
                $("#articles:hover").css({
                    "animation-play-state": "paused"
                });
                $(".nytImg").css({
                    "width": "75px",
                      "height": "75px",
                      "border-radius": "50%", 
                      "-moz-border-radius": "50%",
                      "-webkit-border-radius": "50%"
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