const runbtn = document.getElementById("myBtn");
const max = 500;
const min = 10;
runbtn.addEventListener("mouseover", function(){
    const newTop = Math.random()* (max - min);
    const newSide = Math.random()* (max - min);

    runbtn.style.top = `${newTop}px`;
    runbtn.style.left = `${newSide}px`;

    console.log(newTop);
    console.log(newSide)
});