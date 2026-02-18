let params = new URLSearchParams(window.location.search);
let productId = params.get("id");

async function fetchProduct(){

    let response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    let product = await response.json();

    showProduct(product);
}

fetchProduct();

function addToCart(product){
    alert(product.title + " added to cart ");
}

function showProduct(product){

    let container = document.getElementById("productDetail");

    container.innerHTML = `

        <div class="product-card">

            <div class="product-image">
                <img src="${product.image}">
            </div>

            <div class="product-info">
                <h2>${product.title}</h2>
                <p class="price">$${product.price}</p>
                <p class="category">${product.category}</p>
                <p class="description">${product.description}</p>

                <button class="add-cart" onclick='addToCart(${JSON.stringify(product)})'>
                    Add To Cart
                </button>
            </div>

        </div>
    `;
}
