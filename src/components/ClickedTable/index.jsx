import React, { Component } from "react";

import "./clickedTable.css";

export class ClickedTable extends Component {

  render() {
    const peopleRows = Object.keys( this.props.people )
            .map( igKey => {
                const {name, gender, height,mass,hair_color,skin_color,eye_color,birth_year} = this.props.people[igKey]
                return (
                  <React.Fragment key={igKey}>
                  <tr className="row" >
                    <td data-column="Name">{name}</td>
                    <td data-column="Gender">{gender}</td>
                    <td data-column="Height">{height}</td>
                    <td data-column="Birth Year">{birth_year}</td>
                    <td data-column="Mass">{mass}</td>
                    <td data-column="Hair Color">{hair_color}</td>
                    <td data-column="Skin Color">{skin_color}</td>
                  </tr>
                  <tr className="desc" >
                    <td colSpan="7">
                     Eye Color : {eye_color}
                    </td>
                  </tr>
                </React.Fragment>
               );
            } );
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
            <tbody>
             {peopleRows}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}


export default ClickedTable;
