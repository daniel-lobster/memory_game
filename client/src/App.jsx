import React, {useState, useEffect} from 'react';
import './App.css';
import io from 'socket.io-client';

function App() {
  const [socket] = useState(()=> io ('http://localhost:8000'));
  //const [time, setTime] = useState('fetching');
  const [card1 , setCard1] = useState(true);
  const [card2 , setCard2] = useState(true);
  const [card3 , setCard3] = useState(true);
  const [card4 , setCard4] = useState(true);
  const [card5 , setCard5] = useState(true);
  const [card6 , setCard6] = useState(true);
  const [card7 , setCard7] = useState(true);
  const [card8 , setCard8] = useState(true);
  const [card9 , setCard9] = useState(true);
  const [card10 , setCard10] = useState(true);
  const [card11 , setCard11] = useState(true);
  const [card12 , setCard12] = useState(true);


  useEffect(()=>{
    console.log('Is this running?');
    socket.on('connect', ()=>{
      console.log(socket.id)
    
    });
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })

    socket.on('card1', (card1Master) => setCard1(card1Master));
    socket.on('card2', (card2Master) => setCard2(card2Master));
    socket.on('card3', (card3Master) => setCard3(card3Master));
    socket.on('card4', (card4Master) => setCard4(card4Master));
    socket.on('card5', (card5Master) => setCard5(card5Master));
    socket.on('card6', (card6Master) => setCard6(card6Master));
    socket.on('card7', (card7Master) => setCard7(card7Master));
    socket.on('card8', (card8Master) => setCard8(card8Master));
    socket.on('card9', (card9Master) => setCard9(card9Master));
    socket.on('card10', (card10Master) => setCard10(card10Master));
    socket.on('card11', (card11Master) => setCard11(card11Master));
    socket.on('card12', (card12Master) => setCard12(card12Master));


    //socket.on('time', (data)=>setTime(data))
    //socket.on('disconnect',()=>setTime('server disconnected'))
    //socket.on("welcome", data => console.log(data));
    //return () => socket.disconnect(true);

  },[]);
  
  const card1Function = ()=>{
    socket.emit('card1');
  };

  const card2Function = ()=>{
    socket.emit('card2');
  };

  const card3Function = ()=>{
    socket.emit('card3');
  };

  const card4Function = ()=>{
    socket.emit('card4');
  };

  const card5Function = ()=>{
    socket.emit('card5');
  };

  const card6Function = ()=>{
    socket.emit('card6');
  };

  const card7Function = ()=>{
    socket.emit('card7');
  };

  const card8Function = ()=>{
    socket.emit('card8');
  };

  const card9Function = ()=>{
    socket.emit('card9');
  };

  const card10Function = ()=>{
    socket.emit('card10');
  };

  const card11Function = ()=>{
    socket.emit('card11');
  };

  const card12Function = ()=>{
    socket.emit('card12');
  };


  return (
    <div className="App">
      <h1>Memory King</h1>
      <div style ={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style ={{width:'300px', marginRight:'200px'}}>
          <h2>Instructions:</h2>
          <h3>1. You can flip one card with one click.</h3>
          <h3>2. Flip only 2 cards at a time.</h3>
          <h3>3. If the two cards are the same, keep them facing up and give yourself a point. Otherwise flip them back.</h3>
          <h3>4. The website is only socket.io, there is no logic keeping track of scores or enforcing rules.</h3>
        </div>
        <table>
          <tr>
            <td>
            {card1?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card1Function}>1</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'black', color: 'white', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card1Function}>🌍</div>
            }
            </td>
            <td>
            {card2?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card2Function}>2</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'green', color: 'white', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card2Function}>🤑</div>
            }
            </td>
            <td>
            {card3?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card3Function}>3</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'light-blue', color: 'white', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card3Function}>🦞</div>
            }
            </td>
            <td>
            {card4?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card4Function}>4</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'purple', color: 'white', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card4Function}>🧙</div>
            }
            </td>
          </tr>
          <tr>
            <td>
            {card5?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card5Function}>5</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'red', color: 'black', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card5Function}>😈</div>
            }
            </td>
            <td>
            {card6?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card6Function}>6</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'fuchsia', color: 'black', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card6Function}>🖖</div>
            }
            </td>
            <td>
            {card7?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card7Function}>7</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'light-blue', color: 'white', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card7Function}>🦞</div>
            }
            </td>
            <td>
            {card8?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card8Function}>8</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'purple', color: 'white', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card8Function}>🧙</div>
            }
            </td>
          </tr>
          <tr>
            <td>
            {card9?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card9Function}>9</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'red', color: 'black', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card9Function}>😈</div>
            }
            </td>
            <td>
            {card10?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card10Function}>10</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'fuchsia', color: 'black', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card10Function}>🖖</div>
            }
            </td>
            <td>
            {card11?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card11Function}>11</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'black', color: 'white', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card11Function}>🌍</div>
            }
            </td>
            <td>
            {card12?
            <div style ={{backgroundColor:'NavajoWhite', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card12Function}>12</div>:
            <div style ={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'green', color: 'white', width:'100px', padding:'50px', fontSize:'100px'}} onClick={card12Function}>🤑</div>
            }
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
