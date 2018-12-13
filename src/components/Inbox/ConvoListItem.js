import React from 'react';

const styles = {
  name: {
    fontWeight: 'bold'
  },
  lastMessage: {

  }
}

const ConvoListItem = ({ name, lastMessage }) => (
  <div>
    <div style={styles.name}>{name}</div>
    <div style={styles.lastMessage}>{lastMessage}</div>
  </div>
)

export default ConvoListItem;
