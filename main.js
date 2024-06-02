"use strict";
let currentRating;
const displayCard = document.querySelector(".card-rating");
const showModal = document.querySelector(".card-thanks");
const btnSubmit = document.querySelector(".btn-card");
const dataRating = document.querySelector(".flex-group");
const selected = document.querySelector(".rating-selected");

dataRating.addEventListener("focusin", function (e) {
  const target = e.target.classList.value;
  if (target === "rating-star") {
    currentRating = e.target.textContent;
  }
});

btnSubmit.addEventListener("click", function () {
  if (currentRating === undefined) return;
  showModal.classList.remove("hidden");
  displayCard.classList.add("hidden");
  selected.textContent = `You selected ${currentRating} out of 5`;
});
