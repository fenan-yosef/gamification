function opengame(game) {
  console.log(game);
  switch (game) {
    case "apple":
      window.location.href = "../../game-1/index.html";
      break;
  }
}

document.addEventListener("click", opengame);

// Handle section navigation
function showSection(section) {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  const activeButton = Array.from(buttons).find(
    (btn) => btn.textContent.trim().toLowerCase() === section
  );
  if (activeButton) {
    console.log("active button", activeButton);
    activeButton.classList.add("active");
  }
  console.log(`Showing ${section} section`);

  switch (section) {
    case "earn":
      window.location.href = "../../index.html";
      break;
    case "profile":
      window.location.href = "../../bottom-navs/profile/index.html";
      break;
  }
}

// Set the default active button on load
document.addEventListener("DOMContentLoaded", () => {
  // showSection("otherGames");
});
