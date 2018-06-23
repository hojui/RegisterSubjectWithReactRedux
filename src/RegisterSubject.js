import React, { Component } from "react";
import { connect } from "react-redux";
import { removeRegisterSubject } from "./reducer";

class RegisterSubject extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.registerSubject.map((value, index) => {
            return (
              <li>
                {value}&nbsp;
                <button onClick={e => this.props.removeRegisterSubject(index)}>
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registerSubject: state.registerSubject
});

const mapDispatchToProps = {
  removeRegisterSubject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterSubject);
