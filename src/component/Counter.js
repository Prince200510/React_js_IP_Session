import React, { useState } from 'react'

export default function Counter() {
    const [counter, setcounter] = useState(0);

    function increment() {
        setcounter(counter + 1);
    }
  return (
    <div>
      <button onClick={increment}>you pressed me {counter}</button>
    </div>
  )
}
