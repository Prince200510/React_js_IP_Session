// import React from 'react'

// export default function Index(props) {
//   return (
//     <div>
//       <p>Hello</p>
//       <h1>{props.date.toLocaleTimeString()}</h1>
//     </div>
//   )
// }


import React, { Component } from 'react'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    // console.log("Test");
    this.setState({date: new Date()})
  }

  render() {
    return (
      <div>
        <h1>Timer:</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
