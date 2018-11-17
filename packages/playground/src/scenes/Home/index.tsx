import React, { PureComponent } from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";
import { connect } from "react-redux";
import styled from "styled-components";
import LogoSvg from "../../resources/assets/logo.svg";
// import { FadeIn } from "packages/base";
import { setLang } from "../../store/common/lang/actions";

const Wrapper = styled.div`
  text-align: center;
  padding: 50px 20px;
  max-width: ${(props) => props.theme.app.maxWidth};
  margin: 0 auto;

  img {
    display: block;
    width: 200px;
    margin: 0 auto;
  }

  p {
    text-align: left;
  }

  .langSwitcher {
    text-align: left;
    user-select: none;

    p {
      display: inline-block;
    }

    ul {
      display: inline-block;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 0 0 5px;
    }

    span {
      cursor: pointer;
      color: blue;
      text-decoration: underline;
    }
  }
`;

interface IProps extends InjectedIntlProps {
  setLang: any;
  lang: string;
}

class Home extends PureComponent<IProps> {
  public render() {
    return (
      <Wrapper>
        <h2>Welcome!</h2>
        <p>
          <img
            src={LogoSvg}
            alt={this.props.intl.formatMessage({ id: "app.title" })}
          />
        </p>

        <br />
        <hr />
        <br />

        <p>{this.props.intl.formatMessage({ id: "app.copyright" })}</p>

        <div className={"langSwitcher"}>
          <p>
            Lang:
          </p>
          <ul>
            <li><span onClick={() => this.props.setLang("en")}>EN</span></li>
            <li><span onClick={() => this.props.setLang("es")}>ES</span></li>
          </ul>
        </div>
      </Wrapper>
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
    setLang: (langId: string) => dispatch(setLang(langId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(Home));
