import React,{ createContext, useContext } from 'react';
import './App.css';
// import Index from './component/Clock.js';
// import LoginController from './component/LoginController.js';
// import Blog from './component/Blog.js';
// import Counter from './component/Counter.js';
// import String from './component/Hooks/String';
// import Reducer from './component/Hooks/Reducer';
// import Chatcontainer from './component/Hooks/useEffect/Chatcontainer';
// import Form from './component/Hooks/context/Form';
// import MemoApp from './component/Hooks/useMemo/MemoApp';
import CallBackApp from './component/Hooks/useCallback/CallBackApp';

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
        {/* <Chatcontainer></Chatcontainer> */}
        {/* <MemoApp></MemoApp> */}
        <CallBackApp></CallBackApp>
      </div>
    </div>
    </>
  );
}

export default App;
