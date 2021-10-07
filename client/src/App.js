import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo' 

import logo from './spacex-logo.png';
import './App.css';
import Launches from './components/Launches';



const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="" style={{ width:340, display:'block',padding:20, margin:'auto'}}/>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
