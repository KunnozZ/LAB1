const copyButtons = document.querySelectorAll(".copy-btn");
copyButtons.forEach(button => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "COPIED!";
      setTimeout(() => {
        button.textContent = "COPY";
      }, 1500);

    } catch (error) {
      button.textContent = "FAILED";
      setTimeout(() => {
        button.textContent = "COPY";
      }, 1500);

    }

  });

});


// =================================
// CONTACT FORM
// =================================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    formStatus.textContent = "PLEASE COMPLETE ALL FIELDS";
    return;
  }

  // จำลองการส่งข้อความ
  formStatus.textContent = "✦ MESSAGE READY! DEMO MODE";

  // Animation ปุ่ม
  const sendButton = contactForm.querySelector(".send-btn");

  sendButton.innerHTML = `
    <span>MESSAGE READY</span>
    <span>✓</span>
  `;

  sendButton.style.background = "#6dffae";

  // แสดงข้อมูลใน Console เพื่อทดลอง
  console.log({
    name,
    email,
    subject,
    message
  });

  setTimeout(() => {

    contactForm.reset();

    formStatus.textContent = "";

    sendButton.innerHTML = `
      <span>SEND MESSAGE</span>
      <span class="send-icon">➜</span>
    `;

    sendButton.style.background = "";

  }, 2500);

});


// =================================
// PAGE ENTRY ANIMATION
// =================================

window.addEventListener("load", () => {

  document.querySelector(".contact-container")
    .classList.add("loaded");

});
