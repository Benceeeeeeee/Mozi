document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            let title = this.getAttribute('data-title');
            let cartItems = document.getElementById('cart-items');

            if (cartItems.children[0] && cartItems.children[0].innerText === "A kosár üres") {
                cartItems.innerHTML = '';
            }

            let listItem = document.createElement('li');
            listItem.className = 'dropdown-item';
            listItem.innerText = title;
            listItem.addEventListener('click', function () {
                this.remove();
                if (cartItems.children.length === 0) {
                    cartItems.innerHTML = '<li class="text-white px-3">A kosár üres</li>';
                }
            });
            cartItems.appendChild(listItem);
        });
    });

    document.getElementById('checkout').addEventListener('click', function () {
        alert('Köszönjük a vásárlást!');
        document.getElementById('cart-items').innerHTML = '<li class="text-white px-3">A kosár üres</li>';
    });
});
