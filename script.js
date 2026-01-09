// DOM Elements
const modal = document.getElementById('orderModal');
const closeBtn = document.getElementById('closeModal');
const openModalBtns = document.querySelectorAll('.open-modal');
const orderForm = document.getElementById('orderForm');
const successMsg = document.getElementById('formSuccess');

// Open Modal
openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    successMsg.style.display = 'none';
});

// Close on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submission
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate an API call
    const submitBtn = orderForm.querySelector('button');
    submitBtn.innerText = "Processing...";
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerText = "Submit Request";
        submitBtn.disabled = false;
        successMsg.style.display = 'block';
        orderForm.reset();
    }, 1500);
});