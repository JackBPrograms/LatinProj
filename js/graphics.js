let clear = true;
let goldenBoi = hueShiftImage(document.getElementById("c-i-0"), 30);

function frame() {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#333";
  ctx.fillRect(0, 96 - 32, canvas.width, 32);

  ctx.drawImage(document.getElementById("background"), 0, 0, 192, 96);

  ctx.fillStyle = "#FF0000";
  ctx.save();
  ctx.translate(player2.x + 96 + offx + 13 * -player2.flip, 70 - 16);
  ctx.scale(player2.flip, 1);
  //ctx.rotate(player2.rot);
  ctx.drawImage(player2.sprite, 0, 0, 32, 32);
  ctx.restore();

  ctx.fillStyle = "#0000FF";
  ctx.save();
  ctx.translate(player1.x + 96 + 13 * -player1.flip, 54);
  //ctx.rotate(player1.rot / 57.2958);
  ctx.scale(player1.flip, 1);
  ctx.drawImage(player1.sprite, 0, 0, 32, 32);
  ctx.restore();

  ctx.globalAlpha = 0.5;
  particals.forEach((partical) => {
    ctx.fillStyle = "#880000";
    ctx.fillRect(Math.round(partical.x), Math.round(partical.y), 1, 1);
  });
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#FFF";
  ctx.fillRect(4, 4, 60, 4);
  if (player2.health > 0) {
    ctx.fillStyle = "#F00";
    ctx.fillRect(4, 4, (60 * player2.health) / 100, 4);
  }

  ctx.fillStyle = "#FFF";
  ctx.fillRect(128, 4, 60, 4);

  if (player1.health > 0) {
    ctx.fillStyle = "#F00";
    ctx.fillRect(
      128 + (60 * (100 - player1.health)) / 100,
      4,
      (60 * player1.health) / 100,
      4
    );
  }

  ctx.save();
  ctx.scale(-1, 1);
  ctx.drawImage(goldenBoi, 0, 0, 64, 64, -192, 9, 16, 16);
  ctx.restore();

  ctx.drawImage(document.getElementById("c-i-0"), 0, 0, 64, 64, 0, 9, 16, 16);

  if (player1.x == 45 && player2.x == -45 && clear) {
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 192, 96);
    ctx.globalAlpha = 1;
    ctx.drawImage(document.getElementById("start"), 0, 0, 192, 96);
  } else {
    clear = false;
  }

  if (winner) {
    if (brutWin) {
      ctx.drawImage(document.getElementById("vc"), 0, 0, 192, 96);
    } else {
      ctx.drawImage(document.getElementById("vb"), 0, 0, 192, 96);
    }
  }

  requestAnimationFrame(frame);
}
