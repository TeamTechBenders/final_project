$(document).ready(function () {
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${day}/${month}/${year}`;
    $('#todayDate').val(fullDate);


});