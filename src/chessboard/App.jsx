import React, { useState } from 'react';
import './index.css';

function ChessBoard() {
  const [numRow, setNumRow] = useState(8);
  let board = [];
  const [color1, setColor1] = useState('while');
  const [color2, setColor2] = useState('black');

  const createBoard = () => {
    const newBoard = [];
    for (let i = 0; i < numRow; i++) {
      const row = Array.from({ length: numRow });
      newBoard.push(row);
    }
    board = newBoard;
  };

  const handleNumChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNumRow(value);
    }
    if(isNaN(value)) setNumRow("");
  };

  const chageColor1 = {
    backgroundColor: color1,
  };

  const changeColor2 = {
    backgroundColor: color2,
  };
  createBoard();
  return (
    <div style={{marginLeft:20}}>
      <div>
        <div className="input-wrapper">
          <p style={{justifyContent:'left', marginBottom:10, marginTop:10}}>Chess Broad</p>
          <input type='number' value={numRow} onChange={handleNumChange} />
        </div>
        <div className="input-wrapper">
          <input type="color" defaultValue="#FFFFFF" onChange={(e) =>setColor1(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <input type="color" defaultValue="#000000"  onChange={(e) =>setColor2(e.target.value)} />
        </div>
      </div>
        <div>
          {board.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((col, colIndex) => (
                <div 
                  className="chess"
                  style={
                    (rowIndex + colIndex) % 2 === 0 ? chageColor1 : changeColor2
                  }
                  key={colIndex}
                ></div>
              ))}
            </div>
          ))}
        </div>
    </div>
  );
}

export default ChessBoard;
