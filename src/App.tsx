import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  const [itemsInPersonCart, setItemsInPersonCart] = useState(0);
  const [lines, setLines] = useState([[10, 5, 2],[1],[2],[3],[4]])

  function addPersonToLine(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    let lineWithLeast: number[] | undefined;
    let leastItemsAmount= 1e9;
    
    for(let line of lines){
      const totalInLine = line.reduce((sum, value )=>sum + value, 0);
      console.log(totalInLine)
      if(totalInLine < leastItemsAmount){
        leastItemsAmount = totalInLine;
        lineWithLeast = line;
      }
    }
    
    if(!lineWithLeast) return;

    setLines((prevLines) => 
      prevLines.map((line) => 
      line===lineWithLeast ? [...line, itemsInPersonCart] : line
      )
    );

  }

  return (
    <div className="App">
        <form onSubmit={addPersonToLine}>
          <input 
          required
          value = {itemsInPersonCart} 
          type = "number" 
          onChange={(e)=>setItemsInPersonCart(e.currentTarget.valueAsNumber)}
          ></input>
          <button>CheckOut</button>
        </form>
        <div className='lines'>
        {lines.map((line, index)=>
          <div key={index} className='line'>
            {line.map((numberOfItems, index)=>(
              <div key={index}>{numberOfItems}</div>
            ))}
          </div>
        )}
        </div>
        

    </div>
  )
}

export default App
