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
    const nameInput = $("input#first-input").val();
    $("#output").empty();
    $("#no-refunds").empty();
    $("#output").text(nameInput + ", ok let me check this out. Remember: no refunds for happy users!");
    event.preventDefault();
    setTimeout(function(){
      $("#output").text(" Processing...");
    
    }, 2000); 
    setTimeout(function(){
      
      $("#output").text("So hey, " + nameInput + " I'd probably learn ruby.");
    }, 5500); 
  });

});