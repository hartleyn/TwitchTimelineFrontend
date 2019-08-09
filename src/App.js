import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import SearchBar from './components/SearchBar';
import UserDisplay from './components/UserDisplay';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false,
      followedUsers: [],
      baseUrl: 'https://api.ttvtimeline.ga',
    }

    this.fetchFollowedUsers = this.fetchFollowedUsers.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log('yes');
  }

  fetchFollowedUsers() {
    this.setState({
      formSubmitted: true,
      followedUsers: [],
    }, () => {
      const username = document.getElementById('usernameInput').value;
      axios.get(`${this.state.baseUrl}/timeline/${username}`)
        .then(res => {
          console.log(res);
          this.setState({
            followedUsers: res.data.data.follow_list,
          });
        })
        .catch(error => console.error(error));
    });
  }

  render() {
    const followedUsers = this.state.followedUsers.map(user => (
      <UserDisplay key={user['to_id']} user={user} />
    )); 
    return (
      <div className="App">
        <Container maxWidth='md'>
          <Grid
            container
            justify='center'
            alignItems='center'
          >
            <Grid item xs={6}>
              <SearchBar onSubmit={this.fetchFollowedUsers} />
            </Grid>
          </Grid>
          {
            (this.state.formSubmitted && this.state.followedUsers.length === 0) ?
            <CircularProgress style={{ marginTop: '60px' }} />
            :
            <div style={{ display: 'None' }}></div>
          }
          {followedUsers}
        </Container>
      </div>
    );
  }
}

export default App;
