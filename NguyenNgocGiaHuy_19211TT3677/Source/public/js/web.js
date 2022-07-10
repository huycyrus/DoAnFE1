const btnCart = document.querySelector('.icon-cart');
const contentCart = document.querySelector('.shopping-cart-content');

btnCart.onclick = () =>{
    contentCart.style.display = "block";
};

window.onclick = function(event) {
    if (event.target == contentCart) {
        contentCart.style.display = "none";
    }
    
};



  

