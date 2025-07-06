

// ===============================================================================================================================
document.addEventListener("DOMContentLoaded", updateCartCountSpan);

document.addEventListener("DOMContentLoaded", function () {
    let cartContainer = document.getElementById("product-in-cart");

for (let key in localStorage) {
    if (key.startsWith("product_")) {
        let item = JSON.parse(localStorage.getItem(key));

        let div = document.createElement("div");
        div.className = "cart-item";

        let img = document.createElement("img");
        img.src = item.image;
        img.className = "cart-img";

        let title = document.createElement("h4");
        title.innerText = item.title;

        let price = document.createElement("h4");
        price.innerText = item.price;

        let quan = document.createElement("div");
        quan.setAttribute("class", "quantity");

        let increase = document.createElement("button");
        let count = document.createElement("p");
        count.innerText = "1";
        let decrease = document.createElement("button");
        decrease.innerText = "-";
        increase.innerText = "+";

        let numericPrice = item.price;
        let total = document.createElement("h4");
        total.innerText = "$" + numericPrice.toFixed(2);

        decrease.addEventListener("click", function () {
            if (Number(count.innerText) > 1) {
                count.innerText = Number(count.innerText) - 1;
                total.innerText = "$" + (numericPrice * Number(count.innerText)).toFixed(2);
                updateSubtotal();
            }
        });

        increase.addEventListener("click", function () {
            if (Number(count.innerText) < 10) {
                count.innerText = Number(count.innerText) + 1;
                total.innerText = "$" + (numericPrice * Number(count.innerText)).toFixed(2);
                updateSubtotal();
            }
        });

        quan.appendChild(decrease);
        quan.appendChild(count);
        quan.appendChild(increase);

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-item");
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", function () {
            localStorage.removeItem(key);
            div.remove();
            updateSubtotal();
            updateCartCountSpan();
        });

        div.appendChild(removeBtn);
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(quan);
        div.appendChild(total);
        div.dataset.unitPrice = numericPrice;
        div.dataset.quantityEl = count;

        cartContainer.appendChild(div);
    }
}

});


// ===============================================================================================================================
let checkoutContainer = document.getElementById("check-out");

let div = document.createElement("div");
div.className = "check-out-div";
checkoutContainer.appendChild(div);
let h2 = document.createElement("h2");
h2.innerText = "Cart Totals";
div.appendChild(h2);
let conLandF = document.createElement("div")
let left = document.createElement("div")
let right = document.createElement("div")
div.appendChild(conLandF)
conLandF.setAttribute("class", "leftAndRightDiv")
conLandF.appendChild(left);
conLandF.appendChild(right);
let Subtotal = document.createElement("p");
Subtotal.innerText = "Subtotal";
let Delivery = document.createElement("p");
Delivery.innerText = "Delivery";
let Discount = document.createElement("p");
Discount.innerText = "Discount";
let lastTotal = document.createElement("p");
lastTotal.innerText = "Total";
left.appendChild(Subtotal);
left.appendChild(Delivery);
left.appendChild(Discount);
left.appendChild(lastTotal);

let SubtotalPrice = document.createElement("p");
SubtotalPrice.innerText = "$0.00"
let DeliveryPrice = document.createElement("p");
DeliveryPrice.innerText = "$0.00";
let DiscountPrice = document.createElement("p");
DiscountPrice.innerText = "$3.00";
let lastTotalPrice = document.createElement("p");
lastTotalPrice.innerText = "$0.00";
right.appendChild(SubtotalPrice);
right.appendChild(DeliveryPrice);
right.appendChild(DiscountPrice);
right.appendChild(lastTotalPrice);
function updateSubtotal() {
    let items = document.querySelectorAll(".cart-item");
    let total = 0;
    items.forEach(item => {
        let price = parseFloat(item.dataset.unitPrice);
        let quantity = Number(item.querySelector("p").innerText);
        total += price * quantity;
    });

    SubtotalPrice.innerText = "$" + total.toFixed(2);

    let delivery = parseFloat(DeliveryPrice.innerText.replace("$", ""));
    let discount = parseFloat(DiscountPrice.innerText.replace("$", ""));
    let finalTotal = total + delivery - discount;

    lastTotalPrice.innerText = "$" + finalTotal.toFixed(2);
}

for (let key in localStorage) {
    if (key.startsWith("product_")) {
        let item = JSON.parse(localStorage.getItem(key));
    }
}

updateSubtotal();
let clearBtnall = document.createElement("button");
clearBtnall.innerText = "Proceed to Checkout";
clearBtnall.className = "clear-cart-btn";
clearBtnall.addEventListener("click", function () {
    localStorage.clear();
    cartContainer.innerHTML = "";
    updateSubtotal();
    updateCartCountSpan();
});
checkoutContainer.appendChild(clearBtnall);



function updateCartCountSpan() {
    let count = 0;
    for (let key in localStorage) {
        if (key.startsWith("product_")) {
            count++;
        }
    }
    document.getElementById("cart-count-span").textContent = count;
}

