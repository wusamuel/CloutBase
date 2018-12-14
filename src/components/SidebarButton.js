import React from 'react';
import { Link } from 'react-router-dom';

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
    marginTop: '20px',
    marginLeft: '20px',
    backgroundColor: '#FFFFFF',
    color: '#B9B9B9'
  },
  selected: {
    color: '#FFFFFF',
    backgroundColor: '#7683F4'
  }
}

const SidebarButton = ({ iconName, isSelected, link }) => (
  <Link to={link}>
    <i className={"sidebar-button fa fa-" + iconName } style={Object.assign({}, styles.root, isSelected? styles.selected: {})}></i>
  </Link>
)

export default SidebarButton;
