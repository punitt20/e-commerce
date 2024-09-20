// Ensure that the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  
    // Select all elements with the class 'button' (Add to Cart buttons)
    const addToCartButtons = document.querySelectorAll('.button');
  
    // Loop through each button and add an event listener for the 'click' event
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
  
        // Get the cart count element by its ID 'cart-count'
        const cartCountElement = document.getElementById('cart-count');
        
        // Get the current cart count value and convert it to an integer
        let cartCount = parseInt(cartCountElement.textContent);
        
        // Increment the cart count by 1
        cartCount++;
        
        // Update the cart count element's text with the new value
        cartCountElement.textContent = cartCount;
      });
    });
  
  });
  