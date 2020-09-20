import React, {Component} from 'react';
import './Card.css'
class Card extends Component {
  render(){
    const profile = this.props;
    return(
      <div className="github-profile">
        <img src={profile.avatar_url} alt="avatar"/>
        <div className="info">
            <div className="name">{profile.name}</div>
            <div>{profile.bio}</div>
            <div>{profile.location}</div>
        </div>
      </div>
    )
  }
}

export default Card;