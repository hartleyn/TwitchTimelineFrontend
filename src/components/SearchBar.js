import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const SearchBar = (props) => {
  return (
    <div>
      <Grid
        container
        justify="center"
      >
        <Grid item xs={12} sm={9} md={6}>
          <TextField
            id='usernameInput'
            label='Username'
            margin='normal'
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchBar;
