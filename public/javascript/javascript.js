$(document).ready(function(){

    //Open tap-target on page load
    // $('.tap-target').tapTarget('open');

    //Close tap-target on widget add button hover
    $('.btn-floating').on('mouseover', function(){
        $('.tap-target').tapTarget('close');
    });

    $('#weather').on('click', function(){
        let div = $('<div>');
        div.addClass('col s12 m5');
        $('#content').append(div);
        div.append('<div class="card-panel grey">');
        $('.card-panel').append('<span class="white-text">');
        $('.card-panel').append('<div class="input-field">');
        $('.input-field').append('<form method="POST" role="form">');
        $('.input-field').append('<label class="active" for="zipcode">Zipcode</label>');
        $('.input-field').append('<input type="text" class="validate" id="zipcode">')
        $('.input-field').append('<button class="btn waves-effect waves-light" id="submitWeather" type="submit" name="action">Submit<i class="material-icons right">send</i></button>');
    });


    //When zipcode is submited query weather underground from current conditions in zipcode
    $(document).on('click','#submitWeather', function(data){
        event.preventDefault();

        let zipcode = $('#zipcode').val().trim();

        console.log('clicked submit');
        console.log(zipcode);

        $.get('/api/' + zipcode, function(data){
        console.log(data);
    });

    });

    
    
});

{/* <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button> */}


/* <div class="input-field col s6">
      <input value="Alvin" id="first_name2" type="text" class="validate">
      <label class="active" for="first_name2">First Name</label>
    </div> */


// $('#weather').on('click', function(){
//     var zipcode = prompt('Whats your zip');
//     var queryURL = 'http://api.wunderground.com/api/6ada133f06c8d75d/conditions/q/' + zipcode + '.json';
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(data){
//         console.log(data);
//     });
// });

// $('#weather').on('click', function(){
//     var zipcode = prompt('Whats your zip?');
    // $.post('/', zipcode)
    // .then(function(data){
    //     console.log(`User specified Zipcode: ${data}`);
    // });
// });