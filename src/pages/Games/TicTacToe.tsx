import { useEffect, useState } from "react"
import "./TicTacToe.scss";

enum Turns {
  X = "X", O = "O"
}

export function TicTacToe({ size = 5 }: { size: number}) {

  const [ turn, setTurn ] = useState<Turns>(Turns.X);

  const [ board, setBoard ] = useState<string[][]>();

  const [ winner, setWinner ] = useState<Turns|null>();

  useEffect(() => {
    initState();
  }, [size]);

  useEffect(() => {
    setWinner(calcWinnerCombinations());
  }, [board]);

  function initState() {
    setBoard(
      Array(size)
        .fill(null)
        .map(() => Array(size).fill(null))
    );
  }

  function getCellClassName(cell: string) {
    return cell ? `filled-${cell}` : "empty"
  }
  
  function calcWinnerCombinations(){
    if (!board)  return null;

    const size = board.length;

    // Check rows
    for (let i = 0; i < size; i++) {
      const row = board[i];
      const first = row[0];
      if (first !== null && row.every((cell) => cell === first)) {
        return first as Turns;
      }
    }

    // Check columns
    for (let j = 0; j < size; j++) {
      const col = board.map((row) => row[j]);
      const first = col[0];
      if (first !== null && col.every((cell) => cell === first)) {
        return first as Turns;
      }
    }

    // Check diagonals
    const diag1 = board.map((row, i) => row[i]);
    const firstDiag = diag1[0];
    if (firstDiag !== null && diag1.every((cell) => cell === firstDiag)) {
      return firstDiag as Turns;
    }

    const diag2 = board.map((row, i) => row[size - 1 - i]);
    const firstAntiDiag = diag2[0];
    if (
      firstAntiDiag !== null &&
      diag2.every((cell) => cell === firstAntiDiag)
    ) {
      return firstAntiDiag as Turns;
    }

    return null ;
  }
  
  function reset() {
    initState();
    setWinner(null);
    setTurn(Turns.X);
  }

  function handleCellClick({rowIndex, cellIndex}: {rowIndex: number, cellIndex: number}) {
    setBoard(oldState => {
      const clone = JSON.parse(JSON.stringify(oldState));
      clone[rowIndex][cellIndex] = turn;
      return clone;
    });

    setTurn(t => t === Turns.X ? Turns.O : Turns.X);
  }
  return <>
    <div className="tic-tac-toe">
      <header className="d-flex align-c gap1 pb1">
        {
          winner 
            ? <i>Abbiamo un vincitore</i>
            : <i>È il turno di: {turn}</i>
        }
        
        <button onClick={reset}>Reset</button>
      </header>
      {
        board?.map((row, rowIndex) => <div className="row">
          {
            row.map((cell, cellIndex) => 
              <span 
                className={`cell ${getCellClassName(cell)}`}
                onClick={() => {
                  !cell && !winner && 
                  handleCellClick({rowIndex, cellIndex})
                }}
              >
                {cell}
              </span>
            )}
        </div>)
      }
    </div>
  </>
}