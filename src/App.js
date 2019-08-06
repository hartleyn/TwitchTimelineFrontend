import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      followedUsers: [],
      baseUrl: 'http://localhost:5000',
    }

    this.fetchFollowedUsers = this.fetchFollowedUsers.bind(this);
    this.calculateFollowTimespan = this.calculateFollowTimespan.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log('yes');
  }

  fetchFollowedUsers() {
    const username = document.getElementById('usernameInput').value;
    axios.get(`${this.state.baseUrl}/timeline/${username}`)
      .then(res => {
        console.log(res);
        this.setState({
          followedUsers: res.data.data.follow_list,
        });
      })
      .catch(error => console.error(error));
  }

  calculateFollowTimespan(dateString) {
    const date = dateString.split('T');
    const followDate = date[0].split('-');
    const month = Number(followDate[1]) - 1;
    const followTime = date[1].split(':');
    const seconds = followTime[2].slice(0, 2);
    const msPerDay = 24 * 60 * 60 * 1000;
    const followed = new Date(followDate[0], month, followDate[2], followTime[0], followTime[1], seconds);
    const now = new Date();
    const numberOfDays = (now.getTime() - followed.getTime()) / msPerDay;
    return numberOfDays;
  }

  render() {
    const followedUsers = this.state.followedUsers.map(user => (
      <tr key={user['to_id']}>
        <td>{user['to_name']}</td>
        <td>{user['followed_at']}</td>
        <td>{this.calculateFollowTimespan(user['followed_at'])} days</td>
      </tr>
    )); 
    return (
      <div className="App">
        <input id='usernameInput' placeholder='Username' type='text' />
        <button id='submitUsernameForm' onClick={this.fetchFollowedUsers}>Submit</button>
        <table>
          <tbody>
            {followedUsers}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
