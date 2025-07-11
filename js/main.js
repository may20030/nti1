document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('input[type="search"]');

    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();
        const allCards = document.querySelectorAll(".mycard");

        allCards.forEach(card => {
            const title = card.querySelector("h5").textContent.toLowerCase();
            if (title.includes(keyword)) {
                card.parentElement.style.display = "block"; 
            } else {
                card.parentElement.style.display = "none"; 
            }
        });
    });
});

// =========================================================================================================
document.addEventListener("DOMContentLoaded", updateCartCountSpan);
function updateCartCountSpan() {
    let count = 0;
    for (let key in localStorage) {
        if (key.startsWith("product_")) {
            count++;
        }
    }
    document.getElementById("cart-count-span").textContent = count;
}

function changeSlide(index) {
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselProduct'));
    carousel.to(index);
}

function updateQty(delta) {
    const input = document.getElementById('qtyInput');
    let value = parseInt(input.value);
    value = isNaN(value) ? 1 : value + delta;
    input.value = Math.max(value, 1);
}
function changeSlide(index) {
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselProduct'));
    carousel.to(index);
}

function updateQty(delta) {
    const input = document.getElementById('qtyInput');
    let value = parseInt(input.value);
    value = isNaN(value) ? 1 : value + delta;
    input.value = Math.max(value, 1);
}
function changeSlide(index) {
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselProduct'));
    carousel.to(index);
}

function updateQty(delta) {
    const input = document.getElementById('qtyInput');
    let value = parseInt(input.value);
    value = isNaN(value) ? 1 : value + delta;
    input.value = Math.max(value, 1);
}
// ==============================================================

function displayproducts(json, id) {
    fetch(json)
        .then(res => res.json())
        .then(products => {
            const row = document.getElementById(id);
            products.forEach(product => {
                const card = document.createElement("div");
                card.className = "col-md-4 mb-4";
                card.innerHTML = `
                  <div class="card mycard text-center position-relative overflow-hidden">
                    ${product.isNew ? '<div class="badge-new">New</div>' : ''}
                    <a href="./mayar/product.html?id=${product.id}">
                      <img src="${product.image}" class="img-fluid mb-3 product-img" style="height:250px;object-fit:contain;" alt="">
                    </a>
                    <button class="add-to-cart">
                      <i class="bi bi-cart"></i> Add to Cart
                    </button>
                    <h5 style="color:#1D3557; font-family: 'Playfair Display', cursive; font-weight:700; font-size:23px;">${product.title}</h5>
                    <div class="mb-2">
                      <span class="price" style="font-family: 'Playfair Display';color:#1D3557;">$${product.price}</span>
                      <span class="old-price ms-2" style="font-family: 'Playfair Display';color:#457B9D;">$${product.oldPrice}</span>
                    </div>
                  </div>
                `;

                row.appendChild(card);

                const addToCartBtn = card.querySelector(".add-to-cart");
                addToCartBtn.addEventListener("click", function () {
                    localStorage.setItem(`product_${product.id}`, JSON.stringify({
                        id: product.id,
                        price: product.price,
                        image: product.image,
                        title: product.title
                    }));
                    updateCartCountSpan();
                });
            });
        });
}
displayproducts("./json/products.json", "productsRow");
displayproducts("./json/pro2.json", "productsRow2");

fetch("../json/pro3.json")
.then(res => res.json())
.then(products => {
    const row = document.getElementById("productsRow3");
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
          <div class="card mycard text-center position-relative overflow-hidden">
            ${product.isNew ? '<div class="badge-new">New</div>' : ''}
            <a href="./mayar/product.html?id=${product.id}">
              <img src="${product.image}" class="img-fluid mb-3 product-img" style="height:250px;object-fit:contain;" alt="">
            </a>
            <button class="add-to-cart">
              <i class="bi bi-cart"></i> Add to Cart
            </button>
            <h5 style="color:#1D3557; font-family: 'Playfair Display', cursive; font-weight:700; font-size:23px;">${product.title}</h5>
            <div class="mb-2">
              <span class="price" style="font-family: 'Playfair Display';color:#1D3557;">$${product.price}</span>
              <span class="old-price ms-2" style="font-family: 'Playfair Display';color:#457B9D;">$${product.oldPrice}</span>
            </div>
          </div>
        `;
        row.appendChild(card);

        const addToCartBtn = card.querySelector(".add-to-cart");
        addToCartBtn.addEventListener("click", function () {
            localStorage.setItem(`product_${product.id}`, JSON.stringify({
                id: product.id,
                price: product.price,
                image: product.image,
                title: product.title
            }));
            updateCartCountSpan(); 
        });
    });
});



//================================================================

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
if(productId<=6){
fetch('../json/products.json')
    .then(res => res.json())
    .then(products => {
        const product = products.find(p => p.id === productId);

        showProductDetails(product)
    });}
else if(productId>6&&productId<10){
fetch('../json/pro2.json')
    .then(res => res.json())
    .then(products => {
        const product = products.find(p => p.id === productId);

        showProductDetails(product)
    });}
else{
fetch('../json/pro3.json')
    .then(res => res.json())
    .then(products => {
        const product = products.find(p => p.id === productId);
        showProductDetails(product);
    });}



    function showProductDetails(product) {
        document.getElementById("imgAct").src = product.image;
        document.getElementById("imgActv").src = product.image;
        document.getElementById("cov1").src = product.cov1;
        document.getElementById("cove1").src = product.cov1;
        document.getElementById("cov2").src = product.cov2;
        document.getElementById("cove2").src = product.cov2;
        document.getElementById("proTit").innerHTML = product.title;
        document.getElementById("proDes").innerHTML = product.description;
        document.getElementById("proPri").innerHTML = product.price;
        document.getElementById("proPriOld").innerHTML = product.oldPrice;
    
        let btn = document.getElementById("cart-add");
        btn.addEventListener("click", function () {
            localStorage.setItem(`product_${product.id}`, JSON.stringify({
                price: product.price,
                image: product.image,
                title: product.title
            }));
            updateCartCountSpan();
        });
    }
    
//===================================================================================
let allProducts = [];

function loadShopProducts() {
    fetch('../json/all.json')
        .then(res => res.json())
        .then(data => {
            allProducts = data;
            displayShopProducts(allProducts); 
        });
}

function displayShopProducts(products) {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";
    products.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
            <div class="card mycard text-center position-relative overflow-hidden">
                ${product.isNew ? '<div class="badge-new">New</div>' : ''}
                <a href="../mayar/product.html?id=${product.id}">
                    <img src="${product.image}" class="img-fluid mb-3" style="height:250px;object-fit:contain;" alt="">
                </a>
                <h5 style="color:#1D3557; font-family: 'Playfair Display'; font-weight:700;">${product.title}</h5>
                <div class="mb-2">
                    <span class="price" style="font-family: 'Playfair Display';color:#1D3557;">$${product.price}</span>
                    <span class="old-price ms-2" style="color:#457B9D;">$${product.oldPrice}</span>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadShopProducts();

    const categoryDivs = document.querySelectorAll(".category");
    categoryDivs.forEach(cat => {
        cat.addEventListener("click", () => {
            const catType = cat.dataset.category;
            if (catType === "all") {
                displayShopProducts(allProducts);
            } else {
                const filtered = allProducts.filter(p => p.category === catType);
                displayShopProducts(filtered);
            }
        });
    });

    document.querySelector('input[type="search"]').addEventListener("input", function () {
        const keyword = this.value.toLowerCase();
        const filtered = allProducts.filter(p => p.title.toLowerCase().includes(keyword));
        displayShopProducts(filtered);
    });
});

