import React from 'react';
import {createGlobalStyle} from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Pages";
import { Header } from './components/Components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    line-height: 150%;
    background-color: #ecf0f1;
  }
`;


function App() {
    return (
        <>
            <GlobalStyle/>
            <Router>
                <Header/>
                <Switch>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </Router>

        </>
    );
}

export default App;
