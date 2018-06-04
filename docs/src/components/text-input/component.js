import React from 'react';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import style from './style';
import components from '../../components.json';
import Props from '../props';
import textInput from './images/text-input.jpg';
import textInputPlaceholder from './images/text-input-placeholder.jpg';
import textInputNoLabel from './images/text-input-no-label.jpg';

const componentData = find(components, { displayName: 'TextInput' });

const TextInputDoc = () => (
  <section className="page">
    <h1 className="heading-large">TextInput</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <h2><Text type="heading">Examples</Text></h2>
    <section style={style.container}>
      <img style={style.image} src={textInput} alt="TextInput" />
      <img style={style.image} src={textInputPlaceholder} alt="TextInput with placeholder" />
      <img style={style.image} src={textInputNoLabel} alt="TextInput without label" />
    </section>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/view.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/view.html#props</a> for all available props.
      </Text>
    </span>
  </section>
);

export default TextInputDoc;
