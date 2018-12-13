import React, { Component } from 'react';

const styles = {
  root: {
    overflow: 'hidden',
    position: 'absolute',
    top: '60px',
    left: '60px',
    bottom: 0,
    right: 0
  },
  convos: {
    overflowY: 'scroll',
    overflowX: 'hidden',
    top: '60px',
    left: '60px',
  }
}

class Inbox extends Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.convos}>

        </div>
      </div>
    );
  }
}

export default Inbox;
