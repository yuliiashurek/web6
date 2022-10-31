const form = document.querySelector("form"),
    emailArea = form.querySelector(".email-field"),
    emailInput = emailArea.querySelector(".email"),
    passwordArea = form.querySelector(".create-password"),
    passwordInput = passwordArea.querySelector(".password"),
    lastNameArea = form.querySelector(".lastName-field"),
    lastNameInput = lastNameArea.querySelector(".lastName"),
    firstNameArea = form.querySelector(".firstName-field"),
    firstNameInput = firstNameArea.querySelector(".firstName"),
    patronymicArea = form.querySelector(".patronymic-field"),
    patronymicInput = patronymicArea.querySelector(".patronymic"),
    phoneArea = form.querySelector(".phone-field"),
    phoneInput = phoneArea.querySelector(".phone"),
    dateArea = form.querySelector(".date-field"),
    dateInput = dateArea.querySelector(".date"),
    genderArea = form.querySelector(".gender-field"),
    gender1Input = genderArea.querySelector(".gender1"),
    gender2Input = genderArea.querySelector(".gender2"),
    gender3Input = genderArea.querySelector(".gender3"),
    groupArea = form.querySelector(".group-field"),
    groupInput = groupArea.querySelector(".group");

const namesRegex = /[А-Яа-я]/;

// Email Validation
function checkEmail() {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailRegex)) {
        return emailArea.classList.add("invalid");
    }
    emailArea.classList.remove("invalid");
}

// Password Validation
function checkPassword() {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordInput.value.match(passwordRegex)) {
        return passwordArea.classList.add("invalid");
    }
    passwordArea.classList.remove("invalid");
}

// Last Name Validation
function checkLastName() {
    if (!lastNameInput.value.match(namesRegex) || lastNameInput.value.length < 2) {
        return lastNameArea.classList.add("invalid");
    } else if (lastNameInput.value.match(/[!$#&]/g) || lastNameInput.value.match(/\d/g) || lastNameInput.value.match(/[A-z]/g)) {
        return lastNameInput.classList.add("invalid");
    }
    lastNameArea.classList.remove("invalid");
}

// First Name Validation
function checkFirstName() {
    if (!firstNameInput.value.match(namesRegex) || firstNameInput.value.length < 2) {
        return firstNameArea.classList.add("invalid");
    } else if (firstNameInput.value.match(/[!$#&]/g) || firstNameInput.value.match(/\d/g) || firstNameInput.value.match(/[A-z]/g)) {
        return firstNameArea.classList.add("invalid");
    }
    firstNameArea.classList.remove("invalid");
}

// Patronymic Validation
function checkPatronymic() {
    if (!patronymicInput.value.match(namesRegex) || patronymicInput.value.length < 2) {
        return patronymicArea.classList.add("invalid");
    } else if (patronymicInput.value.match(/[!$#&]/g) || patronymicInput.value.match(/\d/g) || patronymicInput.value.match(/[A-z]/g)) {
        return patronymicArea.classList.add("invalid");
    }
    patronymicArea.classList.remove("invalid");
}

// Phone Validation
function checkPhone() {
    const phoneRegex = /^[+]38[(]0\d{2}[)]-\d{3}-\d{2}-\d{2}$/;
    if (!phoneInput.value.match(phoneRegex)) {
        return phoneArea.classList.add("invalid");
    }
    phoneArea.classList.remove("invalid");
}

// Date Validation
function checkDate() {
    const birthday = new Date(dateInput.value);
    if (dateInput.value === '' || birthday.getFullYear() > 2006 || birthday.getFullYear() <1922) {
        return dateArea.classList.add("invalid");
    }
    dateArea.classList.remove("invalid");
}

// Gender Validation
function checkGender() {
    if (!gender1Input.checked && !gender2Input.checked && !gender3Input.checked) {
        return genderArea.classList.add("invalid");
    }
    genderArea.classList.remove("invalid");
}

// Group Validation
function checkGroup() {
    const groupValue = groupInput.options[groupInput.selectedIndex].value;
    if (groupValue === '') {
        return groupArea.classList.add("invalid");
    }
    groupArea.classList.remove("invalid");
}

function submitFunction() {
    let table = document.getElementById('tableID');
    let row = table.insertRow(table.length);

    let finalGender = '';
    if (gender1Input.checked) {
        finalGender = gender1Input;
    } else if (gender2Input.checked) {
        finalGender = gender2Input;
    } else if (gender3Input.checked) {
        finalGender = gender3Input;
    }

    let outputData = [emailInput, passwordInput, lastNameInput, firstNameInput, patronymicInput, phoneInput, dateInput, finalGender, groupInput]
    let cell0 = row.insertCell(0)
    cell0.innerHTML = '<input type=checkbox name="checkBoxed">';

    for (let i=1; i<=9; i++){
        let cell = row.insertCell(i);
        cell.innerHTML = outputData[i-1].value;
    }

    // let cell0=row.insertCell(0)
    // let cell1=row.insertCell(1);
    // let cell2=row.insertCell(2);
    // let cell3=row.insertCell(3);
    // let cell4=row.insertCell(4);
    // let cell5=row.insertCell(5);
    // let cell6=row.insertCell(6);
    // let cell7=row.insertCell(7);
    // let cell8=row.insertCell(8);
    // let cell9=row.insertCell(9);
    //
    // cell0.innerHTML = '<input type=checkbox>';
    // cell1.innerHTML = emailInput.value;
    // cell2.innerHTML = passwordInput.value;
    // cell3.innerHTML = lastNameInput.value;
    // cell4.innerHTML = firstNameInput.value;
    // cell5.innerHTML = patronymicInput.value;
    // cell6.innerHTML = phoneInput.value;
    // cell7.innerHTML = dateInput.value;
    // if (gender1Input.checked){
    //     cell8.innerHTML = gender1Input.value;
    // } else if (gender2Input.checked){
    //     cell8.innerHTML = gender2Input.value;
    // }else if (gender3Input.checked){
    //     cell8.innerHTML = gender3Input.value;
    // }
    // cell9.innerHTML = groupInput.options[groupInput.selectedIndex].value

    form.reset();
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    checkPassword();
    checkLastName();
    checkFirstName();
    checkPatronymic();
    checkPhone();
    checkDate();
    checkGender();
    checkGroup();

    emailInput.addEventListener("keyup", checkEmail);
    passwordInput.addEventListener("keyup", checkPassword);
    lastNameInput.addEventListener("keyup", checkLastName);
    firstNameArea.addEventListener("keyup", checkFirstName);
    patronymicArea.addEventListener("keyup", checkPatronymic);
    phoneArea.addEventListener("keyup", checkPhone);
    dateArea.addEventListener("input", checkDate);
    genderArea.addEventListener("input", checkGender);
    groupArea.addEventListener("input", checkGroup);

    if (
        !emailArea.classList.contains("invalid") &&
        !passwordArea.classList.contains("invalid") &&
        !lastNameArea.classList.contains("invalid") &&
        !firstNameArea.classList.contains("invalid") &&
        !patronymicArea.classList.contains("invalid") &&
        !phoneArea.classList.contains("invalid") &&
        !dateArea.classList.contains("invalid") &&
        !genderArea.classList.contains("invalid") &&
        !groupArea.classList.contains("invalid")
    ) {
        submitFunction();
    }
});


function deleteRows(table) {
    let inputs = table.querySelectorAll('input[type="checkbox"]');
    let i = inputs.length;
    while (i--) {
        let input = inputs[i];
        if (input.checked === true) {
            let tr = input.parentNode.parentNode;
            table.deleteRow(tr.rowIndex);
        }
    }
}


function copyRows(table) {
    let inputs = table.querySelectorAll('input[type="checkbox"]');
    let i = inputs.length;
    while (i--) {
        let input = inputs[i];
        if (input.checked === true) {
            // console.log(input);
            // console.log(input.parentNode);
            // console.log(input.parentNode.parentNode);
            let tr = input.parentNode.parentNode;
            let copiedRow = tr.cloneNode(tr.rowIndex);
            table.appendChild(copiedRow); // add new row to end of table
            input.checked = false;
        }
    }
}

// // Hide and show password
// const eyeIcons = document.querySelectorAll(".show-hide");
//
// eyeIcons.forEach((eyeIcon) => {
//   eyeIcon.addEventListener("click", () => {
//     const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
//     if (pInput.type === "password") {
//       eyeIcon.classList.replace("bx-hide", "bx-show");
//       return (pInput.type = "text");
//     }
//     eyeIcon.classList.replace("bx-show", "bx-hide");
//     pInput.type = "password";
//   });
// });