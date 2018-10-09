function myFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Hi! Good Morning,";
  } else if (time == 12) {
    greeting = "Hi! Good Noon,";
  } else if (time < 18) {
    greeting = "Hi! Good Afternoon,";
  } else if (time < 20) {
    greeting = "Hi! Good Evening,";
  } else {
    greeting = "Hi! Good Night";
  }
  document.getElementById("demo").innerHTML = greeting;
}
