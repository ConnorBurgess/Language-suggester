$(document).ready(function () {
  $("#firstForm").submit(function(event) {
    console.log("hello");
    $("#output").empty();
    const someInput = $("input#firstInput").val();
    $("#firstQuestion").hide();
    $("#secondQuestion").fadeIn(2000);
    $("output").text(someInput);

    event.preventDefault();
  });
});