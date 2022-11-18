
// start button
document.querySelector(".control-buttons span").onclick = function(){
    //to entr ur name
    let Name = prompt("plz Enter ur name");
    if (Name == null || Name == ""){
        document.querySelector(".name span").innerHTML = "unknown";
    }
    else {
        document.querySelector(".name span").innerHTML = Name;
    }
    // remove blue screen
    document.querySelector(".control-buttons").remove();
}
let duration = 1000;
//choose block
let blocksContainer = document.querySelector(".memory-game");
//create array game blocks
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

blocks.forEach((block, index) => {
block.style.order = orderRange[index];
//click effect
block.addEventListener('click', function() {
    //trigger flip block function
    flipBlock(block);
});
});
// flipblock function
function flipBlock(selectedBlock){
    selectedBlock.classList.add('is-flipped');
    // collect all flipblockes
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    // If Theres Two Selected Blocks
    if (allFlippedBlocks.length === 2) {
//   stop function
    stopClick();
    // check match block
    matchBlocks(allFlippedBlocks[0],allFlippedBlocks[1])
}
}
// stop function
function stopClick(){
    blocksContainer.classList.add('no-click');
    // wait duration
    setTimeout(() =>{
        // to remove class no clicking after duration
        blocksContainer.classList.remove('no-click');
    },duration);
}
// matched block
function matchBlocks(fristBlock , secondBlock){
    let  xElement = document.querySelector('.tries span')
    if(fristBlock.dataset.technology === secondBlock.dataset.technology){
        fristBlock.classList.remove('is-flipped');
       secondBlock.classList.remove('is-flipped');
       fristBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');
document.getElementById('success').play();
    }
    else{
        xElement.innerHTML = parseInt(xElement.innerHTML) +1;
        setTimeout(() =>{
         
       fristBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
     },duration);
     document.getElementById('failed').play();
}
}
// suffle function
function shuffle(array){
    let current = array.length,
    temp,
    random;
    while(current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp; 
    }
    return array;

}

