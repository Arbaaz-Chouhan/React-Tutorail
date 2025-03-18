// import logo from './logo.svg';
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import Greet from "./components/Greet";
// import UseStat from "./components/useStat";
// import FunctionClick from "./components/functionClick";
// import ParentComponent from './components/ParentComponent';
// import ListRendering from './components/List-Rendering';
// import StylesSheet from './components/StylesSheet';
// import "./appStyle.css"
// import styles from "./appStyle-modul.css"
// import SimpleForm from "./components/Form"
// import FragmentExample from './components/Fragments';
// import MainUseContext from './components/MainUseContext';
// import GetRequest from './http/GetRequest';
// import PostRequest from './http/axios-post-request';
// import MyComponent from './components/useRef';
// import UseEffectFn from './Hooks/useEffect';
// import Counter from "./Hooks/useReducer"
// import FetchDataComponent from './Hooks/Fetching-data-with-useReducer';
// import UseCallbackA from './Hooks/useCallback/useCallbackA';

import ComponetA from './Hooks/useReducer-&-useContext/ComponetA';
import ComponetB from './Hooks/useReducer-&-useContext/ComponetB';
import ComponetC from './Hooks/useReducer-&-useContext/ComponetC';
import UseMemo from './Hooks/useMemo';
import DocTitleOne from './Hooks/Custom-Hook/DocTitleOne';
import DocTitleTwo from './Hooks/Custom-Hook/DocTitleTwo';
import Parent from './Render/Parent';
import HomePage from './Router Dom/home-page';
import Aboutpage from './Router Dom/about-page';
import ContcatPage from './Router Dom/contact-page';
import ArrayUseState from "./Hooks/useState/usetState-with-array"
import ObjectUseState from "./Hooks/useState/useState-with-obj"

export const CountContext = React.createContext();
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* < CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      count - {count.count} 
        <ComponetA />
        <ComponetB />
        <ComponetC />
      </CountContext.Provider>
      <FetchDataComponent/> */}
      {/* <UseCallbackA/> */}
      {/* <UseMemo/> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <Counter /> */}
      {/* <Parent /> */}
      {/* <MyComponent /> */}
      {/* < UseEffectFn /> */}
      {/* <MainUseContext/> */}
      {/* <GetRequest /> */}
      {/* <PostRequest /> */}
      {/* <FragmentExample /> */}
      {/* <SimpleForm/> */}
      {/* <h1 className='error'>Errors</h1> */}
      {/* <h1 className ={styles.success} >Success</h1> */}
      {/* <StylesSheet /> */}
      {/* <ListRendering /> */}
      {/* <ParentComponent/> */}
      {/* <FunctionClick /> */}
      {/* <Greet name="Arbaaz"> */}
      {/* <p>hello everyOne</p> */}
      {/* </Greet> */}
      {/* <Greet name="Adnan" /> */}
      {/* <Greet name="fayyaz" /> */}
      {/* <UseStat/>  */}
      {/* <ArrayUseState/> */}
      <ObjectUseState/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<Aboutpage />} />
        <Route path="/contact-page" element={<ContcatPage />} />
      </Routes>



    </div>
  );
}

export default App;
