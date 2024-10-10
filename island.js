function getNeighbors(row, col, matrix) {
  
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors
  
  // Your code here
  let neighbors = [];
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  let directions = [
    [-1, 0], // top
    [-1, 1], // top right
    [0, 1], // right
    [1, 1], // bottom right
    [1, 0], // bottom
    [1, -1], // bottom left
    [0, -1], // left
    [-1, -1], // top left
  ];

  for (let [dRow, dCol] of directions) {
    let newRow = row + dRow;
    let newCol = col + dCol;
    if (
      newRow >= 0 &&
      newRow < numRows &&
      newCol >= 0 &&
      newCol < numCols &&
      matrix[newRow][newCol] === 1
    ) {
      neighbors.push([newRow, newCol]);
    }
  }

  return neighbors;

}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here
  let visited = new Set();
  let count = 0;
  let numRows = matrix.length;
  let numCols = matrix[0].length;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (matrix[row][col] === 1 && !visited.has(`${row},${col}`)) {
        count++;
        let stack = [[row, col]];
        visited.add(`${row},${col}`);

        while (stack.length > 0) {
          let [currentRow, currentCol] = stack.pop();
          let neighbors = getNeighbors(currentRow, currentCol, matrix);

          for (let [neighborRow, neighborCol] of neighbors) {
            if (!visited.has(`${neighborRow},${neighborCol}`)) {
              stack.push([neighborRow, neighborCol]);
              visited.add(`${neighborRow},${neighborCol}`);
            }
          }
        }
      }
    }
  }

  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];