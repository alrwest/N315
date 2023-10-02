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

    //submit
    $("#login-button").on("click", (e) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successful!'
          });
        
          //hide modal on login
        $("#modal").removeClass("active");
    });
    
}

$(document).ready(function() {
    initModalListeners();
});
