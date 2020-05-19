import React , {Component} from 'react';
import Ninja from './Ninja';
import ShowSpin from './ShowSpin';
class App extends Component {
  state = {
    ninja_data : [
      {name: 'rahim',age: '32',eye:'blue'},
      {name: 'jasim',age: '29',eye:'green'},
      {name: 'sloel',age: '14',eye:'black'}
    ]
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Ninja params={this.state.ninja_data}/>
          <ShowSpin />
        </header>
      </div>
    )
  }
}


export default App;

