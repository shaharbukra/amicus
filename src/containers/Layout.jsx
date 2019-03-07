import React, { Component } from "react";
import { connect } from "react-redux";
import { requestAllPeople } from "../actions";
import ClickeTable from "../components/ClickedTable";

export class Layout extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestAllPeople());
  }
  render() {
    const { people } = this.props;
    console.log(people);
    if (people.length === 0) {
      return <h2>No Results</h2>;
    } else {
      return <ClickeTable people={people} />;
    }
  }
}
function mapStateToProps(state) {
  const { people } = state;
  return { people: people };
}

export default connect(mapStateToProps)(Layout);
