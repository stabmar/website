// This Javascript is ment to define some additional js methods.
$(document).unload
/*
$(document).ready(function () {
    
    $('.productModuleButton').click(function () {
        $('.moduleDescription').show();
    })
})
*/

$(document).ready(function () {
    document.addEventListener("click", function () {
        document.getElementById('1').hide();
    })
})

/*
$(document).ready(function () {
    //Event-Handler: Changes display value for product description
    $('button.productModule').click(function () {
        var e = $(this).next('div');
        if (e.css('style.display') === 'none') {
            e.css('style.display','block');
        }
        else {
            e.css('style.display','none');
        }
    })
})

// Aternative function fo handle display values
function changeVisibility(id) {
    var e = document.getElementById(id);
    if ($(e).css(style.display) === "none") {
        $(e).css(style.display) = "block";
    }
    else {
        $(e).css(style.display) = "none";
    }
}*/