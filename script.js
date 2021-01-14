//Current day and time
var d = new Date();
document.getElementById("currentDay").innerHTML = d;

//Chnge based on time of day
var n = d.getHours();
console.log(n);

//Save button
$(".saveBtn").click(function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});

//Local storage information
$(document).ready(function () {
  $("#09 .description").val(localStorage.getItem("09"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});

//Check button
$(".description").each(function () {
  $(".checkBtn").click(function () {
    if ($(".textarea").hasClass("completed")) {
      $(".textarea").removeClass("completed");
    } else {
      $("textarea").addClass("completed");
    }
  });
});