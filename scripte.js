let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#mssg");
const userS = document.querySelector("#compScore");
const compS = document.querySelector("#userScore");


const genrateComChoice=()=>{
    const options = ["rock","paper","scissors"];
 let comchoice=Math.random()*3;
comchoice = Math.floor(comchoice);
return options[comchoice];
}


function result(userWin){
if(userWin===true){
    mssg.innerText="user win";
    mssg.style.color="green";


compScore+=1;
compS.innerText=compScore;
}else{
    mssg.innerText="user Lose"  ;
    mssg.style.color="red";
    userScore+=1;
    userS.innerText=userScore;
}
}
const drow=()=>{
    mssg.innerText="Drow";
    mssg.style.color="black";
}

const playGame=(userChoice) =>{
//genrate computer choice
const comchoice = genrateComChoice();
let userWin = true;
if(userChoice===comchoice){
    drow();
return;
}else
if(userChoice==="rock"&&comchoice==="paper")
{
userWin=false;
}else
if(userChoice==="paper"&&comchoice==="scissors")
    {
    userWin=false;
    }else
    if(userChoice==="scissors"&&comchoice==="rock")
        {
        userWin=false;
        }
 result(userWin);
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



