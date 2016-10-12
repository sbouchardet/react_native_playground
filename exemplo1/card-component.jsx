import React from 'react';

class Card extends React.Component{
  
  render(){
    console.log('rende card');
    return(<div>
      {this.props.name} e {this.props.email}
    </div>);
  }
}

export default Card;
