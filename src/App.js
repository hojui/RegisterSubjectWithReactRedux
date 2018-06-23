import React, { Component } from "react";
import { updateText, addSubject } from "./reducer";
import { connect } from "react-redux";
import "./App.css";
import Subject from "./Subject";
import RegisterSubject from "./RegisterSubject";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Add Subject to system</h1>
        <br />
        <input
          type="text"
          onChange={e => this.props.updateText(e.target.value)}
        />
        <button onClick={e => this.props.addSubject(this.props.text)}>
          Add
        </button>
        <br />
        <br />
        <h2>Subject</h2>
        <br />
        <Subject />
        <h2>Register Subject</h2>
        <br />
        <RegisterSubject />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = {
  updateText,
  addSubject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
