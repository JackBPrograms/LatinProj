var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let gamepads = {};

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

let caeSlash = [
  /* document.getElementById("c-s-0"),
  document.getElementById("c-s-1"),
  document.getElementById("c-s-2"),
  document.getElementById("c-s-3"),
  document.getElementById("c-s-4"),*/
  document.getElementById("c-s-5"),
  //document.getElementById("c-s-6"),
  document.getElementById("c-s-7"),
  //document.getElementById("c-s-8"),
  document.getElementById("c-s-9"),
  //document.getElementById("c-s-10"),
  document.getElementById("c-s-11"),
  //document.getElementById("c-s-12"),
  document.getElementById("c-s-13"),
  //document.getElementById("c-s-14"),
  document.getElementById("c-s-15"),
  document.getElementById("c-s-16"),
];

let player1 = {
  x: 45,
  a: 2,
  af: 2,
  sprite: document.getElementById("boi1"),
  rot: 0,
};

let player2 = {
  x: -45,
  a: 0,
  af: 5,
  sprite: document.getElementById("boi1"),
  rot: 0,
};

let offx = 0;

let animationTick = 0;

function tick() {
  try {
    //console.log(gamepads[0]);
    if (gamepads[0].axes[2] > 0.5) {
      player1.x += 1;
      player1.rot += 5;
    } else if (gamepads[0].axes[2] < -0.5) {
      player1.x -= 1;
      player1.rot -= 5;
    }

    console.log(gamepads[0].axes[2]);
  } catch (error) {
    console.log(error);
  }

  if (animationTick % 2 == 0) {
    if (player1.a == 0) {
      if (player1.af >= ceaIdle.length) {
        player1.af = 0;
      }
      player1.sprite = ceaIdle[player1.af];
      player1.af++;
    }

    if (player1.a == 2) {
      if (player1.af >= caeSlash.length) {
        player1.af = 0;
      }
      player1.sprite = caeSlash[player1.af];
      player1.af++;
    }

    if (player2.a == 0) {
      if (player2.af >= ceaIdle.length) {
        player2.af = 0;
      }
      player2.sprite = ceaIdle[player2.af];
      player2.af++;
    }

    if (player2.a == 2) {
      if (player2.af >= caeSlash.length) {
        player2.af = 0;
      }
      player2.sprite = caeSlash[player2.af];
      player2.af++;
    }
  }

  if (animationTick % 8 == 0) {
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

  try {
    gamepads[0] = navigator.getGamepads()[0];
    gamepads[1] = navigator.getGamepads()[1];
  } catch (error) {
    console.warn(error);
  }

  setTimeout(tick, 1000 / 24);
}

tick();

function gamepadHandler(event, connected) {
  const gamepad = event.gamepad;
  // Note:
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connected) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener(
  "gamepadconnected",
  (e) => {
    gamepadHandler(e, true);
  },
  false
);
window.addEventListener(
  "gamepaddisconnected",
  (e) => {
    gamepadHandler(e, false);
  },
  false
);