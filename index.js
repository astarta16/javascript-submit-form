const form = document.querySelector("#surwayform");
const firstName = document.querySelector("#inputName");
const lastName = document.querySelector("#inputLast");
const address = document.querySelector("#inputAddress");
const datePicker = document.querySelector("#date");
const selectGender = document.querySelector("#gender");
const textArea = document.querySelector("#note");

datePicker.max = new Date().toISOString().split("T")[0];

let trySubmit = false;
let firstNameIsValid = true;
let lastNameIsValid = true;
let addressIsValid = true;
let textAreaIsValid = true;

const users = [];

const firstNameValidation = () => {
  if (trySubmit) {
    const firstNameError = document.querySelector("#firstName-error");
    if (firstName.value.length < 2) {
      firstName.style.borderColor = "red";
      firstNameError.textContent =
        "first name should included 2 or more character";
      firstNameError.classList.add("text-danger");
      firstNameIsValid = false;
    } else if (!firstName.value.match(/^[A-Za-z]*$/)) {
      firstName.style.borderColor = "red";
      firstNameError.textContent =
        "first name should contain english letters only";
      firstNameError.classList.add("text-danger");
      firstNameIsValid = false;
    } else {
      firstName.style.borderColor = "green";
      firstNameError.textContent =
        "should contain 2 or more english letters only";
      firstNameError.classList.remove("text-danger");
      firstNameIsValid = true;
    }
  }
};
firstName.addEventListener("input", firstNameValidation);

const lastNameValidation = () => {
  if (trySubmit) {
    const lastNameError = document.querySelector("#lastName-error");
    if (lastName.value.length < 2) {
      lastName.style.borderColor = "red";
      lastNameError.textContent =
        "last name should included 2 or more character";
      lastNameError.classList.add("text-danger");
      lastNameIsValid = false;
    } else if (!lastName.value.match(/^[A-Za-z]*$/)) {
      lastName.style.borderColor = "red";
      lastNameError.textContent =
        "last name should contain english letters only";
      lastNameError.classList.add("text-danger");
      lastNameIsValid = false;
    } else {
      lastName.style.borderColor = "green";
      lastNameError.textContent =
        "should contain 2 or more english letters only";
      lastNameError.classList.remove("text-danger");
      lastNameIsValid = true;
    }
  }
};
lastName.addEventListener("input", lastNameValidation);

const addressValidation = () => {
  if (trySubmit) {
    const addressError = document.querySelector("#address-error");
    if (address.value.length < 1) {
      address.style.borderColor = "red";
      addressError.textContent = "address required";
      addressIsValid = false;
    } else {
      address.style.borderColor = "green";
      addressError.textContent = "";
      addressError.classList.remove("text-danger");
      addressIsValid = true;
    }
  }
};
address.addEventListener("input", addressValidation);

const noteValidation = () => {
  if (trySubmit) {
    const noteError = document.querySelector("#note-error");
    if (textArea.value.length < 2 && textArea.value !== "") {
      textArea.style.borderColor = "red";
      noteError.textContent = "text area should contain minimum 2 characters";
      textAreaIsValid = false;
    } else {
      textArea.style.borderColor = "green";
      noteError.textContent = "";
      noteError.classList.remove("text-danger");
      textAreaIsValid = true;
    }
  }
};
textArea.addEventListener("input", noteValidation);

function addUser(event) {
  event.preventDefault();
  trySubmit = true;
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
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    addressIsValid &&
    textAreaIsValid
  ) {
    users.push(user);
    form.reset();
    firstName.style.borderColor = "#dbdfe4";
    lastName.style.borderColor = "#dbdfe4";
    address.style.borderColor = "#dbdfe4";
    textArea.style.borderColor = "#dbdfe4";

  }

  console.log(users);
  
}
