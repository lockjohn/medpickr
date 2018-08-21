document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = 1000;
    canvasEl.height = 650;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "purple";
    ctx.fillRect(0, 0, 1000, 650);

    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
});