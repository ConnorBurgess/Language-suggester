$(document).ready(function () {
  $("form#some-form").submit(function (event) {
    const someInput = $("input#some-input").val();
    $("#firstQuestion").hide();
    $("#firstResponse").fadeIn(2000);
    $("#secondQuestion").fadeIn(2000);
    $(".displayInput").text(someInput);

    event.preventDefault();
  });
});