const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 35px)',
    position: 'absolute',
    margin: '10px',
    width: '300px',
    boxShadow: '0px 0px 2px black'
  },
  titleInput: {
    height: '60px',
    boxSizing: 'border-box',
    borderRadius: '15px',
    marginTop: '5px',
    marginLeft:'1%',
    padding: '5px',
    fontSize: '29px',
    width: 'calc(93% - 300px)',
    backgroundColor: '#23A3A3',
    color: 'white',
    paddingLeft: '50px'
  },
  editIcon: {
    position: 'relative',
    left: '60px',
    top: '4px',
    color: 'white',
    width: '40px',
    height: '30x'
  },
  editorContainer: {
    borderLeft: '10px solid grey',
    height: '100%',
    boxSizing: 'border-box'
  },
  createdStamp: {
    color: 'gray',
    marginTop: '3px',
    float: 'right'
  },
  lastUpdatedStamp: {
    color: '#057B7B',
    
  }
  
});

export default styles;