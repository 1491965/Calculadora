const $buttonsNumbers = document.querySelectorAll(".calculator__buttons--number");
const $buttonsOperators = document.querySelectorAll(
  ".calculator__buttons--operator"
);
const $inputGetNumbers = document.querySelector(".calculator__display-input");

const $result = document.querySelector(".calculator__display-result");
const $buttonResult = document.querySelector(".calculator__button--result ");

let calculate = "";

$buttonsNumbers.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    calculateConvertToNumber = Number($button.textContent);
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});


$buttonsOperators.forEach(function ($button){
    $button.addEventListener("click", function () {
        calculate = calculate + $button.textContent;
      
        $inputGetNumbers.value = calculate.replaceAll(" ", "");

    })

})

$buttonResult.addEventListener("click", function () {
    $result.textContent = eval(calculate)
})


