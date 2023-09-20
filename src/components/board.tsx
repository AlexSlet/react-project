import Square from "./square";

interface Board {
  xIsNext: boolean,
  squares: Array<string>,
  onPlay: Function
}

export default function Board({ xIsNext, squares, onPlay }: Board) {

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(index: number) {
    const nextSquares = squares.slice();

    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    
    onPlay(nextSquares);
  }

  function calculateWinner(squares: Array<string>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const squaresList = squares.map((square, index) => {
    return <Square value={squares[index]} onSquareClick={() => handleClick(index)} key={index}/>
  })
  return (
    <>
    <div className="status">{status}</div>
      <div className="board">
        {squaresList}
      </div>
    </>
  );
}
