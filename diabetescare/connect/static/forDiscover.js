$(document).ready(function () {
    let countChecked = 0;
    let progress = 0;
    let checkBoxTotal = $('.medCheck').length;
    $('#taskDone').html(countChecked + '/' + checkBoxTotal);
    $('#medLevel').attr('aria-valuenow', progress).css('width', progress + '%');
    $('#completedNote').attr('hidden', true);

    if (localStorage.getItem('discoverJson') == null) {
        countChecked = 0;
    } else {
        itemJsonArrayStr = localStorage.getItem('discoverJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.forEach((element, index) => {
            let a = index + 1;
            if (element[1] == true) {
                countChecked++;
            }
            $('#taskDone').html(countChecked + '/' + checkBoxTotal);
            progress = (countChecked / checkBoxTotal) * 100;
            progress = Math.round(progress);
            $('#medLevel').attr('aria-valuenow', progress).css('width', progress + '%');
        });
    }

    $('input.medCheck').on('change', function () {
        if (this.checked) {
            countChecked++;
        } else {
            countChecked--;
            if (countChecked < 0) {
                countChecked = 0;
            }
        }
        $('#taskDone').html(countChecked + '/' + checkBoxTotal);
        progress = (countChecked / checkBoxTotal) * 100;
        progress = Math.round(progress);
        $('#medLevel').attr('aria-valuenow', progress).css('width', progress + '%');

        //check if it has reached 100
        let currentprogress = $('#medLevel').attr('aria-valuenow');


    });
});

