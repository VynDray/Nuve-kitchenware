// cart.js
export const cartArray = JSON.parse(localStorage.getItem('cart')) || [];
const cartList = document.getElementById('cart-list');

function renderCart() {
    if (!cartList) return;

    if (cartArray.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let htmlContent = '';
    cartArray.forEach((item,index) => {
        htmlContent += `
            <div class="cart-item" style="display:flex; margin-bottom:20px; border-bottom:1px solid #ddd; padding-bottom:10px;">
                <img src="${item.image}" alt="${item.name}" style="width:100px; height:100px; object-fit:cover;">
                <div style="margin-left:20px;">
                    <h3>${item.name}</h3>
                    <p>Category: ${item.category}</p>
                    <p><strong>${item.price}</strong></p> 
                    <button
                    onclick='
                    deleteItem(${index})
                    
                    ' class='dlBTN'
                    >Delete</button>
                </div>
            </div>
        `;
    });
    cartList.innerHTML = htmlContent;
}
window.deleteItem = function(index) {
    cartArray.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartArray));
    renderCart(); 
};
document.addEventListener('DOMContentLoaded', renderCart);



