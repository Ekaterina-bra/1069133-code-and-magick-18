'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var MAX_HEIGHT = 150;
var GAP = 50;
var BAR_WIDTH = 40;
var START_X = 160;
var START_Y = 90;
var TEXT_Y = 260;
var TIME_Y = 80

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

ctx.fillStyle = 'white';
ctx.fillRect(100, 10, 420, 270);

ctx.fillStyle = 'black';
ctx.font = '16px PT Mono';
ctx.fillText('Ура вы победили!', 120, 40);
ctx.fillText('Список результатов:', 120, 60);

var maxValue = times[0];
for (var i = 1; i < times.length; i++) {
  if (times[i] > maxValue) {
    maxValue = times[i]
  }
  }

for (var j = 0; j < names.length; j++) {
var barHeight = (MAX_HEIGHT * times[j]) / maxValue;

if (names[j] === 'Вы') {
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
} else {
  ctx.fillStyle = 'hsl(240, 100%, ' + Math.random() * 100 + '%' +')';
}
ctx.fillRect(START_X + (BAR_WIDTH + GAP) * j, START_Y + (MAX_HEIGHT - barHeight), BAR_WIDTH, barHeight);
ctx.fillStyle = 'black';
ctx.fillText(names[j], START_X + (BAR_WIDTH + GAP) * j, TEXT_Y);
ctx.fillText(Math.floor(times[j]), START_X + (BAR_WIDTH + GAP) * j, TIME_Y + (MAX_HEIGHT - barHeight));
}
};

