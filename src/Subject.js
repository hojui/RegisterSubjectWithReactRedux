import React, { Component } from "react";
import { connect } from "react-redux";
import { removeSubject, addRegisterSubject } from "./reducer";

class Subject extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.subject.map((value, index) => {
            return (
              <li>
                {value}&nbsp;
                <button onClick={e => this.props.removeSubject(index)}>
                  Remove
                </button>&nbsp;
                <button
                  onClick={e =>
                    this.props.addRegisterSubject(this.props.subject[index])
                  }
                >
                  Register
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
  subject: state.subject
});

const mapDispatchToProps = {
  removeSubject,
  addRegisterSubject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subject);
