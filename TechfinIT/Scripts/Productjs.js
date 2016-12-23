// This Javascript is ment to define some additional js methods.
$(document).ready(function () {
    //alert('Dokument ist fertig geladen');
    $('button').click(function () {
        $(this).prev('div.hiddenDescription').toggle('slow');
    });
    $('button').hover(function () {
        $(this).css('background-color', '#409ADF');
    },
        function () {
            $(this).css('background-color', '#679bcc');
        });
    
});