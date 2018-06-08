/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import types from '../../anchor-ui-native/text/types';
import components from '../../components.json';
import Props from '../props';
import style from './style';

const componentData = find(components, { displayName: 'Text' });

const TextDoc = () => (
  <section className="page">
    <h1 className="heading-large">Text</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <h2><Text type="heading">Types</Text></h2>
    <ul style={style.list}>
      {types.map(type => <li style={style.listItem} key={type}><Text>{type}</Text></li>)}
    </ul>
    <span><Text type="body">See the <Link to="/style-guide">Styleguide</Link> for a representation of text styles.</Text></span>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/text.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/text.html#props</a> for all available props.
      </Text>
    </span>
  </section>
);

export default TextDoc;
