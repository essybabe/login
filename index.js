function showFieldset(fieldsetToShow, fieldsetToHide) {
    fieldsetToShow = document.getElementById(fieldsetToShow);
    fieldsetToHide = document.getElementById(fieldsetToHide);
    var userInput = fieldsetToShow.querySelector("input");
    fieldsetToShow.classList.add("show_fieldset");
    fieldsetToHide.classList.remove("show_fieldset");
  
    setTimeout(function () {
      userInput.focus();
    }, 500);
  }
  
  function submitForm(submitButton) {
    var fieldSet = submitButton.closest("fieldset");
    var email = fieldSet.querySelector("#email");
    if (email && validateEmail(email)) {
      document.getElementById("login").submit();
    }
  }
  
  function validateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.trim() === "") {
      alert("Please provide an email address.");
      email.focus();
      return false;
    } else if (email.value.match(validRegex)) {
      return true;
    } else {
      alert("Email address is invalid.");
      email.focus();
      return false;
    }
  }
  