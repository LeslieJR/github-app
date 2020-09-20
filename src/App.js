import React, {Component} from 'react';
import './App.css';
import Card from './components/Card'
class App extends Component {
  render(){
    return(
      <div>
        <div className="header">
        {this.props.title}
        </div>
        <Card/>
      </div>
      
    )
  }
}

export default App;
