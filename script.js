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

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(ladder.x, ladder.y);
  ctx.lineTo(ladder.y + ladder.h, ladder.x);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(ladder.x + ladder.w, ladder.y);
  ctx.lineTo(ladder.y + ladder.h, ladder.x);
  ctx.stroke();
  console.log(ladder.x);
}
