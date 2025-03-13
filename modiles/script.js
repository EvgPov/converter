const list_item_initial = document.querySelector(".list-item-initial");
const list_item_purpse = document.querySelector(".list-item-purpose");
const button = document.querySelector(".form__button");
const form = document.querySelector(".form");

const alphabet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

// заполнение списков систем счисления
function appendListItem(list) {
  for (let i = 2; i <= 16; i++) {
    const option = document.createElement("option");
    let val = i;
  
    option.classList.add("item");
    switch (i) {
      case 2: 
        val = '2 (двоичная)';
        break;
      case 8:
        val = '8 (восьмеричная)';
        break;
      case 10:
        val = '10 (десятичная)';
        break;
      case 16:
        val = '16 (шестнадцатеричная)';
        break;
    }
    option.value = i;
    option.textContent = val;
    list.append(option);  
  }
};

appendListItem(list_item_initial);
appendListItem(list_item_purpse);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const number = document.querySelector("#input").value;
  const list_item_initial = document.querySelector(".list-item-initial").value;
  const list_item_purpse = document.querySelector(".list-item-purpose").value;
  const form_result = document.querySelector(".form_result");
  
//проверка соответствия введенного числа начальной системе счисления
  const currentAlphabet = alphabet.slice(0, list_item_initial);

  for ( let i = 0; i < number.length; i++) {
    if (!currentAlphabet.includes(number[i])) {
        form_result.textContent = '';
        alert("Введенное число не соответствеует выбранной системе счисления");
    return;
  }
}
  form_result.textContent = (number !== '') 
    ? "Результат: " + changeNumbers(number, Number(list_item_initial), Number(list_item_purpse))
    : alert ("Введите число для конвертации"); return;
 })
