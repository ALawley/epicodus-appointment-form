$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start-time").val();
    var endInput = $("input#end-time").val();

    $('.name-span').text(nameInput);
    $('.date-span').text(dateInput);
    $('.start').text(startInput);
    $('.end').text(endInput);

    $('#apptConfirm').show();
    $('#apptConfirm').css("display", "inline-block");

    event.preventDefault();

  });
});
