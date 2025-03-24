import React from 'react';
import { useState } from 'react';


function ComumButton() {
    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicado {count} vezes
    </button>
  );
}

export default ComumButton;