import React from 'react';
import { connect } from 'react-redux';
import MessageView from './MessageView';

const styles = {
  convoHeader: {
    position: 'absolute',
    top: '50px',
    left: '330px',
    right: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px'
  },
  messages: {
    position: 'absolute',
    overflowY: 'scroll',
    overflowX: 'hidden',
    top: '100px',
    left: '330px',
    bottom: '60px',
    right: 0
  }
}

const ConvoView = ({ id, messageIds, messages, convoName, selfSenderId }) => (
  <div>
    <div style={styles.convoHeader}>
      {convoName}
    </div>
    <div style={styles.messages}>
      {messageIds.map(messageId => <MessageView text={messages[messageId].text} senderIsSelf={messages[messageId].sender_id == selfSenderId}/>)}
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  convoName: state.convoDetails[ownProps.id].name,
  messageIds: state.convoDetails[ownProps.id].messages,
  messages: state.messages,
  selfSenderId: state.currentUser.sender_id
})

export default connect(mapStateToProps, null)(ConvoView);
