import React from 'react'

export default function Blog(props) {

    const data = props.data;
    const content = data.map((data1) => (
            <div key={data1.id}>
                <h1>{data1.subject}</h1>
            </div>
        ) 
    );
  return (
    <div>
      {content}
    </div>
  )
}
