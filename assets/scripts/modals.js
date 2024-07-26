const modal = document.getElementById("spinner-modal");

const video = document.getElementById("adVideo");
const progressBar = document.getElementById("progress");
const completeButton = document.getElementById("completeButton");
const withdrawalStep2 = document.getElementById("withdrawalStep2");
const videoContainer = document.getElementById("video-container");
const loadingMessage = document.getElementById("loadingMessage");
const warningMessage = document.getElementById("withdraw-notification-modal");

// to close all modals
function closeModals() {
  winner.style.display = "none";
  modal.style.display = "none";
  warningMessage.style.display = "none";
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
  // document.querySelector(".back").classList.remove("hidden");

  videoContainer.classList.remove("hidden");
  video.play();
}

video.addEventListener("timeupdate", function () {
  completeButton.classList.add("hidden");
  videoContainer.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percentage + "%";
});

video.addEventListener("ended", function () {
  loadingMessage.innerText = "Data loaded succefully, please proceed!";
  completeButton.classList.remove("hidden");
  completeButton.disabled = false;
  completeButton.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
});

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
