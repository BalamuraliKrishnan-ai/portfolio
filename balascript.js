// Contact Me button toggle
document.getElementById("contactBtn").addEventListener("click", function () {
  const phone = document.getElementById("phone");
  phone.style.display = (phone.style.display === "none") ? "block" : "none";
});

// Portfolio slider logic
let offset = 0;
const container = document.getElementById("photoContainer");

function nextImages() {
  offset -= 300;
  if (offset < -600) offset = 0;
  container.style.transform = `translateX(${offset}px)`;
}

function prevImages() {
  offset += 300;
  if (offset > 0) offset = -600;
  container.style.transform = `translateX(${offset}px)`;
}
