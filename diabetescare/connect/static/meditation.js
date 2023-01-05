$(document).ready(function () {
    let countChecked = 0;
    let progress = 0;
    let checkBoxTotal = $('.medCheck').length;
    $('#taskDone').html(countChecked + '/' + checkBoxTotal);
    $('#medLevel').attr('aria-valuenow', progress).css('width', progress + '%').html(progress + '%');
    $('#completedNote').attr('hidden', true);

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
        $('#medLevel').attr('aria-valuenow', progress).css('width', progress + '%').html(progress + '%');

        //check if it has reached 100
        let currentprogress = $('#medLevel').attr('aria-valuenow');
        if (currentprogress == "100") {
            $("#medLevel").addClass('bg-success')
                .removeClass('progress-bar-animated')
                .removeClass('progress-bar-striped');
             $('#completedNote').attr('hidden', false);
        } else {
            $("#medLevel").removeClass('bg-success')
                .addClass('progress-bar-animated')
                .addClass('progress-bar-striped');
             $('#completedNote').attr('hidden', true);
        }

    });
});

