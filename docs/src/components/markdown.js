import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import Text from '../anchor-ui-native/text';

const propTypes = {
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired
};

marked.setOptions({
  highlight(code, language) {
    return prism.highlight(code, prism.languages[language]);
  }
});

const style = {
  container: {
    marginBottom: '8px'
  }
};

const Markdown = ({ markdown, title }) => (
  <section style={style.container}>
    <span><Text type="body-lighter">{title}</Text></span>
    <div
      dangerouslySetInnerHTML={{ __html: marked(markdown) }} // eslint-disable-line react/no-danger
    />
  </section>
);

Markdown.propTypes = propTypes;

export default Markdown;