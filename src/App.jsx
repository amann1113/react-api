import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import FilmList from "./components/filmList";
import PersonList from "./components/personList";
import FilmWiki from "./components/filmWiki";
import PersonWiki from "./components/personWiki";
import "../App.css";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/films" component={FilmList} />
                        <Route exact path="/people" component={PersonList} />
                        <Route path="/films/:id/" component={FilmWiki} />
                        <Route path="/people/:id/" component={PersonWiki} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }

}

export default App;
