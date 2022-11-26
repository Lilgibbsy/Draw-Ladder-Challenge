let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 700;
cnv.height = 500;

setInterval(draw, 1);
function draw() {
  let x = +document.getElementById("x").value;
  let y = +document.getElementById("y").value;
  let w = +document.getElementById("w").value;
  let h = +document.getElementById("h").value;
  let numRings = +document.getElementById("numRings").value;

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 700, 500);
  ctx.restore();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.stroke();
  ctx.restore();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.stroke();
  ctx.restore();
  let spaceBetweenRings = h / (numRings + 1);
  let addSpace = spaceBetweenRings;

  for (let n = 0; n < numRings; n++) {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(x, y + spaceBetweenRings);
    ctx.lineTo(x + w, y + spaceBetweenRings);
    ctx.stroke();
    ctx.restore();
    spaceBetweenRings = spaceBetweenRings + addSpace;
  }
  console.log(spaceBetweenRings, h, numRings);
}
