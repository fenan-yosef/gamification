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
    case "otherGames":
      window.location.href = "../../bottom-navs/other-games/other-games.html";
      break;
    case "withdraw":
      window.location.href = "https://go.perfectpay.com.br/PPU38CORIT3";
      break;
  }
}

// Set the default active button on load
document.addEventListener("DOMContentLoaded", () => {
  // showSection("otherGames");
});
