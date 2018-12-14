import React from 'react';

const styles = {
  wrap: {
    clear: 'both'
  },
  bubble: {
    marginTop: '5px',
    fontSize: '15px',
    maxWidth: '80%',
    display: 'table-cell',
    borderRadius: '25px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  senderIsSelf: {
    color: 'white',
    backgroundColor: '#7683F4',
    float: 'right',
    marginRight: '20px'
  },
  senderIsOther: {
    marginLeft: '20px',
    float: 'left',
    backgroundColor: '#F2F2F2',
  }
}

const MessageView = ({ text, senderIsSelf }) => (
  <div style={styles.wrap}>
    <div style={Object.assign({}, styles.bubble, senderIsSelf? styles.senderIsSelf: styles.senderIsOther)}>
      {text}
    </div>
  </div>
)

export default MessageView;
