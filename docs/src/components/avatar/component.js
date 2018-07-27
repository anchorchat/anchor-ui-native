import React from 'react';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import style from './style';
import components from '../../components.json';
import Props from '../props';
import avatar from './images/avatar.png';
import avatarText from './images/avatar-text.png';
import avatarTextGradient from './images/avatar-text-gradient.png';
import avatarTextGray from './images/avatar-text-gray.png';

const componentData = find(components, { displayName: 'Avatar' });

const AvatarDoc = () => (
  <section className="page">
    <h1 className="heading-large">Avatar</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <h2><Text type="heading">Examples</Text></h2>
    <section style={style.container}>
      <img style={style.image} src={avatar} alt="Avatar" />
      <img style={style.image} src={avatarText} alt="Avatar with text and color" />
      <img style={style.image} src={avatarTextGradient} alt="Avatar with text and gradient" />
      <img style={style.image} src={avatarTextGray} alt="Avatar with text" />
    </section>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/view.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/view.html#props</a> for all available props. {/* eslint-disable-line max-len */}
      </Text>
    </span>
  </section>
);

export default AvatarDoc;
