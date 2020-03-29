let p1="";
let p2="";

//Function to validate input
function validateInput(){
    p1 = document.getElementById("p1").value;
    p2 = document.getElementById("p2").value;
    if(p1===""){$("#msgTitle").text("Alert");$("#msgBody").text("Enter player 1 name");$("#msgBox").modal("show");}
    else if(p2===""){$("#msgTitle").text("Alert");$("#msgBody").text("Enter player 2 name");$("#msgBox").modal("show");}
    else{turn();$("#tic-tac-toe").modal("show");$("#pNames").modal("hide");}
}

//Selecting all squares on board
let squares = $("td");

//Function to know whose turn is now
let chance =  $("#turn");
let t=1;
function turn() {
    if(t===1){chance.text(p1+" 'X'");t=2;}
    else{chance.text(p2+" 'O'");t=1;}
}

//Function to clear the board
function clearBoard() {
    for(let i=0; i<squares.length; i++){
        squares[i].firstChild.setAttribute("src","")
    }
    turn();
}

//Function to add 'X' or 'O' or '' on board
function changeMarker() {
    let ID = parseInt(this.getAttribute("id"));
    if (this.firstElementChild.getAttribute("src") === "" && chance.text()===p1+" 'X'") {
        this.firstElementChild.setAttribute("src", "x.gif");
    } else  {
        this.firstElementChild.setAttribute("src", "o.gif");
    }
    let win = checkWin();
    let winner = "";
    if(chance.text()===p1+" 'X'"){winner=p1;}else{winner=p2};
    if(win === 1){
        clearBoard();
        $("#msgTitle").text("Winner");$("#msgBody").text("The winner is : "+winner);$("#msgBox").modal("show");
    }
    if(win === 0){
        clearBoard();
        $("#msgTitle").text("Alert");$("#msgBody").text("Match got tied");$("#msgBox").modal("show");
    }
    turn();
}

for(let i=0; i<squares.length; i++){
    squares[i].addEventListener('click',changeMarker);
}

//Function to check winner
function checkWin() {
    let sq = [];
    for(let s=0; s<squares.length; s++){
        sq[s]=squares[s].firstElementChild.getAttribute("src");
    }
    let returnValue = 0;
    if(sq[0] === sq[1] && sq[1] === sq[2] && sq[0] !== "" && sq[1] !== "" && sq[2] !== ""){
        returnValue = 1;
    }
    else if(sq[3] === sq[4] && sq[4] === sq[5] && sq[3] !== "" && sq[4] !== "" && sq[5] !== ""){
        returnValue = 1;
    }
    else if(sq[6] === sq[7] && sq[7] === sq[8] && sq[6] !== "" && sq[7] !== "" && sq[8] !== ""){
        returnValue = 1;
    }
    else if(sq[0] === sq[3] && sq[3] === sq[6] && sq[0] !== "" && sq[3] !== "" && sq[6] !== ""){
        returnValue = 1;
    }
    else if(sq[1] === sq[4] && sq[4] === sq[7] && sq[1] !== "" && sq[4] !== "" && sq[7] !== ""){
        returnValue = 1;
    }
    else if(sq[2] === sq[5] && sq[5] === sq[8] && sq[2] !== "" && sq[5] !== "" && sq[8] !== ""){
        returnValue = 1;
    }
    else if(sq[0] === sq[4] && sq[4] === sq[8] && sq[0] !== "" && sq[4] !== "" && sq[8] !== ""){
        returnValue = 1;
    }
    else if(sq[2] === sq[4] && sq[4] === sq[6] && sq[2] !== "" && sq[4] !== "" && sq[6] !== ""){
        returnValue = 1;
    }
    else if(sq[0] !== "" && sq[1] !== "" && sq[2] !== "" && sq[3] !== "" && sq[4] !== "" && sq[5] !== "" && sq[6] !== "" && sq[7] !== "" && sq[8] !== ""){
        returnValue = 0;
    }
    else {
        returnValue = -1;
    }
    return returnValue;

}