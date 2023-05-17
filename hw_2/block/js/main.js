var block = document.getElementById('block');
var startX = 0;
var startY = 0;
var triangleSize = 350;
var interval = 10;
var step = 2;

function moveBlock(x, y, side) {
    if (x === startX && y === startY) {
        setTimeout(function() {
        moveBlock(startX + triangleSize, startY, 'right');
        }, 1000);
        return;
    }

    var currentX = parseFloat(block.style.left) || 0;
    var currentY = parseFloat(block.style.top) || 0;

    if (x > currentX) {
        currentX = Math.min(currentX + step, x);
    } else if (x < currentX) {
        currentX = Math.max(currentX - step, x);
    }

    if (y > currentY) {
        currentY = Math.min(currentY + step, y);
    } else if (y < currentY) {
        currentY = Math.max(currentY - step, y);
    }

    block.style.left = currentX + 'px';
    block.style.top = currentY + 'px';

    if (currentX === x && currentY === y) {
        if (side === 'right') {
            side = 'bottom';
            x += triangleSize;
            y += triangleSize;
        } else if (side === 'bottom') {
            side = 'left';
            x -= triangleSize;
        } else if (side === 'left') {
            side = 'right';
            y -= triangleSize;
        }
    }

    setTimeout(function() {
        moveBlock(x, y, side);
    }, interval);
}

moveBlock(startX, startY, 'right');