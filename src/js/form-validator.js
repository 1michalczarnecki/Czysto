const username = document.querySelector("#name");
const email = document.querySelector("#email");
const msgtxt = document.querySelector("#msg");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");

  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

const checkLength = (input, minLength) => {
  if (input.value.length < minLength) {
    showError(input, `Pole musi zawierać conajmniej ${minLength} znaki`);
  } else {
    clearError(input);
  }
};

const checkMail = (email) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEx.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "E-mail jest niepoprawny");
  }
};

const checkErrors = () => {
  const allInputs = document.querySelectorAll(".form__box");
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains("error")) {
      errorCount++;
    }
  });

  if (errorCount === 0) {
    popup.classList.add("show-popup");
  }
 
};

// const checkErrors = () => {
//     const allInputs = document.querySelectorAll(".form-box");
  
//     // Sprawdź, czy istnieje którykolwiek błąd w polach formularza
//     const hasErrors = Array.from(allInputs).some((el) => el.classList.contains("error"));
  
//     // Jeśli istnieją błędy, nie wyświetlaj popupa
//     if (hasErrors) {
//       return;
//     }
  
//     // Jeśli nie ma błędów, pokaż popup
//     popup.classList.add("show-popup");
//   };
  

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm([username, email, msgtxt]);
  checkLength(username, 4);
  // checkLength(pass, 8); // Pamiętaj, że 'pass' nie jest zdefiniowane, więc ta linia może powodować błąd

  checkMail(email);
  checkErrors();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputs = [username, email, msgtxt];
  inputs.forEach((el) => {
    el.value = "";
    clearError(el);
  });
});
