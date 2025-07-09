
// Name Regex
const name_regex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
// Email Regex
const email_regex =   /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Validate Name
function validateName(name) {
    return name_regex.test(name);
}

// Validate Email
function validateEmail(email) {
    return email_regex.test(email);

}
// Validate Register Form
function validateFormRegister(event) {
    const email = document.getElementById("email-register").value;
    const password = document.getElementById("password-register").value;
    const name = document.getElementById("username-register").value;
    const password_check = document.getElementById("password-register-check").value;

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
    if (password !== password_check) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match',
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
                    confirmButtonText: 'Move to login',
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

        saveUser({ user: user }).then(function () {
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'User registered successfully',
                confirmButtonText: 'OK',
            }).then((result) => {
                if (result.isConfirmed) {
                    // بعد ما يضغط OK
                    window.location.href = "login-register.html";
                }
            });
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

// google login
const GOOGLE_CLIENT_ID = "873052561390-ek8v4lbtch8otjhoqnrhn4tm9ev1koqi.apps.googleusercontent.com";

window.onload = function () {
google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleResponse,
});
// google login button
google.accounts.id.renderButton(
    document.getElementById("google-login"),
    { theme: "filled_blue", size: "medium" ,
    text: "signin_with", // "signup_with"
    shape: "pill",     
    width: 300
    } // optional config
);
};

// parse jwt token
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = atob(base64Url.replace(/-/g, '+').replace(/_/g, '/'));
  return JSON.parse(base64);
}

// handle google response
function handleGoogleResponse(response) {
  const userData = parseJwt(response.credential);
  console.log("✅ User data:", userData);

  // Send data to JSONBin
  saveUser({ user: userData }).then(function () {
    Swal.fire({
      icon: 'success',
      title: 'Success...',
      text: 'User registered successfully via Google',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "login-register.html";
      }
    });
  });
}

// save user data in JSONBin
async function saveUser({ user }) {
  const response = await fetch('https://api.jsonbin.io/v3/b/6860ee398561e97a502df1e1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': '$2a$10$enKlcZOlWIILvpxs/Zg.Q.HUQ05zebl5/XoU2jVeWrmhDg3wx3Soq',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) throw new Error('Failed to save user');
  return await response.json();
}
