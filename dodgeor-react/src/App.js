import React, { Component } from 'react';
import World from './features/world'

//jsx


class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id = "container">
       <World  />
       <canvasA
       /> 
      </div>
    )
  }
}
export default Canvas

/*
class App extends Component {
  render() {
    return(
      <div> 
        <World /> 
      </div>
    )
  }
}
*/


//export default App;
