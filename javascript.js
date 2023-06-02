let size = 16;
let pixels;
let pixelContainers;
let color = 'black';
let randomColor = false;
let previousColor = color;

const paintWindow = document.querySelector('.paint-window');
const clear = document.querySelector('#clear');
const pixelCount = document.querySelector('#pixel-count');
const baseColor = document.querySelector('#base');
const randy = document.querySelector('#random');

function makePixels(){
    for(let i = 0; i < size; i++){
        const pixelContainer = document.createElement('div');
        pixelContainer.classList.add('pixel-container');
        paintWindow.append(pixelContainer);
        for(let j = 0; j < size; j++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixelContainer.append(pixel);
        }
    }
    pixels = document.querySelectorAll('.pixel');
    pixelContainers = document.querySelectorAll('.pixel-container');

    pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
        if(randomColor){
            color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
        pixel.style.backgroundColor = color;
    }));
}

function reset(){
    pixelContainers.forEach(pixelContainer => {
        const containedPixels = document.querySelectorAll('.pixel-container > .pixel');
        containedPixels.forEach(containedPixel => pixelContainer.remove(containedPixel));
    });
    makePixels();
}

clear.addEventListener('click', reset);

makePixels();

function handlePixelUpdate(){
    size = this.value;
    reset();
}

function handleColorUpdate(){
    color = this.value;
}

function randomColorUpdate(){
    if(!randomColor){
        previousColor = color;
    }else{
        color = previousColor;
    }
    randomColor = !randomColor;
    
}

pixelCount.addEventListener('change', handlePixelUpdate);

baseColor.addEventListener('change', handleColorUpdate);

randy.addEventListener('click', randomColorUpdate);