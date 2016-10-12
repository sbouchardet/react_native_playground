import React from 'react';
import Card from './card-component.jsx';
//Aqui eu crio meu componente
class InputForm extends React.Component{
  constructor() {
    super();
    this.state={
      name:"",
      email:"",
    }
    this.setInfo=this.setInfo.bind(this);
    this.setCard = this.setCard.bind(this);
  }

  setInfo() {
    var name_form = document.getElementById('InputForm-name').value;
    var email_form = document.getElementById('InputForm-email').value;
    this.setState({
      name:name_form,
      email:email_form,});

  }

setCard(){

  return (<Card name={this.state.name} email={this.state.email} />);
}
  render() {
    return (<div>
      Name:<input type="text" id="InputForm-name" /> <br></br>
      email: <input type="text" id="InputForm-email" /><br></br>
    <button onClick={this.setInfo} >submit</button>
    <Card name={this.state.name} email={this.state.email} />
    </div>);
    }
}
export default InputForm;
