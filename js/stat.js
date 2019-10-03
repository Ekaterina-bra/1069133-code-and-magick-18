'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var MAX_HEIGHT = 150;
var GAP = 50;
var BAR_WIDTH = 40;
var START_X = 160;
var TEXT_Y = 260;

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

if (names[j] = 'Вы') {
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
}
names[j] = times[j];
ctx.fillStyle = 'hsl(240, 100%, (MAX_HEIGHT * times[j]) / maxValue)';
ctx.fillText(names[j] + 1, START_X + (BAR_WIDTH + GAP) * j, TEXT_Y);
ctx.fillRect(START_X + (BAR_WIDTH + GAP) * j, barHeight);
}
};

