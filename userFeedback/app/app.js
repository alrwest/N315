function initListeners() {
    $("#home").on("click", (e) => {
        $("#modal").toggle();
    });

    //cancel button
    $(".close").on("click", (e) => {
        $("#modal").toggle();
    });

}

$(document).ready(function() {
    initListeners();
});