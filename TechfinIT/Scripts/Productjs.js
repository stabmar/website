// This Javascript is ment to define some additional js methods.
$(document).ready(function () {
    //alert('Dokument ist fertig geladen');
    $('button').click(function () {
        $(this).next('#moduleDescription').toggle('slow');
    })
})