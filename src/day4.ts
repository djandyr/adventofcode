export class BingoBoard {
    size: any;
    board: {};
    rows: any[];
    cols: any[];
    
    constructor(boardData) {
      this.size = boardData.length;
      this.board = {};
      this.rows = Array(this.size).fill(0);
      this.cols = Array(this.size).fill(0);
  
      for (let x = 0; x < this.size; ++x) {
        for (let y = 0; y < this.size; ++y) {
          const value = boardData[x][y];
          this.board[value] = { row: x, col: y, hasMark: false };
        }
      }
    }
  
    markSquare(square) {
      if (square in this.board) {
        this.board[square].hasMark = true;
        ++this.rows[this.board[square].row];
        ++this.cols[this.board[square].col];
      }
    }

    sumUnmarkedNumbers() {
        let sum:number = 0;
        for (const square in this.board) {
          if (!this.board[square].hasMark) sum += parseInt(square);
        }
        return sum;
    }
  
    isWinner() {
      return this.rows.some(row => row === this.size) || this.cols.some(col => col === this.size);
    }
}

export const createBoards = (input, size) => {
    const boards = [];
    for (let i = 0; i < input.length; i += size) {
      const boardData = input.slice(i, i + size).map(row => row.match(/\d+/g));
      boards.push(new BingoBoard(boardData));
    }
    return boards;
};

// The score of the winning board be calculated by finding the sum of all unmarked numbers on board 
// then multiply that sum by the number that was just called when the board won
export const calculateFirstWinnerScore = (input:any, size:number) => {

    const numbers = input.shift().split(','); // Numbers to be drawn
    const boards = createBoards(input, size);

    for (const number of numbers) {
      for (const board of boards) {
        board.markSquare(number);
        if (board.isWinner()) {
            return board.sumUnmarkedNumbers() * parseInt(number);
        }
      }
    }
};

// Which board will win last? Once it wins, what would its final score be?
export const calculateLastWinnerScore = (input: any, size: number) => {
    const numbers = input.shift().split(',');
    const boards = createBoards(input, size);
    let lastWinner:BingoBoard;
    let lastNumber:string;

    for (const number of numbers) {
        for (let i = boards.length - 1; i >= 0; --i) {
          boards[i].markSquare(number);
          if (boards[i].isWinner()) {
            lastWinner = boards.splice(i, 1)[0];
            lastNumber = number;
          }
        }
        if (!boards.length) break; // all winners found?
    }

    return lastWinner.sumUnmarkedNumbers() * parseInt(lastNumber);
}