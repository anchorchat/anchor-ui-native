import React from 'react';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import style from './style';
import components from '../../components.json';
import Props from '../props';
import lightboxLandscape from './images/lightbox-landscape.jpg';
import lightboxPortrait from './images/lightbox-portrait.jpg';

const componentData = find(components, { displayName: 'Lightbox' });

const LightboxDoc = () => (
  <section className="page">
    <h1 className="heading-large">ListItem</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <h2><Text type="heading">Examples</Text></h2>
    <section style={style.container}>
      <img style={style.image} src={lightboxLandscape} alt="Lightbox landscape" />
      <img style={style.image} src={lightboxPortrait} alt="Lightbox portrait" />
    </section>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/view.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/view.html#props</a> for available props.
      </Text>
    </span>
  </section>
);

export default LightboxDoc;
