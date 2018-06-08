import React from 'react';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import style from './style';
import components from '../../components.json';
import Props from '../props';
import placeholder from './images/placeholder.jpg';
import thumbnail from './images/thumbnail.jpg';
import image from './images/image.jpg';

const componentData = find(components, { displayName: 'FullWidthImage' });

const FullWidthImageDoc = () => (
  <section className="page">
    <h1 className="heading-large">FullWidthImage</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <h2><Text type="heading">Examples</Text></h2>
    <section style={style.container}>
      <img style={style.image} src={placeholder} alt="placeholder" />
      <img style={style.image} src={thumbnail} alt="thumbnail" />
      <img style={style.image} src={image} alt="loaded" />
    </section>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the Image element. See <a href="https://facebook.github.io/react-native/docs/image.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/image.html#props</a> for available props.
      </Text>
    </span>
  </section>
);

export default FullWidthImageDoc;
