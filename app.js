/*let startY = 0;
let currentY = 0;
let isDragging = false;

window.addEventListener("wheel", (e) => {
  if (window.scrollY === 0 && e.deltaY < 0) {
    // Scroll hacia arriba estando en el top
    e.preventDefault();
    
    currentY += e.deltaY * -0.2; // resistencia
    if (currentY > 100) currentY = 100; // límite

    document.body.style.transform = `translateY(${currentY}px)`;
  }
}, { passive: false });

window.addEventListener("wheel", (e) => {
  if (window.scrollY === 0 && e.deltaY >= 0) {
    resetPosition();
  }
});

function resetPosition() {
  document.body.style.transform = "translateY(0)";
  currentY = 0;
}*/
