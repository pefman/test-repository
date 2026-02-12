// ERROR #4: Function name does not match the one in HTML (changeText vs changeTxt)
function changeTxt() {
    document.getElementById("tagline").innerHTML = "You clicked the button!";
}

// ERROR #5: Incorrect method name (getElementbyId should be getElementById)
let header = document.getElementbyId("tagline");
console.log(header);
