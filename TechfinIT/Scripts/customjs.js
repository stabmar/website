// This Javascript is ment to define some additional js methods.

$(document).ready(function () {
    //$('#prouctModule').on('click', manipulateProductModule());
    $('productModule').click(function () {
        $('div:first').toggle();
    })
})

function manipulateProductModule() {
    var element = document.getElementById("productModule");
    if (element.style.display === "none") {
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
}

