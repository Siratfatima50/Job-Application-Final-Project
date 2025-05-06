
// 1. Toggle navigation menu
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

// 2. Validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 3. Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 4. Show/hide password
function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
}

// 5. Form submission alert
function submitForm() {
    alert("Form submitted successfully!");
}

// 6. Update year in footer dynamically
function updateYear() {
    document.getElementById("year").textContent = new Date().getFullYear();
}

// 7. Image preview before upload
function previewImage(input, previewId) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById(previewId).src = e.target.result;
    }
    reader.readAsDataURL(file);
}

// 8. Filter product list
function filterProducts(keyword) {
    const items = document.querySelectorAll(".product-item");
    items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(keyword.toLowerCase()) ? 'block' : 'none';
    });
}

// 9. Count characters in textarea
function countCharacters(textareaId, countId) {
    const text = document.getElementById(textareaId).value;
    document.getElementById(countId).textContent = text.length;
}

// 10. Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
