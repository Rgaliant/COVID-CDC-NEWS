import React from "react";
import styled from "styled-components";

const MarqueeText = styled.span`
  font-size: 16px;
  padding: 5px;
`;

export default class Country extends React.PureComponent {
  render() {
    const { country } = this.props;
    return (
      <div style={{ padding: "10px", border: '1px solid #fff', background: '#efefef' }}>
        <span style={{ fontSize: "20px" }}>{country.country}</span>
        <MarqueeText>
          Cases:{" "}
          {country.cases.toLocaleString(country.cases, {
            minimumFractionDigits: 0
          })}
        </MarqueeText>
        <MarqueeText>
          Per Million:{" "}
          {country.casesPerOneMillion &&
            country.casesPerOneMillion.toLocaleString(
              country.casesPerOneMillion,
              { minimumFractionDigits: 0 }
            )}
        </MarqueeText>
        <MarqueeText>
          Cases Today:{" "}
          {country.todayCases.toLocaleString(country.todayCases, {
            minimumFractionDigits: 0
          })}
        </MarqueeText>
        <MarqueeText>
          Deaths Today:{" "}
          {country.todayDeaths.toLocaleString(country.todayCases, {
            minimumFractionDigits: 0
          })}
        </MarqueeText>
      </div>
    );
  }
}
