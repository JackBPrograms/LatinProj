var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let gamepads = {};

let winner = false;
let brutWin = false;

let particals = [];

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

let caeWalk = [
  document.getElementById("c-w-0"),
  document.getElementById("c-w-1"),
  document.getElementById("c-w-2"),
  document.getElementById("c-w-3"),
  document.getElementById("c-w-4"),
  //document.getElementById("c-w-5"),
];

let caeSlash = [
  document.getElementById("c-s-0"),
  document.getElementById("c-s-1"),
  document.getElementById("c-s-2"),
  document.getElementById("c-s-3"),
  document.getElementById("c-s-4"),
  document.getElementById("c-s-5"),
  document.getElementById("c-s-6"),
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

let caePunch = [
  document.getElementById("c-p-0"),
  document.getElementById("c-p-1"),
  document.getElementById("c-p-2"),
  document.getElementById("c-p-3"),
  document.getElementById("c-p-4"),
  document.getElementById("c-p-5"),
  document.getElementById("c-p-6"),
  document.getElementById("c-p-7"),
];

let caeUlt = [
  document.getElementById("c-u-0"),
  document.getElementById("c-u-1"),
  document.getElementById("c-u-2"),
  document.getElementById("c-u-3"),
  document.getElementById("c-u-4"),
  document.getElementById("c-u-5"),
  document.getElementById("c-u-6"),
  document.getElementById("c-u-7"),
  document.getElementById("c-u-8"),
  document.getElementById("c-u-9"),
  document.getElementById("c-u-10"),
  document.getElementById("c-u-11"),
  document.getElementById("c-u-12"),
  document.getElementById("c-u-13"),
  document.getElementById("c-u-14"),
  document.getElementById("c-u-15"),
  document.getElementById("c-u-16"),
  document.getElementById("c-u-17"),
];

let bruIdle;

let bruWalk;

let bruSlash;

let bruPunch;

setTimeout(() => {
  bruIdle = [
    hueShiftImage(ceaIdle[0], 30),
    hueShiftImage(ceaIdle[1], 30),
    hueShiftImage(ceaIdle[2], 30),
    hueShiftImage(ceaIdle[3], 30),
    hueShiftImage(ceaIdle[4], 30),
    hueShiftImage(ceaIdle[5], 30),
    hueShiftImage(ceaIdle[6], 30),
    hueShiftImage(ceaIdle[7], 30),
  ];

  bruWalk = [
    hueShiftImage(caeWalk[0], 30),
    hueShiftImage(caeWalk[1], 30),
    hueShiftImage(caeWalk[2], 30),
    hueShiftImage(caeWalk[3], 30),
    hueShiftImage(caeWalk[4], 30),
  ];

  bruSlash = [
    hueShiftImage(caeSlash[0], 30),
    hueShiftImage(caeSlash[1], 30),
    hueShiftImage(caeSlash[2], 30),
    hueShiftImage(caeSlash[3], 30),
    hueShiftImage(caeSlash[4], 30),
    hueShiftImage(caeSlash[5], 30),
    hueShiftImage(caeSlash[6], 30),
    hueShiftImage(caeSlash[7], 30),
    //hueShiftImage(caeSlash[8], 30),
    hueShiftImage(caeSlash[8], 30),
    //hueShiftImage(caeSlash[10], 30),
    hueShiftImage(caeSlash[9], 30),
    //hueShiftImage(caeSlash[12], 30),
    hueShiftImage(caeSlash[10], 30),
    //hueShiftImage(caeSlash[14], 30),
    hueShiftImage(caeSlash[11], 30),
    hueShiftImage(caeSlash[12], 30),
  ];

  bruPunch = [
    hueShiftImage(caePunch[0], 30),
    hueShiftImage(caePunch[1], 30),
    hueShiftImage(caePunch[2], 30),
    hueShiftImage(caePunch[3], 30),
    hueShiftImage(caePunch[4], 30),
    hueShiftImage(caePunch[5], 30),
    hueShiftImage(caePunch[6], 30),
    hueShiftImage(caePunch[7], 30),
  ];

  frame();
  tick();
}, 1000);

let player1 = {
  x: 45,
  a: 0,
  af: 2,
  sprite: document.getElementById("boi1"),
  rot: 0,
  flip: 1,
  health: 100,
};

let player2 = {
  x: -45,
  a: 0,
  af: 5,
  sprite: document.getElementById("boi1"),
  rot: 0,
  flip: -1,
  health: 100,
};

let offx = 0;

let animationTick = 0;

function tick() {
  try {
    try {
      //console.log(gamepads[0]);
      if (gamepads[0].axes[2] > 0.5 || gamepads[0].axes[0] > 0.5) {
        player1.x += 1;
        //player1.rot += 5;
        player1.flip = 1;
        player1.a = 1;
      } else if (gamepads[0].axes[2] < -0.5 || gamepads[0].axes[0] < -0.5) {
        player1.x -= 1;
        //player1.rot -= 5;
        player1.flip = -1;
        player1.a = 1;
      } else if (gamepads[0].buttons[0].value > 0.5) {
        player1.a = 3;
        //player1.af = 0;
      } else if (gamepads[0].buttons[2].value > 0.5) {
        player1.a = 2;
        //player1.af = 0;
      } else {
        player1.a = 0;
      }

      //console.log(gamepads[0]);
      if (gamepads[1].axes[2] > 0.5 || gamepads[1].axes[0] > 0.5) {
        player2.x += 1;
        //player2.rot += 5;
        player2.flip = 1;
        player2.a = 1;
      } else if (gamepads[1].axes[2] < -0.5 || gamepads[1].axes[0] < -0.5) {
        player2.x -= 1;
        //player2.rot -= 5;
        player2.flip = -1;
        player2.a = 1;
      } else if (gamepads[1].buttons[0].value > 0.5) {
        player2.a = 3;
        //player2.af = 0;
      } else if (gamepads[1].buttons[2].value > 0.5) {
        player2.a = 2;
        //player2.af = 0;
      } else {
        player2.a = 0;
      }

      //console.log(player1.a);
    } catch (error) {
      console.log(error);
    }

    if (animationTick % 4 == 0) {
      if (player1.a == 0) {
        if (player1.af >= bruIdle.length) {
          player1.af = 0;
        }
        player1.sprite = bruIdle[player1.af];
        player1.af++;
      }

      if (player1.a == 1) {
        if (player1.af >= bruWalk.length) {
          player1.af = 0;
        }
        player1.sprite = bruWalk[player1.af];
        player1.af++;
      }

      if (player1.a == 2) {
        if (player1.af >= bruSlash.length) {
          player1.af = 0;
        }
        player1.sprite = bruSlash[player1.af];
        player1.af++;
      }

      if (player1.a == 3) {
        if (player1.af >= bruPunch.length) {
          player1.af = 0;
        }
        player1.sprite = bruPunch[player1.af];
        player1.af++;
      }

      if (player2.a == 0) {
        if (player2.af >= ceaIdle.length) {
          player2.af = 0;
        }
        player2.sprite = ceaIdle[player2.af];
        player2.af++;
      }

      if (player2.a == 1) {
        if (player2.af >= caeWalk.length) {
          player2.af = 0;
        }
        player2.sprite = caeWalk[player2.af];
        player2.af++;
      }

      if (player2.a == 2) {
        if (player2.af >= caeSlash.length) {
          player2.af = 0;
        }
        player2.sprite = caeSlash[player2.af];
        player2.af++;
      }

      if (player2.a == 3) {
        if (player2.af >= caePunch.length) {
          player2.af = 0;
        }
        player2.sprite = caePunch[player2.af];
        player2.af++;
      }

      let rangeFix = 0;

      if (player1.flip == player2.flip) {
        rangeFix = 4;
      }

      if (
        player1.a == 3 &&
        player1.af == 4 &&
        Math.abs(player1.x - player2.x) < 20 + rangeFix
      ) {
        console.log("Player one hit player two");
        player2.health -= 8;
        player2.x -= 3;

        if (player1.flip == 1) {
          player2.x += 6;
          //console.log(2);
        }

        for (let i = 0; i < 10; i++) {
          particals.push({
            x: 96 + player2.x,
            y: 68,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 4 - 2,
            life: 18,
          });
        }

        //call the gamepad to vibrate

        navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: 200,
          weakMagnitude: 1.0,
          strongMagnitude: 0.0,
        });

        navigator.getGamepads()[1].vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: 200,
          weakMagnitude: 1.0,
          strongMagnitude: 1.0,
        });
      }

      if (
        player2.a == 3 &&
        player2.af == 4 &&
        Math.abs(player1.x - player2.x) < 20 + rangeFix
      ) {
        console.log("Player two hit player one");
        player1.health -= 8;
        player1.x += 3;

        if (player2.flip != 1) {
          player1.x -= 6;
          //console.log(2);
        }

        for (let i = 0; i < 10; i++) {
          particals.push({
            x: 96 + player1.x,
            y: 68,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 4 - 2,
            life: 18,
          });
        }

        //gamepads[0].vibrate(1, 100);
        navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: 200,
          weakMagnitude: 1.0,
          strongMagnitude: 1.0,
        });

        navigator.getGamepads()[1].vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: 200,
          weakMagnitude: 1.0,
          strongMagnitude: 0.0,
        });
      }

      if (
        player1.a == 2 &&
        player1.af == 9 &&
        Math.abs(player1.x - player2.x) < 24 + rangeFix
      ) {
        console.log("Player one hit player two");
        player2.health -= 8;
        player2.x -= 1;

        if (player1.flip == 1) {
          player2.x += 2;
          //console.log(2);
        }

        for (let i = 0; i < 10; i++) {
          particals.push({
            x: 96 + player2.x,
            y: 68,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 4 - 2,
            life: 18,
          });
        }

        //call the gamepad to vibrate

        navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: 200,
          weakMagnitude: 1.0,
          strongMagnitude: 0.0,
        });

        navigator.getGamepads()[1].vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: 200,
          weakMagnitude: 1.0,
          strongMagnitude: 1.0,
        });
      }

      if (
        player2.a == 2 &&
        player2.af == 9 &&
        Math.abs(player1.x - player2.x) < 24 + rangeFix
      ) {
        console.log("Player two hit player one");
        player1.health -= 8;
        player1.x += 1;

        if (player2.flip != 1) {
          player1.x -= 2;
          //console.log(2);
        }

        for (let i = 0; i < 10; i++) {
          particals.push({
            x: 96 + player1.x,
            y: 68,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 4 - 2,
            life: 18,
          });
        }

        //gamepads[0].vibrate(1, 100);
        navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: 200,
          weakMagnitude: 1.0,
          strongMagnitude: 1.0,
        });

        navigator.getGamepads()[1].vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: 200,
          weakMagnitude: 1.0,
          strongMagnitude: 0.0,
        });
      }

      particals.forEach((part) => {
        part.x += part.vx;
        part.y += part.vy;

        part.vx *= 0.9;
        part.vy *= 0.9;

        part.vy += 0.1;

        part.life -= 1;
        if (part.life < 0) {
          particals.splice(particals.indexOf(part), 1);
        }
      });
    }

    if (player1.health <= 0 && !winner) {
      brutWin = true;
      winner = true;
    }

    if (player2.health <= 0 && !winner) {
      brutWin = false;
      winner = true;
    }

    if (winner) {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }

    if (animationTick % 8 == 0) {
      if (offx > 0) {
        offx -= 1;
      } else if (offx < 0) {
        offx += 1;
      }
      offx = 0;
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

    document.getElementById("dist").innerHTML = "";
  } catch (e) {
    document.getElementById("dist").innerHTML =
      "Error, Attempting to avoid crash.";
  }

  setTimeout(tick, 1000 / 48);
}

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

function hueShiftImage(imageElement, shiftAmount) {
  // Create a canvas element
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  // Set canvas size to match image size
  canvas.width = imageElement.width;
  canvas.height = imageElement.height;

  // Draw the image onto the canvas
  ctx.drawImage(imageElement, 0, 0);

  // Get the image data
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  // Convert shift amount from degrees to radians
  var shiftRadians = (shiftAmount * Math.PI) / 180;

  // Hue shift algorithm
  for (var i = 0; i < data.length; i += 4) {
    var r = data[i];
    var g = data[i + 1];
    var b = data[i + 2];

    // Convert RGB to HSL
    var hsl = rgbToHsl(r, g, b);

    // Shift the hue
    hsl[0] += shiftRadians;

    // Ensure hue remains in the range [0, 2π)
    if (hsl[0] < 0) {
      hsl[0] += 2 * Math.PI;
    } else if (hsl[0] >= 2 * Math.PI) {
      hsl[0] -= 2 * Math.PI;
    }

    // Convert HSL back to RGB
    var rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

    // Update the pixel data
    data[i] = rgb[0];
    data[i + 1] = rgb[1];
    data[i + 2] = rgb[2];
  }

  // Put the modified image data back onto the canvas
  ctx.putImageData(imageData, 0, 0);

  // Create a new image element to hold the modified image
  var newImage = new Image();
  newImage.src = canvas.toDataURL();

  return newImage;
}

// Helper functions to convert RGB to HSL and vice versa
function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h * 2 * Math.PI, s, l];
}

function hslToRgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
}
