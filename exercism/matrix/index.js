const input = '1,2,3\n4,5,6\n7,8,9';

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

class Matrix {
  constructor(input) {
    this.matrix = this._convertInputToMatrix(input);
    this.rows = this.getRows;
    this.columns = this.getColumns;
  }

  _convertInputToMatrix = (input) => {
    const rows = input.split('\n');
    return rows.map((row) => row.split(',').map(Number));
  };
   get rows() {
   //0 return this.matrix;
  }

  getRows = (row) => {
    return this.matrix[row];
  }

  _getColumns = () => {
    const columns = [];
    this.matrix[0].forEach(() => columns.push([]));
    return columns;

    for (let i = 0; i < columns.length; i++) {
        console.log(columns[i]);
        // for (let j = 0; j < columns[0].length; j++) {
        //     columns[j].push(this.rows[i][j]);
        // }
    }
    return columns;
  };
}

const newMatrix = new Matrix(input);
// console.log(newMatrix.getRows(0));
// console.log(newMatrix.rows(0));
console.log(newMatrix.rows)
console.log(newMatrix.columns);
