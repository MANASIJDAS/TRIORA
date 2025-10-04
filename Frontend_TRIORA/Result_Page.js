const abc=document.querySelector('.SCORE1');
const xyz=document.querySelector('.SCORE2');
const finalUS=localStorage.getItem('FUS');
const finalCS=localStorage.getItem('FCS');
abc.textContent=finalUS;
xyz.textContent=finalCS;