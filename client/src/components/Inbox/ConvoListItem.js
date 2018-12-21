import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    padding: '15px',
    width: '100%'
  },
  name: {
    fontSize: '15px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#4a4a4a'
  },
  lastMessage: {
    fontSize: '13px',
    color: 'rgb(153, 153, 153)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  selected: {
    cursor: 'pointer',
    backgroundColor: '#F2F2F2'
  }
}

const ConvoListItem = ({ id, name, lastMessage, isSelected }) => (
  <Link to={"/inbox/t/" + id}>
    <div className="convolist-item" style={Object.assign({}, styles.root, isSelected? styles.selected: {})}>
      <div style={styles.name}>{name}</div>
      <div style={styles.lastMessage}>{lastMessage}</div>
    </div>
  </Link>
)

export default ConvoListItem;
