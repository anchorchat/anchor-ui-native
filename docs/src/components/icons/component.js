import React from 'react';
import find from 'lodash/find';
import map from 'lodash/map';
import Text from '../../anchor-ui-native/text';
import components from '../../components.json';
import Props from '../props';
import * as icons from './icons';
import style from './style';

const componentData = find(components, { displayName: 'IconAttachment' });

const IconsDoc = () => (
  <section className="page">
    <h1 className="heading-large">Icons</h1>
    <span>
      <Text type="body-light">
        SVG icons from <a href="https://ionicons.com/" target="blank" rel="noopener noreferrer">ionicons</a> in iOS style. All icons are 28pt wide and high. {/* eslint-disable-line max-len */}
      </Text>
    </span>
    <h2><Text type="heading">Examples</Text></h2>
    <section style={style.icons}>
      {map(icons, (src, name) => (
        <div key={name} style={style.icon}>
          <img src={src} alt={name} style={style.image} />
          <Text type="body-lighter" style={style.label}>{name}</Text>
        </div>
      ))}
    </section>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/view.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/view.html#props</a> for all available props. {/* eslint-disable-line max-len */}
      </Text>
    </span>
  </section>
);

export default IconsDoc;
