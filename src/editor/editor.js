import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import styles from './styles';


const firebase = require('firebase');

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      text: '',
      title: '',
      id: ''
    };
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
      timestamp: this.props.selectedNote.timestamp
    });
  }

  componentDidUpdate = () => {
    if(this.props.selectedNote.id !== this.state.id) {
      this.setState({
        timestamp: this.props.selectedNote.timestamp,
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id
      });
    }
  }

  render() {

    const { classes } = this.props;

    return(
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon}></BorderColorIcon>

        <input
          className={classes.titleInput}
          placeholder='Issue title...'
          value={this.state.title ? this.state.title : ''}
          onChange={(e) => {this.updateTitle(e.target.value)}}
          maxlength='8'>
        </input>
        {
          this.props.selectedNote.timestamp !== null ? <div className={classes.lastUpdatedStamp}>
            <small> <em> Last Updated: {moment(this.props.selectedNote.timestamp.toDate()).calendar()} ... 
            <div className={classes.createdStamp}> <em> Created: {moment(this.props.selectedNote.createdAt.toDate()).calendar()} ... </em></div> </em></small><hr /></div> :
          <small > <br /><em> Just Now </em></small>
        }

        
        <ReactQuill 
          theme="snow"
          value={this.state.text} 
          onChange={this.updateBody}
          placeholder='Add an Issue ...'>

        </ReactQuill>
      </div>
    );
  }
  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };
  updateTitle = async (txt) => {
    await this.setState({ title: txt });
    this.update();
  }
  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text,
      timestamp: this.props.selectedNote.timestamp
    })
  }, 1500);
  
  timeDate = () => `Time:`
}

export default withStyles(styles)(EditorComponent);