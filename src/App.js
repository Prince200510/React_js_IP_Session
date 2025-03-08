import React,{ createContext, useContext } from 'react';
import './App.css';
import Chatcontainer from './component/Hooks/useEffect/Chatcontainer';
// import Index from './component/Clock.js';
// import LoginController from './component/LoginController.js';
// import Blog from './component/Blog.js';
// import Counter from './component/Counter.js';
// import String from './component/Hooks/String';
// import Reducer from './component/Hooks/Reducer';
// import Form from './component/Hooks/context/Form';

// export const ThemeContext = createContext({value: 'lights'});


function App() {
  return (
    <>
    <div class="parent">
      <div class="child">
        {/* <Index date></Index> */}
        {/* <LoginController></LoginController> */}
        {/* <Blog data={[{id: 1, subject: "C++"}, {id: 2, subject: "Python"}]}></Blog> */}
        {/* <Counter></Counter> */}
        {/* <String></String> */}
        {/* <Reducer></Reducer> */}
        {/* <ThemeContext.Provider>
          <Form></Form>
        </ThemeContext.Provider> */}
        <Chatcontainer></Chatcontainer>
      </div>
    </div>
    </>
  );
}

export default App;
