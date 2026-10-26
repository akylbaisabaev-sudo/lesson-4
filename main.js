
let count = 0;

const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener("click", function () {
    count++;
    counter.textContent = count;
    counter.style.color = "green";
});

decrement.addEventListener("click", function () {
    if (count > 0) {
        count--;
        counter.textContent = count;
        counter.style.color = "red";
    }
});

const mouseArea = document.getElementById("mouseArea");
const coordinates = document.getElementById("coordinates");

mouseArea.addEventListener("mousemove", function (event) {
    const rect = mouseArea.getBoundingClientRect();

    const x = Math.floor(event.clientX - rect.left);
    const y = Math.floor(event.clientY - rect.top);

    coordinates.textContent = `x: ${x}, y: ${y}`;
});

const colorInput = document.getElementById("colorInput");

colorInput.addEventListener("input", function () {
    const color = colorInput.value.trim();

    if (CSS.supports("background-color", color)) {
        document.body.style.backgroundColor = color;
    }
});
