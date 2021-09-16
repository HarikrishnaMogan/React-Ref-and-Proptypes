import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Counter from "./counter";
import Appfunc from "./Appfunc";
import Example from "./proptypes";


ReactDOM.render(
  <>
  <Appfunc/>
  <Example name={"Hari"} age={24} country={"Am"} gender={"male"} />
  </>,
  document.getElementById('root')
);


