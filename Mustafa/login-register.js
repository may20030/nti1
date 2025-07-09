// toggle login and register on desktop 
const containerMain = document.querySelector('.container');
const registerBtn = document.querySelector('.toggle-panal.toggle-left .register-btn');
const loginBtn = document.querySelector('.toggle-panal.toggle-right .login-btn');
// add event listener to registerBtn
registerBtn.addEventListener('click', () => {
    containerMain.classList.add('active');
});
// add event listener to loginBtn
loginBtn.addEventListener('click', () => {
    containerMain.classList.remove('active');
});

// toggle login and register on mobile 
document.addEventListener('click', function (e) {
  const target = e.target;
  const containerMain = document.querySelector('.container');
// check if containerMain exists
  if (!containerMain) return;
// check if target is mobile-Register-btn
  if (target.classList.contains('mobile-Register-btn')) {
    e.preventDefault();
    if (window.innerWidth <= 740) {
      containerMain.classList.add('active');
    }
  }
// check if target is mobile-login-btn
  if (target.classList.contains('mobile-login-btn')) {
    e.preventDefault();
    if (window.innerWidth <= 740) {
      containerMain.classList.remove('active');
    }
  }
});

