// This Javascript is ment to define some additional js methods.
$(document).ready(function () {
    alert('Dokument ist fertig geladen');
    $('.productModuleButton').click(function () {
        $(this).next('.moduleDescription').toggle('slow');
    })
})