const block = document.querySelector(".block");
let blockPosition = 0;

function movingBlock() {
    if(blockPosition <= 450){
        blockPosition += 10;
        block.style.left = blockPosition + "px";
        movingBlock()
    }
}
movingBlock()
