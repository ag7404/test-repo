const button = document.getElementById("button");
const count = document.getElementById("count");

button.addEventListener("click", () => {
    count.textContent = parseInt(count.textContent) + 1;
});