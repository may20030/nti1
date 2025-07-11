document.addEventListener("DOMContentLoaded", () => {
const placeOrderBtn = document.querySelector(".place-order");

placeOrderBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#first_name").value;
    const lastName = document.querySelector("#last_name").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const country = document.querySelector("#country").value;
    const city = document.querySelector("#city").value;
    const street = document.querySelector("#street").value;
    const district = document.querySelector("#district").value;
    const apartment = document.querySelector("#apartment").value;
    const zipCode = document.querySelector("#zip_code").value;
    const notes = document.querySelector("#order_notes").value;
    const company = document.querySelector("#company_name").value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;
    const shippingMethod = document.querySelector('input[name="shipping"]:checked')?.value;

    const email_regex = /^[a-zA-Z]{4,15}[0-9]{0,3}[-._]{0,1}[a-zA-Z]{0,15}@(gmail|yahoo|outlook|hotmail)\.com$/;

    function validateEmail(email) {
    return email_regex.test(email);
    }

    let errors = [];

    if (!firstName) errors.push("Please enter your first name.");
    if (!lastName) errors.push("Please enter your lastname.");
    if (!phone) errors.push("Please enter your phone number.");
    if (!email) {
    errors.push("Please enter your email.");
    } else if (!validateEmail(email)) {
    errors.push("Email must include '@' and end with '.com' (e.g., example@gmail.com)");
    }
    if (!paymentMethod) errors.push("Please select a payment.");
    if (!city) errors.push("Please enter your city.");
    if (!company) errors.push("Please enter your company.");
    if (!street) errors.push("Please enter your street address.");
    if (!district) errors.push("Please enter your district.");
    if (!zipCode) errors.push("Please enter your ZIP code.");
    if (!shippingMethod) errors.push("Please select a shipping method.");

    if (errors.length > 0) {
    alert("Please fix the following errors:\n" + errors.join("\n"));
    return;
    }

    const orderData = {
    firstName,
    lastName,
    phone,
    email,
    country,
    city,
    street,
    district,
    apartment,
    zipCode,
    company,
    paymentMethod,
    notes,
    date: new Date().toLocaleString()
    };

    const stored = JSON.parse(localStorage.getItem("checkoutData"));
    let orders = Array.isArray(stored) ? stored : [];

    orders.push(orderData);
    localStorage.setItem("checkoutData", JSON.stringify(orders));

    
});
});



// ===========================================================mayar
document.addEventListener("DOMContentLoaded", function () {
    let cartContainer2 = document.getElementById("product-in-cout");
    let subtotalElement = document.getElementById("subtotal-amount");
    let subtotal = 0;
    for (let key in localStorage) {
        if (key.startsWith("product_")) {
            let item = JSON.parse(localStorage.getItem(key));

            let div = document.createElement("div");
            div.className = "product1";

            let strong = document.createElement("strong");
            strong.textContent = item.title;

            let span = document.createElement("span");
            span.textContent = `$${item.price}`;

            div.appendChild(strong);
            div.appendChild(span);

            cartContainer2.appendChild(div);
            subtotal += parseFloat(item.price);
        }
    }
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
});
