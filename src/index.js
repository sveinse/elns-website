import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"

//import "semantic-ui-css/semantic.min.css"
import "semantic-ui-css/semantic.css"
import "./styles/global.css"

import IndexPage from "./pages/index"
import Page2Page from "./pages/page2"
import FeaturePage from "./pages/features"
import DocsPage from "./pages/docs"
import SupportPage from "./pages/support"
import SponsorPage from "./pages/sponsor"
import NotFoundPage from "./pages/404"
import UsagePage from "./docs/usage"
import UIPage from "./docs/usage/ui"
import WindowsPage from "./docs/usage/windows"
import FunctionsPage from "./docs/functions"
import PassthroughPage from "./docs/functions/passthrough"
import MatrixPage from "./docs/functions/matrix"
import PannerPage from "./docs/functions/panner"
import QuantizerPage from "./docs/functions/quantizer"
import BiterrorPage from "./docs/functions/biterror"

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
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/page2" component={Page2Page} />
          <Route exact path="/features" component={FeaturePage} />
          <Route exact path="/docs/usage/ui" component={UIPage} />
          <Route exact path="/docs/usage/windows" component={WindowsPage} />
          <Route exact path="/docs/usage" component={UsagePage} />
          <Route
            exact
            path="/docs/functions/passthrough"
            component={PassthroughPage}
          />
          <Route exact path="/docs/functions/matrix" component={MatrixPage} />
          <Route exact path="/docs/functions/panner" component={PannerPage} />
          <Route
            exact
            path="/docs/functions/quantizer"
            component={QuantizerPage}
          />
          <Route
            exact
            path="/docs/functions/biterror"
            component={BiterrorPage}
          />
          <Route exact path="/docs/functions" component={FunctionsPage} />
          <Route exact path="/docs" component={DocsPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/sponsor" component={SponsorPage} />
          <Route path="*" component={NotFoundPage} />
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
