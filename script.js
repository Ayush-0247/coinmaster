



document.getElementById("coming-soon-btn").addEventListener("click", function() {
    const flashMessage = document.getElementById("flash-message");
    flashMessage.style.display = "block"; 
    setTimeout(() => (flashMessage.style.display = "none"), 3000); 
});





document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    alert('Thank you for subscribing! We’ll keep you updated.');
});




