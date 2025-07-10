
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
// ✅ Validate Register Form
function validateFormRegister(event) {
    const email = document.getElementById("email-register").value.trim();
    const password = document.getElementById("password-register").value.trim();
    const name = document.getElementById("username-register").value.trim();
    const password_check = document.getElementById("password-register-check").value.trim();

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
// function validateFormRegister(event) {
//     const email = document.getElementById("email-register").value;
//     const password = document.getElementById("password-register").value;
//     const name = document.getElementById("username-register").value;
//     const password_check = document.getElementById("password-register-check").value;

//     if (!validateName(name)) {
//         swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Invalid name',
//             confirmButtonText: 'Try again',
//     });
//         event.preventDefault();
//         return false;
//     }

//     if (!validateEmail(email)) {
//         swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Invalid email',
//             confirmButtonText: 'Try again',
//     });
//         event.preventDefault();
//         return false;
//     }
//     if (password !== password_check) {
//         swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Passwords do not match',
//             confirmButtonText: 'Try again',
//     });
//         event.preventDefault();
//         return false;
//     }
//     return true;
// }
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
function loginuser() {
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

    return fetchUser().then(function(data) {
        if (!data || !data.user) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
                confirmButtonText: 'Try again',
            }).then(() => false);
        }

        const users = data.user;
        for (let id in users) {
            const user = users[id];

            if (user.email === email && user.password === password) {
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("email", user.email);
                return Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: 'User logged in successfully',
                    confirmButtonText: 'OK',
                }).then(() => true); // ✅ يرجّع true بس بعد الضغط على OK
            }

            if (user.email === email && user.password !== password) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password is incorrect',
                    confirmButtonText: 'Try again',
                }).then(() => false);
            }

            if (user.email !== email && user.password === password) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email is incorrect',
                    confirmButtonText: 'Try again',
                }).then(() => false);
            }
        }

        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User not found',
            confirmButtonText: 'Try again',
        }).then(() => false);
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
        let user = data?.user || {};
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
                    // after click OK
                    window.location.href = "login-register.html";
                }
            });
        });
    });
}
// deleted Account
function deleteAccount() {
    const email = localStorage.getItem("email");
    if (!email) {
        Swal.fire('Error', 'No logged-in user found.', 'error');
        return;
    }

    Swal.fire({
        title: 'Are you sure?',
        text: "Your account will be permanently deleted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (!result.isConfirmed) return;

        fetchUser().then(data => {
            if (!data || !data.user) {
                Swal.fire('Error', 'Something went wrong fetching users.', 'error');
                return;
            }

            let users = data.user;
            let userIdToDelete = null;

            for (let id in users) {
                if (users[id].email === email) {
                    userIdToDelete = id;
                    break;
                }
            }

            if (userIdToDelete) {
                delete users[userIdToDelete];

                updateUser({ user: users }).then(() => {
                    localStorage.clear();
                    Swal.fire('Deleted!', 'Your account has been deleted.', 'success').then(() => {
                        window.location.href = "login-register.html";
                    });
                });
            } else {
                Swal.fire('Error', 'User not found.', 'error');
            }
        });
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
    const form2 = document.getElementById("register-form");

    if (form2) {
        form2.addEventListener("submit", function(e) {
            e.preventDefault();

            if (validateFormRegister(e)) {
                registeruser();
            }
        });
    }
});
// event login
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            loginuser().then(success => {
                if (success) {
                    window.location.href = "Profile.html";
                }
            });
        });
    }
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

    // Fetch existing users
    fetchUser().then(function (data) {
        let users = data?.user || {};

        // Check if user already exists by email
        for (let id in users) {
            if (users[id].email === userData.email) {
                // Save user to local storage and redirect
                localStorage.setItem("user", JSON.stringify(users[id]));
                localStorage.setItem("email", users[id].email);

                Swal.fire({
                    icon: 'success',
                    title: 'Welcome back!',
                    text: 'Logged in with Google',
                    confirmButtonText: 'OK',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "Profile.html";
                    }
                });
                return;
            }
        }

        // Add new Google user
        const newId = "ID:" + (Object.keys(users).length + 1);
        users[newId] = {
            name: userData.name,
            email: userData.email,
            password: "Google_OAuth", // dummy password
            picture: userData.picture
        };

        // Save updated users list
        saveUser({ user: users }).then(function () {
            localStorage.setItem("user", JSON.stringify(users[newId]));
            localStorage.setItem("email", users[newId].email);

            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'User registered successfully via Google',
                confirmButtonText: 'OK',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "Profile.html";
                }
            });
        });
    });
}
delete account
function handleGoogleDelete(response) {
    const userData = parseJwt(response.credential);

    // Fetch existing users
    fetchUser().then(function (data) {
        let users = data?.user || {};
        let userIdToDelete = null;

        // Find user by email
        for (let id in users) {
            if (users[id].email === userData.email) {
                userIdToDelete = id;
                break;
            }
        }

        if (userIdToDelete) {
            // Delete the user
            delete users[userIdToDelete];

            // Update the user list in JSONBin
            updateUser({ user: users }).then(function () {
                localStorage.removeItem("user");
                localStorage.removeItem("email");

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'Your Google account has been deleted.',
                    confirmButtonText: 'OK',
                }).then(() => {
                    window.location.href = "login-register.html";
                });
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'User not found.',
            });
        }
    });
}

