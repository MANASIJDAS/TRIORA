const taglines = ["Developed by MANASIJ DAS.","The Ultimate Hand Battle.","Simple Game, Epic Clash.","Your Chance to Win."];
const taglineElement = document.getElementById("tagline");
let taglineIndex=0;
let charIndex=0;
let delayTyping=200;
let deletingSpeed=100;
let pauseBetween=250;
function typeTagline()
{
    const currentTagline=taglines[taglineIndex];
    if(charIndex < currentTagline.length)
    {
taglineElement.textContent += currentTagline[charIndex];
charIndex++;
setTimeout(typeTagline,delayTyping);
    }
    else
    {
        setTimeout(deleteTagline,pauseBetween);
    }
}
function deleteTagline(){
    const currentTagline=taglines[taglineIndex];
    if(charIndex>0)
    {
        taglineElement.textContent=currentTagline.substring(0,charIndex-1);
        charIndex--;
        setTimeout(deleteTagline,deletingSpeed);
    }
    else{
        taglineIndex=(taglineIndex+1)%taglines.length;
        setTimeout(typeTagline,delayTyping);
    }
}
typeTagline();