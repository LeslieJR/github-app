import React from 'react';
import Card from '../components/Card/Card'

const CardList = (props) => (
    
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        
    </div>
);

export default CardList;