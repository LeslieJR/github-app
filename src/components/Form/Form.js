import React, {Component} from 'react';
import axios from 'axios';
import './Form.css'
class Form extends Component{
 
    state={
        userName: ''
    }
    handleSubmit= async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(response.data);
        console.log(response.data)
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