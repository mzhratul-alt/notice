var captured_output = document.getElementById("captured_output");
function capture() {
  html2canvas(document.querySelector("#notice")).then((canvas) => {
    captured_output.appendChild(canvas);
  });
}

var source_output = document.getElementById("source_output");
var date_output = document.getElementById("date_output");
var greetings_output = document.getElementById("greetings_output");
var notice_output = document.getElementById("notice_output");

function source_func() {
  var source_input = document.getElementById("source_input");
  source_output.innerHTML = source_input.value;
}
function date_func() {
  var date_input = document.getElementById("date_input");
  date_output.innerHTML = date_input.value;
}
function greetings_func() {
  var greetings_input = document.getElementById("greetings_input");
  greetings_output.innerHTML = greetings_input.value;
}
function notice_func() {
  var notice_input = document.getElementById("notice_input");
  notice_output.innerHTML = notice_input.value;
}