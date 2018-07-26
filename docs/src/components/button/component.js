import React from 'react';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import style from './style';
import components from '../../components.json';
import Props from '../props';
import button from './images/button.jpg';
import buttonIcon from './images/button-icon.jpg';

const componentData = find(components, { displayName: 'Button' });

const ButtonDoc = () => (
  <section className="page">
    <h1 className="heading-large">Button</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <h2><Text type="heading">Examples</Text></h2>
    <section>
      <img style={style.button} src={button} alt="Button" />
      <img style={style.buttonIcon} src={buttonIcon} alt="Button with icon" />
    </section>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/touchableopacity.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/touchableopacity.html#props</a> for all available props. {/* eslint-disable-line max-len */}
      </Text>
    </span>
  </section>
);

export default ButtonDoc;
