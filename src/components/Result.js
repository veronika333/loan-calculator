import React from 'react';
const Result = (props) => {
console.log(props);
   return ( 
       <div className="u-full-width result" >
           <h2>Results:</h2>
   <p>The loan amount: $ { props.amount }</p>
   <p>The months to repay: { props.term }</p>
   <p>Total payment: $ { props.total }</p>
   <p>Monthly payment: $ { (props.total / props.term).toFixed(2) }</p>
   </div>
     );
}
 
export default Result;