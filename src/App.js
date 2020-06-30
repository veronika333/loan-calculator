import React, { Component, Fragment } from 'react'
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import {calculateTotal} from './helper';
import Result from './components/Result';
import Message from './components/Message';

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
    const { amount, term, total } = this.state;
// conditional rendering
let component;
if (total === '') {
component = <Message />
} else {
component = <Result amount={amount} term={term} total={total} />
}
    return (
      <Fragment>
      <h1>Loan Calculator</h1>
      <div className="container">
      <Form loanInformation={this.loanInformation} />
      <div className="messages">
      {component}
      </div>
      </div>
      
      </Fragment>
    );
  }
}

export default App;
