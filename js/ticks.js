var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let grainMatrix = [];

for (let x = 0; x < 192; x++) {
  grainMatrix.push([]);
  for (let y = 0; y < 96; y++) {
    grainMatrix[x].push(Math.random());
  }
}

let ceaIdle = [
  document.getElementById("c-i-0"),
  document.getElementById("c-i-1"),
  document.getElementById("c-i-2"),
  document.getElementById("c-i-3"),
  document.getElementById("c-i-4"),
  document.getElementById("c-i-5"),
  document.getElementById("c-i-6"),
  document.getElementById("c-i-7"),
];

let player1 = {
  x: 25,
  a: 0,
  af: 2,
  sprite: document.getElementById("boi1"),
};

let player2 = {
  x: -25,
  a: 0,
  af: 5,
  sprite: document.getElementById("boi1"),
};

let offx = 0;

let animationTick = 0;

function tick() {
  if (animationTick % 2 == 0) {
    if (player1.a == 0) {
      player1.sprite = ceaIdle[player1.af];
      player1.af++;
      if (player1.af >= ceaIdle.length) {
        player1.af = 0;
      }
    }

    if (player2.a == 0) {
      player2.sprite = ceaIdle[player2.af];
      player2.af++;
      if (player2.af >= ceaIdle.length) {
        player2.af = 0;
      }
    }
  }

  if (animationTick % 4 == 0) {
    if (offx > 0) {
      offx -= 1;
    } else if (offx < 0) {
      offx += 1;
    }
    offx = 0;
  }

  for (let x = 0; x < 192; x++) {
    for (let y = 0; y < 96; y++) {
      grainMatrix[x][y] = Math.random();
    }
  }

  animationTick++;
  if (animationTick > 12) {
    animationTick = 0;
  }
  setTimeout(tick, 1000 / 12);
}

tick();
