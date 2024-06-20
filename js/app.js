//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".board .sqr")

const messageEl = document.getElementById("message")

const resetBtnEl = document.getElementById("reset")


init()
/*-------------------------------- Functions --------------------------------*/

function init() {
    board = ["", "", "", "", "", "", "", "", ""]
    turn = "X"
    winner = false
    tie = false
    console.log("Initialisation function working")
    render()
}


function render() {
    updateBoard()
    updateMessage()
}


function updateBoard() {
    board.forEach((square, i) => {
        squareEls[i]
        if (board[i] === "X") {
            squareEls[i].style.backgroundColor = "pink"
        } else if (board[i] === "O") {
            squareEls[i].style.backgroundColor = "lightblue"
        } else {
            squareEls[i].style.backgroundColor = "white"
        }
    })
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.innerText = `${turn}'s turn`
    } else if (winner === false && tie === true) {
        messageEl.innerText = 'The game is a draw'
    } else {
        messageEl.innerText = `${turn} wins!`
    }
}


function handleClick(e) {
    let squareIndex = e.target.value
    if (board[squareIndex] === "X" || board[squareIndex] === "O") {
        return
    }
    if (winner === true) {
        return
    }
    console.log(e, "winning combos")
    placePiece()
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}


function placePiece(i) {
    board[i] === turn
    console.log(board)
}


function checkForWinner() {
    winningCombos.forEach((combo) => {
        if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = true
        }
    })
}

function checkForTie() {
    if (winner === true) {
        return
    } else {(board.forEach((square) => {
        if (square === "") {
            tie = false
        } else {
            tie === true
        }
    }))
    
}}


function switchPlayerTurn() {
    if (winner === true) {
        return
    } else if (winner === false) {
        if (turn === "X") {
            turn = "O"
        } else {
            turn === "X"
        }
    }
}





//if (winner === true) {
//     return
// } else if (board.forEach((square) => {
//     if (square === "") {
//         tie === false
//     } else {
//         tie === true
//     }
// }
// ))

// function checkForWinner(){
//     for (let i = 0; i < winningCombos.length; i++) {
//         let combo = winningCombos[i]
//          for (let j = 0; j < winningCombos[i].length; j++) {
//             if (combo[])


//             }
//         }

// const updateMessage = () => {
//     if (winner === false && tie === false) {
//         if (turn === "X") {
//             return turn === "O"
//         } else if (turn === "O") {
//             return turn === "X"
//         }
//     } else if (winner === false && tie === true) {
//         return `It's a tie!`
//     } else {
//         return `Congratulations player!`
//     }
// }
// console.log(updateMessage)


//     let i = 0
//     board.forEach((square) => {
//         //square[i] = squareEls.id(i)
//         square.textContent
//     }
// if (indexOf(square) === squareEls.id)
//     squareEls.id
// }

// if (squareEls[i].innerText === "X") {
//     squareEls[i].style.backgroundColor = "green"
// } else if (squareEls[i].innerText === "O") {
//     squareEls[i].style.backgroundColor = "blue"
// } else {
//     squareEls[i].style.backgroundColor = "white"
// }
//check the logging. how to do the logging.

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(squareEl => {
    squareEl.addEventListener("click", handleClick);
})

resetBtnEl.addEventListener("click", init())