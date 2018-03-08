$(document).ready(function () {

    $(document).one('click', '#trivia', function (event) {
        event.preventDefault();
        var queryURL = "http://jservice.io/api/random?count=1";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            let div = $('<div>');
            div.addClass('col s6 m5');
            var card = $(`
            <div class="card">
            <div class="card-content">
            <span class="card-title">
            <h3>Trivia Time<br>${response["0"].question}</h3></span>
            <form class="container">
            <div class="input-field col m6">
            <input id="answer" type="text" class="validate">
            <label for="answer">TRY ME</label></div>
            <div class="input-field col m6">
            <button id="submitAnswer" class="btn waves-effect waves-light" type="submit" name="action">Submit 
            </button>
            <a id="answerME" class="waves-effect waves-light btn" href="#modal2">Answer</a>
            </div>   
            </form>
            </div>
            </div>
            <a id="triviaBtn" class="btn-floating right btn-small waves-effect waves-light yellow" style="margin-right: 5%;
            margin-top: -130%;" ;"><i class="material-icons">add</i></a>`);


            div.append(card);
            $('#guess').append(div);
            $("#guess").css({
                "background-color": "teal",
                "min-height": "100px",
                "width": "400px",
                "color": "black",
                "font-size": "8px",
                "align-items": "center",
                "overflow": "scroll"


            });

            var responseAnswer = `${response["0"].answer}`
            var reAnswer = responseAnswer.toLowerCase();
            console.log(reAnswer);

            var userResponse = `$('#answer').val()`
            var usRes = userResponse.toLowerCase();
            console.log(usRes);


            function answer() {
                $(document).on('click', '#submitAnswer', function (event) {
                    event.preventDefault();
                    if (usRes == reAnswer) {
                        alert('Your Intelligence level is through the roof!');
                    } else {
                        alert('You cant do it just Quit');
                    }
                });

            }
            answer();
            reveal();

            function reveal() {
                $(document).on('click', '#answerME', function (event) {
                    event.preventDefault();
                    $('.modal').modal();
                    $('#modal2').modal('open');
                    $('.modalAnswer').append(`${response["0"].answer}`)



                })
            }
        });
    })


});