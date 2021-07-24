var birthday = document.getElementById("date");
var luckyNumber = document.getElementById("lucky-number");
const btn = document.getElementById("btn");
var result = document.querySelector("#result");
var errorMesg = document.querySelector("#error");
const crossBtn = document.querySelector(".cross-btn");
const privacyMessage = document.querySelector(".attention-msg");

btn.addEventListener("click", check);
crossBtn.addEventListener("click", (e) => {
  privacyMessage.style.display = "none";
});

function check(e) {
  e.preventDefault();
  const birthdayArray = birthday.value.split("-"); //removing ' - '
  let sum = 0;
  birthdayArray.map((string) => {
    //to access every number in string and add into sum
    for (let i = 0; i < string.length; i++) {
      sum = sum + string[i];
    }
  });
  sum = Number(sum);  //converting to number type
  
  if (sum % Number(luckyNumber.value) === 0) {
    result.innerHTML = "Yay! Its your lucky birthday.";
    errorMesg.innerHTML =" ";
  } 
  if(sum % Number(luckyNumber.value) !== 0) {
    error.innerHTML = "I'll wish you luck in your next birthday";
    result.innerHTML = " ";
  }
}
