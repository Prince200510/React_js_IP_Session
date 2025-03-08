import React, {useState} from 'react'

export default function String() {
    const [string, setstring] = useState('');
  return (
    <div>
      <input type='text' value={string} onChange={(e) => setstring(e.target.value)}></input>
      <h1>{string}</h1>
    </div>
  )
}
