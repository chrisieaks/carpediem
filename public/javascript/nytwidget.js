// New York Times API


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
});

{


    // Loop through and provide the correct number of articles
    for (var i = 0; i < numArticles; i++) {

        // Add to the Article Counter (to make sure we show the right number)
        articleCounter++;

        // Create the HTML well (section) and add the article content for each
        var wellSection = $("<div>");
        wellSection.addClass("well");
        wellSection.attr("id", "article-well-" + articleCounter);
        $("#well-section").append(wellSection);

        // Confirm that the specific JSON for the article isn't missing any details
        // If the article has a headline include the headline in the HTML
        if (NYTData.response.docs[i].headline !== "null") {
            $("#article-well-" + articleCounter)
                .append(
                    "<h3 class='articleHeadline'><span class='label label-primary'>" +
                    articleCounter + "</span><strong> " +
                    NYTData.response.docs[i].headline.main + "</strong></h3>"
                );

            // Log the first article's headline to console
            console.log(NYTData.response.docs[i].headline.main);
        }

        // If the article has a byline include the headline in the HTML
        if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.original) {
            $("#article-well-" + articleCounter)
                .append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>");

            // Log the first article's Author to console.
            console.log(NYTData.response.docs[i].byline.original);
        }

        // Then display the remaining fields in the HTML (Section Name, Date, URL)
        $("#articleWell-" + articleCounter)
            .append("<h5>Section: " + NYTData.response.docs[i].section_name + "</h5>");
        $("#articleWell-" + articleCounter)
            .append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>");
        $("#articleWell-" + articleCounter)
            .append(
                "<a href='" + NYTData.response.docs[i].web_url + "'>" +
                NYTData.response.docs[i].web_url + "</a>"
            );

        // Log the remaining fields to console as well
        console.log(NYTData.response.docs[i].pub_date);
        console.log(NYTData.response.docs[i].section_name);
        console.log(NYTData.response.docs[i].web_url);
    }


    // METHODS
    // ==========================================================

    // on.("click") function associated with the Search Button
    $("#run-search").on("click", function (event) {
        // This line allows us to take advantage of the HTML "submit" property
        // This way we can hit enter on the keyboard and it registers the search
        // (in addition to clicks).
        event.preventDefault();

        // Initially sets the articleCounter to 0
        articleCounter = 0;

        // Empties the region associated with the articles
        $("#well-section").empty();

        // Grabbing text the user typed into the search input
        searchTerm = $("#search-term").val().trim();
        var searchURL = queryURLBase + searchTerm;

        // Number of results the user would like displayed
        numResults = $("#num-records-select").val();




        // If the user provides a startYear -- the endYear will be included in the queryURL
        if (parseInt(endYear)) {
            searchURL = searchURL + "&end_date=" + endYear + "0101";
        }

        // Then we will pass the final searchURL and the number of results to
        // include to the runQuery function
        runQuery(numResults, searchURL);
    });

    // This button clears the top articles section
    $("#clear-all").on("click", function () {
        articleCounter = 0;
        $("#well-section").empty();
    });

}