import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
   const [currentSum, setCurrentSum] = useState(0);
   const [clear, setClear]= useState(false);

   useEffect(()=>{
    document.querySelector('#result').value=""
  }, [])

  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

   const Add = (e) => {
     e.preventDefault();
     if(clear) setClear(false);
     let currentNum= document.querySelector('#num').value;
     if(currentNum === '')
     return;
     let sum = currentSum+parseInt(currentNum);
     setCurrentSum(sum);
     document.querySelector('#num').value= " ";
   }

   const Clear = (e) => {
     e.preventDefault();
     console.log('sum:', currentSum);
     document.querySelector('form').reset();
     setClear(true);
     setCurrentSum(0);
   }

  return (
    <div className="App">
      <header className="App-title">
        <h1>Calculator</h1>
      </header>
      <form className="App-form">
          <label>
            Answer:
          <input type="text" id="result" value={currentSum} readOnly/>
          </label>
          <label>
            Number:
          <input type="text" id="num" placeholder="Enter a number"/>
          </label>
          <button onClick={Add}>Add</button>
          <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;
