document.addEventListener("DOMContentLoaded", () => {

    const board = document.getElementById("board")

    const game_cells = board.getElementsByTagName("div")

    for(let i = 0; i < game_cells.length; i++){
        game_cells[i].classList.add("square");
    }

})









