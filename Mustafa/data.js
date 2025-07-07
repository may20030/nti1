
// Name Regex
const name_regex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
// Email Regex
const email_regex =  /^[a-zA-Z]{4,15}[0-9]{0,3}[-._]{0,1}[a-zA-Z]{0,15}(@)(gmail|yahoo|oulook|hotmail)(.com)/;

// Password Regex 
const password_regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

// Validate Name
function validateName(name) {
    return name_regex.test(name);
}

// Validate Email
function validateEmail(email) {
    return email_regex.test(email);
}

// Validate Password
function validatePassword(password) {
    return password_regex.test(password);
}

// Validate Login Form
function validateForm(event) {
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

    if (!validateEmail(email)) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid email',
            confirmButtonText: 'Try again',
    });
        event.preventDefault();
        return false;
    }

    if (!validatePassword(password)) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid password',
            confirmButtonText: 'Try again',
    });
        event.preventDefault();
        return false;
    }

    return true;
}

// Validate Register Form
function validateFormRegister(event) {
    const email = document.getElementById("email-register").value;
    const password = document.getElementById("password-register").value;
    const name = document.getElementById("username-register").value;

    if (!validateName(name)) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid name',
            confirmButtonText: 'Try again',
    });
        event.preventDefault();
        return false;
    }

    if (!validateEmail(email)) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid email',
            confirmButtonText: 'Try again',
    });
        event.preventDefault();
        return false;
    }

    if (!validatePassword(password)) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid password',
            confirmButtonText: 'Try again',
    });
        event.preventDefault();
        return false;
    }

    return true;
}
// jsonbin data-base
const id_bin = "6860ee398561e97a502df1e1";
const api_key = "$2a$10$enKlcZOlWIILvpxs/Zg.Q.HUQ05zebl5/XoU2jVeWrmhDg3wx3Soq";
// fetch user data
function fetchUser() {
    return fetch(`https://api.jsonbin.io/v3/b/${id_bin}/latest`, {
        headers: {
            "X-Master-Key": api_key
        }
    })
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
    })
    .then(data => {
        return data && data.record ? data.record : null;
    })
    .catch(error => {
        console.error("fetchUser error:", error.message);
        return null; // لتجنب undefined
    });
}

// save user data
function saveUser(data) {
    return fetch(`https://api.jsonbin.io/v3/b/${id_bin}`, {
        method: "PUT",
        headers: {
            "X-Master-Key": api_key,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        return data.record;
    })
    .catch(error => {
        console.log(error);
    });
}
// update user data
function updateUser(data) {
    return fetch(`https://api.jsonbin.io/v3/b/${id_bin}`, {
        method: "PUT",
        headers: {
            "X-Master-Key": api_key,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        return data.record;
    })
    .catch(error => {
        console.log(error);
    });
}
// delete user data
function deleteUser() {
    return fetch(`https://api.jsonbin.io/v3/b/${id_bin}`, {
        method: "DELETE",
        headers: {
            "X-Master-Key": api_key
        }
    })
    .then(res => res.json())
    .then(data => {
        return data.record;
    })
    .catch(error => {
        console.log(error);
    });
}
// login user
function loginuser(){
    // get user data
    let email = document.getElementById("email-login").value;
    let password = document.getElementById("password-login").value;
    // check if user exists
    fetchUser().then(function(data) {
        if (!data || !data.user) {
            swal.fire({ 
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
                confirmButtonText: 'Try again',
        });
            return;
        }
        let user = data.user || {};
        for (let id in user){
            if (user[id].email == email && user[id].password == password){
                // save data in local storage
                localStorage.setItem("user", JSON.stringify(user[id]));
                localStorage.setItem("email", JSON.stringify(user[id].email));
                swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: 'User logged in successfully',
                    confirmButtonText: 'OK',
            });
                window.location.href = "profile.html";
                return;
            }
            else if(user[id].email == email && user[id].password != password){
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password is incorrect',
                    confirmButtonText: 'Try again',
            });
                return;
            }
            else if(user[id].email != email &&  user[id].password == password){
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email is incorrect',
                    confirmButtonText: 'Try again',
            });
                return;
            }
        }   

        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User not found',
            confirmButtonText: 'Try again',
            willClose: () => {
                window.location.href = "login-register.html";
            }
    });
    });
}

// register user
function registeruser(){
    // get user data
    let name = document.getElementById("username-register").value;
    let email = document.getElementById("email-register").value;
    let password = document.getElementById("password-register").value;
    // check if user already exists
    fetchUser().then(function(data) {
        let user = data.user || {};
        for (let id in user){
            if (user[id].email == email){
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User already exists',
                    confirmButtonText: 'Try again',
                    willClose: () => {
                        window.location.href = "login-register.html";
                    }
            });
                return;
            }
        }
        // create id 
        let create_id = Object.keys(user).length + 1;
        let newid = "ID:" + create_id;
        // create user data
        user[newid] = {
            name: name,
            email: email,
            password: password
        };

        // save user data
        saveUser({user:user}).then(function(){
            swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'User registered successfully',
                confirmButtonText: 'OK',
            });
            window.location.href = "login-register.html";
        });
    });
}
// logout user
function logoutuser(){
    document.getElementById("logout")
    .addEventListener("click", function() {
    logoutuser();    
    localStorage.clear();
    swal.fire({
        icon: 'success',
        title: 'Success...',
        text: 'User logged out successfully',
        confirmButtonText: 'OK',
    });
    window.location.href = "login-register.html";
    });
}
// protected page
function protectedPage(){
    let user = localStorage.getItem("user");
    if (!user){
        window.location.href = "login-register.html";
    }
}
// event register
document.addEventListener("DOMContentLoaded", function () {
    var form2 = document.getElementById("register-form");
    form2.addEventListener("submit", function(e) {
        e.preventDefault();
        if (validateFormRegister(e)) {
            registeruser();
        }
    });
});

// event login
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    form?.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validateForm(e)) {
            loginuser();
        }
    });
});

