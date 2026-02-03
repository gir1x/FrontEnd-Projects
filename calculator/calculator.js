const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value !== '' && !isOperator(display.value.slice(-1))) {
    display.value += operator;
  }
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
