import React from 'react';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import style from './style';
import components from '../../components.json';
import Props from '../props';
import contextMenu from './images/context-menu.png';
import contextMenuLeft from './images/context-menu-left.png';
import contextMenuRight from './images/context-menu-right.png';

const componentData = find(components, { displayName: 'ContextMenu' });

const ContextMenuDoc = () => (
  <section className="page">
    <h1 className="heading-large">ContextMenu</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <h2><Text type="heading">Examples</Text></h2>
    <section>
      <img style={style.image} src={contextMenuLeft} alt="ContextMenu left notch" />
      <img style={style.image} src={contextMenu} alt="ContextMenu" />
      <img style={style.image} src={contextMenuRight} alt="ContextMenu right notch" />
    </section>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/view.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/view.html#props</a> for all available props. {/* eslint-disable-line max-len */}
      </Text>
    </span>
  </section>
);

export default ContextMenuDoc;
