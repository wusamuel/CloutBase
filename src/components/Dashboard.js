import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Inbox from './Inbox';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Contacts from './Contacts';
import ImportContactsFromCSVModal from './ImportContactsFromCSVModal';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar currentTab={this.props.tab}/>
        <Navbar/>
        <Switch>
          <Route path='/inbox' component={Inbox} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
        <ImportContactsFromCSVModal />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  tab: ownProps.match.params.tab
})

export default connect(mapStateToProps, null)(Dashboard);
