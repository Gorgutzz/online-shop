import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "bulma/css/bulma.css";

const client = new ApolloClient({
  uri: "<https://api.8base.com/ckhb7wkhw00jf08l92w6u9s05>"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// ReactDOM.render(
//   <Router>
//     <Security
//       issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
//       client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
//       redirect_uri={`${window.location.origin}/implicit/callback`}
//     >
//       <Route path="/" exact component={App} />
//       <Route path="/implicit/callback" component={ImplicitCallback} />
//     </Security>
//   </Router>,
//   document.getElementById('root')
// );
