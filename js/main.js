VANTA.DOTS({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x787777,
    color2: 0x48382d,
    backgroundColor: 0x0
});

const loader = document.querySelector(".loader");

setTimeout(() => {
    loader.style.display = "none";
    document.body.style.overflowY = "auto";
}, 5000);