"use strict";

var $buttonsNumbers = document.querySelectorAll(".calculator__buttons--number");
var $buttonsOperators = document.querySelectorAll(".calculator__buttons--operator");
var $inputGetNumbers = document.querySelector(".calculator__display-input");
var $result = document.querySelector(".calculator__display-result");
var $buttonResult = document.querySelector(".calculator__button--result ");
var calculate = "";
$buttonsNumbers.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    calculateConvertToNumber = Number($button.textContent);
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});
$buttonsOperators.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});
$buttonResult.addEventListener("click", function () {
  $result.textContent = eval(calculate);
});