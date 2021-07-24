var birthday = document.getElementById("date");
var luckyNumber = document.getElementById("lucky-number");
const btn = document.getElementById("btn");
var result = document.querySelector(".result");
const crossBtn = document.querySelector(".cross-btn");
const privacyMessage = document.querySelector(".attention-msg");

btn.addEventListener("click", check);
crossBtn.addEventListener("click", (e) => {
  privacyMessage.style.display = "none";
});

function check(e) {
  e.preventDefault();
  birthday = birthday.value.split("-").join(""); //removing ' - '
  birthday = Number(birthday);
  console.log(birthday); //converting date to number
  luckyNumber = Number(luckyNumber.value);

  result.innerHTML = " ";

  if (birthday % luckyNumber === 0) {
    result.innerHTML = "Yay! Its your lucky birthday.";
  } else {
    result.innerHTML = "I'll wish you luck in your next birthday";
  }
}
