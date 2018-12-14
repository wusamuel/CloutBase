import React from 'react';
import SidebarButton from './SidebarButton';

const styles = {
  root: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    top: '50px',
    left: 0,
    width: '80px',
    backgroundColor: '#F2F2F2',
    borderRight: '1px solid #E5E5E5',
  }
}

const Sidebar = ({ currentTab }) => (
  <div style={styles.root}>
    <SidebarButton iconName="inbox" isSelected={currentTab == 'inbox'} link={'/inbox'}/>
    <SidebarButton iconName="users" isSelected={currentTab == 'contacts'} link={'/contacts'}/>
    <SidebarButton iconName="cog" isSelected={currentTab == 'settings'} link={'/settings'}/>
  </div>
)

export default Sidebar;
