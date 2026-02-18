// API URL
const API_URL = "https://fakestoreapi.com/products";

// Global array
let allProducts = [];


// 🔹 Fetch Products from API
async function fetchProducts() {

    let response = await fetch(API_URL);
    let data = await response.json();

    allProducts = data; // save products
    displayProducts(allProducts);
}

fetchProducts();


function displayProducts(products){

    let container = document.getElementById("productContainer");
    container.innerHTML = "";

    products.forEach(product => {

        let oldPrice = (product.price + 3).toFixed(2); // fake old price
        let discount = "19% OFF";

        container.innerHTML += `
        <div class="card" onclick="openDetail(${product.id})">

            <div class="card-img">
                <img src="${product.image}">
            </div>

            <div class="card-body">

                <h3>${product.title}</h3>

                <div class="price-box">
                    <span class="new-price">$${product.price}</span>
                </div>

                <button class="cart-btn">Add To Cart</button>

            </div>

        </div>
        `;
    });
}


// 🔹 Open Product Detail Page
function openDetail(id){

    // Redirect to product.html with ID
    window.location.href = `product.html?id=${id}`;
}


// 🔹 Category Filter
function filterProducts(category){

    if(category === "all"){
        displayProducts(allProducts);
        return;
    }

    let filtered = allProducts.filter(product => {

        if(category === "men"){
            return product.category === "men's clothing";
        }

        if(category === "women"){
            return product.category === "women's clothing";
        }

        return product.category === category;

    });

    displayProducts(filtered);
}


function toggleMenu(){

  let menu = document.getElementById("navMenu");
  menu.classList.toggle("active");

}



/* SLIDER */

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){

  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");

}

function nextSlide(){

  index++;
  if(index >= slides.length) index = 0;

  showSlide(index);
}

function prevSlide(){

  index--;
  if(index < 0) index = slides.length - 1;

  showSlide(index);
}

document.querySelector(".next").onclick = nextSlide;
document.querySelector(".prev").onclick = prevSlide;

/* AUTO SLIDE */
setInterval(nextSlide,4000);
