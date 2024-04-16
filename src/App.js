import './index.scss';

import React from 'react';

function App() {
 //  let count = 0;
  const [count, setCount] = React.useState(0)

  const onClickPlus = () => {
    setCount(count + 1); 
  //setCount берет count и прибавляет единицу, сохраняя значение там где count выступает
  }

  const onClickMinus = () => {
    setCount(count - 1); 
  }

  return (
    <div className="App">
      <div>
        <h2>Count:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Minus</button>
        <button onClick={onClickPlus} className="plus">Plus +</button>
      </div>
    </div>
  );
}

export default App;