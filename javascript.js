$(document).ready(function(){
    var addWidget = $("li").on("click", function(){
        switch(addWidget) {
            case 'weather':
                console.log('weather is here');
                $("#main-content").html(<div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">Card Title</span><p>I am a very simple card. I am good at containing small bits of information.</p></div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                </div>
                </div>)
                break;
            case 'stocks':
                break;
        }
    })
    


// end document.ready function
});