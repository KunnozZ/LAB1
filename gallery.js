const items = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const closeBtn = document.getElementById("closeBtn");

items.forEach(item => {

  item.addEventListener("click", () => {

    const img = item.querySelector("img");
    const title = item.querySelector("h3");

    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxTitle.textContent = title.textContent;

    lightbox.classList.add("show");

  });

});

function closeLightbox() {

  lightbox.classList.remove("show");

}

closeBtn.addEventListener("click", closeLightbox);

// คลิกภาพที่ Zoom เพื่อปิด
lightboxImage.addEventListener("click", closeLightbox);

// คลิกพื้นที่ว่างเพื่อปิด
lightbox.addEventListener("click", event => {

  if (event.target === lightbox) {
    closeLightbox();
  }

});

// กด ESC เพื่อปิด
document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeLightbox();
  }

});