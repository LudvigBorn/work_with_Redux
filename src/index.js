import React from 'react';
import ReactDOM from "react-dom/client";
//import App from './App';
import { legacy_createStore as createStore , bindActionCreators} from "redux";
//import {inc,dec,rnd} from "./actions";
//import * as actions from './actions'
import reducer from './reducer';
import App from './components/App';
import { Provider } from "react-redux";

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>


  </React.StrictMode>
);





//const {dispatch,subscribe,getState} = store;


// const update = () => {
//   document.getElementById('counter').textContent = getState().value
// }

// const bindActionCreator = (creator,dispatch) => (...args)=> {
//   dispatch(creator(...args))
// }

//#1
// const incDispatch = bindActionCreators(inc,dispatch)
// const decDispatch = bindActionCreators(dec,dispatch)
// const rndDispatch = bindActionCreators(rnd,dispatch)

//#2
// const { incDispatch,decDispatch,rndDispatch} = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd,
//   },
//   dispatch
// );

// document.querySelector('#inc').addEventListener('click', incDispatch)
// document.querySelector("#dec").addEventListener("click", decDispatch);
// document.querySelector("#rnd").addEventListener("click", () => {
//   const value = Math.floor(Math.random() * 10)
//   rndDispatch(value);
// });

//const { inc, dec, rnd } = bindActionCreators(actions,dispatch);


{/* <Counter
  counter={getState().value}
  inc={inc}
  dec={dec}
  rnd={() => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
  }}
/>; */}