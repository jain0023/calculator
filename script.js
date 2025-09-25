// script.js

// Get the input display element after the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  const displayInput = document.querySelector('input[name="display"]');

  // Add keyboard support
  document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Numbers & operators
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
      displayInput.value += key;
    }
    // Enter or = → evaluate
    else if (key === 'Enter' || key === '=') {
      try {
        displayInput.value = eval(displayInput.value);
      } catch {
        displayInput.value = 'Error';
      }
    }
    // Backspace → delete last char
    else if (key === 'Backspace') {
      displayInput.value = displayInput.value.toString().slice(0, -1);
    }
    // Escape → clear all
    else if (key === 'Escape') {
      displayInput.value = '';
    }
  });
});
