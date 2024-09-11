
document.addEventListener('DOMContentLoaded', function() {
    const selectCars = document.querySelector('select');
    const startButton = document.querySelector('button');
    startButton.addEventListener('click', function(){
        const numOfCars = parseInt(selectCars.value);
        for(let i = 0; i < numOfCars; i++){
            Cars(i + 1);
        }
    });
});
    
function Cars(i){
    const newDiv = document.createElement('div');
    newDiv.className = "newDiv";
    document.body.appendChild(newDiv);

    // const endLine = document.createElement('div');
    // endLine.id = 'line'
    // newDiv.appendChild(endLine);

    const img = document.createElement('img');
    img.src =`images/car${i}.png`;
    img.id = i;
    newDiv.appendChild(img);
    const startTime = Date.now();

    Drive(i,startTime);
}

function Drive(i,startTime) {
    let position =20;
    const TimeDrive = setInterval(() => {
        const image = document.getElementById(i);
        position += getRandomInt(1, 50);
        image.style.left = `${position}px`;

        if (position >= 1350) {
            clearInterval(TimeDrive);
            const travelTime = Date.now() - startTime;
            const h1 = document.createElement('h1');
            h1.innerText = `Car ${i} has finished the race in ${travelTime / 1000} seconds!`;
            document.body.appendChild(h1);
        } else {
        }
    }, 200);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function raceReset(){
    const ResetButton = document.createElement('button');
    ResetButton.id = "ResetButton";
    document.body.appendChild(ResetButton)
}