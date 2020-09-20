import React, {Component} from 'react';
import './App.css';
import CardList from './containers/CardList';
import Form from './components/Form/Form'
class App extends Component {
 state={
      profiles: []
    }
  
  addNewProfile = (profileData) => {
    //console.log('App', profileData)
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  render(){
    
    return(
      <div>
        <div className="header">
        {this.props.title}
        </div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
      
    )
  }
}

export default App;
