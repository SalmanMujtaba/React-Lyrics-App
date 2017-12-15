import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import SongList from './components/songlist';
import App from './components/app';
import CreateSong from './components/createsong';
import SongDetail from './components/songdetail';
import './style/style.css';


//Assumes the localhost:4000/graphql endpoint
const client = new ApolloClient({});

const Root = () => {
  
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}/>
          <Route path="/songs/new" component={CreateSong}/>
          <Route path="/songs/:id" component={SongDetail}/>
        </Route>
      </Router>
    </ApolloProvider>  
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
