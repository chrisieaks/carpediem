$(document).ready(function(){
    $("#top-stories").on("click", function(){
        event.preventDefault();
        var queryURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=26f30e7b925b498680e5359d7c5627a5";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response.results[0].title);
            let div = $(`<div class='card card-1 card-scroll'>`);
            
            for (var i = 0; i < 5; i++) {
                var headline = $("<h4>").text(response.results[i].title);
                
                var a = $("<a>").attr("href", response.results[i].url).attr("target", "_blank").append(headline);
                
                var author = $("<p>").text(response.results[i].byline);
                
                headline.append(author);
                div.append(a);
            };
            $('#content').append(div);
            console.log(response.results[i].title);
           
        })//function response 
    }); //top stories widget function

    //quote widget
    $("#quotes").on("click", function(){
        event.preventDefault();
        console.log('something about qoutes')
        var queryURL = "https://talaikis.com/api/quotes/random/";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            var quoteAuthor = $("<span>").addClass("card-title");
            $(quoteAuthor).text(response.author);
            var quoteQuote = $("<p>").text(response.quote);
            var quoteContent = quoteAuthor.append(quoteQuote);

            var div = $(`<div class="card card-1"><div class="card-content"><span class="author card-title quote-title">${response.author}</span><p id="quote">${response.quote}</p></div><div class="card-action card-button"><a class="btn-floating btn-small halfway-fab waves-effect waves-light red quoteRefresh"><i class="material-icons">refresh</i></a></div></div>`);

            $("#content").append(div);

             //on click quotes widget function

        $(".quoteRefresh").on("click", function(event){
            event.preventDefault();
            var queryURL = "https://talaikis.com/api/quotes/random/";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response){
                console.log("THIS IS WHAT I WANNA SEE RN",response);
                var author =  $("<span class='card-title'>").text(response.author);
                var famousQuote = $("<div class='card-content'>").text(response.quote);
                $(".author").text(response.author)
                $("#quote").text(response.quote)
            })
        }); // on click quoterefresh function end

        });
            
    }); //on click #quotes function end


}); // doc ready end