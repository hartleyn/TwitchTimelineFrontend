import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function UserDisplay(props) {
  return (
    <div className='userDisplay'>
      <Paper className='userDisplayPaper'>
        <Grid
          container
          justify='space-evenly'
          alignItems='center'
        >
          <Grid item xs={3}>
            <h2>{props.user['to_name']}</h2>
          </Grid>
          <Grid item xs={3}>
            <p>{props.user['followed_at']}</p>
          </Grid>
          <Grid item xs={6}>
            <p>{props.user['follow_duration']}</p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default UserDisplay;
