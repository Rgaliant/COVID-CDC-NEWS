import React from "react";
import axios from "axios";
import { Grid, Segment, Statistic } from "semantic-ui-react";
import styled from "styled-components";

const CardText = styled.p`
  font-size: 18px;
  padding-top: 30px;
`;

export default class CoronaNumbers extends React.Component {
  constructor(props) {
    super(props);
  }

  formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  render() {
    return (
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column>
            <Segment color="red" raised size="massive">
              <Statistic>
                <Statistic.Value>
                  {this.props.totalCases
                    ? this.formatNumber(this.props.totalCases)
                    : null}
                </Statistic.Value>
                <Statistic.Label>Total Cases</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color="red" raised size="massive">
              <Statistic>
                <Statistic.Value>
                  {this.props.totalDeaths
                    ? this.formatNumber(this.props.totalDeaths)
                    : null}
                </Statistic.Value>
                <Statistic.Label>Total Deaths</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color="red" raised size="massive">
              <Statistic>
                <Statistic.Value>
                  {this.props.totalRecovered
                    ? this.formatNumber(this.props.totalRecovered)
                    : null}
                </Statistic.Value>
                <Statistic.Label>Total Recovered</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color="red" raised size="massive">
              <Statistic>
                <Statistic.Value>
                  {this.props.affectedCountries
                    ? this.formatNumber(this.props.affectedCountries)
                    : null}
                </Statistic.Value>
                <Statistic.Label>Total Countries</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
