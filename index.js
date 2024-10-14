const buttons = document.querySelectorAll(".calcButton");
const calcTextbox = document.querySelector(".calcTextbox");
const calcForm = document.querySelector(".calcForm");

let num1 = "";
let op = "";

const handleOperatorPress = (event) => {
  num1 = calcTextbox.value;
  calcTextbox.value = "";
  op = currentButton.textContent;
};

buttons.forEach(button => {
  if (button.textContent != "*" && button.textContent != "/" && button.textContent != "+" && button.textContent != "-" && button.textContent != "Enter" && button.textContent != "Backspace") {
    button.addEventListener("click", (event) => {
      calcTextbox.value += event.target.textContent;
    });
  }
  else if (button.textContent != "Enter" && button.textContent != "Backspace") {
    button.addEventListener("click", (event) => {
      num1 = calcTextbox.value;
      calcTextbox.value = "";
      op = button.textContent;
    });
  }
  else if (button.textContent === "Backspace") {
    button.addEventListener("click", (event) => {
      calcTextbox.value = calcTextbox.value.slice(0, -1);
    });
  }
});

calcForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (num1 === "") {
    return;
  }

  if (op === "") {
    return;
  }

  if (op === "*") {
    calcTextbox.value = parseInt(num1, 10) * parseInt(calcTextbox.value, 10);
  }
  else if (op === "/") {
    calcTextbox.value = parseInt(num1, 10) / parseInt(calcTextbox.value, 10);
  }
  else if (op === "-") {
    calcTextbox.value = parseInt(num1, 10) - parseInt(calcTextbox.value, 10);
  }
  else if (op === "+") {
    calcTextbox.value = parseInt(num1, 10) + parseInt(calcTextbox.value, 10);
  }
});
