// modal
function initModalListeners() {
    $("#Signup").on("click", (e) => {
        e.preventDefault();
        $("#modal").addClass("active");
    });

    // Cancel button
    $(".close").on("click", (e) => {
        $("#modal").removeClass("active");
    });
}

$(document).ready(function() {
    initModalListeners();
});
