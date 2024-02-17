function frame() {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#333";
  ctx.fillRect(0, 96 - 32, canvas.width, 32);

  ctx.drawImage(document.getElementById("background"), 0, 0, 192, 96);

  for (let x = 0; x < 192; x++) {
    for (let y = 0; y < 96; y++) {
      ctx.fillStyle = "rgba(0,0,0," + (0.05 + grainMatrix[x][y] * 0.05) + ")";
      ctx.fillRect(x, y, 1, 1);
    }
  }

  ctx.fillStyle = "#FF0000";
  ctx.save();
  ctx.translate(player2.x + 96 + offx, 70 - 16);
  ctx.scale(1, 1);
  ctx.rotate(player2.rot);
  ctx.drawImage(player2.sprite, 0, 0, 32, 32);
  ctx.restore();

  ctx.fillStyle = "#0000FF";
  ctx.save();
  ctx.translate(player1.x + 96, 54 + 16);
  ctx.rotate(player1.rot / 57.2958);
  ctx.translate(16, -16);
  ctx.scale(-1, 1);
  ctx.drawImage(player1.sprite, 0, 0, 32, 32);
  ctx.restore();

  requestAnimationFrame(frame);
}

frame();
