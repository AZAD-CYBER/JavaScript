// Note :- Your first run index.html file

let age = prompt("How old are you?", 100);
document.getElementById("input").innerHTML = age;

// The function confirm shows a modal window with a question and two buttons: OK and Cancel.

// The result is true if OK is pressed and false otherwise.
let isBoss = confirm("Are you the boss?");

alert(isBoss); //This one we’ve seen already. It shows a message and waits for the user to press “OK”.
