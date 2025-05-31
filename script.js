const boxes = document.querySelectorAll(".box")
const body = document.querySelector("body")
boxes.forEach((e) => {
    e.addEventListener('click', (color) => {
        if (color.target.id === "box1") {
            body.style.backgroundColor = "brown"
        }
        if (color.target.id === "box2") {
            body.style.backgroundColor = "green"
        }
        if (color.target.id === "box3") {
            body.style.backgroundColor = "blueviolet"
        }
        if (color.target.id === "box4") {
            body.style.backgroundColor = "cadetblue"
        }
        if (color.target.id === "box5") {
            body.style.backgroundColor = "chocolate"
        }
    })
});