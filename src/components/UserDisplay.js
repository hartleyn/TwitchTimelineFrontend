import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const UserDisplay = (props) => {
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
            <p>
              {
                (props.user['follow_duration']['years'] !== 0) ? 
                `${props.user['follow_duration']['years']} ${(props.user['follow_duration']['years'] > 1) ? 'years' : 'year'} ` : ''
              }
              {
                (props.user['follow_duration']['months'] !== 0) ? 
                `${props.user['follow_duration']['months']} ${(props.user['follow_duration']['months'] > 1) ? 'months' : 'month'} ` : ''
              }
              {
                (props.user['follow_duration']['days'] !== 0) ? 
                `${props.user['follow_duration']['days']} ${(props.user['follow_duration']['days'] > 1) ? 'days' : 'day'} ` : ''
              }
              {
                (props.user['follow_duration']['hours'] !== 0) ? 
                `${props.user['follow_duration']['hours']} ${(props.user['follow_duration']['hours'] > 1) ? 'hours' : 'hour'} ` : ''
              }
              {
                (props.user['follow_duration']['minutes'] !== 0) ? 
                `${props.user['follow_duration']['minutes']} ${(props.user['follow_duration']['minutes'] > 1) ? 'minutes' : 'minute'} ` : ''
              }
              {
                (props.user['follow_duration']['seconds'] !== 0) ? 
                `${props.user['follow_duration']['seconds']} ${(props.user['follow_duration']['seconds'] > 1) ? 'seconds' : 'second'} ` : ''
              }
            </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default UserDisplay;
