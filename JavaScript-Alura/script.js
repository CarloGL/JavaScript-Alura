document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').files[0];

    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const reader = new FileReader();
    reader.onload = function(e) {
        productItem.innerHTML = `
            <img src="${e.target.result}" alt="${productName}">
            <span class="product-name">${productName}</span>
            <span class="product-price">$${productPrice}</span>
            <button onclick="removeProduct(this)">Eliminar</button>
        `;
        document.getElementById('productList').appendChild(productItem);
    }
    reader.readAsDataURL(productImage);

    
    document.getElementById('productForm').reset();
});

function removeProduct(button) {
    button.parentElement.remove();
}
