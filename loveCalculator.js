prompt("What is your name?");
prompt("What is their name?");

//random number between 1 and 100
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

if (loveScore === 100) {
    alert("Your love is " + loveScore + "%. " + "You love each other like a fat kid loves cake!")
} else {
    alert("Your love is " + loveScore + "%." + "You love each other like a fat kid loves cake!")
}