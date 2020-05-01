/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `src/translations`)
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

export class LanguageProvider extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    /* Intl is only gettinh Language preferences, not locale */
    return (
      <IntlProvider
        locale={this.props.language}
        key={this.props.language}
        messages={this.props.messages[this.props.language]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  language: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired
};

const mapStateToProps = state => ({
  language: state.app.language
});

export default connect(mapStateToProps)(LanguageProvider);
