
let currentPlayer = "X";
let board = ["","","","","","","","",""];
let gameMode = ""


function startGame(mode)
{
    gameMode = mode;
    if(gameMode === 'computer')
    {
        document.getElementById('result').innerHTML = "Computer chosen, player " + currentPlayer + " 's turn";
    }
    else if(gameMode === 'player')
    {
        document.getElementById('result').innerHTML = "2 player chosen, player " + currentPlayer + " 's turn";
    }

}

function box1()
{
    if(board[0] === "" && !checkWin())
    {
        board[0] = currentPlayer;
        document.getElementById("box1").innerHTML = currentPlayer;
        if(checkWin())
        {
            document.getElementById("result").innerHTML = currentPlayer + " has won";
        }
        else if(checkTie())
        {
            document.getElementById("result").innerHTML = "It is a tie"
        }
        else
        {
            if(currentPlayer === 'X')
            {
                currentPlayer = 'O'
            }
            else if(currentPlayer === 'O')
            {
                currentPlayer = 'X'
            }
            document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            if(gameMode === 'computer')
            {
                computerMove();
            }
        }
    }
    console.log(board);
}

function box2()
{
    if(board[1] === "" && !checkWin())
    {
        board[1] = currentPlayer;
        document.getElementById("box2").innerHTML = currentPlayer;
        if(checkWin())
        {
            document.getElementById("result").innerHTML = currentPlayer + " has won";
        }
        else if(checkTie())
        {
            document.getElementById("result").innerHTML = "It is a tie"
        }
        else
        {
            if(currentPlayer === 'X')
            {
                currentPlayer = 'O'
            }
            else if(currentPlayer === 'O')
            {
                currentPlayer = 'X'
            }
            document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            if(gameMode === 'computer')
            {
                computerMove();
            }
        }
    }
}

function box3()
{
    if(board[2] === "" && !checkWin())
    {
        board[2] = currentPlayer;
        document.getElementById("box3").innerHTML = currentPlayer;
        if(checkWin())
        {
            document.getElementById("result").innerHTML = currentPlayer + " has won";
        }
        else if(checkTie())
        {
            document.getElementById("result").innerHTML = "It is a tie"
        }
        else
        {
            if(currentPlayer === 'X')
            {
                currentPlayer = 'O'
            }
            else if(currentPlayer === 'O')
            {
                currentPlayer = 'X'
            }
            document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            if(gameMode === 'computer')
            {
                computerMove();
            }
        }
    }
}

function box4()
{
    if(board[3] === "" && !checkWin())
    {
        board[3] = currentPlayer;
        document.getElementById("box4").innerHTML = currentPlayer;
        if(checkWin())
        {
            document.getElementById("result").innerHTML = currentPlayer + " has won";
        }
        else if(checkTie())
        {
            document.getElementById("result").innerHTML = "It is a tie"
        }
        else
        {
            if(currentPlayer === 'X')
            {
                currentPlayer = 'O'
            }
            else if(currentPlayer === 'O')
            {
                currentPlayer = 'X'
            }
            document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            if(gameMode === 'computer')
            {
                computerMove();
            }
        }
    }
}

function box5()
{
    if(board[4] === "" && !checkWin())
    {
        board[4] = currentPlayer;
        document.getElementById("box5").innerHTML = currentPlayer;
        if(checkWin())
        {
            document.getElementById("result").innerHTML = currentPlayer + " has won";
        }
        else if(checkTie())
        {
            document.getElementById("result").innerHTML = "It is a tie"
        }
        else
        {
            if(currentPlayer === 'X')
            {
                currentPlayer = 'O'
            }
            else if(currentPlayer === 'O')
            {
                currentPlayer = 'X'
            }
            document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            if(gameMode === 'computer')
            {
                computerMove();
            }
        }
    }
}

function box6()
{
    if(board[5] === "" && !checkWin())
    {
        board[5] = currentPlayer;
        document.getElementById("box6").innerHTML = currentPlayer;
        if(checkWin())
        {
            document.getElementById("result").innerHTML = currentPlayer + " has won";
        }
        else if(checkTie())
        {
            document.getElementById("result").innerHTML = "It is a tie"
        }
        else
        {
            if(currentPlayer === 'X')
            {
                currentPlayer = 'O'
            }
            else if(currentPlayer === 'O')
            {
                currentPlayer = 'X'
            }
            document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            if(gameMode === 'computer')
            {
                computerMove();
            }
        }
    }
}

function box7()
{
    if(board[6] === "" && !checkWin())
    {
        board[6] = currentPlayer;
        document.getElementById("box7").innerHTML = currentPlayer;
        if(checkWin())
        {
            document.getElementById("result").innerHTML = currentPlayer + " has won";
        }
        else if(checkTie())
        {
            document.getElementById("result").innerHTML = "It is a tie"
        }
        else
        {
            if(currentPlayer === 'X')
            {
                currentPlayer = 'O'
            }
            else if(currentPlayer === 'O')
            {
                currentPlayer = 'X'
            }
            document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            if(gameMode === 'computer')
            {
                computerMove();
            }
        }
    }
}

function box8()
{
    if(board[7] === "" && !checkWin())
    {
        board[7] = currentPlayer;
        document.getElementById("box8").innerHTML = currentPlayer;
        if(checkWin())
        {
            document.getElementById("result").innerHTML = currentPlayer + " has won";
        }
        else if(checkTie())
        {
            document.getElementById("result").innerHTML = "It is a tie"
        }
        else
        {
            if(currentPlayer === 'X')
            {
                currentPlayer = 'O'
            }
            else if(currentPlayer === 'O')
            {
                currentPlayer = 'X'
            }
            document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            if(gameMode === 'computer')
            {
                computerMove();
            }
        }
    }
}

function box9()
{
    if(board[8] === "" && !checkWin())
    {
        board[8] = currentPlayer;
        document.getElementById("box9").innerHTML = currentPlayer;
        if(checkWin())
        {
            document.getElementById("result").innerHTML = currentPlayer + " has won";
        }
        else if(checkTie())
        {
            document.getElementById("result").innerHTML = "It is a tie"
        }
        else
        {
            if(currentPlayer === 'X')
            {
                currentPlayer = 'O'
            }
            else if(currentPlayer === 'O')
            {
                currentPlayer = 'X'
            }
            document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            if(gameMode === 'computer')
            {
                computerMove();
            }
        }
    }
}

function checkWin()
{
  let winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    for(let x = 0; x < winConditions.length; x++)
    {
        if(board[0] === 'X' && board[1] === 'X' && board[2] === 'X')
        {
            return true;
        }
        else if(board[0] === 'O' && board[1] === 'O' && board[2] === 'O')
        {
            return true;
        }

        if(board[3] === 'X' && board[4] === 'X' && board[5] === 'X')
        {
            return true;
        }
        else if(board[3] === 'O' && board[4] === 'O' && board[5] === 'O')
        {
            return true;
        }

        if(board[6] === 'X' && board[7] === 'X' && board[8] === 'X')
        {
            return true;
        }
        else if(board[6] === 'O' && board[7] === 'O' && board[8] === 'O')
        {
            return true;
        }

        if(board[0] === 'X' && board[3] === 'X' && board[6] === 'X')
        {
            return true;
        }
        else if(board[0] === 'O' && board[3] === 'O' && board[6] === 'O')
        {
            return true;
        }

        if(board[1] === 'X' && board[4] === 'X' && board[7] === 'X')
        {
            return true;
        }
        else if(board[1] === 'O' && board[4] === 'O' && board[7] === 'O')
        {
            return true;
        }

        if(board[2] === 'X' && board[5] === 'X' && board[8] === 'X')
        {
            return true;
        }
        else if(board[2] === 'O' && board[5] === 'O' && board[8] === 'O')
        {
            return true;
        }

        if(board[0] === 'X' && board[4] === 'X' && board[8] === 'X')
        {
            return true;
        }
        else if(board[0] === 'O' && board[4] === 'O' && board[8] === 'O')
        {
            return true;
        }

        if(board[2] === 'X' && board[4] === 'X' && board[6] === 'X')
        {
            return true;
        }
        else if(board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
        {
            return true;
        }
    }
    return false;
}

function checkTie()
{
    return !checkWin() && checkBox1() && checkBox2() && checkBox3() && checkBox4() && checkBox5() && checkBox6() && checkBox7() && checkBox8() && checkBox9();
}

function checkBox1()
{
    return board[0] === 'X' || board[0] === 'O';
}

function checkBox2()
{
    return board[1] === 'X' || board[1] === 'O';
}

function checkBox3()
{
    return board[2] === 'X' || board[2] === 'O';
}


function checkBox4()
{
    return board[3] === 'X' || board[3] === 'O';
}


function checkBox5()
{
    return board[4] === 'X' || board[4] === 'O';
}


function checkBox6()
{
    return board[5] === 'X' || board[5] === 'O';
}

function checkBox7()
{
    return board[6] === 'X' || board[6] === 'O';
}


function checkBox8()
{
    return board[7] === 'X' || board[7] === 'O';
}

function checkBox9()
{
    return board[8] === 'X' || board[8] === 'O';
}



function computerMove() {

if(goForWin())
{

}
else if(block())
{

}
else if(!block()) {
    let x = Math.floor(Math.random() * 9);
    if (board[x] === '') {
        if (x === 0) {
            if (board[0] === "") {
                board[0] = currentPlayer;
                document.getElementById("box1").innerHTML = currentPlayer;
                if (checkWin()) {
                    document.getElementById("result").innerHTML = currentPlayer + " has won";
                } else if (checkTie()) {
                    document.getElementById("result").innerHTML = "It is a tie"
                } else {
                    if (currentPlayer === 'X') {
                        currentPlayer = 'O'
                    } else if (currentPlayer === 'O') {
                        currentPlayer = 'X'
                    }
                    document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";

                }
            }
        } else if (x === 1) {
            if (board[1] === "") {
                board[1] = currentPlayer;
                document.getElementById("box2").innerHTML = currentPlayer;
                if (checkWin()) {
                    document.getElementById("result").innerHTML = currentPlayer + " has won";
                } else if (checkTie()) {
                    document.getElementById("result").innerHTML = "It is a tie"
                } else {
                    if (currentPlayer === 'X') {
                        currentPlayer = 'O'
                    } else if (currentPlayer === 'O') {
                        currentPlayer = 'X'
                    }
                    document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
                }

            }
        } else if (x === 2) {
            if (board[2] === "") {
                board[2] = currentPlayer;
                document.getElementById("box3").innerHTML = currentPlayer;
                if (checkWin()) {
                    document.getElementById("result").innerHTML = currentPlayer + " has won";
                } else if (checkTie()) {
                    document.getElementById("result").innerHTML = "It is a tie"
                } else {
                    if (currentPlayer === 'X') {
                        currentPlayer = 'O'
                    } else if (currentPlayer === 'O') {
                        currentPlayer = 'X'
                    }
                    document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
                }
            }
        } else if (x === 3) {
            if (board[3] === "") {
                board[3] = currentPlayer;
                document.getElementById("box4").innerHTML = currentPlayer;
                if (checkWin()) {
                    document.getElementById("result").innerHTML = currentPlayer + " has won";
                } else if (checkTie()) {
                    document.getElementById("result").innerHTML = "It is a tie"
                } else {
                    if (currentPlayer === 'X') {
                        currentPlayer = 'O'
                    } else if (currentPlayer === 'O') {
                        currentPlayer = 'X'
                    }
                    document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
                }
            }
        } else if (x === 4) {
            if (board[4] === "") {
                board[4] = currentPlayer;
                document.getElementById("box5").innerHTML = currentPlayer;
                if (checkWin()) {
                    document.getElementById("result").innerHTML = currentPlayer + " has won";
                } else if (checkTie()) {
                    document.getElementById("result").innerHTML = "It is a tie"
                } else {
                    if (currentPlayer === 'X') {
                        currentPlayer = 'O'
                    } else if (currentPlayer === 'O') {
                        currentPlayer = 'X'
                    }
                    document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
                }
            }
        } else if (x === 5) {
            if (board[5] === "") {
                board[5] = currentPlayer;
                document.getElementById("box6").innerHTML = currentPlayer;
                if (checkWin()) {
                    document.getElementById("result").innerHTML = currentPlayer + " has won";
                } else if (checkTie()) {
                    document.getElementById("result").innerHTML = "It is a tie"
                } else {
                    if (currentPlayer === 'X') {
                        currentPlayer = 'O'
                    } else if (currentPlayer === 'O') {
                        currentPlayer = 'X'
                    }
                    document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
                }
            }
        } else if (x === 6) {
            if (board[6] === "") {
                board[6] = currentPlayer;
                document.getElementById("box7").innerHTML = currentPlayer;
                if (checkWin()) {
                    document.getElementById("result").innerHTML = currentPlayer + " has won";
                } else if (checkTie()) {
                    document.getElementById("result").innerHTML = "It is a tie"
                } else {
                    if (currentPlayer === 'X') {
                        currentPlayer = 'O'
                    } else if (currentPlayer === 'O') {
                        currentPlayer = 'X'
                    }
                    document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
                }
            }
        } else if (x === 7) {
            if (board[7] === "") {
                board[7] = currentPlayer;
                document.getElementById("box8").innerHTML = currentPlayer;
                if (checkWin()) {
                    document.getElementById("result").innerHTML = currentPlayer + " has won";
                } else if (checkTie()) {
                    document.getElementById("result").innerHTML = "It is a tie"
                } else {
                    if (currentPlayer === 'X') {
                        currentPlayer = 'O'
                    } else if (currentPlayer === 'O') {
                        currentPlayer = 'X'
                    }
                    document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
                }
            }
        } else if (x === 8) {
            if (board[8] === "") {
                board[8] = currentPlayer;
                document.getElementById("box9").innerHTML = currentPlayer;
                if (checkWin()) {
                    document.getElementById("result").innerHTML = currentPlayer + " has won";
                } else if (checkTie()) {
                    document.getElementById("result").innerHTML = "It is a tie"
                } else {
                    if (currentPlayer === 'X') {
                        currentPlayer = 'O'
                    } else if (currentPlayer === 'O') {
                        currentPlayer = 'X'
                    }
                    document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
                }
            }
        }
    } else {
        computerMove();
    }
}
}

function block()
{
    if(board[0] === 'X' && board[1] === 'X' && board[2] === '')
    {
        if (board[2] === "") {
            board[2] = currentPlayer;
            document.getElementById("box3").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'X' && board[1] === '' && board[2] === 'X')
    {
        if (board[1] === "") {
            board[1] = currentPlayer;
            document.getElementById("box2").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === '' && board[1] === 'X' && board[2] === 'X')
    {
        if (board[0] === "") {
            board[0] = currentPlayer;
            document.getElementById("box1").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[3] === '' && board[4] === 'X' && board[5] === 'X')
    {
        if (board[3] === "") {
            board[3] = currentPlayer;
            document.getElementById("box4").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[3] === 'X' && board[4] === '' && board[5] === 'X')
    {
        if (board[4] === "") {
            board[4] = currentPlayer;
            document.getElementById("box5").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[3] === 'X' && board[4] === 'X' && board[5] === '')
    {
        if (board[5] === "") {
            board[5] = currentPlayer;
            document.getElementById("box6").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[6] === '' && board[7] === 'X' && board[8] === 'X')
    {
        if (board[6] === "") {
            board[6] = currentPlayer;
            document.getElementById("box7").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[6] === 'X' && board[7] === '' && board[8] === 'X')
    {
        if (board[7] === "") {
            board[7] = currentPlayer;
            document.getElementById("box8").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[6] === 'X' && board[7] === 'X' && board[8] === '')
    {
        if (board[8] === "") {
            board[8] = currentPlayer;
            document.getElementById("box9").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === '' && board[3] === 'X' && board[6] === 'X')
    {
        if (board[0] === "") {
            board[0] = currentPlayer;
            document.getElementById("box1").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'X' && board[3] === '' && board[6] === 'X')
    {
        if (board[3] === "") {
            board[3] = currentPlayer;
            document.getElementById("box4").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'X' && board[3] === 'X' && board[6] === '')
    {
        if (board[6] === "") {
            board[6] = currentPlayer;
            document.getElementById("box7").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[1] === '' && board[4] === 'X' && board[7] === 'X')
    {
        if (board[1] === "") {
            board[1] = currentPlayer;
            document.getElementById("box2").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[1] === 'X' && board[4] === '' && board[7] === 'X')
    {
        if (board[4] === "") {
            board[4] = currentPlayer;
            document.getElementById("box5").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[1] === 'X' && board[4] === 'X' && board[7] === '')
    {
        if (board[7] === "") {
            board[7] = currentPlayer;
            document.getElementById("box8").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === '' && board[5] === 'X' && board[8] === 'X')
    {
        if (board[2] === "") {
            board[2] = currentPlayer;
            document.getElementById("box3").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === 'X' && board[5] === '' && board[8] === 'X')
    {
        if (board[5] === "") {
            board[5] = currentPlayer;
            document.getElementById("box6").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === 'X' && board[5] === 'X' && board[8] === '')
    {
        if (board[8] === "") {
            board[8] = currentPlayer;
            document.getElementById("box9").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === '' && board[4] === 'X' && board[8] === 'X')
    {
        if (board[0] === "") {
            board[0] = currentPlayer;
            document.getElementById("box1").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'X' && board[4] === '' && board[8] === 'X')
    {
        if (board[4] === "") {
            board[4] = currentPlayer;
            document.getElementById("box5").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'X' && board[4] === 'X' && board[8] === '')
    {
        if (board[8] === "") {
            board[8] = currentPlayer;
            document.getElementById("box9").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === '' && board[4] === 'X' && board[6] === 'X')
    {
        if (board[2] === "") {
            board[2] = currentPlayer;
            document.getElementById("box3").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === 'X' && board[4] === '' && board[6] === 'X')
    {
        if (board[4] === "") {
            board[4] = currentPlayer;
            document.getElementById("box5").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === 'X' && board[4] === 'X' && board[6] === '')
    {
        if (board[6] === "") {
            board[6] = currentPlayer;
            document.getElementById("box7").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    return false;
}

function goForWin()
{
    if(board[0] === 'O' && board[1] === 'O' && board[2] === '')
    {
        if (board[2] === "") {
            board[2] = currentPlayer;
            document.getElementById("box3").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'O' && board[1] === '' && board[2] === 'O')
    {
        if (board[1] === "") {
            board[1] = currentPlayer;
            document.getElementById("box2").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === '' && board[1] === 'O' && board[2] === 'O')
    {
        if (board[0] === "") {
            board[0] = currentPlayer;
            document.getElementById("box1").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[3] === '' && board[4] === 'O' && board[5] === 'O')
    {
        if (board[3] === "") {
            board[3] = currentPlayer;
            document.getElementById("box4").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[3] === 'O' && board[4] === '' && board[5] === 'O')
    {
        if (board[4] === "") {
            board[4] = currentPlayer;
            document.getElementById("box5").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[3] === 'O' && board[4] === 'O' && board[5] === '')
    {
        if (board[5] === "") {
            board[5] = currentPlayer;
            document.getElementById("box6").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[6] === '' && board[7] === 'O' && board[8] === 'O')
    {
        if (board[6] === "") {
            board[6] = currentPlayer;
            document.getElementById("box7").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[6] === 'O' && board[7] === '' && board[8] === 'O')
    {
        if (board[7] === "") {
            board[7] = currentPlayer;
            document.getElementById("box8").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[6] === 'O' && board[7] === 'O' && board[8] === '')
    {
        if (board[8] === "") {
            board[8] = currentPlayer;
            document.getElementById("box9").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === '' && board[3] === 'O' && board[6] === 'O')
    {
        if (board[0] === "") {
            board[0] = currentPlayer;
            document.getElementById("box1").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'O' && board[3] === '' && board[6] === 'O')
    {
        if (board[3] === "") {
            board[3] = currentPlayer;
            document.getElementById("box4").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'O' && board[3] === 'O' && board[6] === '')
    {
        if (board[6] === "") {
            board[6] = currentPlayer;
            document.getElementById("box7").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[1] === '' && board[4] === 'O' && board[7] === 'O')
    {
        if (board[1] === "") {
            board[1] = currentPlayer;
            document.getElementById("box2").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[1] === 'O' && board[4] === '' && board[7] === 'O')
    {
        if (board[4] === "") {
            board[4] = currentPlayer;
            document.getElementById("box5").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[1] === 'O' && board[4] === 'O' && board[7] === '')
    {
        if (board[7] === "") {
            board[7] = currentPlayer;
            document.getElementById("box8").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === '' && board[5] === 'O' && board[8] === 'O')
    {
        if (board[2] === "") {
            board[2] = currentPlayer;
            document.getElementById("box3").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === 'O' && board[5] === '' && board[8] === 'O')
    {
        if (board[5] === "") {
            board[5] = currentPlayer;
            document.getElementById("box6").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === 'O' && board[5] === 'O' && board[8] === '')
    {
        if (board[8] === "") {
            board[8] = currentPlayer;
            document.getElementById("box9").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === '' && board[4] === 'O' && board[8] === 'O')
    {
        if (board[0] === "") {
            board[0] = currentPlayer;
            document.getElementById("box1").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'O' && board[4] === '' && board[8] === 'O')
    {
        if (board[4] === "") {
            board[4] = currentPlayer;
            document.getElementById("box5").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[0] === 'O' && board[4] === 'O' && board[8] === '')
    {
        if (board[8] === "") {
            board[8] = currentPlayer;
            document.getElementById("box9").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === '' && board[4] === 'O' && board[6] === 'O')
    {
        if (board[2] === "") {
            board[2] = currentPlayer;
            document.getElementById("box3").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === 'O' && board[4] === '' && board[6] === 'O')
    {
        if (board[4] === "") {
            board[4] = currentPlayer;
            document.getElementById("box5").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    else if(board[2] === 'O' && board[4] === 'O' && board[6] === '')
    {
        if (board[6] === "") {
            board[6] = currentPlayer;
            document.getElementById("box7").innerHTML = currentPlayer;
            if (checkWin()) {
                document.getElementById("result").innerHTML = currentPlayer + " has won";
            } else if (checkTie()) {
                document.getElementById("result").innerHTML = "It is a tie"
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else if (currentPlayer === 'O') {
                    currentPlayer = 'X'
                }
                document.getElementById("result").innerHTML = "Player " + currentPlayer + " 's turn";
            }
        }
        return true;
    }
    return false;
}
function reset()
{
    document.getElementById('box1').innerHTML = "Open"
    board[0] = ''
    document.getElementById('box2').innerHTML = "Open"
    board[1] = ''
    document.getElementById('box3').innerHTML = "Open"
    board[2] = ''
    document.getElementById('box4').innerHTML = "Open"
    board[3] = ''
    document.getElementById('box5').innerHTML = "Open"
    board[4] = ''
    document.getElementById('box6').innerHTML = "Open"
    board[5] = ''
    document.getElementById('box7').innerHTML = "Open"
    board[6] = ''
    document.getElementById('box8').innerHTML = "Open"
    board[7] = ''
    document.getElementById('box9').innerHTML = "Open"
    board[8] = ''
    currentPlayer = 'X'
    gameMode = '';
    document.getElementById('result').innerHTML = "Game reset, please chose a mode";
}