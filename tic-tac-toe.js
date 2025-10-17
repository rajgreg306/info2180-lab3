document.addEventListener("DOMContentLoaded", () => {

    const board = document.getElementById("board")

    const game_cells = board.getElementsByTagName("div")

    for(let i = 0; i < game_cells.length; i++){
        game_cells[i].classList.add("square");
    }


    let player = "X";

    const game = new Array(9);


    for (let i = 0; i < game_cells.length; i++){

        game_cells[i].addEventListener("click", () => {
            if (!game_cells[i].innerHTML){
                game_cells[i].innerHTML = player;
                game_cells[i].classList.add("X")

                game[i] = player;

                if(player === "X"){
                    player = "O"
                }
                else{
                    player = "X"
                }
            }
        })
    }



})









