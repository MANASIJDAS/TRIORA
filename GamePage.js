const options=document.querySelectorAll(".OPTION");
const CD=document.getElementById("COUNTDOWN");
const R=document.getElementById("RESULT");
const UserScore1=document.getElementById("US");
const ComputerScore1=document.getElementById("CS");
let maxPoints=parseInt(localStorage.getItem('maxPoints'));
let UserScore=0;
let ComputerScore=0;

options.forEach(OPTION => {OPTION.addEventListener('click',() => 
    {const UserChoice=OPTION.dataset.choice;
    startCountDown(UserChoice);
});});
function startCountDown(UserChoice)
{
    let count=6;
    const timer=setInterval(() =>{
        if(count%2==0)
        {
        CD.textContent=count/2;
        }
        else{
            CD.textContent='';
        }
        count--;
        if(count<0){clearInterval(timer);
            playGame(UserChoice);
    }
},500);
}
function playGame(UserChoice)
{
  const choices=['stone','paper','scissor'];
  const ComputerChoice=choices[Math.floor(Math.random()*3)];
  
  let result='';

if(UserChoice==='stone' && ComputerChoice==='stone')
{
    result='DRAW! Both chose STONE.';
    UserScore=UserScore+0;
    ComputerScore=ComputerScore+0;
}
else if(UserChoice==='paper' && ComputerChoice==='paper')
{
    result='DRAW! Both chose PAPER.';
    UserScore=UserScore+0;
    ComputerScore=ComputerScore+0;
}
else if(UserChoice==='scissor' && ComputerChoice==='scissor')
{
    result='DRAW! Both chose SCISSOR.';
    UserScore=UserScore+0;
    ComputerScore=ComputerScore+0;
}
else if(UserChoice==='scissor' && ComputerChoice==='paper')
{
result='You WON this Point.';
UserScore=UserScore+1;
ComputerScore=ComputerScore+0;
}

else if(UserChoice==='scissor' && ComputerChoice==='stone')
{
result='Computer WON this Point.';
UserScore=UserScore+0;
ComputerScore=ComputerScore+1;
}

else if(UserChoice==='paper' && ComputerChoice==='stone')
{
result='You WON this Point.';
UserScore=UserScore+1;
ComputerScore=ComputerScore+0;
}

else if(UserChoice==='paper' && ComputerChoice==='scissor')
{
result='Computer WON this Point.';
UserScore=UserScore+0;
ComputerScore=ComputerScore+1;
}

else if(UserChoice==='stone' && ComputerChoice==='paper')
{
result='Computer WON this Point.';
UserScore=UserScore+0;
ComputerScore=ComputerScore+1;
}

else if(UserChoice==='stone' && ComputerChoice==='scissor')
{
result='You WON this Point.';
UserScore=UserScore+1;
ComputerScore=ComputerScore+0;
}
R.textContent=result;
UserScore1.textContent=UserScore;
ComputerScore1.textContent=ComputerScore;
if(UserScore>=maxPoints)
{
    localStorage.setItem('FUS',UserScore);
    localStorage.setItem('FCS',ComputerScore);
window.location.href="RPW.html";
}
else if(ComputerScore>=maxPoints)
{
    localStorage.setItem('FUS',UserScore);
    localStorage.setItem('FCS',ComputerScore);
window.location.href="RPL.html";
}
}
