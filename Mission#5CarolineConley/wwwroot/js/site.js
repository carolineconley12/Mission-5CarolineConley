// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = parseInt($('#hours').val());
        if (!isNaN(hours) && hours > 0) {
            var rate = 50; // my tutoring rate per hour
            var total = hours * rate;
            $('#total').text('$' + total.toFixed(2));
        } else {
            alert('Please enter a valid positive number of hours.');
        }
    });
});
