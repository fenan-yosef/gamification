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
let counter = 0;
const currentImage = document.getElementById("current-image");
const nextImage = document.getElementById("next-image");
const nextItem = document.getElementById("next-item");
const winner = document.getElementById("spinner-modal-winner");
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
  counter += 1;
  // if (currentBalance >= 800) {
  //   showModal();
  //   console.log(true);
  // }

  if (counter == 5) {
    showModal(currentBalance);
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
  try {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((btn) => btn.classList.remove("active"));

    const activeButton = Array.from(buttons).find((btn) =>
      btn.textContent.trim().toLowerCase().includes(section.toLowerCase())
    );
    if (activeButton) {
      console.log("active button", activeButton);
      activeButton.classList.add("active");
    }
    console.log(`Showing ${section} section`);

    switch (section) {
      case "otherGames":
        window.location.href = "../../bottom-navs/other-games/other-games.html";
        break;
      case "profile":
        window.location.href = "../../bottom-navs/profile/index.html";
        break;
      default:
    }
  } catch (error) {
    console.log(error);
  }
}

// Set the default active button on load
document.addEventListener("DOMContentLoaded", () => {
  showSection("earn");
  currentImage.src = directory + images[currentIndex];
  nextItem.innerText = items[currentIndex];

  const playButton = document.getElementById("play-button");
  const wheel = document.getElementById("wheel");
  const modal = document.getElementById("spinner-modal");

  // modal.style.display = "flex";

  playButton.addEventListener("click", () => {
    const fixedDegree = 3600 + 80;

    wheel.style.transform = `rotate(${fixedDegree}deg)`;
    // Generate a random degree between 360 and 3600 (10 full rotations + random)
    // const randomDegree = Math.floor(Math.random() * 360) + 3600;

    // // Spin the wheel
    // wheel.style.transform = `rotate(${randomDegree}deg)`;

    // // Calculate the prize index (0-9)
    // const prizeIndex = Math.floor((randomDegree % 360) / 36);

    // // Display the winner after the spin animation completes
    setTimeout(() => {
      const prizeSegments = wheel.getElementsByClassName("segment");
      // const prize = prizeSegments[prizeIndex].textContent.trim();
      // alert(`Congratulations! You won: ${prize}`);
      modal.style.display = "none";
      winner.style.display = "flex";
    }, 4000); // 4 seconds to match the CSS transition duration
  });

  const buttons = document.querySelectorAll(".firework-button");
  const fireworkContainer = document.getElementById("firework-container");
  console.log("buttons", buttons);

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Create firework elements
      for (let i = 0; i < 20; i++) {
        const firework = document.createElement("div");
        firework.className = "firework";
        firework.style.width = `${Math.random() * 50 + 5}px`;
        firework.style.height = firework.style.width;
        firework.style.left = `${e.clientX - fireworkContainer.offsetLeft}px`;
        firework.style.top = `${e.clientY - fireworkContainer.offsetTop}px`;
        firework.style.transform = `translate(-50%, -50%) rotate(${
          Math.random() * 360
        }deg)`;
        firework.style.backgroundColor = `rgba(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255}, 0.8)`;
        fireworkContainer.appendChild(firework);

        // Remove firework element after animation
        firework.addEventListener("animationend", () => {
          firework.remove();
        });
      }
    });
  });
});
