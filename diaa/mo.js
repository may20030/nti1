document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (name && email && message) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userMessage", message);
        alert("تم حفظ بياناتك بنجاح!");
        form.reset();
      } else {
        alert("من فضلك أدخل الاسم والإيميل والرسالة.");
      }
    });
  }
  const userName = localStorage.getItem("userName");
  if (userName) {
    const greeting = document.getElementById("userGreeting");
  }
});
