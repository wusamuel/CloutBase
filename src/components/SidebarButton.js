import React from 'react';

const styles = {
  root: {
    display: 'inline-block',
    boxShadow: '0px 0px 2px #B9B9B9',
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    borderRadius: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: '22px',
    marginTop: '10px',
    marginLeft: '10px',
    backgroundColor: '#FFFFFF',
    color: '#B9B9B9'
  },
  selected: {
    color: '#FFFFFF',
    backgroundColor: '#7683F4'
  }
}

const SidebarButton = ({ iconName, isSelected }) => (
  <i className={"sidebar-button fa fa-" + iconName } style={Object.assign({}, styles.root, isSelected? styles.selected: {})}></i>
)

export default SidebarButton;
