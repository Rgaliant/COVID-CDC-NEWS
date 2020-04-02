import React from "react";

export default class CovidModal extends React.PureComponent {
  render() {
    const { country } = this.props;
    return (
      <div>
        <h1>{country.name}</h1>
      </div>
    );
  }
}
