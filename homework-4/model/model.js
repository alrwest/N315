// routing
$(document).ready(function() {

    // Set default page/home screen
    function defaultPage() {
        // Using AJAX
        $.ajax({
            url: 'https://in-info-web4.informatics.iupui.edu/~alrwest/N315/homework-4/pages/Home.html',
            url: '../pages/home.html',
            method: 'GET',
            dataType: 'html',
            success: function(response) {
                $('#app').html(response);
            },
            error: function() {
                $('#app').html('<div> Error Loading Content </div>');
            }
        });
    }

    // Load default page
    defaultPage();


    // navigation events
    $('nav a').click(function(event) {
        var page = $(this).data('page');
        // Using AJAX
        $.ajax({
            url: 'https://in-info-web4.informatics.iupui.edu/~alrwest/N315/homework-4/pages/' + page + '.html',
            url: '../pages/' + page + '.html',
            method: 'GET',
            dataType: 'html',
            success: function(response) {
                $('#app').html(response);
            },
            error: function() {
                $('#app').html('<div> Error Loading Content </div>');
            }
        });
    });

    $('#login-button').click(function(event) {
        // Using AJAX
        $.ajax({
            url: 'https://in-info-web4.informatics.iupui.edu/~alrwest/N315/homework-4/pages/Cookies.html',
            url: '../pages/Cookies.html',
            method: 'GET',
            dataType: 'html',
            success: function(response) {
                $('#app').html(response);
            },
            error: function() {
                $('#app').html('<div> Error Loading Content </div>');
            }
        });
    });
});

