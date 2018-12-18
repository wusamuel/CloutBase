import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Inbox from './Inbox';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Contacts from './Contacts'; 

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar currentTab={this.props.tab}/>
        <Navbar/>
        <Switch>
          <Route path='/inbox/t/:id' component={Inbox} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  tab: ownProps.match.params.tab
})

export default connect(mapStateToProps, null)(Dashboard);
