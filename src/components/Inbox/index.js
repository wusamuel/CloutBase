import React, { Component } from 'react';
import ConvoListItem from './ConvoListItem';
import ConvoView from './ConvoView';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

const styles = {
  convoList: {
    position: 'absolute',
    overflowY: 'scroll',
    overflowX: 'hidden',
    top: '50px',
    left: '80px',
    bottom: 0,
    width: '250px',
    borderRight: '1px solid #E5E5E5',
  }
}

class Inbox extends Component {
  render() {
    return (
      <div>
        <div style={styles.convoList}>
          {this.props.convoList.map(convo =>
            <ConvoListItem id={convo.id} isSelected={this.props.convoId == convo.id} name={convo.name} lastMessage={convo.last_message}/>
          )}
        </div>
        <Switch>
          <Route path='/inbox/t/:id' component={ConvoView} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  convoList: state.convoList,
})

export default connect(mapStateToProps, null)(Inbox);
