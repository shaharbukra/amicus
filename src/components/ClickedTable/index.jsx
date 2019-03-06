import React, { Component } from "react";

import "./clickedTable.css";

export class ClickedTable extends Component {

  render() {
    
    return (
      <div>
        <header>
          <h1>Responsive Clicked Table</h1>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job Title</th>
                <th>Twitter</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                <td data-column="First Name">James</td>
                <td data-column="Last Name">Matman</td>
                <td data-column="Job Title">Chief Sandwich Eater</td>
                <td data-column="Twitter">@james</td>
              </tr>
              <tr className="desc">
                <td colSpan="4">Desciption row 1</td>
              </tr>
              <tr className="row">
                <td data-column="First Name">Andor</td>
                <td data-column="Last Name">Nagy</td>
                <td data-column="Job Title">Designer</td>
                <td data-column="Twitter">@andornagy</td>
              </tr>
              <tr className="desc">
                <td colSpan="4">Desciption row 2</td>
              </tr>
              <tr className="row">
                <td data-column="First Name">Tamas</td>
                <td data-column="Last Name">Biro</td>
                <td data-column="Job Title">Game Tester</td>
                <td data-column="Twitter">@tamas</td>
              </tr>
              <tr className="desc">
                <td colSpan="4">Desciption row 3</td>
              </tr>
              <tr className="row">
                <td data-column="First Name">Zoli</td>
                <td data-column="Last Name">Mastah</td>
                <td data-column="Job Title">Developer</td>
                <td data-column="Twitter">@zoli</td>
              </tr>
              <tr className="desc">
                <td colSpan="4">Desciption row 4</td>
              </tr>
              <tr className="row">
                <td data-column="First Name">Szabi</td>
                <td data-column="Last Name">Nagy</td>
                <td data-column="Job Title">Chief Sandwich Eater</td>
                <td data-column="Twitter">@szabi</td>
              </tr>
              <tr className="desc">
                <td colSpan="4">Desciption row 5</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}


export default ClickedTable;
