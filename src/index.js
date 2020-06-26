import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"

import "semantic-ui-css/semantic.min.css"
import "./styles/global.css"

import IndexPage from "./pages/index"
import FeaturePage from "./pages/features"
import NotFoundPage from "./pages/404"

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

const ScrollToTopWithRouter = withRouter(ScrollToTop)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTopWithRouter>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/features">
            <FeaturePage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </ScrollToTopWithRouter>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
