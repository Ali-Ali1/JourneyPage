import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { removeHTMLTags } from '../helpers';
import moment from 'moment';

class SidebarItemComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      test: null
    };
  }
  
  componentDidMount = () => {
    if(this.props._note.status === 0){
      this.setState({test: "Pending ..."})
    } else if(this.props._note.status === 1){
      this.setState({test: "Done ..."})
    }
  }



  

  render() {

    const { _index, _note, classes, selectedNoteIndex, selectedNote} = this.props;

    return(
      <div key={_index}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          alignItems='flex-start'>
            <div 
              className={classes.textSection}
              onClick={() => {
                
                this.selectNote(_note, _index)}}>
                <ListItemText
                  primary={_note.title}
                  secondary={removeHTMLTags(_note.body.substring(0, 15)) + ' ...'}
                  
                  
                  ></ListItemText>
                 <span className={classes.stateIndicator}><small> <strong>{this.state.test}</strong></small></span> 
                 
            </div>
            
            <DeleteIcon onClick={() => this.deleteNote(_note)}
              className={classes.deleteIcon}></DeleteIcon>
            
            <ChevronRightIcon onClick={() => this.selectNote(_note, _index)} 
              className={classes.chevronRightIcon}></ChevronRightIcon> 
            
            <CheckCircleOutlineIcon onClick={() => this.setStatustoDone() }className={classes.CheckCircleOutlineIcon}></CheckCircleOutlineIcon>
            
            

        </ListItem>


      </div>
    );
  }
  selectNote = (n, i, t) => {
    this.props.selectNote(n, i, t);
    

  };
  deleteNote = (note) => {
    if(window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  };
  showMe = () => "Hello";
  timeDate = () => `Time: ${this.props._note.timestamp.toDate().toString()}`;

  setStatustoDone = () => {
    //this.props._note.status === "Pending ..." ? console.log("Issue Taken Care of!!!", this.props._note.status): console.log("Not Done!")
    //this.state.test === "Testing ..." ? this.setState({test: "Done Deal ..."}) : null
    alert("Click on the 'Checkicon' again if you want to set it back to pending!");
    //this.props._note.status === 0 ? this.setState({test: "Done ..."}): this.setState({test: "Pending ..."})
    if(this.props._note.status === 0){
      this.setState({test:"Done ..."})
    }else if(this.state.test === "Done ..."){
      this.setState({test: "Pending ..."})
    }
    //this.pros._note.status === "Pending ..." ? console.log(this.props._note.status) : null  
    };

}

export default withStyles(styles)(SidebarItemComponent);