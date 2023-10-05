import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { clickButton } from './actions/index'
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  state = {
    inputValue: ""
  };

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    const { clickButton, newValue } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="app-container">
        <div className="background-image"></div>
        <div className="content-container">
          <h1 className="app-title">Redux Clicker</h1>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              onChange={this.inputChange}
              value={inputValue}
            />
            <button
              className="click-button"
              onClick={() => clickButton(inputValue)}
            >
              Click me!
            </button>
          </div>
          <h2 className="result">Result: {newValue}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
