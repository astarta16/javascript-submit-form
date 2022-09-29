const form = document.querySelector("#surwayform");
const firstName = document.querySelector("#inputName");
const lastName = document.querySelector("#inputLast");
const address = document.querySelector("#inputAddress");
const datePicker = document.querySelector("#date");
const selectGender = document.querySelector("#gender");
const textArea = document.querySelector("#note");

datePicker.max = new Date().toISOString().split("T")[0];

const users = [];

const firstNameValidation = () => {
  const firstNameError = document.querySelector("#firstName-error");
  if (firstName.value.length < 2) {
    firstName.style.borderColor = "red";
    firstNameError.textContent =
      "first name should included 2 or more character";
    firstNameError.classList.add("text-danger");
    return;
  }
  if (!firstName.value.match(/^[A-Za-z]*$/)) {
    firstName.style.borderColor = "red";
    firstNameError.textContent =
      "first name should contain english letters only";
    firstNameError.classList.add("text-danger");
    return;
  }
};

const lastNameValidation = () => {
  const lastNameError = document.querySelector("#lastName-error");
  if (lastName.value.length < 2) {
    lastName.style.borderColor = "red";
    lastNameError.textContent = "last name should included 2 or more character";
    lastNameError.classList.add("text-danger");
    return;
  }
  if (!lastName.value.match(/^[A-Za-z]*$/)) {
    lastName.style.borderColor = "red";
    lastNameError.textContent = "last name should contain english letters only";
    lastNameError.classList.add("text-danger");
    return;
  }
};

const addressValidation = () => {
  const addressError = document.querySelector("#address-error");
  if (address.value.length < 1) {
    address.style.borderColor = "red";
    addressError.textContent = "address required";
   
  }
};

const noteValidation = () => {
  const noteError = document.querySelector("#note-error");
  if (textArea.value.length < 50 && textArea.value !== "") {
    textArea.style.borderColor = "red";
    noteError.textContent = "text area should contain minimum 50 characters";
  }
};

function addUser(event) {
  event.preventDefault();
  const length = users.length;
  const lastUser = users[length - 1];
  firstNameValidation();
  lastNameValidation();
  addressValidation();
  noteValidation();
  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    dateOfBirth: datePicker.value,
    gender: selectGender.value,
    textArea: textArea.value,
    id: lastUser ? lastUser.id + 1 : 1,
  };
  users.push(user);
  //   form.reset();
}
