const modal = document.querySelector(".modal");
const modalContent = document.querySelector("modal-content");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");


btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

//OPEN MODAL
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
};

//CLOSE MODAL
function closeModal(e) {
    modal.style.display = "none";
};
