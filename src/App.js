import React from "react";
import "./App.css";
import RenderNewsTable from "./components/RenderNewsTable";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "@apollo/react-hooks";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));

  const classes = useStyles();

  const client = new ApolloClient({
    uri: 'https://sharad-gql-covid19.herokuapp.com/graphql',
})

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
        <RenderNewsTable />
      </div>
    </ApolloProvider>
  );
}

export default App;
