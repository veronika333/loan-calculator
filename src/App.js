import React, { Component, Fragment } from 'react'
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import {calculateTotal} from './helper';

class App extends Component {
  state = {
    total: '',
    amount: '',
    term: ''
  }
  loanInformation = (amount, term) => {
    const total = calculateTotal(amount, term);
    this.setState({
      amount,
      total,
      term
    })
  }
  render() {
    return (
      <Fragment>
      <h1>Loan Calculator</h1>
      <div className="container">
      <Form loanInformation={this.loanInformation} />
      </div>
      </Fragment>
    );
  }
}

export default App;
