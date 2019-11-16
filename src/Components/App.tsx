import React, {FC} from 'react';
import { ApolloProvider } from "react-apollo";
import Routes from './Routes/Routes';
import '../Assets/Scss/App.scss'
import {client} from '../Helpers/apolloClient';
 
const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
