// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Noise-Canceling Headphones",
        price: 1000,
        image: "Wireless Noise-Canceling Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
        description: "Experience silence with our top-tier audio technology."
    },
    {
        id: 2,
        name: "Ergonomic Office Chair",
        price: 1500,
        image: "Ergonomic Office Chair",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=300&q=80",
        description: "Work in comfort with adjustable lumbar support."
    },
    {
        id: 3,
        name: "4K Ultra HD Monitor",
        price: 7000,
        image: "4K Ultra HD Monitor",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80",
        description: "Crystal clear resolution for creative professionals."
    },
    {
        id: 4,
        name: "Smart Fitness Watch",
        price: 1000,
        image: "Smart Fitness Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80",
        description: "Track your heart rate, steps, and sleep patterns."
    }
];

const productContainer = document.getElementById('product-container');
const searchInput = document.getElementById('search-input');
const cartCountElement = document.getElementById('cart-count');
let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    cartCountElement.textContent = cartCount;
    alert(`Added ${productName} to cart`);
}

// Function to render products
function renderProducts(productsToRender) { 
    productContainer.innerHTML = '';
    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Template literal allows for easy HTML construction
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <span class="product-price">ksh${product.price.toFixed(2)}</span>
            <button class="add-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        
        productContainer.appendChild(card);
    });
}

// Initial render of all products
renderProducts(products);

//  search filtering
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
});