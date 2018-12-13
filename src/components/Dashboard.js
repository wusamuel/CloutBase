import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Inbox from './Inbox';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <Navbar/>
        <Inbox/>
      </div>
    );
  }
}

export default Dashboard;
