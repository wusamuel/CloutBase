import React from 'react';
import logo from '../assets/logo.png';

const styles = {
  root: {
    overflow: 'hidden',
    position: 'absolute',
    height: '50px',
    top: 0,
    left: 0,
    right: 0,
  },
  img: {
    height: '30px',
    marginTop: '15px',
    marginLeft: '15px'
  }
}

const Navbar = ({}) => (
  <div style={styles.root}>
    <img style={styles.img} src={logo}/>
  </div>
)

export default Navbar;
