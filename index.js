const increasebtn=document.getElementById("increasebtn");
const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const countLabel=document.getElementById("countLabel");

let count=0;

increasebtn.onclick = function()
{
    count++;
    countLabel.textContent=count;
}
decreasebtn.onclick = function()
{
    count--;
    countLabel.textContent=count;
}
resetbtn.onclick = function()
{
    count=0;
    countLabel.textContent=count;
}