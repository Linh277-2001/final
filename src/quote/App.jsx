import React, { useState, useEffect } from 'react';
import { Card, List, notification } from 'antd';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [numQuote, setNumQuote] = useState('');
  const [initialFetch, setInitialFetch] = useState(false);

  useEffect(() => {
    if (initialFetch) {
      fetchQuotes();
    } else {
      setInitialFetch(true);
    }
  }, []);

  const changeNum = () => {
    const num = parseInt(numQuote);
    if (!isNaN(num) && num > 0) {
      setNumQuote(num);
      fetchQuotes();
    }
  };
  

  const fetchQuotes = async () => {
    try {
      const response = await fetch('http://localhost:3000/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num: numQuote }),
      });

      const data = await response.json();

      if (data && data.length > 0) {
        setQuotes(data);
      }
    } catch (error) {
      console.error('Error fetching quotes:', error);
      showConnectionErrorNotification();
    }
  };

  const handleNumChange = (event) => {
    setNumQuote(event.target.value);
  };

  const showConnectionErrorNotification = () => {
    notification.info({
      message: 'Notification',
      description: 'Bạn chưa đăng nhập, không lấy được Quote',
      placement: 'top',
    });
  };

  return (
    <div className="App">
      <h1>Random Quote</h1>
      <div>
        <input className="inputNum" value={numQuote} onChange={handleNumChange} />
        <button className="btnRandom" onClick={changeNum}>
          Random
        </button>
      </div>
      <div className="contentQuote">
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={quotes}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.author}>{item.quote}</Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default App;
