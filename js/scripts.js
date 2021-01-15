$(document).ready(function() {
  $("#first-form").submit(function(event) {
    console.log("hello");
    $("#output").empty();
    const nameInput = $("input#first-input").val();
    $("#first-question").hide();
    $("#second-question").fadeIn(2000);
    $("#third-question").fadeIn(2000);
    $("#fourth-question").fadeIn(2000);
    $("#fifth-question").fadeIn(2500);
    $("#sixth-question").fadeIn(2500);
    $(".submit-col").fadeIn(5000);
    $("#output").text("Hello there " + nameInput + ". Please direct your eyeballs to more relevant questions below.").fadeIn(2000);
    event.preventDefault();
  });
    $("#submit-form").submit(function(event) {
    $("#output").empty();
    $("#no-refunds").empty();
    $("#no-refunds").text("Hi " + nameInput + ", please remember the golden rule: no refunds!").fadeIn(10000);
    event.preventDefault();
});

});