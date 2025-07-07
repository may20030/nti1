// create conatiner
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);
// create container sign in form
const conatinerform = document.createElement('div');
conatinerform.className = 'form_box login';
container.appendChild(conatinerform);
//create sign in form
const form = document.createElement('form');
form.id = 'login-form';
conatinerform.appendChild(form);
form.action = '#';
form.method = '#';
// create elements login in form
const form_h1 = document.createElement('h1');
form.appendChild(form_h1);
form_h1.textContent = 'login';
const input_box = document.createElement('div');
form.appendChild(input_box);
input_box.className = 'input-box';
const input = document.createElement('input');
input.type = 'email';
input.name = 'email';
input.placeholder = 'Email';
input.id = 'email-login';
input.required = true;
input_box.appendChild(input);
const i = document.createElement('i');
i.className = 'fa-solid fa-envelope';
input_box.appendChild(i);
const form_box2 = document.createElement('div');
form_box2.className = 'input-box';
form.appendChild(form_box2);
const input_2 = document.createElement('input');
input_2.type = 'password';
input_2.name = 'password';
input_2.placeholder = 'Password';
input_2.id = 'password-login';
input_2.required = true;
form_box2.appendChild(input_2);
const i_2 = document.createElement('i');
i_2.className = 'fa-solid fa-lock';
form_box2.appendChild(i_2);
// create Forgot Password
const Forgot_Password = document.createElement('div');
Forgot_Password.className = 'forgot-link';
form.appendChild(Forgot_Password);
const Forgot_Password_a = document.createElement('a');
Forgot_Password_a.href = '#';
Forgot_Password_a.textContent = 'Forgot Password?';
Forgot_Password.appendChild(Forgot_Password_a);
// create button login
const btn = document.createElement('button');
btn.type = "submit";
btn.className = 'btn login-btn';
btn.textContent = 'Login';
Forgot_Password.appendChild(btn);
const Forgot_Password_p = document.createElement('p');
Forgot_Password_p.textContent = 'Don\'t have an account?';
Forgot_Password.appendChild(Forgot_Password_p);
const Forgot_Password_a_2 = document.createElement('a');
Forgot_Password_a_2.href = '#';
Forgot_Password_a_2.textContent = 'Register';
Forgot_Password_a_2.className = 'mobile-Register-btn';
// Forgot_Password_a_2.window.location.href = "login-register.html";
Forgot_Password.appendChild(Forgot_Password_a_2);
const Forgot_Password_p_2 = document.createElement('p');
Forgot_Password_p_2.textContent = 'Or login with social platforms';
Forgot_Password.appendChild(Forgot_Password_p_2);
// create social
const social_form = document.createElement('div');
social_form.className = 'social-icons';
form.appendChild(social_form);
const social_form_a = document.createElement('a');
social_form_a.href = '#';
social_form.appendChild(social_form_a);
const social_form_i = document.createElement('i');
social_form_i.className = 'fa-brands fa-facebook';
social_form_a.appendChild(social_form_i);
const social_form_a_2 = document.createElement('a');
social_form_a_2.href = '#';
social_form.appendChild(social_form_a_2);
const social_form_i_2 = document.createElement('i');
social_form_i_2.className = 'fa-brands fa-google';
social_form_a_2.appendChild(social_form_i_2);
const social_form_a_3 = document.createElement('a');
social_form_a_3.href = '#';
social_form.appendChild(social_form_a_3);
const social_form_i_3 = document.createElement('i');
social_form_i_3.className = 'fa-brands fa-github';
social_form_a_3.appendChild(social_form_i_3);
const social_form_a_4 = document.createElement('a');
social_form_a_4.href = '#';
social_form.appendChild(social_form_a_4);
const social_form_i_4 = document.createElement('i');
social_form_i_4.className = 'fa-brands fa-linkedin';
social_form_a_4.appendChild(social_form_i_4);
// create sign up form
const containerForm = document.createElement('div');
containerForm.className = 'form_box register';
container.appendChild(containerForm);
const form2 = document.createElement('form');
containerForm.appendChild(form2);
form2.id = 'register-form';
form2.action = '#';
form2.method = '#';
const form2_h1 = document.createElement('h1');
form2.appendChild(form2_h1);
form2_h1.textContent = 'Registration';
const input_box2_username = document.createElement('div');
form2.appendChild(input_box2_username);
input_box2_username.className = 'input-box';
const input2_username = document.createElement('input');
input2_username.type = 'text';
input2_username.name = 'username';
input2_username.placeholder = 'Username';
input2_username.id = 'username-register';
input2_username.required = true;
input_box2_username.appendChild(input2_username);
const input_box2_username_i = document.createElement('i');
input_box2_username_i.className = 'fa-solid fa-user';
input_box2_username.appendChild(input_box2_username_i);
const input_box2_email = document.createElement('div');
form2.appendChild(input_box2_email);
input_box2_email.className = 'input-box';
const input2_email = document.createElement('input');
input2_email.type = 'text';
input2_email.name = 'email';
input2_email.placeholder = 'Email';
input2_email.id = 'email-register';
input2_email.required = true;
input_box2_email.appendChild(input2_email);
const input_box2_email_i = document.createElement('i');
input_box2_email_i.className = 'fa-solid fa-envelope';
input_box2_email.appendChild(input_box2_email_i);
const form2_box2 = document.createElement('div');
form2.appendChild(form2_box2);
form2_box2.className = 'input-box';
const input2_password = document.createElement('input');
input2_password.type = 'password';
input2_password.name = 'password';
input2_password.placeholder = 'Password';
input2_password.id = 'password-register';
input2_password.required = true;
input2_password.autocomplete = 'new-password';
pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}" 
title="Password must be at least 8 characters, with uppercase, lowercase, number, and special character."
form2_box2.appendChild(input2_password);
const i2_2 = document.createElement('i');
i2_2.className = 'fa-solid fa-lock';
form2_box2.appendChild(i2_2);
// create forgot password
const forgot_password = document.createElement('div');
forgot_password.className = 'forgot-link';
form2.appendChild(forgot_password);
const btn2 = document.createElement('button');
btn2.type = 'submit';
btn2.className = 'btn register-btn';
btn2.textContent = 'Register';
forgot_password.appendChild(btn2);
const forgot_password_p = document.createElement('p');
forgot_password_p.textContent = 'Don\'t have an account?';
forgot_password.appendChild(forgot_password_p);
const forgot_password_a = document.createElement('a');
forgot_password_a.textContent = 'Login';
forgot_password_a.href = '#';
forgot_password_a.className = 'mobile-login-btn';

forgot_password.appendChild(forgot_password_a);
const forgot_password_p_2 = document.createElement('p');
forgot_password_p_2.textContent = 'Or register with social platforms';
forgot_password.appendChild(forgot_password_p_2);

// create social
const social_form_2 = document.createElement('div');
social_form_2.className = 'social-icons';
forgot_password.appendChild(social_form_2);
const social_form_2_a = document.createElement('a');
social_form_2_a.href = '#';
social_form_2.appendChild(social_form_2_a);
const social_form_2_i = document.createElement('i');
social_form_2_i.className = 'fa-brands fa-facebook';
social_form_2_a.appendChild(social_form_2_i);
const social_form_2_a_2 = document.createElement('a');
social_form_2_a_2.href = '#';
social_form_2.appendChild(social_form_2_a_2);
const social_form_2_i_2 = document.createElement('i');
social_form_2_i_2.className = 'fa-brands fa-google';
social_form_2_a_2.appendChild(social_form_2_i_2);
const social_form_2_a_3 = document.createElement('a');
social_form_2_a_3.href = '#';
social_form_2.appendChild(social_form_2_a_3);
const social_form_2_i_3 = document.createElement('i');
social_form_2_i_3.className = 'fa-brands fa-github';
social_form_2_a_3.appendChild(social_form_2_i_3);
const social_form_2_a_4 = document.createElement('a');
social_form_2_a_4.href = '#';
social_form_2.appendChild(social_form_2_a_4);
const social_form_2_i_4 = document.createElement('i');
social_form_2_i_4.className = 'fa-brands fa-linkedin';
social_form_2_a_4.appendChild(social_form_2_i_4);
// creata toggle box
const toggle_box = document.createElement('div');
toggle_box.className = 'toggle-box';
container.appendChild(toggle_box);
// create toggle panal-left
const toggle_panal = document.createElement('div');
toggle_panal.className = 'toggle-panal toggle-left';
toggle_box.appendChild(toggle_panal);
const toggle_panal_h1 = document.createElement('h1');
toggle_panal_h1.textContent = 'SignHello, Welcome!';
toggle_panal.appendChild(toggle_panal_h1);
const toggle_panal_p = document.createElement('p');
toggle_panal.appendChild(toggle_panal_p);
toggle_panal_p.textContent = 'create account';
const toggle_panal_btn = document.createElement('button');
toggle_panal_btn.textContent = 'Register';
toggle_panal_btn.className = 'btn register-btn';
toggle_panal.appendChild(toggle_panal_btn);
// create toggle panal-right
const toggle_panal_right = document.createElement('div');
toggle_panal_right.className = 'toggle-panal toggle-right';
toggle_box.appendChild(toggle_panal_right);
const toggle_panal_right_h1 = document.createElement('h1');
toggle_panal_right.appendChild(toggle_panal_right_h1);
toggle_panal_right_h1.textContent = 'SignHello, Welcome!';
const toggle_panal_right_p = document.createElement('p');
toggle_panal_right.appendChild(toggle_panal_right_p);
toggle_panal_right_p.textContent = 'Already hava an account ?';
const toggle_panal_right_btn = document.createElement('button');
toggle_panal_right_btn.textContent = 'Login';
toggle_panal_right_btn.className = 'btn login-btn';
toggle_panal_right.appendChild(toggle_panal_right_btn);








