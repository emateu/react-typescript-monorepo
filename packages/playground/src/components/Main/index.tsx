import React, { PureComponent } from "react";
import ReactGA from "react-ga";
import Helmet from "react-helmet";
import { InjectedIntlProps, injectIntl } from "react-intl";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";

import { ENV } from "../../resources/constants";
import { getCurrentLangId } from "../../services/language";
import { setLang } from "../../store/common/lang/actions";

import Home from "../../scenes/Home";
import NoMatch from "../../scenes/NoMatch";

interface IProps extends InjectedIntlProps, RouteComponentProps {
  lang: string;
  setLang: any;
}

class Main extends PureComponent<IProps> {

  public logPageView(locationPathname: string) {
    ReactGA.set({ page: locationPathname });
    ReactGA.pageview(locationPathname);
  }

  public initializeReactGA() {
    ReactGA.initialize(ENV.GA_TRACKING_ID);
    this.logPageView(this.props.location.pathname);
    this.props.history.listen((location) => this.logPageView(location.pathname));
  }

  public componentWillMount() {
    this.props.setLang(getCurrentLangId());
  }

  public componentDidMount() {
    this.initializeReactGA();
  }

  public render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.intl.formatMessage({ id: "app.title" })}</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    lang: state.common.lang,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setLang: (id: string) => dispatch(setLang(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(Main)));
