$(document).ready(function () {

    $('#hours').val(1);
    $('#sleptHours').html('I slept for <span class="" style="font-size:18px"> 1 </span> hour');
    let a;
    let date;
    let time;
    let amPm = '';
    const options = {month: 'long', day: 'numeric'};
    setInterval(() => {
        a = new Date();

        date = a.toLocaleDateString(undefined, options);
        if (a.getHours() > 12) {
            amPm = 'PM';
        } else {
            amPm = 'AM';
        }
        time = (a.getHours() % 12 || 12) + ':' + a.getMinutes();
        document.getElementById('time').innerHTML = date + ", " + time + amPm;
    }, 1000);


    $('.column').on('click', function (e) {
        e.preventDefault();
        $(".column").each(function () {
            $(this).css('border', '');
        });
        $(this).css('border', '1px solid black');
    });

    $("#hours").change(function () {
        let hours = $('#hours').val();
        if (hours == 1){
              $('#sleptHours').html("I slept for "+hours+ " hour");
        }else{
             $('#sleptHours').html('I slept for <span class="" style="font-size:18px">'+hours+ '</span> hours');
        }

    });


});