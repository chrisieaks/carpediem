//    Header clock
$(document).ready(function () {
    function displayTime() {
        var element = document.getElementById("clock");
        var now = new Date();
        element.innerHTML = now.toLocaleTimeString();
        setTimeout(displayTime, 1000);
    }

    function dislplayAlert() {
        $('.modal').modal({
            dismissible: false
        });
        $('#modal1').modal('open');

    }
    nameInsert();
    displayTime();
    dislplayAlert();
    
    function nameInsert() {
        $('#submitName').on('click', function (event) {
            event.preventDefault();
            $('#modal1').modal('close');
           var name = $('#your_name').val();
           localStorage.setItem('name', name);
           $('#userName').text("Welcome" + " " + name)
        });

    }

    
});