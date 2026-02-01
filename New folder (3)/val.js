const btn1 = document.getElementById("button1");

const btn2 = document.getElementById("button2");

btn2.addEventListener("click", () => {
    btn2.innerHTML = "";
    btn2.style.padding = "0px 0px";
    btn1.style.padding = "40px 60px";
    btn2.style.left = "1000px";
})

