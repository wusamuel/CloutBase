import React from 'react';
import { connect } from 'react-redux';
import { toggleImportContactCSVModal } from '../ducks/ui';
const Papa = require("papaparse/papaparse.min.js");

class ImportContactsFromCSVModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isDataValid: false,
      header: []
    };
  }

  handleChangeFile = e => {
    let reader = new FileReader();
    //const filename = e.target.files[0].name;

    reader.onload = event => {
      const csvData = Papa.parse(
        event.target.result,
        { header: true });
      // TODO: validate data before setting isDataValid
      this.setState({isDataValid: true});
      this.setState({data: csvData.data});
      this.setState({header: csvData.meta.fields});
      console.log(csvData.data);
    };

    reader.readAsText(e.target.files[0]);
  };

  resetFileInput = () => {
    document.getElementById("import-contacts-csv-input").value = "";
    this.setState({isDataValid: false});
    this.setState({data: []});
    this.setState({header: []});
  }

  render() {
    return(
      <div class={"modal " + (this.props.isActive ? "is-active": "")}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <h1><b>CSV Import</b></h1>
            <input
              id="import-contacts-csv-input"
              className="csv-input marg-top"
              type="file"
              accept="text/csv"
              onChange={e => this.handleChangeFile(e)}
            />
          {
            this.state.isDataValid &&
            <table class="table is-hoverable is-fullwidth marg-top">
              <thead>
                <tr>
                  {this.state.header.map(header =>
                    <th>{header}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(row =>
                  <tr>
                    {this.state.header.map(header =>
                      <td>{row[header]}</td>
                    )}
                  </tr>
                )}
              </tbody>
            </table>
          }
            <div class="buttons marg-top">
              <button
                class="button is-primary"
                onClick={evt => {
                  evt.preventDefault();
                  //TODO: upload contacts logic
                  this.resetFileInput();
                  this.props.closeModal();
                }}>
                Upload Contacts
              </button>
              <button
                class="button"
                onClick={evt => {
                  evt.preventDefault();
                  //TODO: upload contacts logic
                  this.resetFileInput();
                  this.props.closeModal();
                }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
          <button class="modal-close is-large" aria-label="close" onClick={() => this.props.closeModal()}></button>
      </div>);
  }
}

const mapStateToProps = state => ({
  isActive: state.ui.isImportContactsFromCSVModalOpen
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(toggleImportContactCSVModal(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImportContactsFromCSVModal);
