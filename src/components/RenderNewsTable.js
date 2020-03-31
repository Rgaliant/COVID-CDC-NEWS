import React from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import Grid from "@material-ui/core/Grid";

export default class RenderNewsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
  }

  componentDidMount = () => {
    this.getCDCArticles();
  };
  getCDCArticles = () => {
    axios
      .get("https://tools.cdc.gov/api/v2/resources/media/403372.rss")
      .then(response => {
        const articles = response.data.split("<item>");
        const split_articles = articles.slice(1)
        this.setState({
          articles: split_articles
            .map(article => (article.includes("COVID") ? article : null))
            .filter(article => article != null)
        });
      });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            {this.state.articles &&
              this.state.articles.map(article => {
                return (
                  <Grid item xs={12} sm={8}>
                    <NewsCard article={article} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
