import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { getLangList } from "../../services/language";

const langList = getLangList();
const messagesKeys: any = {};

for (const lang of langList) {
  messagesKeys[lang.id] = lang.translations;
}

const mapStateToProps = (state: any) => {
  return {
    locale: state.common.lang,
    messages: messagesKeys[state.common.lang],
  };
};

const IntlProviderContainer = connect(
  mapStateToProps,
)(IntlProvider);

export default IntlProviderContainer;
