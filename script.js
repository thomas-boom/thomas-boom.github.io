const projects = [
  { name: "steden", images: ["steden1.jpg", "steden2.jpg"] },
  { name: "portret", images: ["portret1.jpg", "portret2.jpg"] },
  { name: "natuur", images: ["natuur1.jpg", "natuur2.jpg"] },
  { name: "nacht", images: ["nacht1.jpg", "nacht2.jpg"] },
  { name: "landschap", images: ["landschap1.jpg", "landschap2.jpg"] },
];

let projectIndex = 0;
let imageIndex = 0;

const img = document.getElementById("slide");
const title = document.getElementById("project-title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function updateSlide() {
  const current = projects[projectIndex];
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = "images/" + current.images[imageIndex];
    title.textContent = current.name;
    prev.textContent = "← " + projects[(projectIndex - 1 + projects.length) % projects.length].name;
    next.textContent = projects[(projectIndex + 1) % projects.length].name + " →";
    img.style.opacity = 1;
  }, 300);
}

img.onclick = () => {
  imageIndex = (imageIndex + 1) % projects[projectIndex].images.length;
  updateSlide();
};

prev.onclick = () => {
  projectIndex = (projectIndex - 1 + projects.length) % projects.length;
  imageIndex = 0;
  updateSlide();
};

next.onclick = () => {
  projectIndex = (projectIndex + 1) % projects.length;
  imageIndex = 0;
  updateSlide();
};

updateSlide();