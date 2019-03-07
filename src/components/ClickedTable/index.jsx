import React, { Component } from "react";
import Checkbox from "../Checkbox/Checkbox";

import "./clickedTable.css";

export class ClickedTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: -1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;

    if (isChecked) {
      this.setState({ checkedItems: item });
    } else {
      this.setState({ checkedItems: -1 });
    }
  }

  render() {
    let selectedRow = this.state.checkedItems;
    const peopleRows = Object.keys(this.props.people).map(igKey => {
      const {
        name,
        gender,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year
      } = this.props.people[igKey];
      let rowClassName = "row";

      if (selectedRow && selectedRow === igKey) {
        rowClassName += " selectedRow";
      }

      return (
        <React.Fragment key={igKey}>
          <tr className={rowClassName}>
            <td data-column="Name">
              <Checkbox
                name={igKey}
                checked={selectedRow === igKey}
                onChange={this.handleChange}
              />
              {name}
            </td>
            <td data-column="Gender">{gender}</td>
            <td data-column="Height">{height}</td>
            <td data-column="Birth Year">{birth_year}</td>
            <td data-column="Mass">{mass}</td>
            <td data-column="Hair Color">{hair_color}</td>
            <td data-column="Skin Color">{skin_color}</td>
          </tr>
          <tr className="desc">
            <td data-column="Additional Data" colSpan="7">Eye Color : {eye_color}</td>
          </tr>
        </React.Fragment>
      );
    });
    console.log(peopleRows);
    return (
      <div>
        <header>
          <h1>Responsive Clicked Table</h1>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Birth Year</th>
                <th>Mass</th>
                <th>Hair Color</th>
                <th>Skin Color</th>
              </tr>
            </thead>
            <tbody>{peopleRows}</tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default ClickedTable;
