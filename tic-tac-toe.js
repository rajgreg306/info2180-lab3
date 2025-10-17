document.addEventListener("DOMContentLoaded", () => {

    const board = document.getElementById("board")

    const game_cells = board.getElementsByTagName("div")


    for(let i = 0; i < game_cells.length; i++){
        game_cells[i].classList.add("square");
    }


    let player = "X";

    const game = new Array(9);
    const status = document.getElementById("status")
    let gameOver = false;

    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    gameWinner = () => {
        for (const [a,b,c] of winConditions){
            if (game[a] && game[a] === game[b] && game[a] == game[c]){

                status.innerHTML = `Congratulations! ${game[a]} is the Winner`
                status.classList.add("you-won")
                gameOver = true
                return;
            }
        }
    }



    for (let i = 0; i < game_cells.length; i++){

        game_cells[i].addEventListener("click", () => {
            if (!game_cells[i].innerHTML){
                game_cells[i].innerHTML = player;
                game_cells[i].classList.add("X")

                game[i] = player;

                gameWinner();

                if(player === "X"){
                    player = "O"
                }
                else{
                    player = "X"
                }
            }
        })

        
        game_cells[i].addEventListener("mouseover", () => {
            if(!game_cells[i].innerHTML){
                game_cells[i].classList.add("hover")
            }
            
        })

        game_cells[i].addEventListener("mouseout", () => {
            game_cells[i].classList.remove("hover")
        })


    }


    



})









