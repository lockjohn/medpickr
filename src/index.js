document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = 1000;
    canvasEl.height = 650;

    const ctx = canvasEl.getContext("2d");
    const game = new Game();
    new GameView(game, ctx).start();
});