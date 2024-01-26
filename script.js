console.log("Welcome to Tic Tac Toe");

let audioturn = new Audio("D:/HTML PROJECTS/new html/mixkit-explainer-video-game-alert-sweep-236.wav");


let turn = "X";
let isgameover = false;

const changeTurn = () => {
    turn = turn === "X" ? "O" : "X";
    return turn;
}

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[0]].innerText !== ""
        ) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector(".line").style.transform="translate(5vw, 15vw) rotate(90deg)"
        }
    });
};


// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    }
    });
});

// Add onclick listener to reset button
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', (e) => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });

    // Reset other game-related variables and messages
    document.querySelector('.info').innerText = 'Turn for X';
    isgameover = false;

    // Additional code to reset any other game-related state if needed

    // Optionally, you can reset the image size
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = 'initial';
});