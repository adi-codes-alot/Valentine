const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionCard = document.getElementById("questionCard");
const yesCard = document.getElementById("yesCard");

// No button runs away 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 60;
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Yes button = EMAIL + NEXT SCREEN 💌
yesBtn.addEventListener("click", () => {

  // Send email
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    message: "She clicked YES 💕 Valentine confirmed 😌💘"
  });

  // Show next screen
  questionCard.classList.add("hidden");
  yesCard.classList.remove("hidden");
});
