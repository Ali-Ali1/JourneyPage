import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';
import moment from 'moment';

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null
      
    };
  }
  render() {

    const { notes, classes, selectedNoteIndex, selectedNote, status } = this.props;

    if(notes) {
      return(
        <div className={classes.sidebarContainer} style={{marginBottom: '15rem'}}>
          <Button
            onClick={this.newNoteBtnClick}
            className={classes.newNoteBtn}>{this.state.addingNote ? 'Cancel' : 'Enter Issue'}</Button>
            {
              this.state.addingNote ? 
              <div>
                <input type='text'
                  className={classes.newNoteInput}
                  placeholder='ISSUE name (Limit: 8 char) ... '
                  maxLength="8"
                  onKeyUp={(e) => this.updateTitle(e.target.value)}>
                </input>
                <Button 
                  className={classes.newNoteSubmitBtn}
                  onClick={this.newNote}>Submit ISSUE</Button>
              </div> :
              null
            }
            <List>
              {
                notes.map((_note, _index) => {
                  return(
                    <div key={_index}>
                      
                      <SidebarItemComponent
                        _note={_note}
                        _index={_index}
                        selectedNote={selectedNote}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={this.selectNote}
                        deleteNote={this.deleteNote}
                        status={status}
                        >
                      </SidebarItemComponent>
                      
                      
                      <Divider></Divider>
                    </div>
                  )
                })
              }
            </List>
            
            <hr />
            
        </div>
      );
    } else {
      return(<div></div>);
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  }
  updateTitle = (txt) => {
    this.setState({ title: txt });
  }
  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  }
  selectNote = (n, i) => this.props.selectNotes(n, i);
  deleteNote = (note) => this.props.deleteNote(note);
  
  timeStampF = () => "Time";
}

export default withStyles(styles)(SidebarComponent);