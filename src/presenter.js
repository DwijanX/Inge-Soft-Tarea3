import sumar from "./sumador";
import multiplicar from "./Multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let SubmitterId=event.submitter.id
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  let ans=0
  if (SubmitterId=="MultiplicationButton")
  {
    ans=multiplicar(firstNumber, secondNumber)
  }
  else if (SubmitterId=="SumButton")
  {
    ans=sumar(firstNumber, secondNumber)
  }
  div.innerHTML = "<p>" + ans  + "</p>";

});
