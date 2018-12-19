import React from 'react';
import { connect } from 'react-redux';
import MessageView from './MessageView';
import ResizeableTextArea from '../ResizeableTextArea';

const styles = {
  convoHeader: {
    position: 'absolute',
    top: '50px',
    left: '330px',
    right: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px',
    borderBottom: '1px solid #E5E5E5'
  },
  messages: {
    position: 'absolute',
    overflowY: 'scroll',
    overflowX: 'hidden',
    top: '95px',
    left: '330px',
    bottom: '50px',
    right: 0,
    paddingBottom: '10px',
    paddingTop: '10px'
  },
  composer: {
    position: 'absolute',
    height: '50px',
    left: '330px',
    bottom: 0,
    right: 0,
    borderTop: '1px solid #E5E5E5'
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
    <div style={styles.composer}>
      <ResizeableTextArea
            style={styles.commentComposer}
            placeholder="Type a message..."
            onEnter={(text) => console.log(text)}
            onChange={() => { console.log('TODO: update composer height and messages bottom dimension'); }}/>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id,
  convoName: state.convoDetails[ownProps.match.params.id].name,
  messageIds: state.convoDetails[ownProps.match.params.id].messages,
  messages: state.messages,
  selfSenderId: state.currentUser.sender_id,
})

export default connect(mapStateToProps, null)(ConvoView);
