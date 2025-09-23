const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

function validateForm() {
    let Name = document.getElementById("Name-data").value;
    let Email = document.getElementById("Email-data").value;
    let Password = document.getElementById("Password-data").value;
    let Confirm_Password = document.getElementById(
        "Confirm-Password-data"
    ).value;
    let Address = document.getElementById("Address-data").value;
    let Gender = document.getElementById("Gender-data").value;
    let DOB = document.getElementById("DOB-data").value;

    let Requirement = document.getElementById("Requirement-data").checked;

    if (Name.length < 3) {
        document.getElementById("error-Name").innerHTML =
            "Name must be more than 3 characters";
    } else {
        document.getElementById("error-Name").innerHTML = "";
    }

    if (Email.includes("@") && Email.includes(".com")) {
        document.getElementById("error-Email").innerHTML = "";
    } else {
        document.getElementById("error-Email").innerHTML = "Email is not valid";
    }

    if (!Alphanumeric(Password)) {
        document.getElementById("error-Password").innerHTML =
            "Password must be alphanumeric";
    } else {
        document.getElementById("error-Password").innerHTML = "";
    }

    if (Confirm_Password != Password) {
        document.getElementById("error-Confirm-Password").innerHTML =
            "Password must be the same as the previous password";
    } else {
        document.getElementById("error-Confirm-Password").innerHTML = "";
    }

    if (Address.length < 3) {
        document.getElementById("error-Address").innerHTML =
            "Address must be more than 3 characters";
    } else {
        document.getElementById("error-Address").innerHTML = "";
    }

    if (Gender != "Male" && Gender != "Female") {
        document.getElementById("error-Gender").innerHTML =
            "Please input Gender";
    } else {
        document.getElementById("error-Gender").innerHTML = "";
    }

    if (new Date(DOB) > new Date()) {
        document.getElementById("error-DOB").innerHTML =
            "Date of birth is invalid";
    } else {
        document.getElementById("error-DOB").innerHTML = "";
    }

    if (!Requirement) {
        alert("You must agree to CAteriNgz's Privacy Requirements");
    } else {
        alert("You have successfully created an account");
    }
}

function Alphanumeric(Password) {
    let isAlpha = false;
    let isNumeric = false;

    for (let i = 0; i < Password.length; i++) {
        if (isNaN(Password[i]) == true) {
            isAlpha = true;
        } else {
            isNumeric = true;
        }
    }

    if (isAlpha == true && isNumeric == true) {
        return true;
    } else {
        return false;
    }
}
