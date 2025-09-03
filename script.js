function showWish() {
  var name = document.getElementById("nameInput").value;
  var dob = document.getElementById("dobInput").value; // yyyy-mm-dd format

  if (!name || !dob) {
    alert("Please enter both name and date of birth!");
    return;
  }

  // get today's date (month + day)
  var today = new Date();
  var todayMonth = today.getMonth() + 1; // (0-based)
  var todayDay = today.getDate();

  // get user dob month + day
  var dobDate = new Date(dob);
  var dobMonth = dobDate.getMonth() + 1;
  var dobDay = dobDate.getDate();

  // check birthday
  if (todayMonth === dobMonth && todayDay === dobDay) {
    var message = "🎉 Happy Birthday " + name + "! 🎂 Wishing you a joyful and blessed year ahead!";
    document.getElementById("wishMessage").innerText = message;
    document.getElementById("bdayPic").style.display = "block";

    // background change
    document.body.classList.add("bg-active");

    // play music
    var music = document.getElementById("bdayMusic");
    music.play();
  } else {
    document.getElementById("wishMessage").innerText =
      "😊 Hi " + name + "! Today is not your birthday.";
    document.getElementById("bdayPic").style.display = "none";
    document.body.classList.remove("bg-active");
  }
}
