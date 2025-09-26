const form = document.getElementById("complexForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dobInput = document.getElementById("dob");
const passwordInput = document.getElementById("password");
const termsInput = document.getElementById("terms");
const ageRange = document.getElementById("ageRange");
const ageValue = document.getElementById("ageValue");

ageRange.addEventListener("input", () => {
  ageValue.textContent = ageRange.value;
});

form.addEventListener("submit", (e) => {
  let valid = true;


  document.querySelectorAll(".error").forEach(el => el.textContent = "");


  if (nameInput.value.trim().length < 3) {
    document.getElementById("nameError").textContent = "Имя должно содержать не менее 3 символов.";
    valid = false;
  }


  if (!emailInput.validity.valid) {
    document.getElementById("emailError").textContent = "Введите корректный email.";
    valid = false;
  }


  if (!dobInput.value) {
    document.getElementById("dobError").textContent = "Укажите дату рождения.";
    valid = false;
  }


  if (passwordInput.value.length < 6) {
    document.getElementById("passwordError").textContent = "Пароль должен быть не короче 6 символов.";
    valid = false;
  }


  if (!termsInput.checked) {
    document.getElementById("termsError").textContent = "Вы должны принять условия.";
    valid = false;
  }

  if (!valid) {
    e.preventDefault();
  }
});
