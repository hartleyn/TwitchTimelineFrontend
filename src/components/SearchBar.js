import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginTop: 60,
    marginBottom: 20,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

const CustomizedInputBase = (props) => {
  const classes = useStyles();
  
  return (
    <Paper className={classes.root}>
      <InputBase
        id='usernameInput'
        className={classes.input}
        placeholder='Enter a Twitch username...'
        inputProps={{ 'aria-label': 'twitch follow list timeline search' }}
      />
      <Divider className={classes.divider} />
      <IconButton 
        color='primary'
        className={classes.iconButton}
        onClick={props.onSubmit}
        aria-label='directions'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default CustomizedInputBase;
