function result(){
let inputValue = document.getElementById("inputData").value;
console.log(inputValue);
let displayHeading=document.getElementById("text");
displayHeading.innerText=inputValue;
// change color of body.

document.getElementsByTagName("body")[0].style.backgroundColor="lightblue";
}

//addEventListener method
let button=document.getElementById("p");

function colorChange(){
    paraBackground=document.getElementbyId("p");
                            "#"+(Math.random()*0xFFFFFF<<0).toString(16);
}
paraBackground.addEventListener("mouseout",colorChange);