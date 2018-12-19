import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleImportContactCSVModal } from '../../ducks/ui';

const styles = {
  root: {
    position: 'absolute',
    overflowY: 'scroll',
    overflowX: 'hidden',
    top: '50px',
    left: '80px',
    bottom: 0,
    right: 0
  },
  content: {
    width: '90%',
    margin: '0 auto',
    marginTop: '40px',
  },
  table: {
    marginTop: '20px'
  },
  dropdown: {
    marginLeft: '20px'
  }
}

class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  };

  toggleDropdown() {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <h1>
            <b>Contacts</b>
            <div class={"dropdown " + (this.state.isActive ? "is-active": "")} style={styles.dropdown}>
              <div class="dropdown-trigger" onClick={this.toggleDropdown.bind(this)}>
                <a class="button" ariaHaspopup="true" ariaControls="dropdown-menu">
                  <span class="icon is-small">
                    <i class="fas fa-plus"></i>
                  </span>
                </a>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a class="dropdown-item" onClick={() => {
                    this.toggleDropdown();
                    // TODO: modal for creating new contact
                  }}>
                    Create new contact
                  </a>
                  <a class="dropdown-item" onClick={() => {
                    this.toggleDropdown();
                    this.props.toggleImportCSVModal(true);
                  }}>
                    Import contacts from CSV
                  </a>
                </div>
              </div>
            </div>
          </h1>
          <table class="table is-hoverable is-fullwidth" style={styles.table}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {this.props.contacts.map(contact =>
                <tr>
                  <td>{contact.first_name}</td>
                  <td>{contact.last_name}</td>
                  <td>{contact.number}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
  toggleImportCSVModal: (open) => dispatch(toggleImportContactCSVModal(open)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
