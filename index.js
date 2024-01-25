const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
const passwordField = document.getElementById('password');
const lengthField = document.getElementById('length');
const uppercaseField = document.getElementById('uppercase');
const lowercaseField = document.getElementById('lowercase');
const digitsField = document.getElementById('digits');
const symbolsField = document.getElementById('symbols');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const digitChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword() {
  let chars = '';
  if (uppercaseField.checked) {
    chars += uppercaseChars;
  }
  if (lowercaseField.checked) {
    chars += lowercaseChars;
  }
  if (digitsField.checked) {
    chars += digitChars;
  }
  if (symbolsField.checked) {
    chars += symbolChars;
  }
  let password = '';
  for (let i = 0; i < lengthField.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  passwordField.value = password;
}

function copyPassword() {
  passwordField.select();
  navigator.clipboard.writeText(passwordField.value);

  alert("Copied");
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);