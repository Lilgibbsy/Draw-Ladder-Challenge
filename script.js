let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 700;
cnv.height = 500;

let ladder = [{ x: 0, y: 0, w: 0, h: 0, numRings: 0 }];

setInterval(draw, 1);
function draw() {
  let x = +document.getElementById("x").value;
  let y = +document.getElementById("y").value;
  let w = +document.getElementById("w").value;
  let h = +document.getElementById("h").value;
  let numRings = +document.getElementById("numRings").value;

  let ladder = [{ x: x, y: y, w: w, h: h }];
  let rings = [{ x: 0, y: 0, w: 0, h: 0 }];
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 700, 500);
  ctx.restore();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(ladder[0].x, ladder[0].y);
  ctx.lineTo(ladder[0].x, ladder[0].y + ladder[0].h);
  ctx.stroke();
  ctx.restore();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(ladder[0].x + ladder[0].w, ladder[0].y);
  ctx.lineTo(ladder[0].x + ladder[0].w, ladder[0].y + ladder[0].h);
  ctx.stroke();
  ctx.restore();
  let spaceBetweenRings = h / numRings;

  for (let n = 0; n < numRings; n++) {
    const ring = { x: x, y: spaceBetweenRings, w: w, h: h };
    spaceBetweenRings += spaceBetweenRings;
    rings.push(ring);
  }

  console.log(ladder[0].x, ladder[0].y, ladder[0].w, ladder[0].h);
  console.log(rings);
}

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(rings.x, rings.y);
ctx.lineTo(rings.x + w, rings.y);
ctx.stroke();
ctx.restore();
