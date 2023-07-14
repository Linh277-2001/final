import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [number1, setNumber1] = useState("");
  const [sign, setSign] = useState("");
  const [result, setResult] = useState(""); // Thêm state để lưu kết quả phép tính trước

  const addButton = (val) => setInput(input + val);
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    var tmp = parseFloat(input);
    var res;
    if (sign === "+") {
      res = parseFloat(result) + tmp; // Sử dụng kết quả phép tính trước đó
    } else if (sign === "-") {
      res = parseFloat(result) - tmp;
    } else if (sign === "*") {
      res = parseFloat(result) * tmp;
    } else if (sign === "/") {
      res = parseFloat(result) / tmp;
    }
    setInput(res.toString());
    setResult(res.toString()); // Lưu kết quả phép tính hiện tại
  };

  const handleOperator = (val) => {
    if (input !== "") {
      if (result === "") {
        setResult(input); // Lưu kết quả phép tính đầu tiên
      } else {
        calculateResult(); // Tính toán kết quả với phép tính trước đó
      }
      setNumber1(parseFloat(input));
      setSign(val);
      setInput("");
    }
  };

  return (
    <div className="App" style={{marginLeft:14}}>
      <div className='cal'>
        <h1>Calculator</h1>
        <input className='input' value={input}></input>
        <div className="calc-wrapper">
          <table>
            <tbody>
              <tr>
                <td><button onClick={() => addButton("1")}><p className='btn large'>1</p></button></td>
                <td><button onClick={() => addButton("2")}><p className='btn large'>2</p></button></td>
                <td><button onClick={() => addButton("3")}><p className='btn large'>3</p></button></td>
                <td><button onClick={() => handleOperator("+")}><p className='btn large'>+</p></button></td>
              </tr>
              <tr>
                <td><button onClick={() => addButton("4")}><p className='btn large'>4</p></button></td>
                <td><button onClick={() => addButton("5")}><p className='btn large'>5</p></button></td>
                <td><button onClick={() => addButton("6")}><p className='btn large'>6</p></button></td>
                <td><button onClick={() => handleOperator("-")}><p className='btn large'>-</p></button></td>
              </tr>
              <tr>
                <td><button onClick={() => addButton("7")}><p className='btn large'>7</p></button></td>
                <td><button onClick={() => addButton("8")}><p className='btn large'>8</p></button></td>
                <td><button onClick={() => addButton("9")}><p className='btn large'>9</p></button></td>
                <td><button onClick={() => handleOperator("*")}><p className='btn large'>*</p></button></td>
              </tr>
              <tr>
                <td><button onClick={() => clearInput()}><p className='btn large'>C</p></button></td>
                <td><button onClick={() => addButton("0")}><p className='btn large'>0</p></button></td>
                <td><button onClick={() => handleOperator("/")}><p className='btn large'>/</p></button></td>
                <td><button onClick={() => calculateResult()}><p className='btn large'>=</p></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
