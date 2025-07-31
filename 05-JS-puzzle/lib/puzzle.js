// Select all the tiles
const tiles = document.querySelectorAll("td");

const canMove = (tile) => {
  // TODO: Check if a tile has an empty neighbour
  // Get the empty tile
  const emptyTile = document.querySelector(".empty");
  // Get 4 adjacent tiles to the empty tile
  // Right
  const row = emptyTile.parentElement;
  const index = emptyTile.cellIndex;
  const rightTile = row.cells[index + 1];
  // Left
  const leftTile = row.cells[index - 1];
  // Top
  // How do i get the row above
  const rowAbove = row.previousElementSibling;

  let aboveTile;
  let belowTile;

  // If the row above is there
  if (rowAbove) {
    // Get the cell in the same index as the empty cell
    aboveTile = rowAbove.cells[index];
  }
  // Bottom
  const rowBelow = row.nextElementSibling;

  // if the row below is there
  if (rowBelow) {
    belowTile = rowBelow.cells[index];
  }

  // See if the clicked tile is in it
  const fourAdjacentTiles = [aboveTile, belowTile, rightTile, leftTile];
  return fourAdjacentTiles.includes(tile);
};

const moveTile = (element) => {
  // TODO: Move the tile
  // Grab the empty tile
  const emptyTile = document.querySelector(".empty");
  // Add the class empty to the clicked tile
  element.classList.add("empty");
  // Remove the class empty from the empty tile
  emptyTile.classList.remove("empty");
  // Copy the inner text of the clicked tile to empty tile
  emptyTile.innerText = element.innerText;
  // Erase the inner text of the clicked tile
  element.innerText = "";
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
  // Select all of the cells
  const correctOrder = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15";
  const table = document.querySelector("table");
  const won = table.innerText === correctOrder;
  if (won) {
    alert("you won!");
  }
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
