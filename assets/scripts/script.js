// script.js
const images = [
  "image-1.jpg",
  "image-2.jpg",
  "image-3.jpg",
  "image-4.jpg",
  "image-5.jpg",
];

const items = [
  "Headsets",
  "synth",
  "Acoustic Guitar",
  "Microphone",
  "Keyboard",
];
let currentIndex = 0;
const currentImage = document.getElementById("current-image");
const nextImage = document.getElementById("next-image");
const nextItem = document.getElementById("next-item");
let directory = "./assets/images/";
var audio = document.getElementById("audioPlayer");

// Function to generate a random amount between 100 and 999
function getRandomAmount() {
  return Math.floor(Math.random() * 900) + 100;
}

// Function to update the balance
function updateBalance(amount) {
  const balanceElement = document.getElementById("balance");
  let currentBalance = parseFloat(balanceElement.textContent.replace("$", ""));
  currentBalance += amount;
  balanceElement.textContent = ` $${currentBalance.toFixed(2)}`;

  if (currentBalance >= 800) {
    showModal();
  }
}

// Handle image rating
function rateImage(rating) {
  console.log(`Rated as: ${rating}`);

  // Update balance with a random amount
  const randomAmount = getRandomAmount();
  updateBalance(randomAmount);

  currentImage.style.transform = "translateX(100%)";
  currentIndex = (currentIndex + 1) % images.length;
  nextItem.innerText = items[currentIndex];
  nextImage.src = directory + images[currentIndex];
  nextImage.classList.remove("hidden");
  nextImage.style.transform = "translateX(-100%)";
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    nextImage.style.transform = "translateX(0)";
  }, 100);

  setTimeout(() => {
    currentImage.src = nextImage.src;
    currentImage.style.transform = "translateX(0)";
    nextImage.classList.add("hidden");
  }, 1100);
}

// Handle section navigation
function showSection(section) {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  const activeButton = Array.from(buttons).find(
    (btn) => btn.textContent.trim().toLowerCase() === section
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }
  console.log(`Showing ${section} section`);
}

// Set the default active button on load
document.addEventListener("DOMContentLoaded", () => {
  showSection("tasks");
  currentImage.src = directory + images[currentIndex];
  nextItem.innerText = items[currentIndex];
});

// Show modal
function showModal() {
  document.getElementById("withdrawalModal").style.display = "block";
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
  alert("Please complete the registration fee to proceed.");
  // You can add the logic to handle the registration fee here
}

function goBack() {
  document.getElementById("withdrawalStep1").classList.remove("hidden");
  document.getElementById("withdrawalStep2").classList.add("hidden");
  document.querySelector(".back").classList.add("hidden"); // Hide the back button
}
