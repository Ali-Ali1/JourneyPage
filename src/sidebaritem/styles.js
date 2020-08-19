const styles = theme => ({
  listItem: {
    cursor: 'pointer'
  },
  textSection: {
    
    maxWidth: '85%',

  },  
  deleteIcon: {
    position: 'absolute',
    right: '5px',
    top: 'calc(50% - 15px)',
    '&:hover': {
      color: 'red'
    }
  },
  checkCircleSharpIcon: {
    fontSize: '30px',
    position: 'absolute',
    right: '50px',
    top: 'calc(48% - 15px)',
    '&:hover': {
      color: 'green'
    }
  },
  chevronRightIcon: {
    fontSize: '50px',
    position: 'absolute',
    left: '110px',
    top: 'calc(20% - 15px)',
    '&:hover': {
      color: 'grey'
    }
  },
  timeSlot: {
    fontSize: '15px',
    position: 'relative',
    left: '160px',
    top: 'calc(95% - 15px)',
    color: 'grey'
  },
  stateIndicator: {
    fontSize: '20px',
    position: 'relative',
    left: '160px',
    top: 'calc(95% - 15px)',
    color: 'grey'
  },

  CheckCircleOutlineIcon: {
    fontSize: '30px',
    position: 'absolute',
    right: '50px',
    top: 'calc(50% - 17px)',
    '&:hover': {
      color: 'green'
    }
  }

});

export default styles;