import React from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import Country from "./Country";
import CovidModal from "./CovidModal";
import Grid from "@material-ui/core/Grid";
import { useQuery } from "@apollo/react-hooks";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CoronaNumbers from "./CoronaNumbers";

const CovidNumbers = () => (
  <Query
    query={gql`
      {
        countries {
          country
          cases
          casesPerOneMillion
          todayCases
          todayDeaths
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Good things take time....</p>;
      if (error) return <p>Something went wrong...</p>;

      return (
        <div style={{ display: "flex" }} className="marquee">
          {data.countries.map(country => (
            <Country country={country} />
          ))}
        </div>
      );
    }}
  </Query>
);

const CovidButton = () => (
  <Query
    query={gql`
      {
        countries {
          country
          cases
          casesPerOneMillion
          todayCases
          todayDeaths
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Good things take time....</p>;
      if (error) return <p>Something went wrong...</p>;

      return (
        <div style={{ display: "flex" }} className="marquee">
          {data.countries.map(country => (
            <CovidModal country={country} />
          ))}
        </div>
      );
    }}
  </Query>
);

export default class RenderNewsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      countries: null,
      open: true,
      viewAll: false,
      totalCases: null,
      totalDeaths: null,
      totalRecovered: null,
      affectedCountries: null
    };
  }

  componentDidMount = () => {
    this.getCDCArticles();
    this.getTotals();
    setInterval(this.getTotals, 50000);
  };

  getCDCArticles = () => {
    axios
      .get("https://tools.cdc.gov/api/v2/resources/media/403372.rss")
      .then(response => {
        const articles = response.data.split("<item>");
        const split_articles = articles.slice(1);
        this.setState({
          articles: split_articles
            .map(article => (article.includes("COVID") ? article : null))
            .filter(article => article != null)
        });
      });
  };

  getTotals = () => {
    axios.get("https://corona.lmao.ninja/all").then(response => {
      this.setState({
        totalCases: response.data.cases,
        totalDeaths: response.data.deaths,
        totalRecovered: response.data.recovered,
        affectedCountries: response.data.affectedCountries
      });
    });
  };

  render() {
    return (
      <>
        <div style={{marginBottom: '90px'}}>
          {this.state.open && <CovidNumbers />}
        </div>
        <div style={{ width: "80%", marginLeft: "9.5%"}}>
          <CoronaNumbers
            totalCases={this.state.totalCases}
            totalDeaths={this.state.totalDeaths}
            totalRecovered={this.state.totalRecovered}
            affectedCountries={this.state.affectedCountries}
          />
        </div>
        <Grid container>
          <Grid item xs={12}>
            <div style={{ marginTop: "50px" }}>
              <Grid container justify="center">
                {this.state.articles &&
                  this.state.articles.map(article => {
                    return (
                      <Grid item xs={12} sm={5}>
                        <NewsCard article={article} />
                      </Grid>
                    );
                  })}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}
