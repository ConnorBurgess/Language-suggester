$(document).ready(function() {
  $("#firstForm").submit(function(event) {
    console.log("hello");
    $("#output").empty();
    const nameInput = $("input#firstInput").val();
    $("#firstQuestion").hide();
    $("#secondQuestion").fadeIn(2000);
    $("#thirdQuestion").fadeIn(2000);
    $("#fourthQuestion").fadeIn(2000);
    $("#fifthQuestion").fadeIn(2500);
    $("#sixthQuestion").fadeIn(2500);
    $(".submit-col").fadeIn(5000);
    $("#output").text("Hello there " + nameInput + ". Please direct your eyeballs to more relevant questions below.").fadeIn(2000);
    event.preventDefault();
  });
    $("#submit-form").submit(function(event) {
      $("#output").empty();
      $("#secondQuestion").hide();
      $("#thirdQuestion").hide();
      $("#fourthQuestion").hide();
      $("#fifthQuestion").hide();
      $("#sixthQuestion").hide();
      event.preventDefault();


});

});