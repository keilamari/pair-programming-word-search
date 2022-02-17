const transpose = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let newMatrix = [];
    for (let i = 0; i < cols; i++) {
      newMatrix[i] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newMatrix[j][i] = matrix[i][j];
      }
    }
    return newMatrix;
  };
  
  const isWordInMatrix = (joinedLetters, word) => {
    for (let i = 0; i < joinedLetters.length; i++) {
      if (joinedLetters[i].includes(word)) return true;
    }
    return false;
  };
  
  const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''));
    return isWordInMatrix(horizontalJoin, word) || isWordInMatrix(verticalJoin, word);
  };


  module.exports = wordSearch

  