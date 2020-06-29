import React, { Component } from 'react';
class Form extends Component {
    state = { 
        amount: '',
        term: ''
     }
     handleSubmit = (e) => {
e.preventDefault();
//read the values from the state
const {amount, term} = this.state;
//pass this data to the main componen app.js
this.props.loanInformation(amount, term);
     }
    handleChange = (e) => {
       //read form data
       const { name, value } = e.target;
       //update the state
       this.setState({
           [name] : Number(value)
       })
    }
    validateForm = () => {
const {amount, term} = this.state;
const notValid = !amount || !term;
return notValid;
    }
    render() { 
//extract contents from the state
const {amount} = this.state;


        return (  
            <form onSubmit={this.handleSubmit}>
                <div>
        <label>Amount {this.props.loanInformation}</label>
                    <input 
                    onChange={this.handleChange}
                    name="amount" className="u-full-width" type="number" placeholder="Ex: 3000" />
                </div>
                <div>
                    <label>Months to repay</label>
                    <select 
                    onChange={this.handleChange}
                    name="term" className="u-full-width">
                    <option value="">Select</option>
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    </select>
                </div>
                <div>
                    <input 
                    disabled = { this.validateForm() }
                    type="submit" value="Calculate" className="u-full-width button-primary" />
                </div>
            </form>
        );
    }
}
 
export default Form;