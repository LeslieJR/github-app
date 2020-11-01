import React, {Component} from 'react';
import axios from 'axios';
import './Form.css'
class Form extends Component{
 
    state={
        userName: ''
    }
    handleSubmit= async (e) => {
        e.preventDefault();
        await axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(resp => this.props.onSubmit(resp.data))
        .catch(err => {
            alert(err)
        })
        
      
        this.setState({
            userName: ''
        })
    }

    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                value={this.state.userName}
                onChange={e=>this.setState({userName: e.target.value})}
                type="text" 
                placeholder="GitHub username" 
                required/>
                <button>Add Card</button>
            </form>
        )
    }
}

export default Form;