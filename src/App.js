import React from 'react';
import './App.css';
// import Index from './component/Clock.js';
// import LoginController from './component/LoginController.js';
// import Blog from './component/Blog.js';
// import Counter from './component/Counter.js';
import String from './component/String';

function App() {

  return (
    <>
    <div class="parent">
      <div class="child">
        {/* <Index date></Index> */}
        {/* <LoginController></LoginController> */}
        {/* <Blog data={[{id: 1, subject: "C++"}, {id: 2, subject: "Python"}]}></Blog> */}
        {/* <Counter></Counter> */}
        <String></String>
      </div>
    </div>
    </>
  );
}

export default App;
