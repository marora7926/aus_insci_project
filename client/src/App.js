import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutAusInsci from './pages/AboutAusInsci';
// import AusInsci2018 from './pages/about-subpages/AusInsci2018';
import Partners from './pages/Partners';
import Results from './pages/Results';
import GetInvolved from './pages/GetInvolved';
// import HtmlData from './pages/HtmlData';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
// import ContentContainer from "./components/contentContainer";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Navbar />
          <Switch>
            {/* <Route exact path='/' component={AusInsci2018} /> */}
            <Route exact path='/' component={AboutAusInsci} />
            <Route exact path='/partners' component={Partners} />
            <Route exact path='/results' component={Results} />
            <Route exact path='/involved' component={GetInvolved} />
            {/* <Route exact path='/htmldata' component={HtmlData} /> */}
            <Route exact path='/search' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
          {/* <ContentContainer /> */}
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;