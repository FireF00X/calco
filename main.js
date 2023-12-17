// main input for calcs
const calcInput = document.querySelector(".calc");
// main input for res
const resInput = document.querySelector(".res");
// all buttons
const allBtns = Array.from(document.querySelectorAll("button"));
const equal = document.getElementById("equal");
const deletBtn = document.getElementById("del");
const dotBtn = document.getElementById("dot");
const perBtn = document.getElementById("per");

let equation;
// to check if the value in resinpt is a res or not
let check = false;

perBtn.disabled = true;
allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML !== "=") {
      if (check) {
        check = false;
        resInput.value = "";
        resInput.value = btn.innerHTML;
      } else {
        resInput.value += btn.innerHTML;
      }
    }
    // check for operation
    if (
      btn.innerHTML === "+" ||
      btn.innerHTML === "-" ||
      btn.innerHTML === "*" ||
      btn.innerHTML === "/" ||
      btn.innerHTML === "%"
    ) {
      if (typeof equation === "undefined" && resInput.value !== "") {
        equation = [...resInput.value][[...resInput.value].length - 1];
        calcInput.value = [...resInput.value].slice(0, -1).join("");
        dotBtn.disabled = false;
        resInput.value = "";
      } else {
        equation = btn.innerHTML;
        resInput.value = "";
        console.log(equation);
      }
    }
    // check if the dot is exist in the num
    if ([...resInput.value].includes(".")) {
      dotBtn.disabled = true;
    }
    // to disable per button
    if (resInput.value === "") {
      perBtn.disabled = true;
    } else if (resInput.value !== "") {
      perBtn.disabled = false;
    }
  });
});

equal.addEventListener("click", () => {
  if (resInput.value !== "" && calcInput.value !== "") {
    dotBtn.disabled = false;
    if (equation === "+") {
      resInput.value = +calcInput.value + +resInput.value;
      calcInput.value = "";
      check = true;
      equation = undefined;
    }
    if (equation === "-") {
      resInput.value = +calcInput.value - +resInput.value;
      calcInput.value = "";
      check = true;
      equation = undefined;
    }
    if (equation === "*") {
      resInput.value = +calcInput.value * +resInput.value;
      calcInput.value = "";
      check = true;
      equation = undefined;
    }
    if (equation === "/") {
      resInput.value = +calcInput.value / +resInput.value;
      calcInput.value = "";
      check = true;
      equation = undefined;
    }
    if (equation === "%") {
      resInput.value = +calcInput.value % +resInput.value;
      calcInput.value = "";
      check = true;
      equation = undefined;
    }
  }
});

deletBtn.addEventListener("click", () => {
  resInput.value = "";
  calcInput.value = "";
  check = false;
  equation = undefined;
});
