import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    marginTop: '30px',
  },
  table: {
    marginTop: '20px'
  }
}

class Contacts extends Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <h1>Contacts</h1>
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

export default connect(mapStateToProps, null)(Contacts);
