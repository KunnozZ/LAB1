// แสดงสถานะเมนูหน้าปัจจุบัน
const currentPage = window.location.pathname
  .split("/")
  .pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// เอฟเฟกต์เมื่อโหลดหน้า
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});