import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {clickButton} from './actions/index'
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  //console.log(this.props)

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
    console.log(this.props);
    return (
      <div className="App" style={{ paddingTop: "10px" }}>
        <input type="text" onChange={this.inputChange} value={inputValue} />
        <button onClick={() => clickButton(inputValue)}>Click me!</button>

        <h1>{newValue}</h1>
      </div>
    );
  }
}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps= dispatch => bindActionCreators({clickButton}, dispatch);                        
export default connect(mapStateToProps,mapDispatchToProps)(App);