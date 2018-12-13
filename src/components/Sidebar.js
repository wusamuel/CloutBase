import React from 'react';
import SidebarButton from './SidebarButton';

const styles = {
  root: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    top: '60px',
    left: 0,
    width: '60px',
    backgroundColor: '#F2F2F2'
  }
}

const Sidebar = ({}) => (
  <div style={styles.root}>
    <SidebarButton iconName="inbox" isSelected={true}/>
    <SidebarButton iconName="users" isSelected={false}/>
    <SidebarButton iconName="cog" isSelected={false}/>
  </div>
)

export default Sidebar;
