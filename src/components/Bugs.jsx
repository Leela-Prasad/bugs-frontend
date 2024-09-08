import React, { Component } from "react";
import { loadBugs, resolveBug, getUnresolvedBugs } from "../store/bugs";
import { connect } from "react-redux";

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs()
  }

  render() {
    return <ul>
      {this.props.bugs.map(bug => <li key={bug.id}>{bug.description}
                          <button onClick={() => this.props.resolveBugs(bug.id)}>Resolve</button>
                        </li>)}
    </ul>
  }
}

const mapStateToProps = state => ({
  bugs: getUnresolvedBugs(state)
})

const mapDispatchToProps = dispatch => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBugs: id => dispatch(resolveBug(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);