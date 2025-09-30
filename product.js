const mainBody = document.querySelector(".mainBody");
const numberOfProducts = document.querySelector("#numberOfProducts")
// const burger = document.querySelector(".burger");
// const menu = document.querySelector(".menu");

const modal = document.querySelector("#cartModal");
const cartIcon = document.querySelector(".shoppingCard");
const closeBtn = document.querySelector(".closeBtn");


class Product {
    constructor(name, price, image, description) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
        this.count=0
    }

    add(product) {
         const existing = this.items.find(item => item.product.name === product.name);
         console.log(existing)
        this.count++
        if (existing) {
            existing.quantity++;
        } else {
            this.items.push({ product, quantity: 1 });
           
            
        }
        console.log(this.items)
        // this.animateCart();
        
        this.renderCart();
    }

    renderCart() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = "";

        if (this.items.length === 0) {
            cartItems.innerHTML = "<li>Your cart is empty.</li>";
            return;
        }

        this.items.forEach((el) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${el.product.name}</strong> — $${el.product.price} × ${el.quantity}`;
            cartItems.appendChild(li);
        });
    }
}


const productList = [
    new Product("Table", 120, "./img/table.png", "This is a really good table"),
    new Product("Chair", 80, "./img/chair.jpg", "This is a really good chair"),
    new Product("Bookshelf", 200, "./img/bookshelf.jpg", "This is a really good bookshelf"),
    new Product("Table", 120, "./img/table.png", "This is a really good table"),
    new Product("Chair", 80, "./img/chair.jpg", "This is a really good chair"),
    new Product("Bookshelf", 200, "./img/bookshelf.jpg", "This is a really good bookshelf"), 
    new Product("Table", 120, "./img/table.png", "This is a really good table"),
    new Product("Chair", 80, "./img/chair.jpg", "This is a really good chair"),
];


const cart = new ShoppingCart();

function displayProducts() {
    productList.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('productCard');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button class="productBtn">Add to cart</button>
        `;
        
        const button = card.querySelector('button');
        button.addEventListener('click', () => {
            alert(`${product.name} added successfully`)
            cart.add(product);
            numberOfProducts.style.display="block"
            numberOfProducts.textContent++
        });

        mainBody.appendChild(card);
    });
}


//this we had


// burger.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });



cartIcon.addEventListener("click", () => {
    modal.style.display = "block";
    cart.renderCart();
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

displayProducts();
