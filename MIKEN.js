const mainCon = document.querySelector(".main-con");
const btn = document.querySelector(".btn");

mainCon.addEventListener("mouseover", () => {
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = "#E4B1F0";
  btn.style.color = "#433878";
          mainCon.style.backgroundImage = "linear-gradient(to top left, #7E60BF, #6353B1, #433878 )";
        mainCon.style.boxShadow = "0px 0px 100px #E4B1F0, 0px 0px 100px #7E60BF";
        mainCon.style.transform = "scale(1,100%)";
        mainCon.style.transistion = "scale 2s"
});

mainCon.addEventListener("mouseout", () => {
  btn.style.cursor = "none";
  btn.style.backgroundColor = "none";
  btn.style.color = "#FFE1FF";
          mainCon.style.backgroundImage = "none";
        mainCon.style.boxShadow = "none";
        mainCon.style.transform = "scale(1,110%)";
        mainCon.style.transistion = "scale 2s"
});



function Auth(){
const userName =document.getElementById("userName").value;
const password =document.getElementById("password").value;


    alert(`Welcome ${userName}`);


}