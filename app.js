let userscore=0; 
let compscore=0; 

const choices= document.querySelectorAll(".choice");
const msgpara= document.querySelector(".msg"); 

const userscorecheck= document.querySelector(".user-score"); 
const compscorecheck= document.querySelector(".comp-score"); 

const resetBtn = document.querySelector(".reset"); 

const getcompchoice = ()=>{
    let options= ["rock", "paper", "scissors"]; 
    let randidx = Math.floor(Math.random()*3); 
    return options[randidx]; 
};
const drawgame= ()=>{
  msgpara.innerText= "Game is draw. Play Again."; 
};

const displaywinner = (user_win) =>{
if(user_win){
    userscore++; 
    msgpara.innerText='You Win!'; 
    msgpara.style.backgroundColor= "green"; 
    userscorecheck.innerText= userscore; 
}
else{
    compscore++; 
    msgpara.innerText='You lose.'; 
    msgpara.style.backgroundColor= "red"; 
    compscorecheck.innerText= compscore; 
}
}; 

const playgame = (userchoice)=>{
   const compchoice = getcompchoice(); 
   let user_win =true; 
   if(userchoice===compchoice){
    drawgame(); 
   }
   else{
    if(userchoice==="rock"){
     user_win= (compchoice==="scissors")? true: false; 
    }
    else if(userchoice==="paper"){
     user_win= (compchoice==="rock")? true: false; 
    }
    else{
     user_win= (compchoice==="paper")? true: false;  
    }

    displaywinner(user_win); 
}
}; 

choices.forEach((choice) => {
    choice.addEventListener('click', ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice); 
    }
) 
});

resetBtn.addEventListener('click', ()=>{
userscore=0; 
compscore=0; 
userscorecheck.innerText = userscore; 
compscorecheck.innerText = compscore;
msgpara.innerText="Play your game."
msgpara.style.backgroundColor= "blueviolet"; 
}); 