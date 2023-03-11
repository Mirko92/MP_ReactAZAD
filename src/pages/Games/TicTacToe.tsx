import { useEffect, useState } from "react"
import "./TicTacToe.scss";

enum Turns {
  X = "X", O = "O"
}

export function TicTacToe({ size = 5 }: { size: number}) {

  const [ turn, setTurn ] = useState<Turns>(Turns.X);

  const [ state, setState ] = useState<string[][]>();

  useEffect(() => {
    initState();
  }, [size]);

  function initState() {
    setState(
      Array.from({ length: size }, // Rows
        () => Array.from({ length: size }, () => "" ) // Cells
      )
    );
  }

  function getCellClassName(cell: string) {
    return cell ? `filled-${cell}` : "empty"
  }

  function handleCellClick({rowIndex, cellIndex}: {rowIndex: number, cellIndex: number}) {
    setState(oldState => {
      const clone = JSON.parse(JSON.stringify(oldState));
      clone[rowIndex][cellIndex] = turn;
      return clone;
    });

    setTurn(t => t === Turns.X ? Turns.O : Turns.X);
  }
  
  function reset() {
    initState();
    setTurn(Turns.X);
  }

  return <>
    <div className="tic-tac-toe">
      <header className="d-flex align-c gap1 pb1">
        <i>È il turno di: {turn}</i>
        <button onClick={reset}>Reset</button>
      </header>
      {
        state?.map((row, rowIndex) => <div className="row">
          {
            row.map((cell, cellIndex) => 
              <span 
                className={`cell ${getCellClassName(cell)}`}
                onClick={() => handleCellClick({rowIndex, cellIndex})}
              >
                {cell}
              </span>
            )}
        </div>)
      }
    </div>
  </>
}