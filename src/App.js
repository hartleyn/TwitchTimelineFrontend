import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import SearchBar from './components/SearchBar';
import UserDisplay from './components/UserDisplay';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false,
      noUserFound: false,
      followedUsers: [],
      baseUrl: 'https://hw1.nicekubes.com',
    }

    this.fetchFollowedUsers = this.fetchFollowedUsers.bind(this);
  }

  componentDidMount() {
    document.getElementById('usernameInput').onkeydown = e => {
      if(e.keyCode === 13 && document.getElementById('usernameInput').value !== '') {
        this.fetchFollowedUsers();
      } 
    };
  }

  handleFilterChange = (e) => {
    if (/^[a-z0-9]+$/i.exec(e.target.value) || e.target.value === '') {
      this.setState({
        filter: e.target.value,
      });
    }
  }

  fetchFollowedUsers() {
    this.setState({
      formSubmitted: true,
      noUserFound: false,
      followedUsers: [],
    }, () => {
      const username = document.getElementById('usernameInput').value;
      axios.get(`${this.state.baseUrl}/v2/timeline/${username}`)
        .then(res => {
          console.log(res);
          this.setState({
            followedUsers: res.data.data.follow_list,
          });
        })
        .catch(error => {
          console.error(error);
          this.setState({
            noUserFound: true,
          });
        });
    });
  }

  render() {
    const followedUsers = this.state.followedUsers.filter(user => {
      const regex = new RegExp(this.state.filter, 'i');
      return regex.exec(user['to_name'])
    })
    .map(user => (
      <UserDisplay key={user['to_id']} user={user} />
    ));
    return (
      <div className="App">
        <Container maxWidth='md'>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
          >
            <Grid item xs={6}>
              <SearchBar onSubmit={this.fetchFollowedUsers} />
            </Grid>
          </Grid>
          {
            (this.state.formSubmitted && this.state.followedUsers.length === 0 && !this.state.noUserFound) ?
            <CircularProgress style={{ marginTop: '60px' }} />
            :
            <div style={{ display: 'None' }}></div>
          }
          {
            (this.state.noUserFound) ?
            <Paper style={{ marginTop: '60px', padding: '10px' }}>No user found.</Paper>
            :
            <div style={{ display: 'None' }}></div>
          }
          {
            (this.state.formSubmitted && this.state.followedUsers.length > 0) ?
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              style={{ marginBottom: '10px' }}
            >
              <Grid item xs={3}>
                <TextField id="filter" label="filter results" type="search" size="small" onChange={this.handleFilterChange} />
              </Grid>
            </Grid>
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
