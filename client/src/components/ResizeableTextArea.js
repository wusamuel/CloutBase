import React from 'react';

let styles = {
  resize: 'none',
  fontFamily: 'Lato',
  border: 'none',
  boxShadow: 'none',
  fontSize: '15px'
}

class ResizeableTextArea extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       value: '',
       rows: 1,
       minRows: 1,
       maxRows: 4,
     }

     this.handleChange = this.handleChange.bind(this);
     this.keyPress = this.keyPress.bind(this);
  }

  handleChange(event) {
    const textareaLineHeight = 15;
    const { minRows, maxRows } = this.state;

    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    } else {
      event.target.rows = currentRows;
    }

    this.setState({
      value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });

    if (this.props.onChange) this.props.onChange();
  }

  keyPress(e){
     if(e.keyCode == 13){
       if(!e.shiftKey) {
         e.preventDefault();
         this.props.onEnter(this.state.value);
         this.composeField.value = '';
         this.setState({
           value: null,
           rows: this.state.minRows
         });
         this.handleChange(e);
         return false;
       }
     }
  }

  render() {
    return (
      <textarea
        class="textarea"
        style={styles}
        ref={el => this.composeField = el}
        onChange={this.handleChange}
        onKeyDown={this.keyPress}
        style={Object.assign(styles, this.props.style)}
        placeholder={this.props.placeholder}
        rows={this.state.rows}/>
    )
  }
}

export default ResizeableTextArea;
