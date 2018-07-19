import React from 'react';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import components from '../../components.json';
import Props from '../props';

const componentData = find(components, { displayName: 'Touchable' });

const TouchableDoc = () => (
  <section className="page">
    <h1 className="heading-large">Touchable</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element.
        See <a href="https://facebook.github.io/react-native/docs/touchablehighlight.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/touchablehighlight.html#props</a>, <a href="https://facebook.github.io/react-native/docs/touchableopacity.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/touchableopacity.html#props</a> and <a href="https://facebook.github.io/react-native/docs/touchablenativefeedback.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/touchablenativefeedback.html#props</a> for available props.
      </Text>
    </span>
  </section>
);

export default TouchableDoc;
