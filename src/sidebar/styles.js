const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '20px 20px 20px black'
  },
  
  
  newNoteBtn: {
    borderRadius: '10px',
    width: '85%',
    height: '40px',
    borderBottom: '1px solid black',
    marginLeft: '7%',
    marginTop: '5px',
    backgroundColor: '#23A3A3',
    boxShadow: '0px 0px 2px black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#0AE0E0'
    }
  },
  sidebarContainer: {
    marginTop: '0px',
  
    width: '300px',
    height: '100%',
    boxSizing: 'border-box',
    float: 'left',
    overflowY: 'none',
    overflowX: 'none',
    borderRight: '3px solid gray'
  },
  newNoteInput: {
    width: '100%',
    marginTop: '7px',
    marginBottom: '7px',
    height: '35px',
    outline: 'none',
    border: 'none',
    paddingLeft: '5px',
    '&:focus': {
      outline: '2px solid gray'
    }
  },
  newNoteSubmitBtn: {
    borderRadius: '25px',
    width: '50%',
    marginLeft: '25%',
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: '#09D53D'
    }
  }
});

export default styles;