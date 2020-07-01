import React, { Component, Fragment } from 'react'
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import {calculateTotal} from './helper';
import Result from './components/Result';
import Message from './components/Message';
import Spinner from './components/Spinner';

class App extends Component {
  state = {
    total: '',
    amount: '',
    term: '',
    loading: false
  }
  loanInformation = (amount, term) => {
    const total = calculateTotal(amount, term);
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => {
      this.setState({
        amount,
        total,
        term,
        loading: false
      })
    }, 3000)
  } 
    )
  }
  render() {
    const { amount, term, total, loading } = this.state;
// conditional rendering
let component;
if (total === '' && !loading) {
component = <Message />
} else if ( loading ) {
component = <Spinner />
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
