document.getElementById('discountForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value.trim());
    const totalBill = parseFloat(document.getElementById('bill').value.trim());
  
    if (!name  || age <= 0 || totalBill <= 0) {
      alert('Please enter valid inputs!');
      return;
    }
  
    let discount = 0;
    if (age >= 13 && age <= 18) {
      discount = 50;
    } else if (age >= 19 && age <= 40) {
      discount = 5;
    } else if (age >= 41 && age <= 60) {
      discount = 10;
    } else if (age > 60) {
      discount = 40;
    }
  
    const finalBill = totalBill - (totalBill * discount) / 100;
    const resultDiv = document.getElementById('result');
    const message = document.getElementById('displayMessage');
  
    if (age > 60) {
      message.innerHTML = `Hello, <strong>${name}</strong> <span class="text-green-500">(Retiree)</span>. Your final bill after a ${discount}% discount is: <strong>₦${finalBill.toFixed(2)}</strong>`;
    } else {
      message.innerHTML = `Hello, <strong>${name}</strong>. Your final bill after a ${discount}% discount is: <strong>₦${finalBill.toFixed(2)}</strong>`;
    }
  
    resultDiv.classList.remove('hidden');
  });
  